import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { Crimson_Text } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "The Shaping of a Hero: José Rizal's Character Development",
  description:
    "An academic essay exploring the biological, environmental, and experiential factors that shaped José Rizal as a national hero of the Philippines.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-serif ${GeistSans.variable} ${crimsonText.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
