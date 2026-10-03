'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, Clock, CheckCircle } from 'lucide-react'

export default function Worker() {
  const services = [
    { id: 1, customer: 'Sarah M.', address: '123 Oak St', time: '10:00 AM', status: 'completed', pay: 35 },
    { id: 2, customer: 'Michael R.', address: '456 Elm Ave', time: '2:00 PM', status: 'in-progress', pay: 35 },
    { id: 3, customer: 'Jennifer T.', address: '789 Maple Dr', time: '4:00 PM', status: 'assigned', pay: 60 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container-max py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Worker Dashboard</h1>
        <p className="text-gray-600 mb-8">Emma's Services & Earnings</p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 rounded-lg p-6 shadow border-l-4 border-green-600">
            <p className="text-sm text-gray-700">Today's Earnings</p>
            <p className="text-3xl font-bold text-green-600 mt-2">$70</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 shadow border-l-4 border-blue-600">
            <p className="text-sm text-gray-700">This Week</p>
            <p className="text-3xl font-bold text-blue-600 mt-2">$280</p>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 shadow border-l-4 border-purple-600">
            <p className="text-sm text-gray-700">Total Earned</p>
            <p className="text-3xl font-bold text-purple-600 mt-2">$1,240</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Today's Schedule</h2>
        <div className="space-y-4">
          {services.map(s => (
            <div key={s.id} className={`rounded-lg p-6 shadow ${s.status === 'completed' ? 'bg-green-50 border-l-4 border-green-600' : s.status === 'in-progress' ? 'bg-blue-50 border-l-4 border-blue-600' : 'bg-white border-l-4 border-gray-300'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{s.customer}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mt-2">
                    <MapPin size={16} /> <span className="text-sm">{s.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mt-1">
                    <Clock size={16} /> <span className="text-sm">{s.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-leaf-600">${s.pay}</p>
                  <span className={`mt-2 inline-block px-3 py-1 text-xs font-semibold rounded-full ${s.status === 'completed' ? 'bg-green-100 text-green-700' : s.status === 'in-progress' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100'}`}>
                    {s.status.toUpperCase()}
                  </span>
                </div>
              </div>
              {s.status === 'assigned' && <button className="w-full mt-4 py-2 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700">Start Service</button>}
              {s.status === 'in-progress' && <button className="w-full mt-4 py-2 bg-green-600 text-white rounded font-semibold hover:bg-green-700 flex items-center justify-center gap-2"><CheckCircle size={18} /> Mark Complete</button>}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">💰 Get Paid</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-blue-600">
              <h3 className="font-bold text-gray-900 mb-2">📱 Venmo (Instant)</h3>
              <p className="text-sm text-gray-700 mb-4">Get paid instantly after each service. No fees. Direct to your bank.</p>
              <button className="w-full btn-primary">Connect Venmo</button>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-t-4 border-purple-600">
              <h3 className="font-bold text-gray-900 mb-2">💳 Stripe (Weekly)</h3>
              <p className="text-sm text-gray-700 mb-4">Weekly payouts to your bank account. Get a free debit card.</p>
              <button className="w-full btn-secondary">Setup Stripe</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
