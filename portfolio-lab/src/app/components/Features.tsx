"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "High-Performance Materials",
    description:
      "Engineered polymer solutions optimized for extreme durability, chemical resistance, and structural integrity.",
  },
  {
    title: "Research & Development",
    description:
      "Advanced material innovation driven by in-house laboratories and continuous performance testing.",
  },
  {
    title: "Sustainable Manufacturing",
    description:
      "Eco-conscious production processes aligned with global environmental standards and compliance.",
  },
  {
    title: "Global Distribution",
    description:
      "Seamless logistics network serving industrial partners across 40+ international markets.",
  },
]

export default function Features() {
  return (
    <section className="bg-[#0E0F12] text-[#E6E8EC] py-32 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
        //   initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Core Capabilities
          </p>

          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight">
            Engineering Polymers That Power Industries
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            From material research to global-scale manufacturing, our expertise
            spans the complete polymer lifecycle.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="group border border-gray-800 p-10 hover:border-gray-600 transition duration-500"
            >
              <h3 className="text-2xl font-medium">
                {feature.title}
              </h3>

              <p className="mt-6 text-gray-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Subtle hover line animation */}
              <div className="mt-8 h-[1px] bg-gray-800 group-hover:bg-gray-500 transition-all duration-500 w-0 group-hover:w-full" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}