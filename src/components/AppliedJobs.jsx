import React, { useContext } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { jobContext } from '../contexts/MyContext'

const AppliedJobs = () => {
  const {jobs} = useContext(jobContext)

  console.log('jobs', jobs)
  return (
    <div className='container mx-auto mt-[3.75rem]'>
        <Nav />

        <Footer/>
    </div>
  )
}

export default AppliedJobs