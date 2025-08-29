import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Cloud, Code, Shield, Users, Zap, Settings } from 'lucide-react'

function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Expert consulting and development services to accelerate your digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800">Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How we help you succeed</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our certified specialists and professional developers combine technical expertise with business insights to deliver transformative solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Cloud Consultation and Services</CardTitle>
                <CardDescription>
                  Expert guidance on cloud strategy, migration, and optimization across AWS, Azure, and Google Cloud platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Cloud Strategy & Roadmap</li>
                  <li>• Migration Planning & Execution</li>
                  <li>• Cost Optimization</li>
                  <li>• Multi-Cloud Management</li>
                  <li>• DevOps Implementation</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Development</CardTitle>
                <CardDescription>
                  Custom software development services for web applications, mobile apps, and enterprise solutions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Web Application Development</li>
                  <li>• Mobile App Development</li>
                  <li>• API Development & Integration</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Legacy System Modernization</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Cybersecurity</CardTitle>
                <CardDescription>
                  Comprehensive security assessments, implementation, and ongoing monitoring to protect your digital assets.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Security Assessments</li>
                  <li>• Penetration Testing</li>
                  <li>• Compliance Management</li>
                  <li>• Incident Response</li>
                  <li>• Security Training</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>IT Consulting</CardTitle>
                <CardDescription>
                  Strategic IT consulting to optimize operations, reduce costs, and drive innovation across your organization.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• IT Strategy & Planning</li>
                  <li>• Technology Assessment</li>
                  <li>• Digital Transformation</li>
                  <li>• Process Optimization</li>
                  <li>• Vendor Management</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-600 mb-4" />
                <CardTitle>Performance Optimization</CardTitle>
                <CardDescription>
                  Enhance system performance, scalability, and reliability through expert optimization techniques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Application Performance Tuning</li>
                  <li>• Database Optimization</li>
                  <li>• Infrastructure Scaling</li>
                  <li>• Load Testing</li>
                  <li>• Monitoring & Analytics</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Settings className="h-12 w-12 text-gray-600 mb-4" />
                <CardTitle>Managed Services</CardTitle>
                <CardDescription>
                  Ongoing support and management of your IT infrastructure to ensure optimal performance and availability.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 24/7 Monitoring & Support</li>
                  <li>• Backup & Disaster Recovery</li>
                  <li>• Patch Management</li>
                  <li>• Capacity Planning</li>
                  <li>• SLA Management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your business needs and technical requirements</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">Developing a comprehensive strategy and implementation roadmap</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Executing the solution with regular updates and quality assurance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-semibold mb-2">Support</h3>
              <p className="text-gray-600">Ongoing maintenance and optimization for continued success</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

