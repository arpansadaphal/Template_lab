import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import Features from "@/app/components/Features"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"
import Impact from "./components/Impact"

// import Hero from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Impact/>
      <Contact />
      <Footer />
    </>
  )
}