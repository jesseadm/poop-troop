# Production Deployment Guide

Complete instructions for deploying Poop Troop to production.

## Choose Your Platform

### Option 1: Vercel (Recommended)

**Best for**: First-time deployers, scalability, Stripe integration

#### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Poop Troop subscription platform"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/poop-troop.git
git push -u origin main
```

#### Step 2: Create Vercel Account

1. Go to https://vercel.com
2. Click "Sign Up"
3. Choose "Continue with GitHub"
4. Authorize Vercel

#### Step 3: Deploy

1. Click "Add New Project"
2. Select your `poop-troop` repository
3. Click "Import"
4. Vercel auto-detects Next.js ✓
5. Click "Deploy"

Wait 2-3 minutes for deployment to complete.

#### Step 4: Add Environment Variables

1. Go to your project's **Settings > Environment Variables**
2. Add each variable:

| Variable | Value | Type |
|----------|-------|------|
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Your live stripe key | Public |
| `STRIPE_SECRET_KEY` | Your live secret key | Secret |
| `STRIPE_WEBHOOK_SECRET` | Your webhook secret | Secret |
| `NEXT_PUBLIC_APP_URL` | Your production domain | Public |

3. **Important**: Switch Stripe to LIVE mode, not test mode
4. Redeploy: Click "Redeploy" or push new commit

#### Step 5: Get Your Domain

**Option A: Use Vercel Domain (Free)**
1. Go to **Settings > Domains**
2. Your domain is listed (e.g., `poop-troop.vercel.app`)

**Option B: Use Custom Domain**
1. Buy domain from GoDaddy, Namecheap, etc.
2. Go to **Settings > Domains**
3. Click "Add"
4. Enter your domain
5. Follow Vercel's DNS instructions
6. Wait 24 hours for DNS to propagate

#### Step 6: Enable HTTPS

Vercel enables HTTPS automatically for free! ✓

---

### Option 2: Netlify

**Best for**: Jamstack simplicity, serverless functions

#### Step 1: Push to GitHub

Same as Vercel above.

#### Step 2: Create Netlify Account

1. Go to https://netlify.com
2. Click "Sign Up"
3. Choose GitHub
4. Authorize Netlify

#### Step 3: Connect Repository

1. Click "Add new site > Import an existing project"
2. Choose GitHub
3. Select your repository
4. Netlify auto-detects settings
5. Click "Deploy site"

#### Step 4: Add Environment Variables

1. Go to **Site Settings > Environment**
2. Add environment variables same as Vercel
3. Trigger redeploy

#### Step 5: Get Your Domain

- Free domain: `your-site.netlify.app`
- Custom domain: Add in **Domain Settings**

---

### Option 3: Railway

**Best for**: Docker support, custom backends

#### Step 1: Create Railway Account

1. Go to https://railway.app
2. Sign up with GitHub

#### Step 2: Deploy

1. Click "New Project > GitHub Repo"
2. Select your repository
3. Railway auto-detects Next.js
4. Click "Deploy"

#### Step 3: Configure Environment

1. Go to your project
2. Click "Variables"
3. Add all Stripe keys (LIVE mode)
4. Deploy

#### Step 4: Domain

1. Go to **Settings > Domains**
2. Railway provides a free domain
3. Add custom domain if desired

---

## Stripe Production Setup

### Get Live API Keys

1. In Stripe Dashboard, toggle **Test Mode** OFF
2. Go to **Developers > API Keys**
3. Copy your LIVE keys:
   - `pk_live_...` (Publishable)
   - `sk_live_...` (Secret)

**⚠️ WARNING**: Never share live keys. Keep them secret!

### Set Up Webhook (Production)

1. In Stripe Dashboard, go to **Developers > Webhooks**
2. Click "Add endpoint"
3. **Endpoint URL**: `https://yourdomain.com/api/webhooks/stripe`
4. **Events to send**:
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `charge.succeeded`
   - `charge.failed`
5. Click "Add endpoint"
6. Get signing secret (`whsec_live_...`)
7. Add to your environment variables
8. Redeploy

### Configure Success/Cancel URLs

1. In **Settings > Business settings**
2. Scroll to "Redirect URLs"
3. Set:
   - Success URL: `https://yourdomain.com/success`
   - Cancel URL: `https://yourdomain.com/subscribe`

