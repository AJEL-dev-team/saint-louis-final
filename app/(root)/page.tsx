import About from '@/components/others/About'
import Activity from '@/components/others/Activity'
import Contact from '@/components/others/Contact'
import Events from '@/components/others/Events'
import Footer from '@/components/others/Footer'
import Hero from '@/components/others/Hero'
import News from '@/components/others/News'
import React from 'react'

const page = () => {
  return (
    <>
        <Hero/>
        <About/>
        {/* je vais creer un éléments news qui prend des props et vous allez pouvoir générer plusieurs news avec ce composants là. Cette presentation est purement representative */}
        <News />
        <Activity />
        <Events/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default page