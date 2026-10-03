'use client'

import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, CreditCard, MapPin, Phone, Mail, LogOut, AlertCircle } from 'lucide-react'

// Mock data - in a real app, this would come from your database
const mockSubscription = {
  id: 'sub_123456',
  customerId: 'cus_123456',
  plan: 'regular',
  planName: 'Regular',
  price: 35,
  frequency: 'Bi-weekly',
  status: 'active',
  currentPeriodStart: '2026-10-01',
  currentPeriodEnd: '2026-10-31',
  nextBillingDate: '2026-10-31',
}

const mockCustomer = {
  id: 'cus_123456',
  firstName: 'John',
  lastName: 'Smith',
  email: 'john@example.com',
  phone: '(555) 123-4567',
  address: '123 Main St',
  city: 'Springfield',
  state: 'IL',
  zip: '62701',
  petType: 'both',
  numberOfPets: 2,
  createdAt: '2026-09-15',
}

const mockSchedule = [
  {
    id: 'svc_001',
    date: '2026-10-05',
    time: '10:00 AM',
    status: 'completed',
    notes: 'Cleaned up yard, collected 2 bags of compost',
  },
  {
    id: 'svc_002',
    date: '2026-10-19',
    time: '10:00 AM',
    status: 'scheduled',
    notes: '',
  },
  {
    id: 'svc_003',
    date: '2026-11-02',
    time: '10:00 AM',
    status: 'scheduled',
    notes: '',
  },
]

