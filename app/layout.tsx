import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navigation } from "@/components/navigation"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Nexline Auto Sales",
    template: "%s | Nexline Auto Sales"
  },
  description: "Find your perfect vehicle at Nexline Business Group",
  keywords: ["cars", "auto sales", "vehicles", "dealership", "Nexline"],
  authors: [{ name: "Nexline Business Group" }],
  creator: "Nexline Business Group",
  publisher: "Nexline Business Group",
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    // url: "https://nexline.et",
    title: "Nexline Auto Sales",
    description: "Find your perfect vehicle at Nexline Business Group",
    siteName: "Nexline Auto Sales"
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexline Auto Sales",
    description: "Find your perfect vehicle at Nexline Business Group"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navigation />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}