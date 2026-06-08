# 🎬 Cinematic Portfolio - Chetan Pujari Style

## ✨ What's New

### Architecture
- **ScrollyCanvas.tsx** - Plays 150 PNG frames synced to scroll position
- **Overlay.tsx** - 4-phase text overlay with scroll-triggered animations
- **Hero.tsx** - Updated with 500vh sticky scroll effect
- **page.tsx** - Uses shared `heroRef` for sync between Canvas and Overlay

### 4-Phase Animation Sequence
```
Progress (0-1)
├─ Phase 0 (0.00-0.28): Ghost watermark "DHANUSH" fades out
├─ Phase 1 (0.28-0.52): Name intro with role + stats
├─ Phase 2 (0.52-0.78): Role statement "Full Stack Developer & AI Engineer"
└─ Phase 3 (0.78-1.00): Main headline with scroll indicator
```

### Frame Assets
- **Location**: `/public/sequence/ezgif-split/`
- **Count**: 150 PNG frames
- **Format**: `frame_000_delay-0.066s.png` through `frame_149_delay-0.066s.png`
- **Naming**: Auto-padded with `String(i).padStart(3, '0')`

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```
Open http://localhost:3000 and scroll through the hero section.

### 3. Build & Deploy
```bash
npm run build
npm start
```

## 🎨 Customization

### Change Text Phases
Edit `src/components/Overlay.tsx`:
- **Phase 0** (lines 40-48): Ghost watermark
- **Phase 1** (lines 50-67): Name intro
- **Phase 2** (lines 69-82): Role statement
- **Phase 3** (lines 84-98): Main headline

### Adjust Progress Thresholds
In `src/components/Overlay.tsx` (lines 32-37):
```typescript
if (newProgress < 0.28) setPhase(0)      // Change 0.28
else if (newProgress < 0.52) setPhase(1) // Change 0.52
else if (newProgress < 0.78) setPhase(2) // Change 0.78
else setPhase(3)
```

### Change Hero Height
In `src/components/Hero.tsx` (line 14):
```typescript
className="relative h-[500vh] w-full bg-dark"
                        ↑
                   Change this
```

### Replace Frames
1. Generate new animation frames (Google Veo + ezgif)
2. Place PNG/WebP files in `/public/sequence/ezgif-split/`
3. Update frame count in `Hero.tsx` if needed

## 🐛 Troubleshooting

### Frames not loading?
- Check console for 404 errors
- Verify files exist: `/public/sequence/ezgif-split/frame_*.png`
- Ensure naming format matches: `frame_000`, `frame_001`, etc.

### Scroll animation choppy?
- Reduce frame count in ScrollyCanvas props
- Increase canvas resolution optimization
- Check browser performance metrics

### Text overlay not syncing?
- Verify `heroRef` is passed to both ScrollyCanvas and Overlay
- Check `useEffect` dependency arrays
- Ensure Hero element has `ref={heroRef}`

## 📦 Project Structure
```
dhanush-portfolio/
├── public/
│   └── sequence/
│       └── ezgif-split/
│           ├── frame_000_delay-0.066s.png
│           ├── frame_001_delay-0.066s.png
│           └── ... (150 frames total)
├── src/
│   ├── app/
│   │   ├── page.tsx (heroRef container)
│   │   └── layout.tsx
│   └── components/
│       ├── Hero.tsx (500vh sticky wrapper)
│       ├── ScrollyCanvas.tsx (frame playback)
│       ├── Overlay.tsx (4-phase text)
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Projects.tsx
│       ├── Services.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎯 Performance Tips

1. **Frame Preloading**: ScrollyCanvas preloads all frames on mount
2. **Canvas Rendering**: Only updates on scroll (not every frame)
3. **Image Optimization**: PNG files are reasonable size
4. **Lazy Loading**: Below-hero components load normally

## 🔗 Resources
- Tailwind CSS: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/
- GSAP: https://gsap.com/
- Next.js: https://nextjs.org/

---

**Built with ❤️ for Dhanush Bhandary**
