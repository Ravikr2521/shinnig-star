# Shining Star International School: Next.js site
Next.js 14 (App Router) · TypeScript · Tailwind · Framer Motion · Lucide · Fraunces + Plus Jakarta Sans

    npm install
    npm run dev      # http://localhost:3000
    npm run build

## Before launch
- Photos: add authorized .jpg files to `public/images/` (see README.txt there). Instagram images may only be used with the school's permission; this project does not scrape Instagram.
- Facts: fill address/phone/email/hours in `src/data/site.ts`. Placeholder copy (About, Academics, Facilities) must be verified.
- Enquiry form: set `ENQUIRY_WEBHOOK_URL` (copy `.env.example` to `.env.local`) to forward to email/CRM. Without it the form validates and honestly shows "demo mode".
- Replace the temporary star logo in `src/components/Logo.tsx`.
- Privacy/Terms footer links currently point to the contact section; add real pages.
