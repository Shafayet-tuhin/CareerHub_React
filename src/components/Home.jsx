import React from 'react'
import Nav from './Nav'
import Banner from './Banner'
import JobCatagory from './JobCatagory'
import Footer from './Footer'
import Viewdetails from './Viewdetails'

const Home = () => {
  return (
    <div className='container mx-auto mt-[3.75rem] font-abc'>
        <Nav/>
        <Banner />
        <JobCatagory/>
        <Footer/>
    </div>
  )
}

export default Home