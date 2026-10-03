import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Poop Troop | Kids Poop Scooping & Compost Collection',
  description: 'Professional poop scooping and compost collection service for pet owners. Monthly subscription plans available.',
  icons: {
    icon: '💩',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  )
}
