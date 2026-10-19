# Zelix — Enterprise AI Agent & SaaS Platform Template

**Zelix** is an ultra-premium, production-ready React & Tailwind CSS web template meticulously crafted for AI startups, automation agencies, SaaS platforms, and modern enterprise software companies. Built with a sleek Obsidian & Glassmorphism design system, smooth Lenis scrolling, GSAP micro-interactions, and conversion-optimized components.

---

## 🌟 Key Features

- **Obsidian & Glassmorphism Aesthetic**: Modern dark/light styling, tailored color palettes, subtle glowing borders, and fluid backdrop blur effects.
- **Lenis Smooth Scroll & GSAP ScrollTrigger**: Silky smooth 60fps wheel scrolling synchronized with GSAP animations.
- **Robust Client-Side SPA Navigation**: Built-in client-side routing with smooth page entry/exit transitions and zero 404 reload issues on Vercel or other static hosts.
- **Comprehensive Multi-Page Architecture**:
  - **Home**: Hero with live playground showcase, trusted partner marquee, feature grid, interactive process steps, ROI metrics, pricing toggle, testimonials, FAQ, and dual CTA.
  - **About Us**: Company mission, core values, leadership vision, stats counter, and team milestones.
  - **Features**: Bento-grid feature matrix, security compliance cards, and interactive capability highlights.
  - **Services**: Detailed automation offerings, integrations overview, and specialized agency solutions.
  - **Team**: Executive leadership and team member profiles with social links.
  - **Blog**: Modern article layout, category badges, and tech insights.
  - **Contact**: Interactive contact form with validation, company coordinates, and embedded map.
  - **Authentication (Auth)**: Dual-mode Sign In / Sign Up modal card with social auth triggers.
- **Interactive Micro-Components**:
  - Interactive monthly/annual pricing toggle with discount pill.
  - Bento grid layouts with dynamic spotlight cursor effects.
  - Synchronized process tabs with SVG data path animations.
  - Expandable FAQ accordion system.
  - Responsive desktop mega-menus and mobile slide-out drawer.
- **100% Responsive & Cross-Browser Tested**: Flawless appearance and performance on mobile, tablet, laptop, and ultra-wide desktop viewports.
- **TypeScript & Clean Architecture**: Fully typed codebase, modular component hierarchy, and zero clutter.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP (GreenSock)](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Simple Icons](https://simpleicons.org/)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine (version **18.0.0** or higher recommended).

### 1. Installation

Clone or extract the template files, navigate into the project directory, and install dependencies:

```bash
cd zelix-template
npm install
```

### 2. Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000` to view the template live with instant Hot Module Replacement (HMR).

### 3. Production Build

Compile and bundle the project for production:

```bash
npm run build
```

The optimized assets will be generated in the `dist/` folder ready for deployment.

### 4. Preview Production Build

Preview the production build locally before deploying:

```bash
npm run preview
```

### 5. Type Checking

Verify TypeScript types across the entire project:

```bash
npm run lint
```

---

## 📁 Project Structure

```text
├── public/                 # Static assets & public images
│   └── images/             # Template imagery and illustration assets
├── src/
│   ├── components/         # Reusable UI sections and navigation elements
│   │   ├── AboutSection.tsx        # Home about section with stats
│   │   ├── CoreCapabilities.tsx    # Platform capabilities matrix
│   │   ├── CTASection.tsx          # Conversion call-to-action
│   │   ├── FAQSection.tsx          # Accordion FAQ component
│   │   ├── FeaturesSection.tsx     # Bento-style feature grid
│   │   ├── Footer.tsx              # Multi-column footer with legal links
│   │   ├── Hero.tsx                # Hero section with interactive playground
│   │   ├── InnerPagesMenu.tsx      # Dropdown menu for pages
│   │   ├── IntegrationsSection.tsx # Circuit board integration showcase
│   │   ├── MarqueeSection.tsx      # Infinite client logo marquee
│   │   ├── MegaMenu.tsx            # Desktop mega-menu
│   │   ├── Navbar.tsx              # Sticky glassmorphism header & mobile drawer
│   │   ├── PlatformMenu.tsx        # Solutions dropdown menu
│   │   ├── PlansSupportMenu.tsx    # Resources dropdown menu
│   │   ├── Pricing.tsx             # Interactive pricing table & toggle
│   │   ├── ProcessSection.tsx      # Interactive step-by-step workflow
│   │   └── Testimonials.tsx        # Customer social proof carousel
│   ├── context/            # Global context providers (e.g., ThemeContext)
│   ├── data/               # Mock data, plans, and configuration files
│   ├── pages/              # Dedicated sub-pages
│   │   ├── AboutPage.tsx           # Standalone About page
│   │   ├── AuthPage.tsx            # Sign In / Sign Up page
│   │   ├── BlogPage.tsx            # Blog articles list page
│   │   ├── ContactPage.tsx         # Contact form & location page
│   │   ├── FeaturesPage.tsx        # Deep-dive features page
│   │   ├── ServicesPage.tsx        # Agency services page
│   │   └── TeamPage.tsx            # Leadership & team directory page
│   ├── App.tsx             # Main application layout, routing & Lenis init
│   ├── index.css           # Tailwind CSS imports & custom utility classes
│   ├── main.tsx            # Application entry point
│   └── types.ts            # Shared TypeScript interfaces & types
├── index.html              # HTML template entry point
├── package.json            # Project dependencies and npm scripts
├── tsconfig.json           # TypeScript configuration
├── vercel.json             # Vercel SPA routing rewrite configuration
└── vite.config.ts          # Vite build and plugin configuration
```

---

## 🎨 Customization Guide

### Brand Colors & Theme
All primary colors and typography tokens are configured via Tailwind CSS. You can customize the brand palette directly in `src/index.css` or adjust Tailwind utility classes across components:
- **Violet Accent**: `violet-600` / `#7c3aed`
- **Canvas Neutral**: `#F4F5F7`
- **Obsidian Dark**: `#090D16` / `#0F172A`

### Logo & Branding
Update the logo in [Navbar.tsx](src/components/Navbar.tsx) and [Footer.tsx](src/components/Footer.tsx):
```tsx
<a href="/" className="font-black text-3xl sm:text-4xl tracking-tighter leading-none">
  <span className="text-slate-900">Zel</span>
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-500">ix</span>
</a>
```

### Content & Pricing Data
Edit plan features, pricing tiers, and FAQ items in [src/data/mockData.ts](src/data/mockData.ts).

---

## 🚢 Deployment

### Deploy to Vercel
This template comes pre-configured with a `vercel.json` SPA rewrite file to guarantee smooth routing on direct visits and browser refreshes:
1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel will automatically detect Vite and set the build settings (`npm run build` -> `dist`).
4. Click **Deploy**.

### Deploy to Netlify
Create a `public/_redirects` file with the following line:
```text
/*    /index.html   200
```
Then deploy via the Netlify dashboard or CLI.

---

## 📄 License & Support

- **Commercial Template License**: This template is licensed for personal and commercial projects in accordance with your marketplace license terms (Creative Market / Creative Fabrica).
- **Support**: For questions, bug reports, or customization inquiries, please reach out via your marketplace support channel or submit an issue in your repository.

---

*Crafted with precision for modern SaaS builders.*
