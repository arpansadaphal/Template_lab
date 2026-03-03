"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#0E0F12] text-[#E6E8EC] flex items-center px-8 lg:px-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center pt-32">

        {/* Left Content */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-semibold leading-tight tracking-tight"
          >
            Advanced Polymer Engineering
            <br />
            For Global Manufacturing Leaders
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-8 text-lg text-gray-400 max-w-xl"
          >
            Delivering high-performance polymer solutions engineered
            for durability, sustainability, and global scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex gap-6"
          >
            <button className="bg-white text-black px-8 py-3 rounded-sm font-medium hover:opacity-90 transition">
              Request Proposal
            </button>

            <button className="border border-gray-600 px-8 py-3 rounded-sm hover:border-white transition">
              Explore Solutions
            </button>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="relative h-[500px]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 blur-3xl" />
        </div>

      </div>
    </section>
  )
}