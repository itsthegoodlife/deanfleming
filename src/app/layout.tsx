import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dean Fleming - Director & Developer",
  description: "Entrepreneur and software developer combining business leadership with technical expertise. Building solutions for the mortgage industry.",
  keywords: ["entrepreneur", "software developer", "DFMB", "ComfyCRM", "mortgage tools", "Dean Fleming"],
  authors: [{ name: "Dean Fleming" }],
  metadataBase: new URL('https://deanfleming.co.uk'),
  openGraph: {
    title: "Dean Fleming - Director & Developer",
    description: "Entrepreneur and software developer combining business leadership with technical expertise. Building solutions for the mortgage industry.",
    url: 'https://deanfleming.co.uk',
    siteName: 'Dean Fleming',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dean Fleming - Director & Developer",
    description: "Entrepreneur and software developer combining business leadership with technical expertise.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dean Fleming",
              "jobTitle": "Director & Developer",
              "description": "Entrepreneur and software developer combining business leadership with technical expertise. Building solutions for the mortgage industry.",
              "url": "https://deanfleming.co.uk",
              "sameAs": [
                "https://linkedin.com/in/deanfleming",
                "https://github.com/deanfleming93"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
