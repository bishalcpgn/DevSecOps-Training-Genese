import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-white transition-colors">Leadership & team</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-white transition-colors">Genese Cloud Academy</Link></li>
              <li><Link to="/company" className="text-gray-300 hover:text-white transition-colors">Career</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="text-gray-300 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Email Solutions</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Monitoring</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Domain and Web Hosting</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Customer Relationship Management</Link></li>
              <li><Link to="/solutions" className="text-gray-300 hover:text-white transition-colors">Project Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Platforms</h3>
            <ul className="space-y-2">
              <li><Link to="/platforms" className="text-gray-300 hover:text-white transition-colors">Google</Link></li>
              <li><Link to="/platforms" className="text-gray-300 hover:text-white transition-colors">Microsoft</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Cloud Consultation and Services</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Development</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">Email Services</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <Button className="bg-blue-600 hover:bg-blue-700 mb-4">
              Send us a message
            </Button>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Google</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">G</span>
            </div>
            <span className="text-xl font-bold">Genese Solution</span>
          </div>
          <p className="text-gray-400">© 2025 Genese Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

