# Hema Durga Koppireddy — React Portfolio

A modern, component-based React portfolio with Syne + DM Sans fonts, dark theme,
animated skill bars, scroll-reveal, and fully responsive layout.

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Add Your Assets

Place these files in `src/assets/`:
- `Hema_Bamboo_pic.png`  — your profile photo
- `ease-page.png`        — EASE project screenshot
- `codedelight-page.png` — CodeDelight project screenshot

Place your CV in the `public/` folder:
- `Updated_resume.pdf`

## Project Structure

```
src/
├── assets/           ← Drop your images here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── hooks/
│   └── useReveal.js   ← Scroll-reveal hook (used in Skills)
├── styles/
│   ├── global.css     ← Design system, CSS variables, animations
│   ├── Navbar.css
│   ├── Hero.css
│   └── sections.css   ← About, Skills, Services, Projects, Contact, Footer
├── App.jsx
└── main.jsx
```

## Wiring Up the Contact Form

In `Contact.jsx`, the `handleSubmit` function is ready — connect EmailJS or Formspree:

```js
// EmailJS example
import emailjs from '@emailjs/browser';
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY');
```

## Build for Production

```bash
npm run build
```

Output goes to `dist/` — deploy to Vercel, Netlify, or GitHub Pages.
