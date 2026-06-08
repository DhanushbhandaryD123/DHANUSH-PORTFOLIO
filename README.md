# 🚀 Dhanush - Cinematic Portfolio Website

A world-class, production-ready cinematic portfolio website built with **Next.js 14**, **TypeScript**, **Framer Motion**, **GSAP**, and **Tailwind CSS**.

## ✨ Features

- **Cinematic Animations**: Smooth, fluid scroll-driven animations using Framer Motion & GSAP
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Lighthouse score optimizations, lazy loading, image optimization
- **Dark Theme**: Modern dark UI with orange accent colors
- **Glassmorphism Design**: Modern glass effect components
- **Dynamic Sections**:
  - Hero with cinematic animations
  - About section with animated counters
  - Skills grid with Bento layout
  - Featured projects showcase
  - Services section
  - Contact form with validation
  - Footer with social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ and npm/yarn
- Git

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
dhanush-portfolio/
├── public/
│   └── sequence/          # Animation frames (for future enhancement)
├── src/
│   ├── app/
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills grid
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Services.tsx   # Services section
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer
│   └── ...
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.mjs
└── postcss.config.js
```

## 🎨 Customization

### Colors
Edit colors in `tailwind.config.ts`:

```ts
colors: {
  dark: '#0d0d0d',
  'dark-secondary': '#1a1a1a',
  accent: '#ff6b35',
  'accent-light': '#ff8555',
}
```

### Typography
Fonts are configured in `src/app/globals.css`. Modify to use your preferred fonts.

### Content
Update content in respective component files:
- Hero text → `src/components/Hero.tsx`
- About section → `src/components/About.tsx`
- Projects → `src/components/Projects.tsx`
- etc.

## 📊 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Image Optimization**: WebP format support
- **Code Splitting**: Automatic with Next.js
- **Lazy Loading**: Components load on demand

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel auto-detects Next.js and deploys

```bash
npm install -g vercel
vercel
```

### Environment Variables

Create a `.env.local` file if needed:

```
NEXT_PUBLIC_SITE_URL=your-domain.com
```

## 🔧 Customization Guide

### Add New Sections

1. Create a new component in `src/components/`
2. Add animations using Framer Motion
3. Import in `src/app/page.tsx`

### Modify Animations

Framer Motion examples in components:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
/>
```

### Add Dark Mode Toggle

Create a context provider and modify the layout to support light/dark modes.

## 📱 Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Mobile Latest

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Build Issues
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues
Ensure Tailwind CSS is properly compiled:
```bash
npm run dev
```

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork, modify, and use this portfolio template for your own projects.

## 📧 Contact

- Email: dhanushbhandary14@gmail.com
- GitHub: github.com/DhanushbhandaryD123
- LinkedIn: linkedin.com/in/dhanush-bhandary

## 🙏 Acknowledgments

- Inspired by Chetan Pujari, Stripe, Apple, and Linear
- Built with Next.js and Framer Motion
- Styled with Tailwind CSS

---

**Happy Building! 🚀**
