import { useState, useEffect } from "react";
import JobsCard from "../components/JobsCard";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState(""); // sort state

  // Fetch jobs from backend whenever sort changes
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        let url = "https://freelance-market-place-iota.vercel.app/all-jobs";
        if (sort) url += `?sort=${sort}`; // append query param if sort is set

        const res = await fetch(url);
        const data = await res.json();
        setJobs(data);
      } catch (err) {
        console.error("Error fetching jobs:", err);
      }
    };

    fetchJobs();
  }, [sort]); // refetch when sort changes

  return (
    <div className="p-4 bg-gradient-to-r from-[#144357] to-[#f29492] min-h-screen">
      <h2 className="text-2xl font-bold mb-4">All Jobs</h2>

      {/* Sort Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Sort by Date:</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border px-2 py-1"
        >
          <option value="">None</option>
          <option value="asc">Oldest First</option>
          <option value="desc">Newest First</option>
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
}
