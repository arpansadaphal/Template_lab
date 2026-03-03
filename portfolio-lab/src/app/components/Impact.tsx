"use client"

import { motion } from "framer-motion"
import CountUp from "react-countup"

const metrics = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 42, suffix: "+", label: "Countries Served" },
  { value: 300, suffix: "+", label: "Industrial Clients" },
  { value: 1200, suffix: "+", label: "Polymer Variants Developed" },
]

export default function Impact() {
  return (
    <section className="bg-[#0E0F12] text-[#E6E8EC] py-32 px-8 lg:px-24 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500">
            Global Impact
          </p>

          <h2 className="mt-6 text-4xl lg:text-5xl font-semibold tracking-tight">
            Scale That Defines Industry Leadership
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <h3 className="text-5xl lg:text-6xl font-semibold">
                <CountUp
                  end={metric.value}
                  duration={2}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {metric.suffix}
              </h3>

              <p className="mt-4 text-gray-400 uppercase text-sm tracking-wider">
                {metric.label}
              </p>

              {/* Subtle divider line */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-gray-800 hidden md:block last:hidden" />
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}