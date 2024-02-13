import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { jobContext } from '../contexts/MyContext'

const SingleApplied = ({ item }) => {

    const navigate = useNavigate()

    const jao = () => {
        navigate('/viewdetails', { state: { item: item } })
    }

    const {Cancel} = useContext(jobContext)

    return (
   <div>
           <div className='flex justify-between items-center p-[1.88rem] border rounded-lg border-[#E8E8E8] mt-8'>
            <div className='flex gap-8'>
                <div className='px-[2.65rem] py-[5.94rem] bg-[#F4F4F4] h-60 w-60 border border-white rounded-lg'>
                    <img className='w-[9.1rem] h-[2.5rem]' src={item.image} alt="" />
                </div>

                <div>
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

                </div>
              
            </div>
             <div className='flex flex-col '>
             <button onClick={jao}
                    className='mt-6 font-extrabold text-xl px-[1.12rem] py-[0.69rem] bg-purple-500 bg-gradient-to-r
                    from-purple-500 to-indigo-600 border rounded-lg text-white'>View Details
            </button>
             <button onClick={()=>Cancel(item.id)}
                    className='mt-6 font-extrabold text-xl px-[1.12rem] py-[0.69rem] bg-purple-500 bg-gradient-to-r
                    from-red-400 to-orange-400 border rounded-lg text-white'>Cancel Application
            </button>
             </div>
        </div>
   </div>
    )
}

export default SingleApplied