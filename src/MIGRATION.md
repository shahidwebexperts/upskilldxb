# Next.js Migration Guide

This project has been successfully migrated from a React app to Next.js 15 with the App Router.

## Key Changes

### 1. Project Structure
- ✅ Created `app/` directory with Next.js App Router structure
- ✅ Moved `App.tsx` → `app/page.tsx`
- ✅ Created `app/layout.tsx` for root layout and metadata
- ✅ Moved `styles/globals.css` → `app/globals.css`

### 2. Configuration Files
- ✅ Added `next.config.js` with image domain configuration
- ✅ Added `tsconfig.json` with Next.js path aliases (@/*)
- ✅ Added `package.json` with Next.js dependencies
- ✅ Added `.gitignore` for Next.js

### 3. Component Updates
Components requiring client-side features have been marked with `'use client'`:
- ✅ `UpskillHero.tsx` - Form with useState
- ✅ `CourseCurriculum.tsx` - Tab switching with useState
- ✅ `PlacementTestimonials.tsx` - Carousel with useState
- ✅ `WhyUpskillCertification.tsx` - Interactive elements

### 4. Import Path Updates
All imports now use the `@/` alias:
- `'./components/...'` → `'@/components/...'`
- `'./ui/...'` → `'@/components/ui/...'`

### 5. Image Optimization
- Next.js image domains configured for Unsplash
- Figma asset imports preserved

## File Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page (main landing page)
│   └── globals.css         # Global styles (Tailwind)
├── components/             # All React components
│   ├── ui/                # Shadcn/Radix UI components
│   └── figma/             # Figma-specific components
├── public/                # Static assets (if needed)
├── next.config.js         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies
└── .gitignore            # Git ignore rules
```

## Running the Project

### Development
```bash
npm install
npm run dev
```
Visit `http://localhost:3000`

### Production Build
```bash
npm run build
npm start
```

## What Works Out of the Box

✅ All components render correctly
✅ Client-side interactivity (forms, tabs, carousels)
✅ Tailwind CSS styling
✅ TypeScript type checking
✅ Image optimization for external images
✅ SEO metadata
✅ Responsive design

## Notes

- Server Components are used by default (better performance)
- Only components with interactivity use `'use client'`
- All UI components from Shadcn/Radix UI work seamlessly
- Figma asset imports are preserved
- No changes needed to existing component logic

## Next Steps (Optional)

- [ ] Add more pages using the App Router
- [ ] Implement API routes in `app/api/`
- [ ] Add loading states with `loading.tsx`
- [ ] Add error handling with `error.tsx`
- [ ] Deploy to Vercel or other hosting platform
