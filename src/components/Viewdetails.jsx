import React, { useContext, useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { jobContext } from '../contexts/MyContext';
import Swal from 'sweetalert2';



const Viewdetails = () => {

  const { Selected } = useContext(jobContext);
  const item = useLocation();
  const data = item.state.item;
  const [applied, setApplied] = useState(false);


  const handleApply = () => {
    Selected(data.id);
    setApplied(true);
    
  Swal.fire({
    title: 'Applied',
    icon: 'success',
  })

  };

  return (
    <div className='container w-[120rem] mx-auto mt-[3.75rem] font-abc'>
      <Nav />
      <div className='flex flex-col items-center gap-6'>
        <p className='text-[3.5rem] font-extrabold text-[#1A1919] mt-[7.69rem]'>
          Job Details
        </p>
        <img src={data.image} alt='' />
      </div>

      <div className='flex gap-6 mt-[11.88rem] justify-center '>
        <div className='w-[54.5rem]'>
          <p className='text-[#757575] text-base font-medium leading-8'>
            <strong className='text-[#1A1919]'>Job Description:</strong>
            {data.job_description}
          </p>

          <p className='text-[#757575] mt-6 text-base font-medium leading-8'>
            <strong className='text-[#1A1919]'>Job Responsibility:</strong>{' '}
            Collaborating with cross-functional teams: UI/UX designers often work
            closely with other teams, including product management, engineering,
            and marketing, to ensure that the user interface is aligned with
            business and technical requirements. You will need to be able to
            effectively communicate your design ideas and gather feedback from
            other team members.
          </p>

          <p className='font-extrabold leading-8 text-base text-[#1A1919] mt-6'>
            <strong>Educational Requirements:</strong>
          </p>
          <p className='text-[#757575] font-semibold leading-8 text-base mt-4'>
            {data.educational_requirements}
          </p>
          <p className='font-extrabold leading-8 text-base text-[#1A1919] mt-6'>
            <strong>Experiences:</strong>
          </p>
          <p className='text-[#757575] font-semibold leading-8 text-base mt-4'>
            {data.experience}
          </p>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='bg-blue-50 p-[1.87rem] border rounded-lg w-[26.5rem] "rounded-lg overflow-hidden bg-gradient-to-r from-opacity-blue-100 to-opacity-purple-100'>
            <div>
              <p className='font-extrabold leading-8 text-xl text-[#1A1919] '>
                Job Details
              </p>
              <hr className='mt-6 ' />

              <div className='flex gap-2 mt-6'>
                <img src='money.png' alt='' />
                <p className='text-xl font-extrabold text-[#757575]'>
                  {' '}
                  <strong className='text-[#474747]'>Salary :</strong>{' '}
                  <span className='font-medium'>{data.salary}</span>
                </p>
              </div>

              <div className='flex gap-2 mt-4'>
                <img src='calendar.png' alt='' />
                <p className='text-xl font-extrabold text-[#757575]'>
                  {' '}
                  <strong className='text-[#474747]'>Job Title :</strong>{' '}
                  <span className='font-medium'>{data.job_title}</span>
                </p>
              </div>
            </div>

            <div>
              <p className='font-extrabold leading-8 text-xl text-[#1A1919] mt-8'>
                Contact Information
              </p>
              <hr className='mt-6 ' />

              <div className='flex gap-2 mt-6'>
                <img src='phone.png' alt='' />
                <p className='text-xl font-extrabold text-[#757575]'>
                  {' '}
                  <strong className='text-[#474747]'>Phone :</strong>{' '}
                  <span className='font-medium'>01750-00 00 00</span>
                </p>
              </div>

              <div className='flex gap-2 mt-4'>
                <img src='email.png' alt='' />
                <p className='text-xl font-extrabold text-[#757575]'>
                  {' '}
                  <strong className='text-[#474747]'>Email :</strong>{' '}
                  <span className='font-medium'>info@gmail.com</span>
                </p>
              </div>
              <div className='flex gap-2 mt-4'>
                <div>
                  <img src='location2.png' alt='' />
                </div>
                <div>
                  <p className='text-xl font-extrabold text-[#757575]'>
                    {' '}
                    <strong className='text-[#474747]'>Address :</strong>{' '}
                    <span className='font-medium'>{data.location}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button
              onClick={handleApply}
              className={`font-extrabold text-xl px-7 py-[1.19rem] border rounded-lg text-white w-[26.5rem] ${
                applied ? 'bg-purple-500 bg-gradient-to-r from-red-400 to-orange-400' : 'bg-purple-500 bg-gradient-to-r from-purple-500 to-indigo-600'
              }`}
              disabled={applied}
            >
              {applied ? 'Applied' : 'Apply Now'}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Viewdetails;
