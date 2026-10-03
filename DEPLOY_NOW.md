# 🚀 DEPLOY POOP TROOP TO NETLIFY - LIVE IN 5 MINUTES

Your code is ready to deploy. Follow these steps:

## Step 1: Create GitHub Repository (2 minutes)

1. Go to https://github.com/new
2. Create repository named: `poop-troop`
3. Copy the HTTPS URL (looks like: `https://github.com/YOUR_USERNAME/poop-troop.git`)
4. Run:
```bash
cd "/Users/jessemartin/Library/Application Support/Claude/scratch-workspaces/a66aea1a-80cc-45c3-84a9-2065f7c495c7/e5f82112-6df1-45c3-8f01-0aae711fff5a/scratch-2026-10-03-ec44a6"
git remote add origin https://github.com/YOUR_USERNAME/poop-troop.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Netlify (2 minutes)

1. Go to https://netlify.com
2. Click "Add new site > Import an existing project"
3. Choose GitHub
4. Select `poop-troop` repository
5. Keep these settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"
7. **Wait 2-3 minutes for build to complete**

## Step 3: Add Environment Variables (1 minute)

After deployment starts:

1. Go to Site Settings > Build & deploy > Environment
2. Add environment variables:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_your_key
   STRIPE_SECRET_KEY = sk_test_your_key
   STRIPE_WEBHOOK_SECRET = whsec_test_your_secret
   NEXT_PUBLIC_APP_URL = https://your-site.netlify.app
   ```

3. Click "Deploy site" again to redeploy with env vars

## Step 4: Get Your Live URL

Once deployed, Netlify gives you a URL like:
```
https://poop-troop-abc123.netlify.app
```

Share this with customers! ✅

## Step 5: Connect Custom Domain (Optional)

If you want a custom domain:
1. In Netlify > Domain settings
2. Add custom domain
3. Follow DNS instructions
4. Update NEXT_PUBLIC_APP_URL to your domain

---

## ✨ What's Live After Deploy

- Landing page: https://your-site.netlify.app
- Subscribe: https://your-site.netlify.app/subscribe
- Dashboard: https://your-site.netlify.app/dashboard
- Admin: https://your-site.netlify.app/admin
- Worker App: https://your-site.netlify.app/worker

---

## 🔑 Important: Get Real Stripe Keys

**Before sharing with customers**, you MUST use LIVE Stripe keys:

1. Go to https://dashboard.stripe.com
2. Toggle "Test Mode" OFF
3. Get your LIVE keys (start with pk_live_ and sk_live_)
4. Update Netlify environment variables with LIVE keys
5. Redeploy

**Without live keys, payment won't work!**

---

## 📱 Test the Deployment

After it's live:

1. Visit your Netlify URL
2. Click "Subscribe"
3. Use test card: 4242 4242 4242 4242
4. Verify checkout works
5. Verify redirect to success page

---

## 🎉 YOU'RE LIVE!

Your business is now online and taking payments!

Next:
- [ ] Email first customers the link
- [ ] Start accepting real subscriptions
- [ ] Kids start earning real money

**Questions?** See BUSINESS_OPERATIONS.md or INTEGRATION_COMPLETE.md
