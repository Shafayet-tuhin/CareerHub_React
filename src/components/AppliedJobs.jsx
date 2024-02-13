import React, { useContext } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { jobContext } from "../contexts/MyContext";
import SingleApplied from "./SingleApplied";

const AppliedJobs = () => {
  const { selectedJobs,filteredJob, handleFilter } = useContext(jobContext);

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    handleFilter(selectedValue);
  };

  return (
    <div className="container mx-auto mt-[3.75rem] font-abc">
      <Nav />
      <div className="flex flex-col items-center">
        <p className="text-[2rem] font-extrabold text-[#1A1919]  mt-[7.69rem]">
          Job Details
        </p>
      </div>

      <div className="flex justify-end mt-[8.6rem]">
        <select
          id="time"
          className="py-3 pl-4 bg-gray-300 border rounded-md text-xl font-semibold"
          defaultValue="All Site"
          onClick={handleChange}
        >
          <option value="all">All Site</option>
          <option value="remote">Remote</option>
          <option value="onsite">OnSite</option>
        </select>
      </div>

      <div>
        {
          filteredJob.length > 0 ?  filteredJob.map((item) => (
            <SingleApplied key={item.id} item={item} />
          )) :  selectedJobs.map((item) => (
            <SingleApplied key={item.id} item={item} />
          ))
        }
      </div>

      <Footer />
    </div>
  );
};

export default AppliedJobs;
