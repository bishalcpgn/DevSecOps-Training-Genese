import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'

function AWSTraining() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-orange-900 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-orange-400">AWS</span> Training
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Professional AWS certification and training programs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Training</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">AWS Training Programs</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive AWS training and certification programs to advance your cloud skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AWSTraining

