# Medicare Plus Landing Page V2

## Project Overview

This is a production-ready, single-page application (SPA) landing page for a medical weight loss program targeting GLP-1 medication users (Ozempic/Wegovy). The application presents a comprehensive, doctor-led weight loss program with integrated endocrinology, psychology, nutrition, and fitness support.

**Key Characteristics:**
- Professional medical landing page with conversion-optimized design
- 14 distinct sections presenting program features, testimonials, FAQs, and contact forms
- Built for confidentiality, credibility, and trust (medical context)
- Fully responsive with mobile-first design approach
- Production-ready with form validation, error handling, and accessibility features

## Tech Stack

### Core Framework
- **React 18.3.1** - Component-based UI framework
- **TypeScript 5.5.3** - Type-safe development with strict mode enabled
- **Vite 5.4.2** - Modern build tool and development server

### Styling & Design
- **Tailwind CSS 3.4.1** - Utility-first CSS framework with responsive utilities
- **PostCSS 8.4.35** + **Autoprefixer 10.4.18** - CSS processing
- **Custom Design System** - Extended Tailwind configuration with:
  - Standardized color palette (consistent hex colors across all sections)
  - Responsive typography using Tailwind's responsive classes
  - Custom animations (fade-in, slide-up, scale-in, pulse-gentle, aurora)
  - Custom shadows (soft, soft-lg, button-3d variants)

### UI Components & Icons
- **Lucide React 0.344.0** - Icon library (Shield, Users, Lock, etc.)
- Custom component library (Button, Card, Section wrappers)

### Backend Integration
- **@supabase/supabase-js 2.57.4** - Database/backend integration (dependency present, not actively used)
- **Webhook integration** - Form submissions via environment-configured webhook URL

### Development Tools
- **ESLint 9.9.1** - Code linting with TypeScript ESLint
- **React Hooks ESLint Plugin** - React-specific linting
- **React Refresh Plugin** - Fast refresh during development

## Project Architecture

### High-Level Structure
```
Landing Page (App.tsx)
├── 14 Section Components (Hero, Problem, Bridge, Program, etc.)
├── Reusable UI Components (Button, Card, Section)
├── Custom Hook (useScrollAnimation)
└── Scroll-to-Top Button
```

### Component Hierarchy

**3-Tier Architecture:**

1. **Base Components** (`/src/components/`)
   - `Button.tsx` - Reusable button with primary/secondary variants
   - `Card.tsx` - Reusable card with default/teal/elevated variants
   - `Section.tsx` - Section wrapper with background variants

2. **Section Components** (`/src/components/sections/`)
   - 14 specialized sections, each self-contained
   - Each section uses base components and scroll animations
   - Sections are imported and rendered in sequence in App.tsx

3. **Application Shell** (`/src/`)
   - `App.tsx` - Main orchestrator component
   - `main.tsx` - React root entry point
   - `index.css` - Global styles and Tailwind imports

### Key Sections (in order)

