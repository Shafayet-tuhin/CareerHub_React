import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { jobContext } from '../contexts/MyContext'

const Nav = () => {
    const {handleFilter} = useContext(jobContext)//onClick={()=> handleFilter('all')}
    return (
        <div className='flex justify-between items-center font-abc '>
            <div>
                <p className='font-extrabold text-[2rem]  text-[#1A1919]'>CareerHub</p>
            </div>

            <div className='flex gap-9 flex-col lg:flex-row '>
                <Link className='text-base font-bold text-blue-900 hover:text-red-400 hover:text-lg' to='/'> Statistics </Link>
                <Link  className='text-base font-medium text-gray-600 hover:text-red-400 hover:text-lg' to='/appliedjobs'> Applied Jobs </Link>
                <Link className='text-base font-medium text-gray-600 hover:text-red-400 hover:text-lg' to='/'> Blog </Link>
            </div>

            <div>
                <button className='font-extrabold text-xl px-7 py-[1.19rem] bg-purple-500 bg-gradient-to-r from-purple-500 to-indigo-600 border rounded-lg text-white'>Start Applying</button>
            </div>
        </div>
    )
}

export default Nav