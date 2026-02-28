import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Categeories from '../components/categories/Categeories'
import Hero from '../components/hero/Hero'
import Break1 from '../components/breaks/Break1'
import NotSure from '../components/quiz/NotSure'
import AboutSection from '../components/aboutSection/AboutSection'
import ContactSection from '../components/contactSection/ContactSection'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <AboutSection />
        <Break1 />
        <NotSure />
        <Categeories />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default Home