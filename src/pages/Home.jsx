import React from 'react'
import Header from '../components/Header/Header'
import HeaderMain from '../components/Main/Header/HeaderMain'
import ProductMain from '../components/Main/ProductMain'
import NetworkSection from '../components/Main/NetworkSection'
import RecomendSection from '../components/Main/RecomendSection'
import HomeBanner from '../components/Main/HomeBanner'
import AccesSection from '../components/Main/AccesSection'
import Banner from '../components/Main/Banner'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className='flex flex-col  '>
       <Header/>
       <HeaderMain/> 
       <ProductMain/> 
       <NetworkSection/>
       <RecomendSection/>
       <HomeBanner/>
       <AccesSection/>
       <Banner/>
       <Footer/>
    </div>
  )
}
