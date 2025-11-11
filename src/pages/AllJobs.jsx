import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import JobsCard from "../components/JobsCard";
// import axios from "../api/axiosInstance";

export default function AllJobs() {
    const data = useLoaderData();
    console.log(data);
  

  return (
    <div className="p-4 bg-gradient-to-r from-[#144357] to-[#f29492]">
      <h2 className="text-2xl font-bold mb-4">All Jobs</h2>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort by Date:</label>
        <select
          onChange={(e) => setSort(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="">None</option>
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
            data.map(job => <JobsCard key={job._id} job={job} />)
        }
        
      </div>
    </div>
  );
}


