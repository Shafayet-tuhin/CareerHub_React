import React, { useContext, useEffect, useState } from 'react'
import SingleJobs from './SingleJobs';
import JobProvider, { jobContext } from '../contexts/MyContext';


const JobCatagory = () => {

    const { jobs, editmode, seeMore } = useContext(jobContext)


    return (
        <div>
            <div className='mt-[8.12rem] '>
                <div className='flex flex-col items-center'>
                    <p className='font-extrabold text-5xl text-[#1A1919]'>Job Category List</p>
                    <p className='text-[#757575] font-medium text-base  mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                    <div>
                        <div className='flex gap-[1.56rem] mt-8'>

                            <div className='bg-[#f9f9ff] p-10 rounded-lg'>
                                <div >
                                    <img className='p-[.94rem] bg-[#efecff] border rounded-md' src="accounts.png" alt="" />
                                </div>

                                <p className='text-[#474747] text-xl font-extrabold mt-8 pr-12'>Account & Finance</p>
                                <p className='text-[#A3A3A3] text-base font-medium left-7 mt-2'>300 Jobs Available</p>
                            </div>

                            <div className='bg-[#f9f9ff] p-10 rounded-lg'>
                                <div >
                                    <img className='p-[.94rem] bg-[#efecff] border rounded-md' src="creative.png" alt="" />
                                </div>

                                <p className='text-[#474747] text-xl font-extrabold mt-8 pr-12'>Creative Design</p>
                                <p className='text-[#A3A3A3] text-base font-medium left-7 mt-2'>100+ Jobs Available</p>
                            </div>

                            <div className='bg-[#f9f9ff] p-10 rounded-lg'>
                                <div >
                                    <img className='p-[.94rem] bg-[#efecff] border rounded-md' src="marketing.png" alt="" />
                                </div>

                                <p className='text-[#474747] text-xl font-extrabold mt-8 pr-12'>Marketing & Sales</p>
                                <p className='text-[#A3A3A3] text-base font-medium left-7 mt-2'>150 Jobs Available</p>
                            </div>

                            <div className='bg-[#f9f9ff] p-10 rounded-lg'>
                                <div >
                                    <img className='p-[.94rem] bg-[#efecff] border rounded-md' src="chip.png" alt="" />
                                </div>

                                <p className='text-[#474747] text-xl font-extrabold mt-8 pr-12'>Engineering Job</p>
                                <p className='text-[#A3A3A3] text-base font-medium left-7 mt-2'>224 Jobs Available</p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div>
                <div className='mt-[8.12rem] '>
                    <div className='flex gap-4 flex-col items-center'>
                        <p className='text-[#1A1919] font-extrabold text-5xl '>Featured Jobs</p>
                        <p className='text-[#757575] font-medium text-base leading-[1.625rem]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                    </div>

                    <div className='flex justify-center'>
                        <div className='grid grid-cols-2'>
                            {
                                editmode ? jobs.map((item) => (
                                    <SingleJobs key={item.id} item={item} />
                                )):jobs.slice(0, 4).map((item) => (
                                    <SingleJobs key={item.id} item={item} />
                                )) 

                            }
                        </div>

                    </div>

                    <div className='flex justify-center mt-10'>
                        <button onClick={()=> seeMore()}
                        className='font-extrabold text-xl px-7 py-[1.19rem] bg-purple-500 bg-gradient-to-r from-purple-500 to-indigo-600 border rounded-lg text-white'>{editmode?"See Less": "See More" }</button>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default JobCatagory