import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

function Insights() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-indigo-900 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-indigo-400">Insights</span> & Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Latest insights, case studies, and thought leadership
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">Insights</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Latest Articles & Case Studies</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Ensuring E-learning Excellence: Code Rush's Secure Infrastructure with AWS</CardTitle>
                <CardDescription>Mar 11, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Background: Code Rush specializes in building robust talent pipelines for different IT firms...
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Financial Implications of a Security Breach</CardTitle>
                <CardDescription>Feb 13, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  With increasingly increasing institutions' dependency on technology...
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Optimizing Performance and Cost Using AWS Compute Savings Plans</CardTitle>
                <CardDescription>Feb 5, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Managing cloud costs effectively is a key aspect of leveraging AWS services...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights

