import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glamr - Mixed Reality Fashion Platform",
  description: "Experience the future of fashion shopping with Glamr's innovative mixed reality platform. Try on sneakers and accessories virtually, customize your style, and make informed purchase decisions.",
  keywords: ["mixed reality", "fashion", "virtual try-on", "sneakers", "accessories", "retail technology", "AR", "MR", "shopping"],
  authors: [{ name: "Glamr" }],
  creator: "Glamr",
  publisher: "Glamr",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/glamr-logo.jpg" },
      { url: "/glamr-logo.jpg", sizes: "16x16", type: "image/jpg" },
      { url: "/glamr-logo.jpg", sizes: "32x32", type: "image/jpg" },
      { url: "/glamr-logo.jpg", sizes: "192x192", type: "image/jpg" },
      { url: "/glamr-logo.jpg", sizes: "512x512", type: "image/jpg" },
    ],
    apple: [
      { url: "/glamr-logo.jpg" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    url: "https://glamr.com",
    title: "Glamr - Mixed Reality Fashion Platform",
    description: "Experience the future of fashion shopping with Glamr's innovative mixed reality platform.",
    siteName: "Glamr",
    images: [
      {
        url: "/glamr-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Glamr - Mixed Reality Fashion Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GlamrHQ",
    creator: "@GlamrHQ",
    title: "Glamr - Mixed Reality Fashion Platform",
    description: "Experience the future of fashion shopping with Glamr's innovative mixed reality platform.",
    images: ["/glamr-logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/glamr-logo.jpg" />
      </head>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