### Test Live (Small Amount)

1. Process a test transaction for $1 USD
2. Verify in Stripe Dashboard
3. Refund the test charge
4. You're ready for real customers!

---

## Database Setup for Production

### If Using Supabase

1. Create production project on Supabase
2. Run SQL migrations
3. Get new `DATABASE_URL`
4. Add to environment variables
5. Redeploy

### If Using Firebase

1. Create production project on Firebase
2. Get database URL
3. Add to environment variables
4. Update firestore rules

---

## Pre-Launch Checklist

- [ ] ✅ Site deployed and accessible
- [ ] ✅ Domain is working (custom or Vercel)
- [ ] ✅ HTTPS enabled (automatic on Vercel/Netlify)
- [ ] ✅ Stripe keys are LIVE (not test)
- [ ] ✅ Webhook configured and working
- [ ] ✅ Test transaction successful
- [ ] ✅ Customer dashboard working
- [ ] ✅ Emails configured for notifications
- [ ] ✅ Contact form working
- [ ] ✅ Privacy/Terms pages reviewed
- [ ] ✅ Mobile site tested on phone
- [ ] ✅ Analytics set up (Google Analytics)
- [ ] ✅ Error monitoring set up (Sentry)

---

## Post-Launch Monitoring

### Uptime Monitoring

1. Go to https://uptimerobot.com
2. Create account
3. Add monitor for your domain
4. Get alerts if site goes down

### Error Tracking

1. Go to https://sentry.io
2. Create account
3. Install Sentry in your app:
   ```bash
   npm install @sentry/nextjs
   ```
4. Configure in `next.config.js`
5. Track errors in real-time

### Analytics

1. Go to https://analytics.google.com
2. Create account
3. Add tracking code to your site
4. Monitor user behavior

---

## Scaling & Performance

### CDN & Caching

Vercel/Netlify automatically handle this ✓

### Image Optimization

Next.js automatically optimizes images ✓

### Database Optimization

See DATABASE.md for performance tips

### Load Testing

Before launch:
```bash
npm install -g artillery
artillery run load-test.yml
```

---

## Troubleshooting Deployment

### "Build Failed"

1. Check build logs in platform dashboard
2. Common issues:
   - Missing environment variables
   - TypeScript errors
   - Missing dependencies

Solution:
```bash
npm run build  # Test locally first
npm run lint   # Check for errors
```

### Stripe Not Working

1. Verify webhook secret is correct
2. Test webhook in Stripe Dashboard
3. Check error logs in platform
4. Make sure URLs are HTTPS

### Environment Variables Not Loading

1. Verify variable names exactly match
2. Redeploy after adding variables
3. Check for typos or spaces
4. In Vercel: go to Settings > Environment

### Slow Performance

1. Check Analytics dashboard
2. Look for database queries
3. Optimize images
4. Enable caching

---

## Ongoing Maintenance

### Weekly
- Check analytics dashboard
- Monitor error tracking
- Review customer support emails

### Monthly
- Update dependencies: `npm update`
- Review Stripe dashboard
- Check site performance
- Backup database

### Quarterly
- Security review
- Update policies/terms
- Plan new features
- Team retrospective

---

## Custom Domain Setup

### Domain from GoDaddy

1. Log in to GoDaddy
2. Go to **My Products > Domains**
3. Click your domain
4. **DNS Management > Add**
5. Type: CNAME
6. Name: @ (or www)
7. Value: Your Vercel/Netlify domain
8. Save
9. Wait 24 hours

### Verify on Vercel

1. Go to **Settings > Domains**
2. Click "Add"
3. Enter your domain
4. Vercel verifies DNS automatically
5. Once verified, your domain works!

---

## Emergency Contacts

- **Vercel Support**: https://vercel.com/support
- **Stripe Support**: https://support.stripe.com
- **Supabase Support**: https://supabase.com/support

---

## You Did It! 🚀

Your subscription platform is now live and ready to serve customers. Congratulations! 

Next steps:
1. Start marketing your service
2. Process your first real subscriptions
3. Scale and improve based on feedback
4. Watch your business grow!

---

Questions? Check the README.md or SETUP.md for more details.
