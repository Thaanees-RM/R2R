import React from 'react'
import Hero from '../components/Hero'
import InfoSection from '../components/InfoSection' 
import CTA from '../components/CTA'
import AboutCards from '../components/AboutCards'
import Form from '../components/Form'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Form/>
      <InfoSection/>
      <AboutCards/>
      <CTA/>
      <Footer/>
    
    </>
  )
}

export default Home