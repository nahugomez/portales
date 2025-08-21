import { Ubuntu, Ubuntu_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { Providers } from "@/components/providers"

const fontSans = Ubuntu({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ['300', '400', '500', '700'],
})

const fontMono = Ubuntu_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ['400', '700'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
