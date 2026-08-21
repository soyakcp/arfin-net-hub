# Portfolio Site — Arfin Zaman Badhon

Single-page dark-tech portfolio for a Network Support Engineer, built at `/`.

## Look and feel

- Background `#0D1117`, cards `#161B22`, accent cyan `#00F2FE`, all as semantic tokens in `src/styles.css` (oklch).
- Glassmorphism cards: subtle translucent surfaces, thin cyan-tinted borders, soft glow on hover.
- Typography: Space Grotesk for headings, DM Sans for body (loaded via link tag in the root route).
- Faint grid/scanline texture in the hero, restrained motion (fade/slide on scroll), no filler copy.

## Sections

1. **Hero** — your uploaded photo as a circular avatar with a cyan glow ring, name ARFIN ZAMAN BADHON, "Network Support Engineer" badge, the headline, and two CTAs (Contact Me → contact section, Download CV). A compact bar links phone/WhatsApp (+880 1303-626221), LinkedIn, and email.
2. **Technical Core Skills** — three glass cards with icons: Networking & Labs (EVE-NG), IT & Systems Support, Tools & Soft Skills, each listing the exact items given as chips.
3. **Experience** — vertical timeline with cyan node markers: Circle Network Ltd., The Premium Homes Ltd., Self-employed, with roles, dates, and one-line descriptions.
4. **Education** — three compact cards: BBA Finance (Tejgaon College), HSC (BPATC, GPA 4.25), SSC (Amin Model Town, GPA 4.00).
5. **Contact + Footer** — highlighted card with phone and email, plus a Name/Email/Message form. Footer: "© 2026 Arfin Zaman Badhon. Open to Network & IT Support Opportunities."

## Technical notes

- Photo uploaded to the Lovable CDN as an asset pointer; rendered as a circular crop (`rounded-full object-cover`).
- Contact form submits via `mailto:` to arfinj27@gmail.com — no backend, no signup required. If you'd rather store messages or get server-side email delivery, say so and I'll add Lovable Cloud instead.
- Download CV button will be a placeholder link until you upload a CV PDF.
- Section components under `src/components/portfolio/`, composed in `src/routes/index.tsx`.
- SEO: unique title, description, og/twitter tags on the index route; single H1; alt text on the photo.
