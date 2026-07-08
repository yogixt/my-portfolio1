import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import AshtangaYoga from '@/components/AshtangaYoga'
import Projects from '@/components/Projects'
import TechStack from '@/components/TechStack'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <AshtangaYoga />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
