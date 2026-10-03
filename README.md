# Poop Troop - Subscription Platform 💩

A complete, production-ready website for a poop scooping and compost collection service for kids, built with Next.js 14, Tailwind CSS, and Stripe for payments.

## 🎯 Features

- **StoryBrand Framework Landing Page** - Compelling story-driven homepage with hero section, problem identification, solutions, and clear CTAs
- **Monthly Subscription Plans** - Three pricing tiers (Starter $15, Regular $35, Premium $60) with different service frequencies
- **Stripe Payment Integration** - Secure payment processing with 30-day free trial
- **Customer Dashboard** - Manage subscriptions, view service schedules, billing history, and account settings
- **Responsive Design** - Mobile-first design that works on all devices
- **Full Page Suite** - Contact, Privacy Policy, Terms of Service, and Refund Policy pages
- **Professional Branding** - Custom color scheme (poop brown, earth tones, leaf green) designed for the business

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Stripe account (free tier is sufficient to start)

### Installation

1. **Install Dependencies**
```bash
npm install
# or
yarn install
```

2. **Set Up Environment Variables**

Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Then fill in your values:

```env
# Get these from your Stripe Dashboard: https://dashboard.stripe.com
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
STRIPE_WEBHOOK_SECRET=whsec_YOUR_KEY_HERE

# App URL (localhost for development, your domain for production)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Getting Stripe Keys

1. Go to https://dashboard.stripe.com
2. Sign up or log in (use test mode for development)
3. Navigate to **Developers > API Keys**
4. Copy your **Publishable Key** and **Secret Key**
5. Go to **Webhooks** to get your webhook secret

### Running Locally

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
.
├── app/
│   ├── page.tsx              # Landing page (StoryBrand framework)
│   ├── subscribe/
│   │   └── page.tsx          # Subscription form
│   ├── dashboard/
│   │   └── page.tsx          # Customer dashboard
│   ├── success/
│   │   └── page.tsx          # Payment success page
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── privacy/
│   │   └── page.tsx          # Privacy policy
│   ├── terms/
│   │   └── page.tsx          # Terms of service
│   ├── refund/
│   │   └── page.tsx          # Refund policy
│   ├── api/
│   │   └── create-checkout-session/
│   │       └── route.ts      # Stripe checkout API
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
├── components/
│   ├── Header.tsx            # Navigation header
│   └── Footer.tsx            # Footer
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── .env.example
```

## 🎨 Customization

### Update Business Details

1. **Contact Information** - Edit `components/Footer.tsx`:
   - Email: `hello@pooptroop.local`
   - Phone: `(555) 0123`

2. **Pricing** - Edit pricing in `app/page.tsx` and `app/subscribe/page.tsx`:
   - Find the `PLANS` object to adjust prices and features

3. **Brand Colors** - Edit `tailwind.config.js`:
   - Customize the `poop`, `earth`, and `leaf` color palettes

4. **Content** - Replace placeholder text throughout:
   - Service descriptions
   - Testimonials
   - Company story

## 💳 Stripe Setup Checklist

- [ ] Create Stripe account at stripe.com
- [ ] Copy API keys to `.env.local`
- [ ] Set up webhook for subscription events
- [ ] Configure success/cancel URLs in Stripe dashboard
- [ ] Test with Stripe test card: 4242 4242 4242 4242
- [ ] Switch to live keys when ready for production

## 🗄️ Database Setup (Optional)

Currently, the app uses mock data for the dashboard. For production, you'll need a database:

### Option 1: Supabase (Recommended)
```bash
npm install @supabase/supabase-js
```

### Option 2: Firebase
```bash
npm install firebase
```

### Option 3: SQLite (Local)
```bash
npm install sqlite3 better-sqlite3
```

See [DATABASE.md](./DATABASE.md) for complete setup instructions.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to https://vercel.com/new
3. Import your repository
4. Add environment variables in Settings
5. Deploy!

### Other Platforms

- **Netlify**: Push to Git, connect repository, add env vars
- **Railway**: Similar to Vercel, great for Node.js apps
- **Self-hosted**: Use `npm run build` then `npm run start`

## 📱 Mobile Responsive

The site is fully responsive and includes:
- Mobile menu navigation
- Touch-friendly buttons
- Optimized form layouts
- Responsive images

## 🔒 Security Features

- Stripe handles all payment data (PCI DSS compliant)
- HTTPS support
- Environment variables for secrets
- Input validation on forms
- CSRF protection

## 📊 Monitoring

Add these services for production:

- **Analytics**: Vercel Analytics, Google Analytics
- **Error Tracking**: Sentry, LogRocket
- **Uptime**: UptimeRobot, Pingdom

## 🐛 Troubleshooting

### Stripe Errors
- Make sure your API keys are correct
- Check that you're in test mode for development
- Verify webhook URL in Stripe dashboard

### Build Errors
- Delete `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Clear Next.js cache: `npm run dev`

### Environment Variables Not Loading
- Restart dev server after editing `.env.local`
- Make sure file is named exactly `.env.local`
- Check for extra spaces around `=` signs

## 📞 Support

For the actual business:
- Email: hello@pooptroop.local
- Phone: (555) 0123

For technical questions about this codebase:
- Review Next.js docs: https://nextjs.org/docs
- Check Stripe docs: https://stripe.com/docs
- Tailwind CSS docs: https://tailwindcss.com/docs

## 📄 License

This project is built for Poop Troop and is provided as-is.

## 🎉 Next Steps

1. Customize all content and branding
2. Set up Stripe account
3. Add database (see DATABASE.md)
4. Test payment flow with Stripe test card
5. Deploy to production
6. Celebrate your new subscription business! 🚀

---

Built with ❤️ for young entrepreneurs making a real difference in their community.
