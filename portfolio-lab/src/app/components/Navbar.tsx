"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed w-full z-50 px-8 lg:px-24 py-6 transition-all duration-500 ${
          scrolled
            ? "bg-[#0E0F12]/80 backdrop-blur-lg "
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[#E6E8EC]">

          {/* Logo */}
          <div className="text-xl font-semibold tracking-tight">
            POLYMER GLOBAL
          </div>

          {/* Desktop Nav */}
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button className="bg-white text-black px-6 py-2 text-sm font-medium hover:opacity-90 transition">
              Request Proposal
            </button>
          </div>

          {/* Mobile Hamburger (Morph Animation) */}
          <div
            className="md:hidden cursor-pointer relative w-6 h-5"
            onClick={() => setOpen((prev) => !prev)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-2 w-6 h-[2px] bg-white"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-4 w-6 h-[2px] bg-white"
            />
          </div>

        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-[#0E0F12] z-40 flex flex-col justify-center items-center text-white"
          >
            <div className="space-y-8 text-2xl uppercase tracking-wide text-gray-300 text-center">
              {["Solutions", "Industries", "R&D", "About"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:text-white transition cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </motion.div>
                )
              )}

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 bg-white text-black px-8 py-3 text-base font-medium"
                onClick={() => setOpen(false)}
              >
                Request Proposal
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}