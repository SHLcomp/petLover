import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Categeories from '../components/categories/Categeories'
import Hero from '../components/hero/Hero'
import Break1 from '../components/breaks/Break1'
import NotSure from '../components/quiz/NotSure'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Break1 />
        <NotSure />
        <Categeories />
    </div>
  )
}

export default Home