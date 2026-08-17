# Fresh Setup — Mattress D2C Store

## 1. Unzip and enter the project

```bash
cd mattress_d2c_fresh_project
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start local development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## 4. Optional: create a new Git repository

```bash
git init
git add .
git commit -m "Initial mattress D2C storefront"
```

Then create an empty GitHub repository and connect it:

```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## 5. Important demo notes

- Cart works locally in the browser.
- Checkout is intentionally a demo.
- Product data lives in `src/lib/catalog.ts`.
- Replace demo images and testimonials before production.
- Replace `NOVA/SLEEP` with your final brand name.
