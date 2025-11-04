# Voltry Website

Modern, responsive website for Voltry - AI-powered power quality monitoring and forecasting.

## Features

- **Modern Stack**: Built with Astro 5.2, the latest web framework
- **CMS-Powered**: Decap CMS for easy content management (no coding required)
- **Design System**: Golden ratio spacing, custom CSS with elevation layers and sophisticated color palette
- **Light/Dark Mode**: Automatic theme switching based on user preference
- **Vertical Hero Slider**: Auto-scrolling image carousel with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Static-first with minimal JavaScript
- **SEO Optimized**: Semantic HTML with proper meta tags
- **Accessible**: WCAG compliant with proper ARIA labels
- **Form Integration**: Netlify Forms with Google Sheets integration via Zapier

## Tech Stack

- **Framework**: [Astro 5.2](https://astro.build/)
- **CMS**: [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
- **Styling**: Modern CSS with custom properties and golden ratio design system
- **Deployment**: [Netlify](https://netlify.com)
- **Forms**: Netlify Forms + Zapier → Google Sheets
- **Images**: Cloudinary CDN for branding, Unsplash for placeholder images
- **TypeScript**: Full type safety with Astro's content collections

## Project Structure

```
/
├── docs/                    # 📚 Documentation
│   ├── CMS_SETUP.md        # Decap CMS setup guide
│   ├── CMS_WORKFLOW.md     # Editorial workflow & deploy previews
│   └── FORM_INTEGRATION.md # Google Sheets form integration guide
├── public/                  # Static assets
│   ├── admin/              # Decap CMS admin interface
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   └── VerticalSlider.astro
│   ├── content/            # CMS-managed content
│   │   ├── config.ts       # Content collection schemas
│   │   ├── global/         # Site-wide settings (nav, footer)
│   │   ├── pages/          # Page content (JSON)
│   │   └── testimonials/   # Customer testimonials (Markdown)
│   ├── layouts/            # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/              # File-based routing
│   │   ├── index.astro
│   │   ├── product-0.astro
│   │   ├── product-1.astro
│   │   └── contact.astro
│   └── styles/             # Global styles
│       └── global.css
├── astro.config.mjs        # Astro configuration
├── netlify.toml            # Netlify deployment config
├── tsconfig.json           # TypeScript configuration
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Design System

### Color Palette

- **Primary**: Purple (#9333ea) - Brand color for CTAs and accents
- **Accent**: Lime (#84cc16) - Secondary accent for highlights
- **Neutrals**: Gray scale from 50-950 for backgrounds and text
- **Success**: Green (#10b981) for checkmarks and positive indicators

### Elevation System

Uses a 5-level elevation system inspired by Material Design 3.0:

- **Level 0**: No shadow (flat surfaces)
- **Level 1**: Subtle lift for cards
- **Level 2**: Standard elevation for interactive elements
- **Level 3**: Hover states
- **Level 4**: Modals and overlays
- **Level 5**: Maximum elevation for critical UI

### Typography

- **Font**: System font stack for optimal performance
- **Scale**: Tailwind-inspired size scale (xs to 7xl)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## Pages

### Homepage (/)
- Hero section with CTAs
- Problem-Solution-Proof cards
- Features grid
- Pricing table
- Customer testimonials
- Social proof stats
- Final CTA

### Product 0 (/product-0)
- Free tier features
- Detailed feature breakdowns
- ROI calculator section
- Upgrade path to Product 1

### Product 1 (/product-1)
- AI forecasting features
- Federated learning explainer
- Product comparison
- Demo section

### Contact (/contact)
- Contact form (Netlify Forms)
- Contact information
- FAQ section

## Deployment

The site is configured for deployment on Netlify:

1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Environment: Node.js 20

### CMS Access

After deployment, access the CMS at: `https://your-site.netlify.app/admin/`

See `docs/CMS_SETUP.md` for authentication setup.

### Form Integration

Forms are handled by Netlify Forms and can be integrated with Google Sheets via Zapier.

See `docs/FORM_INTEGRATION.md` for complete setup instructions.

## Development

### Adding a New Page

1. Create a new `.astro` file in `src/pages/`
2. Use the `BaseLayout` component
3. Import and use components as needed

### Modifying Styles

Global styles are in `src/styles/global.css`. Component-specific styles use scoped `<style>` blocks in each `.astro` file.

### Theme Colors

To change theme colors, modify the CSS custom properties in `src/styles/global.css`:

- Light mode: `:root` selector
- Dark mode: `[data-theme="dark"]` selector

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Lighthouse Score: 95+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Total Bundle Size: < 100KB (before images)

## License

Proprietary - All rights reserved

## Contact

For questions or support, contact: support@voltry.com
