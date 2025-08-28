import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { ChevronRight, Cloud, Shield, Users, ArrowRight } from 'lucide-react'

// Import images
import cloudImage from '../assets/OkmXK0NKdOSI.jpg'
import securityImage from '../assets/3eog0JiBSfrC.png'
import cybersecurityImage from '../assets/YWjRH8FYIJDr.png'

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enabling <span className="text-orange-400">Digital Transformation</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              with reliability, scalability and cost-effectiveness
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
              Find out more
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Affiliation & Partnership</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-orange-500">AWS</div>
            <div className="text-2xl font-bold text-blue-500">Google Cloud</div>
            <div className="text-2xl font-bold text-blue-600">ATLASSIAN</div>
            <div className="text-2xl font-bold text-blue-500">Azure</div>
            <div className="text-2xl font-bold text-gray-700">Nagios</div>
            <div className="text-2xl font-bold text-orange-500">Alibaba Group</div>
            <div className="text-2xl font-bold text-gray-700">vmware</div>
            <div className="text-2xl font-bold text-blue-500">zoom</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">About us</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who we are</h2>
              <p className="text-lg text-gray-700 mb-6">
                Genese Solution is a <strong>Value IT Consulting Company</strong> committed to helping organizations worldwide optimize their IT operations and cost management, harness technology for innovation, and ensure effective IT risk management.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Headquartered in the United Kingdom, we have offices in eleven countries, including Nepal, Bangladesh, India, Pakistan, Finland, Australia, Nigeria, Spain, Ireland and the USA.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We are proud to be one of the few IT consulting firms certified to the rigorous international standard ISO 27001:2022 for information security management.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="h-8 w-8 text-green-600" />
                <span className="text-sm font-medium text-gray-600">ISO 27001:2022 Certified</span>
              </div>
            </div>
            <div className="relative">
              <img 
                src={cloudImage} 
                alt="Cloud consulting services" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What we do</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer a full-scale digital ecosystem which includes World Class software, Cloud Platforms, Cybersecurity, Productivity & Collaboration Suites, Monitoring Tools, International Payments, and Startup Cloud Funding among others.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Cloud Services & Consultation</CardTitle>
                <CardDescription>
                  Multi-platform cloud services from the biggest names in the industry with expert strategy and roadmap guidance.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Cybersecurity Solutions</CardTitle>
                <CardDescription>
                  Comprehensive security solutions to protect your organization from evolving cyber threats.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Software Development</CardTitle>
                <CardDescription>
                  Cutting-edge solutions for world-class brands, SMEs and startups in their digital transformation journey.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Academy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={cybersecurityImage} 
                alt="Genese Cloud Academy" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-purple-100 text-purple-800">Academy</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Genese Cloud Academy</h2>
              <p className="text-lg text-gray-700 mb-6">
                Genese Cloud Academy, an education wing of Genese Solution is established with its vision to bridge the skill gap between academia and industry by making final year students/graduates emerge as highly employable.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span>Skills Mapping and Job Placement for Graduates</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span>Interest & Need-based Assessment on respective Training</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span>Startup Incubation Program</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="h-5 w-5 text-blue-600" />
                  <span>Mentorship & Exposure for Career Enrichment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800">Resources</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent case studies</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are proud to have earned the accolade and business of over 200+ customers worldwide from diverse businesses in this short tenure of operation.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent blogs and events</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Ensuring E-learning Excellence: Code Rush's Secure Infrastructure with AWS</CardTitle>
                <CardDescription>Mar 11, 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Background: Code Rush specializes in building robust talent pipelines for different IT firms by offering data-driven talent generation and recruitment solutions...
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
                  With increasingly increasing institutions' dependency on technology, the chances of data breaches have increased tremendously...
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
                  Managing cloud costs effectively is a key aspect of leveraging AWS services to their full potential...
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

