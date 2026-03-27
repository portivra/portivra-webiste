import { Inter, Poppins } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

// Configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Portivra - Your Trusted Partner for Business Compliance",
  description:
    "Professional company registration, GST filing, PF, ESI, and all tax-related services with expert guidance.",
  keywords:
    "company registration, GST filing, PF registration, ESI registration, tax filing, business compliance, Portivra",
  authors: [{ name: "Portivra", url: "https://portivra.com" }],

  robots: "index, follow",
  openGraph: {
    title: "Portivra - Business Compliance Made Easy",
    description:
      "Get expert assistance for company registration, GST filing, PF, ESI, and all tax-related services.",
    url: "https://portivra.com",
    siteName: "Portivra",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portivra - Business Compliance Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portivra - Business Compliance Made Easy",
    description:
      "Get expert assistance for company registration, GST filing, PF, ESI, and all tax-related services.",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  // manifest: "/manifest.json",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#6366F1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Portivra" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
