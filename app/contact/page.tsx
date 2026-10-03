'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inputClass =
  'w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      // Netlify Forms (Next.js runtime) only accepts posts to the static form file in /public.
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString(),
      })
      if (!res.ok) throw new Error(`Form submission failed: ${res.status}`)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container-max py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Claim Your FREE First Cleaning</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us where you live and we&apos;ll get in touch to schedule your free first cleaning. No credit card needed.
            Have a question instead? Use the same form.
          </p>
        </div>

        <div className="max-w-2xl mx-auto card">
          {status === 'sent' ? (
            <div className="p-6 bg-leaf-100 border border-leaf-600 rounded-lg text-leaf-700 text-center">
              <p className="text-xl font-bold mb-2">Thanks! We got your request.</p>
              <p>We&apos;ll be in touch soon to schedule your visit.</p>
            </div>
          ) : (
            <form name="contact" onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&apos;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 mb-2">I&apos;d like to…</label>
                <select id="subject" name="subject" className={inputClass} defaultValue="Free first cleaning">
                  <option>Free first cleaning</option>
                  <option>Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
                <input id="name" type="text" name="name" autoComplete="name" className={inputClass} required />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                  <input id="email" type="email" name="email" autoComplete="email" className={inputClass} required />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">Phone</label>
                  <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-semibold text-gray-900 mb-2">Street address</label>
                <input id="address" type="text" name="address" autoComplete="street-address" className={inputClass} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  Anything we should know? (number of dogs, gate code, questions)
                </label>
                <textarea id="message" name="message" rows={5} className={`${inputClass} resize-none`}></textarea>
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-sm">Sorry, that didn&apos;t go through. Please try again in a minute.</p>
              )}

              <button type="submit" className="w-full btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Send My Request'}
              </button>
            </form>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
