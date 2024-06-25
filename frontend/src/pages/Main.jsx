import React from 'react'
import HeroSection from '../components/hero_section/HeroSection.jsx'

import FeatureWrapper from '../components/feature_wrapper/FeatureWrapper.jsx'

import bannerimage from '../components/persist_assets/bannerimage.svg'
import BodySection from '../components/bodycomponent/BodySection.jsx'

import AboutUs from './about_us/Aboutus.jsx'
import Banner from '../components/banner1m/Banner.jsx'


const Shop = () => {
  return (
    <div>
      <HeroSection
      image={bannerimage}
      heading="Achieve Your Dreams with 'Global Intern'"
      text1="We aim to cultivate the future leaders of tomorrow."
      text2="Our internship program provides practical experience in various sectors, equipping you with the skills and knowledge needed for a successful career."
      buttonText="Explore Projects"
      buttonLink="/apply-to-accelerator"
    />
       <BodySection/>
       <Banner/>
      <AboutUs/>
      <FeatureWrapper />
      
    </div>
  )
}

export default Shop
