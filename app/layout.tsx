import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Viku's Portfolio",
  description: "My personal portfolio",
  icons: {
    icon: "/icon.jpg", // /public path
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  )
}
