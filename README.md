# README.md

# ✨ EcoNova Product Launch Landing Page

A fully dynamic and responsive landing page for the fictional sustainable technology product **EcoNova**, built with **Next.js**, **TypeScript**, **React**, and **Contentful**.

This project demonstrates a scalable headless architecture allowing marketing teams to independently manage and reorder landing page content without developer intervention.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/econova-landing.git
cd econova-landing
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root and add:
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_TOKEN=your_preview_token (optional)
CONTENTFUL_ENVIRONMENT=master
```

### 4. Run Locally
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Contentful Setup

### Content Types

#### ✍️ Landing Page
- Title
- Slug
- Sections (Reference array of all section types)

#### 📊 Section Types (all with `Title` field)

##### 1. Hero Section
- Headline
- Sub-headline
- Background Image (Asset)
- CTA Button Text
- CTA Button Link

##### 2. Features Section
- Reference to Feature Items

##### 3. Feature Item
- Icon (text or asset)
- Title
- Description

##### 4. Testimonials Section
- List of Testimonials

##### 5. Testimonial
- Quote
- Author Name
- Author Title/Company

##### 6. Product Specs Section
- Description
- Key Specs (list)
- Product Images (array of assets)

##### 7. Call to Action (CTA)
- Headline
- Text
- Button Text & Link

##### 8. Footer
- Copyright Text
- List of Social Links (icon & URL)

##### 9. Shared Content (Reusable CTA Block)
- Headline, Text, Button
- Used across multiple pages

> ⚠️ Create one `Landing Page` entry and populate it with a few diverse sections.

### Localization
- Enable localization for the Hero Section and Reusable CTA.
- Create English and Spanish versions.

---

## 📈 Architecture Overview

### 🛠️ React Component Structure
Each section type has its own modular component:
```
/components
  /Hero.tsx
  /Features.tsx
  /Testimonials.tsx
  /CTA.tsx
  /Footer.tsx
```

These are rendered dynamically based on the array in Contentful:
```tsx
const SECTION_COMPONENTS = {
  hero: Hero,
  features: Features,
  testimonials: Testimonials,
  cta: CTA,
  footer: Footer,
};
```

### 🧰 Data Fetching
- Uses **Contentful GraphQL API** for efficient structured querying.
- Abstracted with custom hooks: `useLandingPage(slug)`.

### 📅 Rendering Strategy
- Uses **Static Site Generation (SSG)** with `getStaticProps` + `getStaticPaths`
- Enables fast load times and SEO while keeping the site stable
- Content refreshes supported via **Incremental Static Regeneration (ISR)**

---

## ⚖️ Design Principles

### 🤝 Headless Best Practices
- **Content-first architecture**: UI is fully driven by Contentful data
- **Channel-agnostic**: Content could feed other platforms (mobile apps, kiosks, etc.)
- **Reusable blocks**: Shared CTA content used across multiple sections/pages

### ♻️ Scalability
- New section types or fields can be added in Contentful without code changes
- Components follow atomic design principles
- Clear separation of concerns with API-layer, components, and styles

---

## 🔐 Content Preview (Bonus)
- Supported using Contentful’s Preview API
- Uses `preview` query param to switch preview mode in `getStaticProps`
- Authenticated via preview token and requires enabling Next.js preview mode

---

## 🌐 Localization Strategy
- Contentful locale setup: English (default), Spanish
- Use `locale` query param to fetch localized entries
- Frontend supports `/en` and `/es` routes

---

## 📊 Performance
- Optimized images via `next/image`
- Lightweight GraphQL queries
- Lazy-loaded sections

---

## 🌇 Accessibility
- Semantic HTML
- ARIA labels for buttons, interactive content
- High color contrast, focus outlines, keyboard support

---

## 🚫 Assumptions & Trade-offs
- Assumes only a single landing page per slug
- Limited preview support to reduce complexity
- Fallback components for incomplete Contentful entries

---

## 📲 Demo
Deployed on Vercel: [https://econova-landing.vercel.app](https://econova-landing.vercel.app)

---

## 📹 Video Walkthrough
[loom.com/your-demo-video-link](https://loom.com/your-demo-video-link)

---

## ⚖️ Future Improvements
- Integrate live preview
- Add more localization features
- Enable drag-and-drop Contentful editor UX
- Add unit tests for components

---

## 🔧 Tech Stack
- **Next.js**, **React**, **TypeScript**
- **Tailwind CSS** for styling
- **Contentful** as Headless CMS
- **GraphQL** API Integration
- **Vercel** for deployment

---

## 👤 Author
**Ayan Kumar Mahato**  
[LinkedIn](https://linkedin.com/in/ayan-kumar-mahato-akm999) | [GitHub](https://github.com/AyanMahato)

---
