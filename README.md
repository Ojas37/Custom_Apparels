# 👕 Custom Apparels - Premium Custom Merchandise Landing Page

[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF00C1?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A high-end, responsive landing page for **Custom Apparels**, a premium garment manufacturer and custom merchandise provider based in Navi Mumbai. Designed with a modern, dark-mode aesthetic featuring smooth inertia scrolling, sophisticated floating mockups, and rich animations to deliver a premium retail experience.

---

## ✨ Features

- **🌊 Smooth Inertia Scrolling**: Powered by `lenis` scroll for a luxurious, fluid desktop navigation feel.
- **✨ Parallax Visual Widgets**: Floating visual cards in the Hero section linked with scroll-driven parallax effects (using `framer-motion`).
- **🔄 Interactive Carousel Showcase**: Creative rotating product showcase carousel displaying customized tees, hoodies, and jackets.
- **🛡️ Trust Bar / Client Marquee**: Smooth infinite logo carousel demonstrating brand associations.
- **👕 Rich Portfolio Masonry Gallery**: A dynamic masonry gallery highlighting high-resolution showcase items and past works.
- **📱 Floating WhatsApp Contact**: Quick access button directly linking users to design assistance for free mockups.
- **💻 Responsive & Alive Design**: Fully optimized for mobile, tablet, and desktop screens with micro-animations and active hover states.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/) (Build tool)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using `@tailwindcss/postcss`)
- **Animation**: [Framer Motion v12](https://www.framer.com/motion/) (smooth spring transitions, scroll animations, entry stagger effects)
- **Scroller**: [Lenis Scroll](https://lenis.darkroom.engineering/) (for smooth momentum scrolling)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📂 Project Structure

```text
CustomApparel/
├── public/                  # Static assets
└── src/
    ├── assets/              # App images and background assets
    ├── components/          # Reusable UI sections and widgets
    │   ├── AboutUs.tsx      # Craft & Vision section with cards
    │   ├── CarouselSection.tsx # Rotating product showcase
    │   ├── CollabsSection.tsx # B2B custom merch drops and influencer campaigns
    │   ├── FloatingWhatsApp.tsx # Sticky WhatsApp overlay
    │   ├── FooterCTA.tsx    # Final Call to Action and footer
    │   ├── Hero.tsx         # Responsive Hero with floating widgets
    │   ├── HowItWorks.tsx   # Visual timeline step-by-step process
    │   ├── Navbar.tsx       # Glassmorphism header navbar
    │   ├── ProductShowcase.tsx # Categories of apparel we customize
    │   ├── RecentWork.tsx   # Masonry layout portfolio gallery
    │   ├── Testimonials.tsx # Premium user reviews slider
    │   ├── TrustBar.tsx     # Client brand logo marquee
    │   └── WhyChooseUs.tsx  # Core value propositions
    ├── App.tsx              # Main entry layout assembling all sections
    ├── main.tsx             # React DOM injection entrypoint
    └── index.css            # Tailored custom utilities, typography, and scrollbar
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended) and `npm`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Ojas37/Custom_Apparels.git
   cd Custom_Apparels
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally

To run the development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### Building for Production

To compile TypeScript and bundle the project for production:
```bash
npm run build
```
This generates a static build in the `dist/` directory, optimized and ready to deploy to Vercel, Netlify, or Github Pages.

---

## 📄 License

This project is private and proprietary to **Custom Apparels**.