1. **HeroSection** - Main headline, value proposition, CTAs
2. **ProblemTruthSection** - Problem awareness (medication relapse concerns)
3. **BridgeSection** - Transition from problem to solution
4. **ProgramSection** - 4-specialist team overview
5. **ComparisonSection** - Program vs alternatives comparison
6. **TimelineSection** - Program timeline/journey
7. **TeamSection** - Medical team credentials
8. **ScienceSection** - Evidence and research backing
9. **WhoSection** - Ideal customer profile (who it's for/not for)
10. **TestimonialsSection** - Social proof with carousel
11. **FAQSection** - Common questions accordion
12. **CTASection** - Final call-to-action
13. **ContactSection** - Consultation booking form
14. **Footer** - Company info and links

### Data Flow

```
User Interaction
    ↓
Form Input (ContactSection)
    ↓
Client-side Validation
    ↓
POST to Webhook (env.VITE_WEBHOOK_URL)
    ↓
Success/Error State Display
```

### Scroll Animation Pattern

Every section uses the `useScrollAnimation` hook:
```typescript
const { ref, isVisible } = useScrollAnimation();
// Applied to section wrapper div
// Triggers fade-in/slide-up on scroll into view
```

## Directory Structure

```
medicare-plus-landing-page-v2/
├── .bolt/                        # Bolt.new configuration
│   ├── config.json              # Bolt config
│   └── prompt                   # Design instructions
├── src/
│   ├── components/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Card.tsx             # Reusable card component
│   │   ├── Section.tsx          # Section wrapper component
│   │   └── sections/            # Page section components
│   │       ├── HeroSection.tsx
│   │       ├── ProblemTruthSection.tsx
│   │       ├── BridgeSection.tsx
│   │       ├── ProgramSection.tsx
│   │       ├── ComparisonSection.tsx
│   │       ├── TimelineSection.tsx
│   │       ├── TeamSection.tsx
│   │       ├── ScienceSection.tsx
│   │       ├── WhoSection.tsx
│   │       ├── TestimonialsSection.tsx
│   │       ├── FAQSection.tsx
│   │       ├── CTASection.tsx
│   │       ├── ContactSection.tsx
│   │       └── Footer.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.tsx  # Intersection Observer hook
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # React entry point
│   ├── index.css                # Global styles + Tailwind
│   └── vite-env.d.ts           # Vite TypeScript declarations
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind customization
├── tsconfig.json               # TypeScript base config
├── tsconfig.app.json           # App-specific TS config
├── tsconfig.node.json          # Node-specific TS config
├── eslint.config.js            # ESLint configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                    # Project readme (minimal)
```

### Key Directories Explained

- **`/src/components/sections/`** - 14 section components (~1,544 total lines)
  - Each section is self-contained with its own layout and content
  - All follow the same pattern: imports → component → useScrollAnimation → JSX
  
- **`/src/components/`** - Base reusable components
  - Button: 2 variants (primary, secondary) with icon support
  - Card: 3 variants (default, teal, elevated) with hover effects
  - Section: 3 background variants (default, gradient, silver)
  
- **`/src/hooks/`** - Custom React hooks
  - `useScrollAnimation`: Intersection Observer for scroll-triggered animations

## Build & Development Commands

### Development
```bash
npm run dev
# Starts Vite dev server with hot module replacement
# Default: http://localhost:5173
```

### Production Build
```bash
npm run build
# 1. Runs TypeScript compiler (tsc) to check types
# 2. Builds optimized production bundle with Vite
# Output: /dist directory
```

### Preview Production Build
```bash
npm run preview
# Serves the production build locally for testing
# Useful for verifying build before deployment
```

### Type Checking
```bash
npm run typecheck
# Runs TypeScript compiler in noEmit mode
# Checks for type errors without generating output
# Uses tsconfig.app.json configuration
```

### Linting
```bash
npm run lint
# Runs ESLint on all TypeScript/TSX files
# Checks for code quality and React-specific issues
```

### Common Workflows

**Development workflow:**
```bash
npm install        # Install dependencies
npm run dev        # Start dev server
```

**Pre-deployment workflow:**
```bash
npm run typecheck  # Check types
npm run lint       # Check code quality
npm run build      # Build for production
npm run preview    # Test production build locally
```

## Configuration Files

### TypeScript Configuration

**Three-file setup:**
1. `tsconfig.json` - Base config, references app and node configs
2. `tsconfig.app.json` - Application code config (strict mode, ES2020, bundler resolution)
3. `tsconfig.node.json` - Node/build tools config (Vite, etc.)

**Key settings:**
- Strict mode enabled
- JSX: react-jsx (new JSX transform)
- Module: ESNext with bundler resolution
- Unused locals/parameters flagged as errors

### Vite Configuration

Simple setup:
```typescript
plugins: [react()]
optimizeDeps: { exclude: ['lucide-react'] }
```

**Why exclude lucide-react?**
- Prevents Vite from pre-bundling lucide-react
- Improves compatibility with the icon library's tree-shaking

### Tailwind Configuration

**Extensive customization:**
- **Colors**: Extended color palette (accent-blue, accent-green, accent-purple, accent-terracotta)
- **Fonts**: Inter from Google Fonts
- **Typography**: Responsive text sizes using Tailwind utilities (`text-3xl`, `md:text-5xl`, etc.)
- **Shadows**: Soft, soft-lg, button-3d variants with hover states
- **Animations**: fade-in, slide-up, scale-in, pulse-gentle, slide-left, aurora
- **Utilities**: Text gradients, soft gradients, animation delays (200ms, 400ms, 600ms)

### ESLint Configuration

Modern flat config format:
- TypeScript ESLint with recommended rules
- React Hooks plugin with recommended rules
- React Refresh plugin for HMR compatibility
- Targets: `**/*.{ts,tsx}`
- Ignores: `dist/`

## Patterns & Conventions

### Component Patterns

**1. Typed Functional Components**
```typescript
export const ComponentName: React.FC = () => {
  // Component logic
};

// Or with props:
interface ComponentProps {
  // Props definition
}
export const ComponentName: React.FC<ComponentProps> = ({ prop1, prop2 }) => {
  // Component logic
};
```

**2. Scroll Animation Pattern**
```typescript
const { ref, isVisible } = useScrollAnimation();

return (
  <Section>
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Content */}
    </div>
  </Section>
);
```

**3. Navigation Pattern**
```typescript
const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};

<Button onClick={scrollToContact}>Book Consultation</Button>
```

### Styling Patterns

**1. Standardized Color Palette (Consistent Across All Sections)**

The entire landing page uses a unified color system for consistency:

```typescript
// Text Colors
Primary Heading: #1A1A1A (dark gray, nearly black)
Primary Accent: #1C4E80 (clinical blue - for highlights and interactive elements)
Body Text: #2E445B (muted blue-gray)
Light Text: #2E445B/70 (70% opacity for subtle text)

// Background Colors
Primary Background: #F9FBFC (very light blue-gray)
Card Background: white
Secondary Background: #F2F6F8 (light gray-blue for subtle sections)

// Interactive Colors
Primary Button: #C89F65 (warm gold)
Button Hover: #B1814D (darker gold)
Secondary Button Border: #1C4E80 (clinical blue)
Focus Ring: #1C4E80 (clinical blue)

// Accent Colors for Specific Elements
Success/Positive: #10B981 (emerald green) or green-500
Warning/Negative: red-500
Science/Gold Accent: #C89F65 (warm gold - used in ScienceSection)

// Borders & Dividers
Default Border: gray-200
Light Border: gray-100
```

**Usage Examples:**
```typescript
// Headings
<h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A]">
  Main Heading <span className="text-[#1C4E80]">Highlighted</span>
</h2>

// Body Text
<p className="text-base sm:text-lg text-[#2E445B]">Body content</p>

// Backgrounds
<div className="bg-[#F9FBFC]">Section background</div>
<div className="bg-gradient-to-r from-[#F9FBFC] to-[#F2F6F8]">Gradient</div>

// Interactive Elements
<div className="border-[#1C4E80] hover:text-[#1C4E80]">Link</div>
```

**2. Responsive Typography System**

All sections use Tailwind's responsive text utilities:

```typescript
// Headlines (Large)
text-3xl md:text-5xl           // H1/H2 level
text-4xl sm:text-5xl lg:text-6xl  // Hero headlines

// Subheadlines
text-xl md:text-2xl            // H3 level
text-lg sm:text-xl lg:text-2xl // H2 subheadings

// Body Text
text-base sm:text-lg           // Standard body copy
text-sm                        // Small text, captions

// Utilities
text-xs                        // Fine print, disclaimers
```

**3. Component Variants**

```typescript
// Button Component
<Button variant="primary">Primary CTA</Button>  // Gold button
<Button variant="secondary">Secondary</Button>  // White with blue border

// Card Component
<Card variant="default">Standard card</Card>    // White with soft shadow
<Card variant="teal">Accent card</Card>        // Gradient background
<Card variant="elevated">Raised card</Card>    // Enhanced shadow

// Hover States
hover:text-[#1C4E80]          // Interactive text
hover:bg-[#F2F6F8]            // Subtle background
hover:border-[#1C4E80]/20     // Interactive borders
```

**4. Responsive Design**
- Mobile-first approach (base styles, then `sm:`, `md:`, `lg:`, `xl:` breakpoints)
- Grid layouts: `grid lg:grid-cols-2` for desktop two-column layouts
- Responsive typography: `text-base sm:text-lg lg:text-xl`
- Responsive spacing: `py-16 md:py-24`, `gap-6 lg:gap-12`
- Responsive images: `h-[340px] sm:h-[440px] md:h-[520px] lg:h-[600px]`

**5. Animation & Transitions**
- Custom animation classes with delays:
  - `animation-delay-200` - 0.2s delay
  - `animation-delay-400` - 0.4s delay
  - `animation-delay-600` - 0.6s delay
- Standard transitions: `transition-all duration-300`
- Scroll animations: `duration-1000` for section reveals

### Form Handling Pattern

**ContactSection demonstrates:**
1. Local state management with `useState`
2. Controlled inputs with `onChange` handlers
3. Client-side validation before submission
4. Async webhook submission with `fetch`
5. Loading/success/error state management
6. Error display with field-level validation
7. Form reset on success

**Environment Variables:**
```typescript
const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
```

### Component Composition

**Reusable components accept variants:**
```typescript
// Button
<Button variant="primary" onClick={handler}>Text</Button>
<Button variant="secondary" icon={IconComponent}>Text</Button>

// Card
<Card variant="default" hover={true}>Content</Card>
<Card variant="teal">Content</Card>
<Card variant="elevated" hover={false}>Content</Card>

// Section
<Section id="section-id" background="gradient">Content</Section>
```

### Animation Conventions

**Standard animation classes:**
- `animate-fade-in` - Fade in over 0.6s
- `animate-slide-up` - Slide up from below over 0.6s
- `animate-scale-in` - Scale from 95% to 100% over 0.5s
- `animate-pulse-gentle` - Subtle pulsing effect (infinite loop)

**Staggered animations:**
```typescript
{items.map((item, index) => (
  <div className={`animate-fade-in animation-delay-${index * 200}`}>
    {/* Content */}
  </div>
))}
```

## Design Philosophy

Based on `.bolt/prompt`:
- **Beautiful, not cookie cutter** - Custom design over templates
- **Production-worthy** - Fully featured, not MVP
- **Tailwind + Lucide only** - Minimal dependencies unless necessary
- **Icons for logos** - Use Lucide React icons instead of image assets
- **Consistent & Professional** - Unified color palette and responsive design across all screen sizes

### Color Consistency Implementation (Latest Update)

The landing page underwent a comprehensive color standardization effort to ensure visual consistency across all 14 sections. Key improvements:

**1. Unified Color Palette**
- Replaced all generic Tailwind color classes with explicit hex values
- Established hero section colors as the standard for the entire page
- Eliminated color inconsistencies across sections

**2. Standardized Components**
- All text now uses: `#1A1A1A` (headings), `#1C4E80` (accents), `#2E445B` (body)
- All backgrounds use: `#F9FBFC`, `#F2F6F8`, or white
- All borders use: `gray-200` or `gray-100`
- All interactive elements use clinical blue (`#1C4E80`) for consistency

**3. Responsive Typography**
- Converted fixed pixel values to Tailwind responsive utilities
- Ensures proper scaling across mobile, tablet, laptop, and desktop screens
- Example: `text-3xl md:text-5xl` instead of fixed `text-[48px]`

**4. Component Updates**
- Button: Consistent gold primary (`#C89F65`) and blue-bordered secondary
- Card: Unified hover states with clinical blue accent
- All gradients standardized to use the core color palette

**Before vs After:**
```typescript
// Before (inconsistent)
<h2 className="text-primary">              // Generic class
<p className="text-secondary">             // Generic class
<div className="bg-metallic-silver">       // Non-standard color
<span className="text-accent-teal">        // Different accent

// After (consistent)
<h2 className="text-[#1A1A1A]">           // Explicit hex
<p className="text-[#2E445B]">            // Explicit hex
<div className="bg-[#F9FBFC]">            // Standard background
<span className="text-[#1C4E80]">         // Standard accent
```

This ensures the landing page maintains a professional, cohesive appearance across all devices while preserving the medical, trustworthy aesthetic.

## Environment Variables

Required for production:
```bash
VITE_WEBHOOK_URL=https://your-webhook-endpoint.com
```

Used in `ContactSection.tsx` for form submissions.

## Notes & Considerations

### Supabase Integration
- Dependency is included (`@supabase/supabase-js`)
- Not actively used in current implementation
- Likely planned for future backend integration
- Currently using webhook for form submissions

### Image Placeholders
- Hero section contains placeholder text for images
- Images should be added to `/public` directory
- Update component imports to reference public assets

### Accessibility
- Semantic HTML elements (`<section>`, `<button>`, etc.)
- ARIA labels on interactive elements (`aria-label="Scroll to top"`)
- Keyboard navigation supported (buttons, form inputs)
- Focus states on interactive elements
- Form validation with error messages

### Performance Optimizations
- Intersection Observer for scroll animations (non-blocking)
- Lucide icons excluded from Vite pre-bundling
- Lazy state updates (only animate on scroll into view)
- CSS transitions over JavaScript animations
- Optimized production build with Vite

### Medical/Healthcare Context
- Strong emphasis on confidentiality (Lock icons, privacy messaging)
- Doctor-supervised/science-backed messaging
- Professional medical terminology
- HIPAA-conscious language (though not HIPAA compliant without backend)
- Founder's pricing/early access messaging

## Future Development Suggestions

1. **Backend Integration**: Implement Supabase for form storage
2. **Image Assets**: Replace placeholders with professional medical imagery
3. **Analytics**: Add Google Analytics or similar tracking
4. **SEO**: Add meta tags, Open Graph tags, schema markup
5. **A/B Testing**: Test different headlines, CTAs, section orders
6. **Content Management**: Consider CMS integration for non-technical content updates
7. **Multi-page**: Convert to multi-page site with routing if needed
8. **Blog/Resources**: Add educational content section
9. **Testimonials**: Connect to real testimonial database
10. **Privacy Policy**: Add legal pages (Privacy, Terms, HIPAA notice)

---

**Project Generated With:** Bolt.new (AI-powered web development tool)
**Last Updated:** 2025-10-31 (Color consistency & responsive design implementation)
