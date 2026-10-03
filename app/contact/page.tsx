'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container-max py-20">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Reach out anytime!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card text-center">
            <Mail className="mx-auto text-leaf-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <a href="mailto:hello@pooptroop.local" className="text-leaf-600 hover:underline">
              hello@pooptroop.local
            </a>
          </div>

          <div className="card text-center">
            <Phone className="mx-auto text-leaf-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <a href="tel:555-0123" className="text-leaf-600 hover:underline">
              (555) 0123
            </a>
          </div>

          <div className="card text-center">
            <MapPin className="mx-auto text-leaf-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">Springfield, IL 62701</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto card">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-leaf-100 border border-leaf-600 rounded-lg text-leaf-700">
              ✓ Thanks for reaching out! We'll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-leaf-600 resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}
