'use client'

import { useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { CheckCircle, AlertCircle } from 'lucide-react'

const PLANS = {
  starter: {
    name: 'Starter',
    price: 15,
    frequency: 'month',
    interval: 'monthly',
    description: 'Perfect for small spaces',
    features: [
      'Monthly service',
      'Yard cleanup',
      'Email support',
      'First cleaning free',
    ],
    stripePriceId: 'price_starter_monthly',
  },
  regular: {
    name: 'Regular',
    price: 35,
    frequency: 'month',
    interval: 'bi-weekly',
    description: 'Our most requested option',
    features: [
      'Bi-weekly service',
      'Compost collection',
      'Premium support',
      'Schedule flexibility',
      'First cleaning free',
    ],
    stripePriceId: 'price_regular_monthly',
  },
  premium: {
    name: 'Premium',
    price: 60,
    frequency: 'month',
    interval: 'weekly',
    description: 'For the busy pet parent',
    features: [
      'Weekly service',
      'Compost delivery',
      '24/7 support',
      'Free odor spray',
      'First cleaning free',
    ],
    stripePriceId: 'price_premium_monthly',
  },
}

function SubscribeContent() {
  const searchParams = useSearchParams()
  const [selectedPlan, setSelectedPlan] = useState<keyof typeof PLANS>(
    (searchParams.get('plan') as keyof typeof PLANS) || 'regular'
  )
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    petType: 'dog' as 'dog' | 'cat' | 'both',
    numberOfPets: '1',
    agreeToTerms: false,
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted] = useState(false)

  const plan = PLANS[selectedPlan]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, type } = e.target
    const value = type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!formData.agreeToTerms) {
      setError('Please agree to the terms and conditions')
      setLoading(false)
      return
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setError('Please fill in all required fields')
      setLoading(false)
      return
    }

    try {
      // In a real app, this would call your backend to create a Stripe checkout session
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan,
          customer: formData,
        }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Failed to create checkout session')
      }

      const { url } = await response.json()
      window.location.assign(url)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Header />
        <div className="container-max py-20 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">You're all set!</h1>
          <p className="text-xl text-gray-600 mb-8">
            Check your email for next steps. We'll be in touch soon to schedule your first service.
          </p>
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container-max py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Subscribe to Poop Troop</h1>
        <p className="text-gray-600 mb-12">Choose your plan and get your first cleaning free</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Plan Selection */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Choose Your Plan</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {Object.entries(PLANS).map(([key, p]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedPlan(key as keyof typeof PLANS)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedPlan === key
                        ? 'border-leaf-600 bg-leaf-50'
                        : 'border-gray-200 hover:border-leaf-400'
                    }`}
                  >
                    <h3 className="font-bold text-gray-900">{p.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{p.interval}</p>
                    <p className="text-2xl font-bold text-leaf-600">${p.price}</p>
                    <p className="text-xs text-gray-600">per {p.frequency}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Information Form */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Your Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0" />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      State *
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Pet Type *
                    </label>
                    <select
                      name="petType"
                      value={formData.petType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                    >
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="both">Both Dogs and Cats</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Number of Pets *
                    </label>
                    <input
                      type="number"
                      name="numberOfPets"
                      value={formData.numberOfPets}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4"
                    required
                  />
                  <label className="text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-leaf-600 hover:underline">
                      terms of service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-leaf-600 hover:underline">
                      privacy policy
                    </Link>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : 'Continue to Payment'}
                </button>
              </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h3>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Plan:</p>
                <p className="text-2xl font-bold text-gray-900">{plan.name}</p>
                <p className="text-sm text-gray-600 mt-1">{plan.description}</p>
              </div>

              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Service Frequency:</p>
                <p className="font-semibold text-gray-900 capitalize">{plan.interval}</p>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-gray-600">Monthly Price:</span>
                  <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
                </div>
                <div className="flex justify-between items-baseline text-leaf-600 font-semibold">
                  <span>First Cleaning:</span>
                  <span className="text-2xl">FREE</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                <h4 className="font-semibold text-gray-900">What's Included:</h4>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <CheckCircle className="text-leaf-600 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="bg-leaf-50 rounded-lg p-4 text-sm text-leaf-900">
                <p className="font-semibold mb-1">💚 Secure & Simple</p>
                <p>Your card isn't charged until 14 days after you sign up, so your first cleaning is free. Cancel anytime before then and you pay nothing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function Subscribe() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubscribeContent />
    </Suspense>
  )
}
