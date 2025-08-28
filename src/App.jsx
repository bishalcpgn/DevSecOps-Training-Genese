import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Solutions from './components/Solutions.jsx'
import Platforms from './components/Platforms.jsx'
import Services from './components/Services.jsx'
import AWSTraining from './components/AWSTraining.jsx'
import Insights from './components/Insights.jsx'
import Company from './components/Company.jsx'
import Events from './components/Events.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/services" element={<Services />} />
            <Route path="/aws-training" element={<AWSTraining />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/company" element={<Company />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

