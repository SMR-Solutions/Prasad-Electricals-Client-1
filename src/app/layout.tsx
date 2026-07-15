import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Prasad Electrical Works | Best Electrician in Srinivasapura, Yelahanka, Bengaluru | 24/7 Emergency",
  description:
    "Prasad Electrical Works – Bengaluru's trusted electrician serving Srinivasapura, Yelahanka, Jakkur, Kengeri, Agrahara Layout & Kogilu Layout. Expert house wiring, switchboard installation, LED lighting, emergency electrical repairs, and commercial electrical services near RR Nagar. Call +91 91488 42696 for fast, reliable service.",
  keywords: [
    "electrician in Srinivasapura Bengaluru",
    "electrician near me Yelahanka",
    "best electrician Jakkur",
    "electrician Kengeri Bengaluru",
    "electrician Agrahara Layout",
    "electrician Kogilu Layout",
    "electrician near RR Nagar Bengaluru",
    "house wiring electrician Bengaluru",
    "emergency electrician Srinivasapura",
    "electrical repair near me Bengaluru",
    "switchboard installation Bengaluru",
    "LED light installation Yelahanka",
    "commercial electrician Bengaluru",
    "building wiring contractor Bengaluru",
    "Prasad Electrical Works",
    "electrician near YGR Signature Mall",
    "best electrical services Bengaluru Karnataka",
    "24/7 emergency electrician Bengaluru",
    "affordable electrician near me Srinivasapura",
    "certified electrician Bengaluru",
    "electrical wiring contractor near me",
    "UPS installation Bengaluru",
    "inverter installation electrician Bengaluru",
    "meter panel installation Srinivasapura",
  ].join(", "),
  openGraph: {
    title:
      "Prasad Electrical Works | Top Rated Electrician in Bengaluru",
    description:
      "Expert electrical services in Srinivasapura, Yelahanka, Jakkur, Kengeri & surrounding areas. Government certified, 24/7 emergency support. Call +91 91488 42696.",
    locale: "en_IN",
    type: "website",
    siteName: "Prasad Electrical Works",
    url: "https://prasad-electricalworks.vercel.app",
    images: [
      {
        url: "https://prasad-electricalworks.vercel.app/Logo.jpg",
        width: 800,
        height: 800,
        alt: "Prasad Electrical Works Logo - Best Electrician in Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prasad Electrical Works | Best Electrician in Bengaluru",
    description:
      "Trusted electrician in Srinivasapura, Yelahanka, Jakkur, Kengeri. Call +91 91488 42696 for 24/7 emergency electrical services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://prasad-electricalworks.vercel.app",
  },
  icons: {
    icon: "/Logo.jpg",
    apple: "/Logo.jpg",
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "12.093168;77.510469",
    ICBM: "12.093168, 77.510469",
  },
};

// JSON-LD Structured Data for Google to verify business phone number
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": "https://prasad-electricalworks.vercel.app/#business",
  name: "Prasad Electrical Works",
  alternateName: "Prasad Electrician Bengaluru",
  image: "https://prasad-electricalworks.vercel.app/Logo.jpg",
  logo: "https://prasad-electricalworks.vercel.app/Logo.jpg",
  url: "https://prasad-electricalworks.vercel.app",
  telephone: "+919148842696",
  priceRange: "₹₹",
  description:
    "Prasad Electrical Works is a government-certified electrician in Bengaluru providing expert house wiring, switchboard installation, LED lighting, emergency electrical repairs, UPS/inverter setup, and complete building wiring services across Srinivasapura, Yelahanka, Jakkur, Kengeri, Agrahara Layout, and Kogilu Layout.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "YGR Signature Mall, RR Nagar, Srinivasapura",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560064",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.093168,
    longitude: 77.510469,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Bengaluru",
      sameAs: "https://en.wikipedia.org/wiki/Bangalore",
    },
    { "@type": "Place", name: "Srinivasapura, Bengaluru" },
    { "@type": "Place", name: "Yelahanka, Bengaluru" },
    { "@type": "Place", name: "Jakkur, Bengaluru" },
    { "@type": "Place", name: "Kengeri, Bengaluru" },
    { "@type": "Place", name: "Agrahara Layout, Bengaluru" },
    { "@type": "Place", name: "Kogilu Layout, Bengaluru" },
    { "@type": "Place", name: "RR Nagar, Bengaluru" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complete Building Wiring",
          description:
            "Full building electrical wiring for new homes and commercial shops in Bengaluru",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Home Electrical Repairs",
          description:
            "Switch, socket, fan installation and electrical fault troubleshooting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Heavy-Duty Installations",
          description:
            "UPS, inverter, generator connections, digital meters, and water motor setup",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Switchboard & LED Lighting",
          description:
            "Modern switchboard installations and LED lighting upgrades",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "11",
    bestRating: "5",
    worstRating: "1",
  },
  sameAs: [
    "https://wa.me/919148842696",
  ],
};

// Additional WebSite schema for sitelinks search box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Prasad Electrical Works",
  url: "https://prasad-electricalworks.vercel.app",
  description:
    "Best electrician in Srinivasapura, Yelahanka, Jakkur, Kengeri, Bengaluru. Government certified electrical services.",
};

// BreadcrumbList schema for rich search results
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://prasad-electricalworks.vercel.app",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Electrical Services in Bengaluru",
      item: "https://prasad-electricalworks.vercel.app/#services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Service Areas",
      item: "https://prasad-electricalworks.vercel.app/#areas",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact Prasad Electrical Works",
      item: "https://prasad-electricalworks.vercel.app/#contact",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD: Local Business Schema — triggers Google phone verification */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* JSON-LD: WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        {/* JSON-LD: Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className={`${inter.className} text-slate-800 antialiased`}>
        {children}
      </body>
    </html>
  );
}
