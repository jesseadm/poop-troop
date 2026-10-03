'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-gray-900">
            <span className="text-3xl">💩</span>
            Poop Troop
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 transition">
              Pricing
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition">
              My Account
            </Link>
            <Link href="/subscribe" className="btn-primary">
              Subscribe
            </Link>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-4">
            <Link
              href="#how-it-works"
              className="block text-gray-600 hover:text-gray-900 transition"
              onClick={() => setIsOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="/#pricing"
              className="block text-gray-600 hover:text-gray-900 transition"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="block text-gray-600 hover:text-gray-900 transition"
              onClick={() => setIsOpen(false)}
            >
              My Account
            </Link>
            <Link
              href="/subscribe"
              className="block btn-primary text-center"
              onClick={() => setIsOpen(false)}
            >
              Subscribe
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
