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

// Base URL for canonical references
const BASE_URL = "https://shecomposites.com";

// Advanced SEO & Open Graph metadata
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "SheComposites | Premium FRP Solutions for Construction & Industry",
    template: "%s | SheComposites (Shree Hanumant Enterprises)",
  },
  description: "SheComposites, a Shree Hanumant Enterprises company, manufactures high-performance Fiber Reinforced Polymer (FRP) products including cable trays, rebar, and structural components for corrosion-resistant construction solutions.",
  keywords: [
    "FRP manufacturer India",
    "Fiber Reinforced Polymer products",
    "FRP cable trays",
    "FRP rebar",
    "corrosion resistant materials",
    "composite construction materials",
    "industrial FRP solutions",
    "Shree Hanumant Enterprises",
    "FRP Bihar",
    "FRP Patna",
  ],
  authors: [{ 
    name: "SheComposites", 
    url: BASE_URL 
  }],
  creator: "SheComposites (Shree Hanumant Enterprises)",
  publisher: "Shree Hanumant Enterprises",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "SheComposites | Industrial-Grade FRP Solutions",
    description: "Manufacturers of premium Fiber Reinforced Polymer products for construction, infrastructure, and industrial applications since 2025.",
    url: BASE_URL,
    siteName: "SheComposites (Shree Hanumant Enterprises)",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png",
        width: 1200,
        height: 630,
        alt: "SheComposites FRP Manufacturing Solutions",
      },
    ],
    emails: ["contact@shecomposites.com"],
    phoneNumbers: ["+919471949455"],
    countryName: "India",
  },
  twitter: {
    card: "summary_large_image",
    site: "@SheComposites",
    creator: "@ShreeHanumantEnt",
    title: "SheComposites | FRP Manufacturing Experts",
    description: "Pioneering Fiber Reinforced Polymer technology under Shree Hanumant Enterprises - Corrosion-resistant solutions for modern infrastructure",
    images: {
      url: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png",
      alt: "SheComposites FRP Products",
      width: 1200,
      height: 630,
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  //   yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  // },
  category: "Construction Materials Manufacturer",
  // other: {
  //   "facebook-domain-verification": "YOUR_FACEBOOK_DOMAIN_VERIFICATION_CODE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>

        <link rel="manifest" href="/site.webmanifest" />

        {/* Canonical URL */}
        <link rel="canonical" href={BASE_URL} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // Organization Schema
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": `${BASE_URL}#organization`,
                name: "SheComposites",
                url: BASE_URL,
                logo: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093424/logo/n9cvtqgmfwfqnpqr9hne.png",
                description: "Manufacturer of Fiber Reinforced Polymer (FRP) construction materials",
                foundingDate: "2025",
                parentOrganization: {
                  "@type": "Organization",
                  name: "Shree Hanumant Enterprises"
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "In front of Patna Old Museum, Budh Marg",
                  addressLocality: "Patna",
                  addressRegion: "Bihar",
                  postalCode: "800001",
                  addressCountry: "IN"
                },
                contactPoint: [
                  {
                    "@type": "ContactPoint",
                    telephone: "+919471949455",
                    contactType: "customer service",
                    areaServed: ["IN"],
                    availableLanguage: ["English", "Hindi"]
                  }
                ],
                // sameAs: [
                //   "https://www.linkedin.com/company/shecomposites",
                //   "https://www.facebook.com/shecomposites"
                // ]
              },
              // Local Business Schema
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": `${BASE_URL}#localbusiness`,
                parentOrganization: `${BASE_URL}#organization`,
                name: "SheComposites Manufacturing Unit",
                image: "https://res.cloudinary.com/dwaa3gc2w/image/upload/v1755093726/frp/efgcglxhw9epdcjdsawi.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Village-Chakwath, P.S-Bihiya",
                  addressLocality: "Bhojpur",
                  addressRegion: "Bihar",
                  postalCode: "802183",
                  addressCountry: "IN"
                },
                telephone: "+919471949455",
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  opens: "10:00",
                  closes: "17:00"
                }
              }
            ])
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