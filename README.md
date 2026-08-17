# Nova Sleep D2C storefront starter

Original mattress D2C website starter inspired by common conversion patterns in leading Indian mattress brands, without copying brand identity, protected technology names or site design.

## Included

- D2C landing page
- Mattress catalogue
- 4 sample mattress products
- Dynamic product-detail pages
- Size + height configuration
- Local cart
- Comparison page
- Sleep quiz / mattress matcher
- Why Nova / brand page
- Reviews page
- Responsive navigation
- Mobile responsive design

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Important production work

The current checkout is a demo. Before launch:

1. Connect a real commerce backend:
   - Shopify Storefront API, Medusa, Saleor, or a custom order service.
2. Connect payments:
   - Razorpay is a common India-first option; Stripe can also be used where appropriate.
3. Replace all demo products, prices, testimonials, policies and claims.
4. Replace Unsplash photography with owned/licensed brand media.
5. Add GST invoice logic, shipping rules, pincode serviceability and order tracking.
6. Add admin/CMS if non-technical staff need product/content editing.
7. Add analytics, consent, SEO metadata and structured product data.
8. Verify all health/back-pain/performance claims before publishing them.

## Main files

- `src/lib/catalog.ts` — sample product catalogue
- `src/app/page.tsx` — homepage
- `src/app/mattresses/page.tsx` — PLP
- `src/app/mattresses/[slug]/page.tsx` — PDP
- `src/components/ProductBuyBox.tsx` — size/height selector + add to cart
- `src/components/CartProvider.tsx` — local cart state
- `src/app/compare/page.tsx` — comparison
- `src/app/sleep-quiz/page.tsx` — quiz
- `src/app/cart/page.tsx` — cart

## Brand

The placeholder brand is **NOVA/SLEEP**. Search/replace it with your final brand name after you choose one.
