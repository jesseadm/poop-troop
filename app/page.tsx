'use client'

import Link from 'next/link'
import { CheckCircle, Leaf, Heart, Zap, Users, TrendingUp } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* HERO SECTION - The Problem (What's the ONE thing?) */}
      <section className="bg-gradient-to-b from-leaf-50 to-white py-20 md:py-32">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Done with <span className="text-leaf-600">the dirty work?</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Pet waste piling up in your yard? Composting seems complicated? Poop Troop takes the mess out of pet ownership—and turns it into gardening gold.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/subscribe" className="btn-primary text-center">
                  Start Your Free Month
                </Link>
                <Link href="#how-it-works" className="btn-secondary text-center">
                  See How It Works
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-6">💳 No credit card required for first month</p>
            </div>
            <div className="bg-earth-100 rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <img src="/hero-poop.svg" alt="Poop Troop mascot" className="w-64 h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM - What's keeping them awake at night? */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <h2 className="section-heading text-center">
            Pet waste isn't your mess to make
          </h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            You've got better things to do than scoop poop. We get it.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="card">
              <div className="text-4xl mb-4">🤢</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Daily Grind</h3>
              <p className="text-gray-600">
                Scooping poop daily is gross, time-consuming, and honestly, nobody wants to do it. Your weekends shouldn't smell like a barnyard.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Waste Guilt</h3>
              <p className="text-gray-600">
                You want to be eco-conscious, but composting pet waste seems complicated and risky. That garbage bag feels wasteful.
              </p>
            </div>

            <div className="card">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Burned Out</h3>
              <p className="text-gray-600">
                Pet ownership is wonderful, but the maintenance is endless. You're constantly chasing the poop pile instead of enjoying your pet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE GUIDE - Why we're the answer */}
      <section className="py-20 md:py-28 bg-leaf-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <img src="/kids-working.svg" alt="Kids working and earning" className="w-64 h-64" />
            </div>
            <div>
              <h2 className="section-heading">
                Meet Poop Troop
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Your neighborhood's favorite pair of young entrepreneurs on a mission to solve the pet waste problem.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're reliable, thorough, and we actually enjoy what we do. Every scoop counts toward building great work ethic—and keeping your yard pristine.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Trained and experienced in safe pet waste handling</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Compost collection transforms waste into garden gold</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Reliable, consistent schedule—pets get the care they deserve</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                  <p className="text-gray-700">Supporting local kids learning real business skills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES - What we do */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <h2 className="section-heading text-center">
            Our Services
          </h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            Everything your yard needs—all in one subscription
          </p>

          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="text-center">
              <div className="bg-earth-50 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
                <img src="/service-scoop.svg" alt="Poop scooping service" className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Poop Scooping</h3>
              <p className="text-gray-600">
                Professional cleanup of dog and cat waste. We scoop thoroughly and leave your yard fresh and clean.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-earth-50 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
                <img src="/service-compost.svg" alt="Compost collection" className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compost Collection</h3>
              <p className="text-gray-600">
                Waste transformed into gardening gold. We collect compost and help you nurture a healthier garden.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-earth-50 rounded-2xl p-8 mb-6 h-64 flex items-center justify-center">
                <img src="/service-yard.svg" alt="Yard cleanup service" className="w-48 h-48" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Yard Cleanup</h3>
              <p className="text-gray-600">
                Additional services including leaf collection, debris removal, and yard maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - The Plan */}
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <h2 className="section-heading text-center">
            Three Simple Steps
          </h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            Getting clean is easy
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="relative">
              <div className="absolute -left-1 top-0 w-12 h-12 bg-leaf-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="ml-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-2">Choose Your Plan</h3>
                <p className="text-gray-600 mb-4">
                  Pick from weekly, bi-weekly, or monthly service. We'll handle dog waste, cat waste, or both.
                </p>
                <div className="text-leaf-600 font-semibold">Starting at $15/month</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-1 top-0 w-12 h-12 bg-leaf-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="ml-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-2">We Handle It</h3>
                <p className="text-gray-600 mb-4">
                  On your scheduled day, we scoop, collect compost, and leave your yard sparkling clean. You won't even know we were there.
                </p>
                <div className="text-leaf-600 font-semibold">Professional service guaranteed</div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-1 top-0 w-12 h-12 bg-leaf-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="ml-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 pt-2">Enjoy Your Yard</h3>
                <p className="text-gray-600 mb-4">
                  No more poop piles. No more guilt. Just a clean, fresh-smelling yard and compost ready to nourish your garden.
                </p>
                <div className="text-leaf-600 font-semibold">Breathe easy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING - Clear, simple plans */}
      <section className="py-20 md:py-28 bg-earth-50">
        <div className="container-max">
          <h2 className="section-heading text-center">
            Plans That Fit Your Needs
          </h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            Transparent pricing. No surprises. Cancel anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Starter Plan */}
            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small spaces</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$15</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Monthly service</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Yard cleanup</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <Link href="/subscribe?plan=starter" className="btn-outline w-full text-center block">
                Get Started
              </Link>
            </div>

            {/* Popular Plan */}
            <div className="card border-2 border-leaf-600 relative shadow-lg transform md:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-leaf-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Regular</h3>
              <p className="text-gray-600 mb-6">Our most requested option</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$35</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Bi-weekly service</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Compost collection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Premium support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Schedule flexibility</span>
                </li>
              </ul>
              <Link href="/subscribe?plan=regular" className="btn-primary w-full text-center block">
                Subscribe Now
              </Link>
            </div>

            {/* Premium Plan */}
            <div className="card border-2 border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">For the busy pet parent</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$60</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Weekly service</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Compost delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">24/7 support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-leaf-600" size={20} />
                  <span className="text-gray-700">Free odor spray</span>
                </li>
              </ul>
              <Link href="/subscribe?plan=premium" className="btn-outline w-full text-center block">
                Get Premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - What customers are saying */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-max">
          <h2 className="section-heading text-center">
            Loved by Pet Parents
          </h2>
          <p className="subheading text-center max-w-2xl mx-auto">
            See what people are saying about Poop Troop
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "I can't believe how much time this saves me. The yard is always pristine, and the kids are learning real business skills. Win-win!"
              </p>
              <div className="font-semibold text-gray-900">Sarah M.</div>
              <div className="text-sm text-gray-600">Dog owner, 2 years</div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "My cats have a cleaner box, my yard smells better, and I'm supporting young entrepreneurs. This is exactly what community should be."
              </p>
              <div className="font-semibold text-gray-900">Michael R.</div>
              <div className="text-sm text-gray-600">Cat owner, 1 year</div>
            </div>

            <div className="card">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                "Reliable, professional, and friendly. These kids showed up exactly when they said they would, every time. Highly recommend!"
              </p>
              <div className="font-semibold text-gray-900">Jennifer T.</div>
              <div className="text-sm text-gray-600">Multi-pet owner, 6 months</div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS vs FAILURE - Paint the picture */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-leaf-50 to-earth-50">
        <div className="container-max">
          <h2 className="section-heading text-center mb-16">
            Without Poop Troop vs. With Poop Troop
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Without */}
            <div>
              <h3 className="text-2xl font-bold text-red-600 mb-6 flex items-center gap-2">
                <span className="text-2xl">❌</span> Without Poop Troop
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Spending 15 minutes every morning scooping poop</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Yard always smells like pet waste</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Kids miss out on outdoor play time</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Guilt about wasting compostable material</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-red-600 font-bold">•</span>
                  <span className="text-gray-700">Overwhelmed by the endless chores</span>
                </li>
              </ul>
            </div>

            {/* With */}
            <div>
              <h3 className="text-2xl font-bold text-leaf-600 mb-6 flex items-center gap-2">
                <span className="text-2xl">✅</span> With Poop Troop
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-leaf-600 font-bold">•</span>
                  <span className="text-gray-700">Never think about poop again</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-leaf-600 font-bold">•</span>
                  <span className="text-gray-700">Yard stays fresh and beautiful</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-leaf-600 font-bold">•</span>
                  <span className="text-gray-700">More time for family and fun</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-leaf-600 font-bold">•</span>
                  <span className="text-gray-700">Waste responsibly composted</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-leaf-600 font-bold">•</span>
                  <span className="text-gray-700">Support young entrepreneurs learning business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Final Call to Action */}
      <section className="py-20 md:py-28 bg-leaf-600 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Reclaim Your Yard?
          </h2>
          <p className="text-xl text-leaf-100 mb-8 max-w-2xl mx-auto">
            Start with a free month, no credit card required. Cancel anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/subscribe"
              className="px-8 py-4 bg-white text-leaf-600 font-bold rounded-lg hover:bg-leaf-50 transition-colors"
            >
              Subscribe Now
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-leaf-700 transition-colors"
            >
              Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
