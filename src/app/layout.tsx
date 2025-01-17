import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const fontSans = GeistSans;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Embers Marketing",
    default: "Embers Marketing | Creative Digital Solutions",
  },
  description: "Transform your online presence with engaging videos, photos, and designs that tell your story and connect with your ideal customers.",
  keywords: ["digital marketing", "web design", "video production", "brand storytelling"],
  metadataBase: new URL("https://embers.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://embers.com",
    title: "Embers Marketing | Creative Digital Solutions",
    description: "Transform your online presence with engaging videos, photos, and designs that tell your story and connect with your ideal customers.",
    siteName: "Embers Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Embers Marketing | Creative Digital Solutions",
    description: "Transform your online presence with engaging videos, photos, and designs that tell your story and connect with your ideal customers.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={cn(
        "scroll-smooth",
        geist.variable
      )}
      suppressHydrationWarning
    >
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <div className="flex-1">
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
