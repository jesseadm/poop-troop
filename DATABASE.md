# Database Setup Guide

Currently, Poop Troop uses mock data for the dashboard. To store real customer subscriptions and service records, you'll need a database.

## Recommended: Supabase (PostgreSQL)

Supabase is perfect for this project because it's free to start and includes built-in Stripe integration support.

### Setup Steps

1. **Create Supabase Project**
   - Go to https://supabase.com
   - Click "Start your project"
   - Create account and new project
   - Choose your region

2. **Get Connection String**
   - Go to Settings > Database
   - Copy the "connection string" for Node.js
   - Add to `.env.local`:
   ```env
   DATABASE_URL=your_connection_string_here
   ```

3. **Install Database Client**
   ```bash
   npm install @supabase/supabase-js
   ```

4. **Create Tables**

Run the following SQL in Supabase SQL Editor:

```sql
-- Customers table
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) NOT NULL UNIQUE,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  address TEXT,
  city VARCHAR(100),
  state VARCHAR(50),
  zip VARCHAR(10),
  pet_type VARCHAR(50),
  number_of_pets INTEGER,
  stripe_customer_id VARCHAR(255) UNIQUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Subscriptions table
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  stripe_subscription_id VARCHAR(255) UNIQUE,
  plan VARCHAR(50), -- 'starter', 'regular', 'premium'
  price_monthly DECIMAL(10, 2),
  frequency VARCHAR(50), -- 'monthly', 'bi-weekly', 'weekly'
  status VARCHAR(50), -- 'active', 'canceled', 'paused'
  current_period_start DATE,
  current_period_end DATE,
  next_billing_date DATE,
  trial_end DATE,
  canceled_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
  scheduled_date DATE,
  scheduled_time TIME,
  status VARCHAR(50), -- 'scheduled', 'completed', 'canceled', 'rescheduled'
  notes TEXT,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Payments table
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  stripe_charge_id VARCHAR(255) UNIQUE,
  amount DECIMAL(10, 2),
  currency VARCHAR(3),
  status VARCHAR(50), -- 'succeeded', 'failed', 'refunded'
  paid_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX idx_customers_email ON customers(email);
CREATE INDEX idx_subscriptions_customer_id ON subscriptions(customer_id);
CREATE INDEX idx_subscriptions_stripe_id ON subscriptions(stripe_subscription_id);
CREATE INDEX idx_services_subscription_id ON services(subscription_id);
CREATE INDEX idx_services_date ON services(scheduled_date);
CREATE INDEX idx_payments_customer_id ON payments(customer_id);
```

## Alternative: Firebase Realtime Database

Good for simple projects, easier to integrate without backend.

1. Go to https://console.firebase.google.com
2. Create new project
3. Enable Realtime Database
4. Copy database URL
5. Install client:
   ```bash
   npm install firebase
   ```

## Alternative: Local SQLite

Best for development and testing locally.

```bash
npm install better-sqlite3
```

### Create Database File

Create `lib/db.ts`:

```typescript
import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(process.cwd(), 'poop-troop.db')
const db = new Database(dbPath)

db.pragma('journal_mode = WAL')

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS customers (
    id TEXT PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    firstName TEXT,
    lastName TEXT,
    phone TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    zip TEXT,
    petType TEXT,
    numberOfPets INTEGER,
    stripeCustomerId TEXT UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS subscriptions (
    id TEXT PRIMARY KEY,
    customerId TEXT NOT NULL,
    stripeSubscriptionId TEXT UNIQUE,
    plan TEXT,
    priceMonthly DECIMAL,
    frequency TEXT,
    status TEXT,
    currentPeriodStart DATE,
    currentPeriodEnd DATE,
    nextBillingDate DATE,
    trialEnd DATE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customerId) REFERENCES customers(id)
  );

  CREATE TABLE IF NOT EXISTS services (
    id TEXT PRIMARY KEY,
    subscriptionId TEXT NOT NULL,
    scheduledDate DATE,
    scheduledTime TIME,
    status TEXT,
    notes TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (subscriptionId) REFERENCES subscriptions(id)
  );
`)

export default db
```

## Stripe Webhook Setup

To sync Stripe events with your database:

1. **Add Webhook Route**

Create `app/api/webhooks/stripe/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '')
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature') || ''

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (err) {
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    )
  }

  // Handle events
  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated':
      // Update subscription in database
      const subscription = event.data.object as Stripe.Subscription
      console.log('Subscription updated:', subscription.id)
      break

    case 'customer.subscription.deleted':
      // Mark subscription as canceled
      console.log('Subscription deleted')
      break

    case 'charge.succeeded':
      // Record payment
      const charge = event.data.object as Stripe.Charge
      console.log('Payment succeeded:', charge.id)
      break
  }

  return NextResponse.json({ received: true })
}
```

2. **Configure Webhook in Stripe Dashboard**
   - Go to Developers > Webhooks
   - Click "Add endpoint"
   - URL: `https://yourdomain.com/api/webhooks/stripe`
   - Events: Select subscription and charge events
   - Click "Add endpoint"

## Data Models

### Customer
```typescript
interface Customer {
  id: string
  email: string
  firstName: string
  lastName: string
  phone: string
  address: string
  city: string
  state: string
  zip: string
  petType: 'dog' | 'cat' | 'both'
  numberOfPets: number
  stripeCustomerId: string
  createdAt: Date
  updatedAt: Date
}
```

### Subscription
```typescript
interface Subscription {
  id: string
  customerId: string
  stripeSubscriptionId: string
  plan: 'starter' | 'regular' | 'premium'
  priceMonthly: number
  frequency: 'monthly' | 'bi-weekly' | 'weekly'
  status: 'active' | 'canceled' | 'paused'
  currentPeriodStart: Date
  currentPeriodEnd: Date
  nextBillingDate: Date
  trialEnd: Date
  createdAt: Date
}
```

### Service
```typescript
interface Service {
  id: string
  subscriptionId: string
  scheduledDate: Date
  scheduledTime: string
  status: 'scheduled' | 'completed' | 'canceled'
  notes?: string
  createdAt: Date
}
```

## Testing

1. Add a Supabase test customer
2. Update dashboard mock data to pull from database
3. Test subscription flow with Stripe test card
4. Verify data appears in database

## Security

- Never expose database credentials in frontend
- Use environment variables for all secrets
- Enable Row Level Security (RLS) in Supabase
- Set up proper access controls
- Use HTTPS in production
- Validate all webhook signatures
