import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hashan Eranga - Senior Software Engineer & Tech Leader",
  description: "Senior Software Engineer at Cloud Solutions International specializing in .NET, Angular, and Cloud Architecture. IEEE Leader and Tech Innovator building tomorrow's solutions today.",
  keywords: [
    "Hashan Eranga",
    "Senior Software Engineer",
    "Full Stack Developer",
    ".NET Developer",
    "Angular Developer",
    "Cloud Architecture",
    "Azure",
    "Kubernetes",
    "Docker",
    "TypeScript",
    "C#",
    "Software Development",
    "Tech Leadership",
    "IEEE Volunteer",
    "Sri Lanka",
    "Cloud Solutions International"
  ],
  authors: [{ name: "Hashan Eranga", url: "https://hashaneranga.github.io" }],
  creator: "Hashan Eranga",
  publisher: "Hashan Eranga",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hashaneranga.github.io",
    title: "Hashan Eranga - Senior Software Engineer & Tech Leader",
    description: "Senior Software Engineer specializing in .NET, Angular, and Cloud Architecture. Building scalable enterprise solutions and leading technical teams.",
    siteName: "Hashan Eranga Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hashan Eranga - Senior Software Engineer & Tech Leader",
    description: "Senior Software Engineer specializing in .NET, Angular, and Cloud Architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://hashaneranga.github.io" />
        <meta name="theme-color" content="#0f172a" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hashan Eranga",
              "jobTitle": "Senior Software Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "Cloud Solutions International"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "LK"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "University of Peradeniya"
              },
              "knowsAbout": [
                ".NET",
                "Angular",
                "Cloud Computing",
                "Software Architecture",
                "Team Leadership"
              ],
              "sameAs": [
                "https://www.linkedin.com/in/hashan-eranga-57584b136/",
                "https://hashaneranga.github.io",
                "https://github.com/hashaneranga"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
