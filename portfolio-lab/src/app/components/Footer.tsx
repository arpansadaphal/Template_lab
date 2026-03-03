"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="bg-[#0B0C0F] text-[#E6E8EC] pt-24 px-8 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Top Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-16 pb-20"
        >

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              POLYMER GLOBAL
            </h3>
            <p className="mt-6 text-gray-400 leading-relaxed">
              Engineering high-performance polymer solutions for global
              industries with precision, sustainability, and innovation.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              Solutions
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li className="hover:text-white transition">Material Engineering</li>
              <li className="hover:text-white transition">Custom Compounds</li>
              <li className="hover:text-white transition">Sustainable Polymers</li>
              <li className="hover:text-white transition">R&D Services</li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              Industries
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li className="hover:text-white transition">Automotive</li>
              <li className="hover:text-white transition">Aerospace</li>
              <li className="hover:text-white transition">Medical</li>
              <li className="hover:text-white transition">Construction</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm uppercase tracking-widest text-gray-500">
              Company
            </h4>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li className="hover:text-white transition">About Us</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Global Offices</li>
              <li className="hover:text-white transition">Contact</li>
            </ul>
          </div>

        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Polymer Global. All rights reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white transition">Privacy Policy</span>
            <span className="hover:text-white transition">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  )
}