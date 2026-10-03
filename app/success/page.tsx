'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle } from 'lucide-react'

export default function Success() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-leaf-50 to-white">
      <Header />

      <div className="container-max py-20 flex items-center justify-center">
        <div className="text-center max-w-2xl">
          <div className="mb-8">
            <CheckCircle className="mx-auto text-leaf-600" size={80} />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Poop Troop! 🎉
          </h1>

          <p className="text-xl text-gray-600 mb-4">
            Your subscription is active and your free first month starts today!
          </p>

          <div className="bg-leaf-50 border-2 border-leaf-600 rounded-lg p-8 mb-8 text-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-leaf-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Check Your Email</p>
                  <p className="text-gray-600">
                    We've sent you a confirmation and details about getting started.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-leaf-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Wait for Our Call</p>
                  <p className="text-gray-600">
                    We'll call to confirm your service schedule and answer any questions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-leaf-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Enjoy Your Clean Yard</p>
                  <p className="text-gray-600">
                    On your first service day, we'll arrive on time and handle everything.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-8">
            Have questions in the meantime?{' '}
            <Link href="/contact" className="text-leaf-600 font-semibold hover:underline">
              Contact us
            </Link>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dashboard" className="btn-primary">
              Go to My Dashboard
            </Link>
            <Link href="/" className="btn-secondary">
              Return to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
