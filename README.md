# Hashan Eranga - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, featuring smooth animations and SEO optimization.

## 🚀 Features

- **Modern Design**: Clean, professional layout with gradient backgrounds and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Comprehensive meta tags, structured data, and performance optimization
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Professional Sections**: 
  - Hero with profile image
  - About Me
  - Technical Skills with animated progress bars
  - Professional Experience with timeline
  - Leadership & Community Impact
  - Certifications
  - Contact Information

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add your profile image**:
   - Save your profile image as `hashanEranga.png` in the `public/images/` folder
   - The image should be square (recommended: 400x400px or higher) for best results
   - Supported formats: PNG, JPG, JPEG, WebP

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to see your portfolio

## 📁 Project Structure

```
hashanerangaportfolio/
├── public/
│   └── images/
│       └── hashanEranga.png  # Your profile image goes here
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with SEO metadata
│   │   ├── page.tsx          # Main portfolio page
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Navbar.tsx        # Navigation component
│       ├── Hero.tsx          # Hero section with profile image
│       ├── About.tsx         # About section
│       ├── Skills.tsx        # Technical skills section
│       ├── Experience.tsx    # Professional experience
│       ├── Leadership.tsx    # Leadership & community work
│       ├── Certifications.tsx # Certifications section
│       ├── Contact.tsx       # Contact information
│       └── Footer.tsx        # Footer component
├── package.json
└── README.md
```

## 📝 Build Commands

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Adding Your Profile Image

**IMPORTANT**: To see your profile image in the portfolio:

1. Save your profile image as `hashanEranga.png` in the `public/images/` folder
2. Make sure the image is square and high quality (recommended: 400x400px or larger)
3. Restart the development server if it's running

The image path is already configured in the Hero component to look for `/images/hashanEranga.png`.

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Deploy automatically with every push

### Other Platforms
The project can be deployed to any platform that supports Next.js.

---

Built with ❤️ using Next.js and Tailwind CSS
