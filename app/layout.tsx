import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "えんけん玉 - En-Kendama | Traditional Japanese Cultural Experience",
  description:
    'Experience the fusion of kendama and calligraphy with en-kendama. A unique cultural product themed around "en" - connection, fate, and relationships.',
  keywords: "kendama, calligraphy, Japanese culture, traditional toys, cultural experience, en, connection",
  authors: [{ name: "en-kendama" }],
  openGraph: {
    title: "えんけん玉 - En-Kendama",
    description: "Traditional Japanese cultural experience product",
    type: "website",
    locale: "ja_JP",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head></head>
      <body>{children}</body>
    </html>
  )
}
