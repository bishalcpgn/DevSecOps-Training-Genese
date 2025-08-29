import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Users, Globe, Award, Target, Heart, Lightbulb } from 'lucide-react'

function Company() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-purple-400">Genese Solution</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Your trusted partner in digital transformation and IT excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">Our Story</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Genese Solution is a <strong>Value IT Consulting Company</strong> committed to helping organizations worldwide optimize their IT operations and cost management, harness technology for innovation, and ensure effective IT risk management.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Headquartered in the United Kingdom, we have offices in eleven countries, including Nepal, Bangladesh, India, Pakistan, Finland, Australia, Nigeria, Spain, Ireland and the USA.
              </p>
              <p className="text-lg text-gray-700">
                We are proud to be one of the few IT consulting firms certified to the rigorous international standard ISO 27001:2022 for information security management.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Globe className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">11+</CardTitle>
                  <CardDescription>Countries</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">200+</CardTitle>
                  <CardDescription>Clients Worldwide</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">ISO</CardTitle>
                  <CardDescription>27001:2022 Certified</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-2xl">10+</CardTitle>
                  <CardDescription>Years Experience</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Our Values</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our core values guide everything we do and shape our commitment to excellence in every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Lightbulb className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                <CardTitle>Innovation</CardTitle>
                <CardDescription>
                  We embrace cutting-edge technologies and innovative approaches to solve complex business challenges.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <CardTitle>Integrity</CardTitle>
                <CardDescription>
                  We maintain the highest standards of honesty, transparency, and ethical conduct in all our relationships.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Excellence</CardTitle>
                <CardDescription>
                  We strive for excellence in every project, delivering quality solutions that exceed expectations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Global Reach</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Global Presence</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With offices across multiple continents, we provide local expertise with global standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Europe</h3>
              <p className="text-gray-600">United Kingdom, Finland, Spain, Ireland</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Asia</h3>
              <p className="text-gray-600">Nepal, Bangladesh, India, Pakistan</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Oceania</h3>
              <p className="text-gray-600">Australia</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">Americas</h3>
              <p className="text-gray-600">United States</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Leadership</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership & Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in technology, business strategy, and innovation.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-8">
              Our team consists of certified specialists, professional developers, and business strategists who are passionate about delivering exceptional results for our clients.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium">
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Certifications</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Certifications</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We maintain industry-leading certifications to ensure the highest standards of service delivery.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="max-w-md">
              <CardHeader className="text-center">
                <Award className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">ISO 27001:2022</CardTitle>
                <CardDescription className="text-lg">
                  Information Security Management System certification demonstrating our commitment to data security and privacy.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Company

