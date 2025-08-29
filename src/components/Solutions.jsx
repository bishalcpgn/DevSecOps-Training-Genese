import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Cloud, Shield, Database, Monitor, Mail, Globe } from 'lucide-react'

function Solutions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-orange-400">Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Solutions</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What we offer</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive suite of solutions covers all aspects of modern business technology needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mail className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle>Email Solutions</CardTitle>
                <CardDescription>
                  Professional email hosting and management solutions with advanced security features and seamless integration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Microsoft 365 Integration</li>
                  <li>• Advanced Security Features</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Domain Setup</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Monitor className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle>Monitoring</CardTitle>
                <CardDescription>
                  Comprehensive monitoring solutions to keep your infrastructure running smoothly with real-time alerts.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Real-time Monitoring</li>
                  <li>• Custom Dashboards</li>
                  <li>• Automated Alerts</li>
                  <li>• Performance Analytics</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle>Domain and Web Hosting</CardTitle>
                <CardDescription>
                  Reliable domain registration and web hosting services with high uptime and fast performance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Domain Registration</li>
                  <li>• SSL Certificates</li>
                  <li>• High-Performance Hosting</li>
                  <li>• Backup Solutions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Database className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle>Customer Relationship Management</CardTitle>
                <CardDescription>
                  Advanced CRM solutions to manage customer relationships and streamline business processes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Lead Management</li>
                  <li>• Sales Pipeline</li>
                  <li>• Customer Analytics</li>
                  <li>• Integration Capabilities</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-red-600 mb-4" />
                <CardTitle>Project Management</CardTitle>
                <CardDescription>
                  Comprehensive project management tools to help teams collaborate effectively and deliver on time.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Task Management</li>
                  <li>• Team Collaboration</li>
                  <li>• Time Tracking</li>
                  <li>• Reporting & Analytics</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Cloud className="h-12 w-12 text-teal-600 mb-4" />
                <CardTitle>Cloud Infrastructure</CardTitle>
                <CardDescription>
                  Scalable cloud infrastructure solutions with multi-cloud support and enterprise-grade security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-Cloud Support</li>
                  <li>• Auto-Scaling</li>
                  <li>• Disaster Recovery</li>
                  <li>• Cost Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to get started?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss how our solutions can help transform your business.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Solutions

