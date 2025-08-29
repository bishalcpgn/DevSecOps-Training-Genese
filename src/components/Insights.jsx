import React from 'react'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts.json'
import caseStudies from '../data/caseStudies.json'

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

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-indigo-100 text-indigo-800">Blogs</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Blog Posts</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription>{post.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <Link to={`/insights/blog/${post.id}`} className="text-blue-600 hover:underline">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-800">Case Studies</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Recent Case Studies</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map(study => (
              <Card key={study.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{study.summary}</p>
                  <Link to={`/insights/case-study/${study.id}`} className="text-blue-600 hover:underline">
                    Read More
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Insights

