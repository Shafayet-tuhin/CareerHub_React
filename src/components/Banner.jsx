import React from "react";
import Swal from "sweetalert2";

const Banner = () => {
  const sweetalert = () => {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<strong>Etar Kaaj Pending e</strong>'
      });
}
  return (
    <div className="flex justify-between ">
      <div>
            <div className="font-extrabold text-[5rem] font-abc leading-[6.25rem] mt-[9.25rem]">
              <p>One Step</p>
              <p>Closer To Your</p>
              <p className="text-blue-500">Dream Job</p>
            </div>

            <div>
              <p className="text-[#757575] font-medium text-lg leading-[1.875rem] w-[32.4375rem] mt-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            </div>

            <button onClick={()=>sweetalert()} className="font-extrabold text-xl px-7 py-[1.19rem] bg-purple-500 bg-gradient-to-r from-purple-500 to-indigo-600 border rounded-lg text-white mt-8">Get Started</button>

      </div>

      <div className="mt-[3.75rem]">
        <img className=" w-[51rem] h-[46.5rem]" src="user.png" alt="" />
      </div>

    </div>
  );
};

export default Banner;
