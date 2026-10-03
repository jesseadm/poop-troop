'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Refund() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container-max py-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Free First Cleaning</h2>
            <p>
              Every new customer's first cleaning is free. Online subscriptions include a 14-day free
              period; if you cancel before your first billing date, you will not be charged.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Monthly Subscriptions</h2>
            <p>
              Monthly subscriptions are billed on a recurring basis. Payments are non-refundable and
              are only credited toward the service for which they are intended.
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>No refunds will be issued for partial months of service</li>
              <li>If you cancel mid-month, your subscription will continue through the end of that billing period</li>
              <li>Upon cancellation, you will not be charged for the following month</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Service Quality Issues</h2>
            <p>
              If you experience service quality issues, please contact us immediately:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li>Email: hello@pooptroop.local</li>
              <li>Phone: (555) 0123</li>
            </ul>
            <p className="mt-4">
              We will make our best efforts to resolve any issues. In cases where service was not
              provided as promised, we may offer service credits or adjustments to your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How to Cancel</h2>
            <p>
              To cancel your subscription:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-4">
              <li>Contact us at hello@pooptroop.local or call (555) 0123</li>
              <li>Provide your account email address or customer ID</li>
              <li>Request cancellation in writing</li>
              <li>Your subscription will be cancelled at the end of the current billing period</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Billing Disputes</h2>
            <p>
              If you believe you were charged in error, please contact us within 30 days of the charge.
              We will investigate and resolve billing disputes promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Changes to Policy</h2>
            <p>
              Poop Troop reserves the right to modify this refund policy at any time. Changes will be
              effective immediately upon posting to our website. Your continued use of our service
              constitutes acceptance of any changes to this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p>
              For questions about our refund policy:
            </p>
            <p className="font-semibold mt-4">
              Email: hello@pooptroop.local<br />
              Phone: (555) 0123
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