export default function Dashboard() {
  const [showLogout, setShowLogout] = useState(false)
  const [activeTab, setActiveTab] = useState<'overview' | 'schedule' | 'billing' | 'settings'>('overview')

  const handleLogout = () => {
    setShowLogout(true)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container-max py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="mb-6 pb-6 border-b border-gray-200">
                <p className="text-sm text-gray-600 mb-1">Welcome back,</p>
                <h3 className="text-xl font-bold text-gray-900">
                  {mockCustomer.firstName} {mockCustomer.lastName}
                </h3>
              </div>

              <nav className="space-y-2 mb-8">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === 'overview'
                      ? 'bg-leaf-100 text-leaf-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('schedule')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === 'schedule'
                      ? 'bg-leaf-100 text-leaf-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Service Schedule
                </button>
                <button
                  onClick={() => setActiveTab('billing')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === 'billing'
                      ? 'bg-leaf-100 text-leaf-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Billing
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full text-left px-4 py-2 rounded-lg transition ${
                    activeTab === 'settings'
                      ? 'bg-leaf-100 text-leaf-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Settings
                </button>
              </nav>

              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* OVERVIEW TAB */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Subscription Status */}
                <div className="card border-l-4 border-leaf-600">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Current Plan</p>
                      <h3 className="text-3xl font-bold text-gray-900">{mockSubscription.planName}</h3>
                    </div>
                    <span className="px-4 py-2 bg-leaf-100 text-leaf-700 font-semibold rounded-lg capitalize">
                      {mockSubscription.status}
                    </span>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Service Frequency</p>
                      <p className="font-semibold text-gray-900">{mockSubscription.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Monthly Cost</p>
                      <p className="font-semibold text-gray-900">${mockSubscription.price}/month</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Next Billing</p>
                      <p className="font-semibold text-gray-900">
                        {new Date(mockSubscription.nextBillingDate).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 flex gap-4">
                    <Link href="/subscribe?plan=regular" className="btn-secondary">
                      Change Plan
                    </Link>
                    <button className="btn-outline">Cancel Subscription</button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="card">
                    <p className="text-sm text-gray-600 mb-2">Member Since</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {new Date(mockCustomer.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <div className="card">
                    <p className="text-sm text-gray-600 mb-2">Services Completed</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {mockSchedule.filter(s => s.status === 'completed').length}
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Account Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="text-gray-900 font-semibold">{mockCustomer.email}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="text-gray-900 font-semibold">{mockCustomer.phone}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-leaf-600 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-sm text-gray-600">Address</p>
                        <p className="text-gray-900 font-semibold">
                          {mockCustomer.address}<br />
                          {mockCustomer.city}, {mockCustomer.state} {mockCustomer.zip}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SCHEDULE TAB */}
            {activeTab === 'schedule' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Service Schedule</h3>
                  <div className="space-y-4">
                    {mockSchedule.map(service => (
                      <div
                        key={service.id}
                        className={`p-4 border-l-4 rounded-lg ${
                          service.status === 'completed'
                            ? 'border-gray-400 bg-gray-50'
                            : 'border-leaf-600 bg-leaf-50'
                        }`}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Calendar size={20} className="text-leaf-600" />
                            <div>
                              <p className="font-semibold text-gray-900">
                                {new Date(service.date).toLocaleDateString('en-US', {
                                  weekday: 'long',
                                  month: 'short',
                                  day: 'numeric',
                                })}
                              </p>
                              <p className="text-sm text-gray-600">{service.time}</p>
                            </div>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold capitalize ${
                              service.status === 'completed'
                                ? 'bg-gray-200 text-gray-700'
                                : 'bg-leaf-200 text-leaf-700'
                            }`}
                          >
                            {service.status}
                          </span>
                        </div>
                        {service.notes && (
                          <p className="text-sm text-gray-600 ml-8">{service.notes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="text-blue-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-blue-900">Need to reschedule?</p>
                    <p className="text-sm text-blue-800">
                      Contact us at hello@pooptroop.local or (555) 0123 to change your service dates.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* BILLING TAB */}
            {activeTab === 'billing' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Billing Information</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <div>
                        <p className="font-semibold text-gray-900">Next Bill</p>
                        <p className="text-sm text-gray-600">
                          {new Date(mockSubscription.nextBillingDate).toLocaleDateString()}
                        </p>
                      </div>
                      <p className="text-2xl font-bold text-gray-900">${mockSubscription.price}</p>
                    </div>
                    <div className="pt-4">
                      <p className="text-sm text-gray-600 mb-3">Payment Method</p>
                      <div className="flex items-center gap-3">
                        <CreditCard className="text-gray-400" size={24} />
                        <div>
                          <p className="font-semibold text-gray-900">Visa ending in 4242</p>
                          <p className="text-sm text-gray-600">Expires 12/2025</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-200 flex gap-4">
                    <button className="btn-secondary">Update Payment Method</button>
                    <button className="btn-secondary">View Invoice History</button>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="text-yellow-600 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold text-yellow-900">Billing Question?</p>
                    <p className="text-sm text-yellow-800">
                      We're here to help. Email us at billing@pooptroop.local
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* SETTINGS TAB */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Pet Information</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Pet Type</p>
                      <p className="font-semibold text-gray-900 capitalize">{mockCustomer.petType}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-2">Number of Pets</p>
                      <p className="font-semibold text-gray-900">{mockCustomer.numberOfPets}</p>
                    </div>
                  </div>
                  <button className="mt-6 btn-secondary">Edit Pet Information</button>
                </div>

                <div className="card">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Preferences</h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-gray-700">Email reminders before service days</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-gray-700">SMS notifications</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-gray-700">Marketing emails and promotions</span>
                    </label>
                  </div>
                  <button className="mt-6 btn-secondary">Save Preferences</button>
                </div>

                <div className="card bg-red-50 border-2 border-red-200">
                  <h3 className="text-xl font-bold text-red-700 mb-4">Danger Zone</h3>
                  <p className="text-gray-700 mb-4">
                    If you'd like to delete your account and all associated data, you can do so here. This action cannot be undone.
                  </p>
                  <button className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                    Delete Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {showLogout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Out?</h2>
            <p className="text-gray-600 mb-6">You'll need to log in again to access your account.</p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 btn-secondary"
              >
                Cancel
              </button>
              <Link href="/" className="flex-1 btn-primary text-center">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
