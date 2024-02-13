import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Viewdetails from './Viewdetails';


const SingleJobs = ({ item }) => {

  const navigate = useNavigate()

  const jao = () => {
    navigate('/viewdetails' , {state:{item: item}})
  }

  return (
    <div className='mt-8 border border-[#E8E8E8] mr-6 rounded-lg w-[40.5rem] h-[24.5rem] '>
      <div className='p-9'>
        <img className='w-[7.3rem] h-10' src={item.image} alt="" />
        <p className='font-extrabold text-2xl text-[#474747] mt-8'>{item.job_title}</p>
        <p className='font-semibold text-xl text-[#757575] mt-2'>{item.company_name}</p>

        <div className='flex gap-4 mt-4 font-extrabold text-base text-[#7E90FE]'>
          <p className=' px-[1.19rem] py-[0.56rem] border border-[#7E90FE] rounded'>{item.site}</p>
          <p className=' px-[1.19rem] py-[0.56rem] border border-[#7E90FE] rounded'>{item.time}</p>
        </div>

        <div className='flex gap-6 mt-4'>
          <div className='flex gap-2'>
            <img className='w-6 h-6' src="Location.png" alt="" />
            <p className='font-semibold text-xl text-[#757575]'>{item.location}</p>
          </div>
          <div className='flex gap-2'>
            <img className='w-6 h-6' src="money.png" alt="" />
            <p className='font-semibold text-xl text-[#757575]'>{item.salary}</p>
          </div>
        </div>

        <button onClick={jao}
          className='mt-6 font-extrabold text-xl px-[1.12rem] py-[0.69rem] bg-purple-500 bg-gradient-to-r
          from-purple-500 to-indigo-600 border rounded-lg text-white'>View Details
        </button>

      </div>
    </div>
  );
};

export default SingleJobs;
