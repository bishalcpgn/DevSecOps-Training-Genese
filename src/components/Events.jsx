import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'

function Events() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-green-900 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-green-400">Events</span> & Webinars
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Join our upcoming events and educational webinars
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">Events</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Stay updated with our latest events, webinars, and training sessions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Events

