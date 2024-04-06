import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const Products = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PRODUCTS." text="Some of my team, most recent works.." />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Products
