# Quick Start Setup Guide

Follow these steps to get Poop Troop running locally and ready for customization.

## Step 1: Install Node.js (if needed)

- Download from https://nodejs.org (LTS version)
- Verify installation:
  ```bash
  node --version
  npm --version
  ```

## Step 2: Install Project Dependencies

From the project root directory:

```bash
npm install
```

This installs all required packages (Next.js, Tailwind CSS, Stripe, etc.)

## Step 3: Get Stripe API Keys

1. Go to https://stripe.com/docs/stripe-test-mode
2. Create a free Stripe account
3. Switch to **Test Mode** (top left toggle)
4. Go to **Developers > API Keys**
5. Copy your keys:
   - **Publishable Key** (starts with `pk_test_`)
   - **Secret Key** (starts with `sk_test_`)

## Step 4: Setup Environment Variables

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and paste your Stripe keys:
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
   STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
   STRIPE_WEBHOOK_SECRET=whsec_test_YOUR_SECRET
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

## Step 5: Run the Development Server

```bash
npm run dev
```

You should see:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

## Step 6: View the Site

Open http://localhost:3000 in your browser

You should see:
- ✅ The Poop Troop landing page
- ✅ Navigation menu
- ✅ Pricing section
- ✅ All content sections

## Step 7: Test the Flow (Before Customizing)

1. Click "Subscribe Now"
2. Fill in the form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "(555) 0123"
   - Address: "123 Test St"
   - City, State, ZIP: "Test City, TC 12345"
3. Click "Continue to Payment"
4. You should be redirected to Stripe Checkout
5. Use Stripe's test card:
   - Card Number: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., 12/25)
   - CVC: Any 3 digits (e.g., 123)
6. Complete checkout to see success page

## Step 8: Customize for Your Business

### Update Business Name & Branding

1. **Site Title**: Edit `app/layout.tsx`
   ```tsx
   title: 'Your Service Name | Description',
   ```

2. **Navigation & Footer**: Edit `components/Header.tsx` and `components/Footer.tsx`
   - Change company name
   - Update contact info
   - Add your logo/emoji

3. **Colors**: Edit `tailwind.config.js`
   - Customize the `poop`, `earth`, and `leaf` colors
   - Or replace with your brand colors

### Update Content

1. **Landing Page** (`app/page.tsx`):
   - Change the hero section headline
   - Update problem statements
   - Modify testimonials
   - Adjust pricing

2. **Service Details**:
   - Update what's included in each plan
   - Change service frequencies
   - Modify the "How It Works" section

3. **Contact Info**:
   - Replace email addresses
   - Update phone numbers
   - Change business address

### Update Pricing

1. Open `app/subscribe/page.tsx`
2. Find the `PLANS` object:
   ```tsx
   const PLANS = {
     starter: {
       name: 'Starter',
       price: 15,  // Change this
       // ...
     },
   }
   ```
3. Update prices and descriptions

**Important**: After changing prices, you need to set up actual Stripe price IDs in production.

## Step 9: Set Up Database (Optional)

For production, you'll want to store customer data:

1. Follow the instructions in `DATABASE.md`
2. Recommended: Supabase (free tier is great to start)
3. Update dashboard to fetch real data

## Step 10: Deploy (Next)

When you're ready to go live:

1. Follow `DEPLOYMENT.md` for detailed steps
2. Quick summary:
   - Push to GitHub
   - Connect to Vercel/Netlify
   - Add environment variables
   - Deploy!

## Useful Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Run type checking
npm run lint
```

## Troubleshooting

### "Cannot find module" errors
```bash
rm -rf node_modules
npm install
npm run dev
```

### Stripe errors on payment
- Check `.env.local` has correct keys
- Make sure you're in Test Mode in Stripe dashboard
- Clear browser cache and try again

### Tailwind styles not showing
- Restart dev server: `Ctrl+C` then `npm run dev`
- Check you saved all CSS changes

### TypeScript errors
- Errors are normal during development
- They won't block deployment
- Fix them or ignore them based on your needs

## Next Steps

1. ✅ Site running locally? Great!
2. ✅ Tested payment flow? Perfect!
3. 📝 Customize all the content
4. 🗄️ Set up database for customer data
5. 🚀 Deploy to production (see DEPLOYMENT.md)
6. 🎉 Start accepting customers!

## Need Help?

- **Next.js Questions**: https://nextjs.org/docs
- **Stripe Questions**: https://stripe.com/docs
- **Tailwind Questions**: https://tailwindcss.com/docs
- **React Questions**: https://react.dev

## Local Storage Notes

Your `.env.local` file:
- Is ignored by Git (won't be pushed)
- Contains your secret Stripe keys
- Never share this file
- Create it fresh on each computer

---

You're all set! Start customizing Poop Troop for your kids' business. 🚀
