import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO & Open Graph metadata
export const metadata: Metadata = {
  title: "SheComposites | FRP Solutions for Construction & Industry",
  description: "SheComposites (SREE HANUMAT ENTERPRISES Composites) provides high-quality Fiber Reinforced Polymer (FRP) solutions for construction, infrastructure, and industrial applications.",
  keywords: [
    "FRP",
    "Fiber Reinforced Polymer",
    "FRP Products",
    "Construction Materials",
    "Corrosion Resistant Materials",
    "SheComposites",
    "Industrial FRP Solutions",
  ],
  authors: [{ name: "SheComposites", url: "https://shecomposites.com" }],
  creator: "SheComposites",
  publisher: "SheComposites",
  openGraph: {
    title: "SheComposites | FRP Solutions for Construction & Industry",
    description:
      "Providing high-quality FRP solutions for construction, infrastructure, and industrial applications.",
    url: "https://shecomposites.com",
    siteName: "SheComposites",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg",
        width: 1200,
        height: 630,
        alt: "SheComposites FRP Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SheComposites | FRP Solutions for Construction & Industry",
    description:
      "Providing high-quality FRP solutions for construction, infrastructure, and industrial applications.",
    images: [
      "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg",
    ],
    creator: "@SheComposites",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO: structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SheComposites",
              url: "https://shecomposites.com",
              logo: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755076548/production/completed/zro6ixqe91unqsietma1.jpg",
              sameAs: [
                "https://www.linkedin.com/company/shecomposites",
                "https://www.facebook.com/shecomposites",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91 9471949455",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-[80px]">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
