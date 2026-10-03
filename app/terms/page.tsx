'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Terms() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container-max py-20 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not
              use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or
              software) on Poop Troop's website for personal, non-commercial transitory viewing only.
              This is the grant of a license, not a transfer of title, and under this license you may
              not:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p>
              The materials on Poop Troop's website are provided "as is". Poop Troop makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of merchantability,
              fitness for a particular purpose, or non-infringement of intellectual property or other
              violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p>
              In no event shall Poop Troop or its suppliers be liable for any damages (including,
              without limitation, damages for loss of data or profit, or due to business interruption)
              arising out of the use or inability to use the materials on Poop Troop's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Subscription Terms</h2>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Free First Cleaning:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>New customers receive their first cleaning free</li>
              <li>For online subscriptions, billing begins 14 days after sign-up</li>
              <li>Your credit card will be charged on the billing date</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cancellation:</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>You may cancel your subscription at any time</li>
              <li>Cancellation takes effect at the end of your current billing period</li>
              <li>No refunds for partial months</li>
              <li>To cancel, contact us at hello@pooptroop.local</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Accurate Information</h2>
            <p>
              You agree to provide accurate, current, and complete information during the registration
              process. You are responsible for maintaining the confidentiality of your account information
              and password.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Service Access</h2>
            <p>
              Poop Troop services are only available in our service area. We reserve the right to refuse
              service to anyone for any reason at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the
              State of Illinois, and you irrevocably submit to the exclusive jurisdiction of the courts
              located in Illinois.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="font-semibold">hello@pooptroop.local</p>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  )
}
