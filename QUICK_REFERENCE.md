# Quick Reference Card

Keep this handy while developing!

## Essential Commands

```bash
# Install dependencies (run once)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm run start

# Check for errors
npm run lint

# Clear cache and reinstall
rm -rf node_modules && npm install
```

## Key File Locations

| What | Where |
|------|-------|
| Landing Page | `app/page.tsx` |
| Subscribe Form | `app/subscribe/page.tsx` |
| Dashboard | `app/dashboard/page.tsx` |
| Header/Nav | `components/Header.tsx` |
| Footer | `components/Footer.tsx` |
| Styles | `app/globals.css` |
| Colors | `tailwind.config.js` |
| Env Variables | `.env.local` |
| Stripe API | `app/api/create-checkout-session/route.ts` |

## Common Changes

### Change Landing Page Text
Open `app/page.tsx` and search for the text you want to change.

### Update Pricing
Edit the `PLANS` object in `app/subscribe/page.tsx`:
```tsx
const PLANS = {
  starter: { price: 15 },  // Change here
  regular: { price: 35 },
  premium: { price: 60 },
}
```

### Change Brand Colors
Edit `tailwind.config.js` - look for `colors` section.

### Update Contact Info
Edit `components/Footer.tsx`:
- Email
- Phone
- Address

### Add New Page
```bash
mkdir -p app/page-name
# Create app/page-name/page.tsx
```

## Stripe Test Card

Use this to test payments:
- **Card Number**: 4242 4242 4242 4242
- **Expiry**: Any future date (12/25)
- **CVC**: Any 3 digits (123)
- **ZIP**: Any 5 digits (12345)

## Useful URLs When Running

| URL | Purpose |
|-----|---------|
| http://localhost:3000 | Main site |
| http://localhost:3000/subscribe | Subscribe page |
| http://localhost:3000/dashboard | Dashboard |
| http://localhost:3000/contact | Contact form |

## Environment Variables Needed

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Tailwind CSS Classes (Used in Project)

```css
btn-primary         /* Green button */
btn-secondary       /* Earth button */
btn-outline         /* Brown outline button */
section-heading     /* Large page title */
subheading         /* Subtitle text */
card               /* White box with shadow */
container-max      /* Max width container */
```

## TypeScript Tips

```tsx
// Type a React component
export default function MyComponent() {
  return <div>Hello</div>
}

// Type props
interface Props {
  name: string
  age: number
}

function MyComponent({ name, age }: Props) {
  return <div>{name} is {age}</div>
}

// Type state
const [count, setCount] = useState<number>(0)
```

## Debugging

### Check Console Errors
Press F12 in browser → Console tab

### Check Network Errors
F12 → Network tab → Try payment

### Check Server Logs
Look at terminal where `npm run dev` is running

## Color Palette

```
🟤 Brown (Poop):  #a0785a, #8a6248, #6d4f3b
🟨 Earth:         #b39369, #a08156, #896d47
🟢 Leaf (CTA):    #22c55e, #16a34a, #15803d
⚪ White:         #ffffff
⚫ Dark:          #1f2937, #111827
```

## Deployment Checklist

- [ ] Stripe keys are LIVE (not test)
- [ ] Environment variables added
- [ ] Domain configured
- [ ] Test payment processed
- [ ] Contact email works
- [ ] Mobile tested
- [ ] All content reviewed
- [ ] Privacy/Terms pages checked

## Getting Stripe Keys

1. Go to https://stripe.com
2. Sign in to dashboard
3. Go to **Developers > API Keys**
4. For test: Use keys with "test" in the name
5. For production: Toggle "Test mode" OFF, then copy live keys

## Common Error Messages

| Error | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` |
| "Env variable undefined" | Restart `npm run dev` after editing `.env.local` |
| "Stripe connection failed" | Check API keys in `.env.local` |
| "Build failed" | Check Terminal for specific error, fix, rebuild |
| "Styles not showing" | Restart dev server |

## When You're Ready to Deploy

1. Read `DEPLOYMENT.md`
2. Push code to GitHub
3. Connect to Vercel/Netlify
4. Add live Stripe keys
5. Add custom domain
6. Test one payment
7. Launch!

## Quick Support

- **Next.js Docs**: https://nextjs.org/docs
- **Stripe Docs**: https://stripe.com/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **React Docs**: https://react.dev

---

## Pro Tips

✅ Save `.env.local` - it's in `.gitignore` so it won't be pushed  
✅ Always test locally before deploying  
✅ Use test Stripe keys during development  
✅ Restart dev server when changing env variables  
✅ Keep sensitive keys private!  

---

**Tip**: Bookmark this page for quick reference while coding! 🔖
