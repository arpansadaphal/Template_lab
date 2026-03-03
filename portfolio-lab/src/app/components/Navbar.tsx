"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Background blur trigger
      setScrolled(currentScrollY > 20)

      // Hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed w-full z-50 px-8 lg:px-24 py-6 transition-all duration-500 ${
        scrolled
          ? "bg-[#0E0F12]/30 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_80%,transparent)] "
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center text-[#E6E8EC]">

        <div className="text-xl font-semibold tracking-tight">
          POLYMER GLOBAL
        </div>

        <div className="hidden md:flex gap-10 text-sm uppercase tracking-wide text-gray-400">
          {["Solutions", "Industries", "R&D", "About"].map((item) => (
            <div key={item} className="relative group cursor-pointer">
              <span className="hover:text-white transition duration-300">
                {item}
              </span>
              <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:opacity-90 transition">
            Request Proposal
          </button>
        </div>

      </div>
    </motion.nav>
  )
}