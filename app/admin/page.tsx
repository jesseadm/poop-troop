'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Plus } from 'lucide-react'

export default function Admin() {
  const [activeTab, setActiveTab] = useState('schedule')

  const mockServices = [
    { id: '1', customer: 'Sarah M.', date: '2026-10-05', time: '10:00 AM', status: 'completed', amount: 35, worker: 'Emma' },
    { id: '2', customer: 'Michael R.', date: '2026-10-19', time: '2:00 PM', status: 'scheduled', amount: 35, worker: 'Unassigned' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-max py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Admin & Operations Dashboard</h1>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-sm text-gray-600">Revenue</p>
            <p className="text-3xl font-bold text-leaf-600">$70</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-sm text-gray-600">Services</p>
            <p className="text-3xl font-bold text-blue-600">12</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-sm text-gray-600">Workers</p>
            <p className="text-3xl font-bold text-orange-600">2</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <p className="text-sm text-gray-600">MRR</p>
            <p className="text-3xl font-bold text-purple-600">$280</p>
          </div>
        </div>

        <div className="flex gap-4 mb-8 border-b border-gray-200">
          {['schedule', 'dispatch', 'invoices', 'payments'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-3 font-semibold border-b-2 ${activeTab === tab ? 'border-leaf-600 text-leaf-600' : 'border-transparent text-gray-600'}`}>
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'schedule' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Service Schedule</h2>
              <button className="btn-primary flex items-center gap-2">
                <Plus size={18} /> New Service
              </button>
            </div>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">Customer</th>
                    <th className="px-6 py-3 text-left font-semibold">Date & Time</th>
                    <th className="px-6 py-3 text-left font-semibold">Status</th>
                    <th className="px-6 py-3 text-left font-semibold">Amount</th>
                    <th className="px-6 py-3 text-left font-semibold">Worker</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {mockServices.map(s => (
                    <tr key={s.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{s.customer}</td>
                      <td className="px-6 py-4 text-sm">{s.date} @ {s.time}</td>
                      <td className="px-6 py-4"><span className={`px-3 py-1 text-xs rounded-full ${s.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>{s.status}</span></td>
                      <td className="px-6 py-4 font-semibold">${s.amount}</td>
                      <td className="px-6 py-4">{s.worker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'dispatch' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dispatch & Route Optimization</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">📍 Google Maps Integration</h3>
                <ul className="text-sm space-y-2">
                  <li>✓ Route optimization by distance</li>
                  <li>✓ Travel time estimates</li>
                  <li>✓ Real-time location tracking</li>
                  <li>✓ Turn-by-turn navigation</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">👥 Worker Assignments</h3>
                <p className="text-sm mb-3"><strong>Emma:</strong> 5 services (today: 2 completed)</p>
                <p className="text-sm mb-4"><strong>Liam:</strong> 4 services (today: 1 completed)</p>
                <button className="w-full btn-primary text-sm">View Live Map</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Invoice Management</h2>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold mb-4">📄 Auto-Generated Invoices</h3>
              <ul className="text-sm space-y-2 mb-6">
                <li>✓ Professional PDF generation</li>
                <li>✓ Automatic invoice numbering</li>
                <li>✓ Email delivery to customers</li>
                <li>✓ Payment status tracking</li>
              </ul>
              <button className="btn-primary">Generate Monthly Invoices</button>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800"><strong>Integration Options:</strong></p>
              <ul className="text-sm text-blue-800 mt-2 space-y-1">
                <li>• Wave (Free invoicing + accounting)</li>
                <li>• Stripe Billing (Automated invoices)</li>
                <li>• Custom PDF generation (jsPDF)</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'payments' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Payment Tracking</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-6 shadow border-l-4 border-green-600">
                <p className="text-sm text-gray-600">Stripe (Connected)</p>
                <p className="text-3xl font-bold text-green-600 mt-2">$70</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow border-l-4 border-blue-600">
                <p className="text-sm text-gray-600">Pending</p>
                <p className="text-3xl font-bold text-blue-600 mt-2">$70</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow border-l-4 border-purple-600">
                <p className="text-sm text-gray-600">Monthly MRR</p>
                <p className="text-3xl font-bold text-purple-600 mt-2">$280</p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <p className="font-bold text-green-900 mb-2">💳 Stripe Dashboard</p>
              <p className="text-sm text-green-800 mb-4">All payments tracked in real-time</p>
              <a href="https://dashboard.stripe.com" target="_blank" rel="noopener noreferrer" className="text-green-700 font-semibold hover:text-green-900">
                Open Stripe Dashboard →
              </a>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
