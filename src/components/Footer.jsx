import React from 'react';

const Footer = () => {
  return (
    <div className='mt-[8.13rem] bg-black border rounded-2xl flex flex-col gap-[3.12rem] items-center px-[18.63rem] py-[4.12rem]'>
      <div className='flex justify-between gap-[8.56rem]'>
        <div className='flex flex-col gap-5'>
          <p className='text-white text-[2rem] font-extrabold'>CareerHub</p>
          <p className='text-gray-500 font-normal text-base leading-7'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
          <img src="social.png" alt="" className='w-[9.75rem] h-[2.625rem]'/>
        </div>

        <div className='flex flex-col gap-3 text-white'>
          <p className='font-semibold text-xl'>Company</p>
          <div className='flex flex-col gap-3 text-base font-normal text-gray-500'>
            <p>About Us</p>
            <p>Work</p>
            <p>Latest News</p>
            <p>Careers</p>
          </div>
        </div>

        <div className='flex flex-col gap-3 text-white'>
          <p className='font-semibold text-xl'>Support</p>
          <div className='flex flex-col gap-3 text-base font-normal text-gray-500'>
            <p>Help Desk</p>
            <p>Sales</p>
            <p>Become a Partner</p>
            <p>Developers</p>
          </div>
        </div>

        <div className='flex flex-col gap-3 text-white'>
          <p className='font-semibold text-xl'>Contact</p>
          <div className='flex flex-col gap-3 text-base font-normal text-gray-500'>
            <p>524,Broadway,NYC</p>
            <p>+1777-978-5570</p>
          </div>
        </div>

      </div>
     
      <hr className='w-full border-gray-500 ' />

      <div className='w-full flex justify-between text-gray-500 text-sm font-semibold'>
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>

    </div>
  );
}

export default Footer;
