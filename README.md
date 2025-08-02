# Assess.ng - AI-Powered Assessment Platform

A modern, responsive Next.js application for talent assessment and recruitment management, featuring dynamic content from Strapi CMS.

## 🚀 Features

- **Dynamic Content Management** - Content fetched from Strapi headless CMS
- **Modern UI/UX** - Built with Tailwind CSS and Framer Motion animations
- **Responsive Design** - Mobile-first approach with responsive components
- **TypeScript** - Full type safety throughout the application
- **Performance Optimized** - Next.js 13+ with App Router and Image optimization
- **Component Library** - Comprehensive UI components using Radix UI primitives

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/nolimit-buzz/assess-landing-page.git]
   cd assess_index
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_API_URL=your_strapi_cms_url
   NEXT_PUBLIC_API_TOKEN=your_strapi_api_token
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
assess_index/
├── app/                    # Next.js 13+ App Router
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   └── ui/                # UI components
│       ├── navigation.tsx
│       ├── hero-section.tsx
│       ├── assessment-types.tsx
│       ├── ai-cv-spotlight.tsx
│       ├── dashboard-showcase.tsx
│       ├── process-section.tsx
│       ├── benefits-section.tsx
│       ├── faq-section.tsx
│       ├── cta-section.tsx
│       ├── footer.tsx
│       └── [other-ui-components]
├── lib/
│   └── api.ts             # API utilities and types
├── public/                # Static assets
├── hooks/                 # Custom React hooks
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Colors
- **Brand Green**: `#1CC47E`
- **Brand Navy**: `#032B44`
- **Background**: White and gradient variations
- **Text**: Navy for headings, gray for body text

### Typography
- **Headings**: Bold, navy color, responsive sizing
- **Body Text**: Regular weight, gray color, optimized readability
- **CTAs**: Bold, brand colors

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Brand colors, hover states, consistent styling
- **Icons**: Lucide React icons with consistent sizing

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS with custom configuration:
- Custom brand colors
- Responsive breakpoints
- Animation utilities
- Custom gradients

### TypeScript
- Strict type checking enabled
- Custom type definitions for API responses
- Component prop interfaces

### Next.js
- App Router (Next.js 13+)
- Image optimization
- Server-side rendering
- API routes (if needed)

## 📱 Pages

### Homepage (`/`)
- Hero section with dynamic content
- Assessment types showcase
- AI CV ranking features
- Platform dashboard preview
- Setup process
- Benefits and impact
- FAQ section
- Call-to-action

### About Page (`/about`)
- Company overview
- Industry collaboration
- Services showcase
- Features highlight
- FAQ section
- Global reach CTA

### Contact Page (`/contact`)
- Contact information
- Contact form
- Office details
- Trust indicators

## 🔌 API Integration

### Strapi CMS Setup
The application fetches content from a Strapi headless CMS:

1. **API Endpoint**: `${NEXT_PUBLIC_API_URL}/api/home-page?populate=*`
2. **Authentication**: Bearer token via `NEXT_PUBLIC_API_TOKEN`
3. **Data Structure**: Comprehensive JSON structure for all page content

### Environment Variables
```env
NEXT_PUBLIC_API_URL=https://your-strapi-instance.com
NEXT_PUBLIC_API_TOKEN=your-api-token-here
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Additional commands
npm run type-check   # Check TypeScript types
```

## 🧪 Development

### Adding New Components
1. Create component in `components/ui/`
2. Export with proper TypeScript interfaces
3. Import and use in pages

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established design system
- Maintain responsive design principles
- Use Framer Motion for animations

### API Integration
1. Update types in `lib/api.ts`
2. Fetch data in page components
3. Pass data as props to child components

## 🔍 Troubleshooting

### Common Issues

**Environment Variables Not Loading**
- Ensure `.env.local` is in the root directory
- Restart the development server
- Check variable names match exactly

**API Connection Issues**
- Verify Strapi instance is running
- Check API token permissions
- Ensure correct API endpoint URL

**Build Errors**
- Run `npm run lint` to check for issues
- Verify all dependencies are installed
- Check TypeScript types

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
