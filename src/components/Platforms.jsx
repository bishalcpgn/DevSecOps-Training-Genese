import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

function Platforms() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-blue-400">Platforms</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Leading technology platforms to power your business
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Platforms</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Technology Partners</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We work with industry-leading platforms to deliver the best solutions for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Google Cloud Platform</CardTitle>
                <CardDescription>
                  Comprehensive cloud computing services and solutions powered by Google's infrastructure.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Google Workspace</li>
                  <li>• Cloud Computing Services</li>
                  <li>• AI and Machine Learning</li>
                  <li>• Data Analytics</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Microsoft Azure</CardTitle>
                <CardDescription>
                  Enterprise-grade cloud platform with comprehensive business solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Microsoft 365</li>
                  <li>• Azure Cloud Services</li>
                  <li>• Power Platform</li>
                  <li>• Enterprise Applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Platforms

