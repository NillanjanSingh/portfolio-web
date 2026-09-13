import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Freelance from './components/Freelance'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {
  return (
    <div className="min-h-screen bg-[#080B0F] text-[#F0F4F8] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Freelance />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
