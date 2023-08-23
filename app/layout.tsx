import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pocektsub',
  description: 'Manage your payments with ease.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
