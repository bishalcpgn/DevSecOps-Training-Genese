import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'

function Header() {
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }
  
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Genese Solution</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/solutions" 
              className={`transition-colors ${
                isActive('/solutions') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Solutions
            </Link>
            <Link 
              to="/platforms" 
              className={`transition-colors ${
                isActive('/platforms') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Platforms
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${
                isActive('/services') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/aws-training" 
              className={`transition-colors ${
                isActive('/aws-training') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              AWS Training
            </Link>
            <Link 
              to="/insights" 
              className={`transition-colors ${
                isActive('/insights') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Insights
            </Link>
            <Link 
              to="/company" 
              className={`transition-colors ${
                isActive('/company') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Company
            </Link>
            <Link 
              to="/events" 
              className={`transition-colors ${
                isActive('/events') 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Events
            </Link>
          </nav>
          
          <Button className="bg-blue-600 hover:bg-blue-700">
            Contact us
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header

