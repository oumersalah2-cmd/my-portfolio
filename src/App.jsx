import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={() => setIsDark(!isDark)} className="theme-toggle">
        {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
