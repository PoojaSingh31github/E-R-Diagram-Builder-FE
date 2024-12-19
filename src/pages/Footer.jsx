import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-teal-600 text-white py-6 mt-16">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2">
            <li>Documentation</li>
            <li>Blog</li>
            <li>API Reference</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-sm">
        <p>&copy; 2024 ER Diagram Builder. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer