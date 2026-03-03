"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section className="bg-[#0E0F12] text-[#E6E8EC] py-32 px-8 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Contact Us
          </p>

          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight">
            Let’s Engineer Your Next Material Breakthrough
          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-lg">
            Speak directly with our engineering and research team to
            explore custom polymer solutions tailored to your industry.
          </p>

          <div className="mt-10 space-y-4 text-gray-400">
            <p>info@polymerglobal.com</p>
            <p>+1 (800) 482-9032</p>
            <p>Headquarters — New York, USA</p>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Full Name
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none py-3 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Company
            </label>
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none py-3 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none py-3 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-500 mb-2">
              Project Details
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-gray-700 focus:border-white outline-none py-3 transition resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-6 bg-white text-black px-10 py-3 font-medium hover:opacity-90 transition"
          >
            Submit Inquiry
          </button>

        </motion.form>

      </div>
    </section>
  )
}