# Project Agenda & Next Steps (AGEND.md)

## Current Status
The Sankalp Foundation website has been built, styled to match the official maroon/gold branding, and is functionally complete.

## Pending Tasks (Pre-launch Checklist)

### 1. Content Population
- [ ] **Images**: Replace all placeholder images in `public/images/` with real client photos (Programs, Gallery, Hero, etc.).
- [ ] **Data Files**: Review and update text content in `src/data/*.ts` if any placeholders remain.
- [ ] **Translations**: Ensure all newly added content is translated in `src/locales/en.json` and `src/locales/mr.json`.

### 2. Integrations
- [ ] **Contact Form**: Update the Formspree URL or integration endpoint in `src/components/shared/ContactForm.tsx`.
- [ ] **Google Maps**: Embed the real Google Maps `<iframe>` in `src/pages/Contact.tsx`.
- [ ] **Social Links**: Update WhatsApp number and social media links in the Footer and WhatsAppFloat components.

### 3. SEO & Deployment
- [ ] **SEO Metadata**: Update `index.html` with appropriate title tags, meta descriptions, and Open Graph tags.
- [ ] **Domain**: Link the final production build to the custom domain.
- [ ] **Sitemap**: Generate and submit a `sitemap.xml`.

## Long-term Goals
- Monitor website performance and user analytics.
- Regular updates to the Gallery and Impact Stories.
