import React from 'react'
import Navbar from '../components/Navbar'
import HomeBanner from '../components/HomeBanner'
import OurPartners from '../components/OurPartners'
import FrustationOfClients from '../components/FrustationOfClients'
import PerfectSolutions from '../components/PerfectSolutions'
import ChooseUs from "../components/ChooseUs"
import OurResearch from "../components/OurResearch"
import OurBlogs from "../components/OurBlogs"
import OurTestimonials from "../components/OurTestimonials"
import GetInTouch from "../components/GetInTouch"
import Footer  from '../components/Footer'

function HomePage() {
  return (
    <div className='container mx-auto px-4'>
       <Navbar/>
      <HomeBanner/>
      <OurPartners/>
      <FrustationOfClients/>
      <PerfectSolutions/>
      <ChooseUs/>
      <OurResearch/>
      <OurBlogs/>
      <OurTestimonials/>
      <GetInTouch/>
      <Footer/>

      

    </div>
  )
}

export default HomePage
