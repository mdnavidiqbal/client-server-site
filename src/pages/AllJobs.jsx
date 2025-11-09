import { useEffect, useState } from "react";
import { Link } from "react-router";
// import axios from "../api/axiosInstance";

export default function AllJobs() {
  const [jobs, setJobs] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    axios.get(`/jobs?sort=${sort}`).then((res) => setJobs(res.data));
  }, [sort]);

  return (
    <div className="p-4">
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
        {jobs.map((job) => (
          <div key={job._id} className="border p-4 rounded shadow">
            <h3 className="font-bold text-lg">{job.title}</h3>
            <p>{job.category}</p>
            <p className="text-sm text-gray-500">Deadline: {job.deadline}</p>
            <p>
              ${job.minimumPrice} - ${job.maximumPrice}
            </p>
            <Link
              to={`/job/${job._id}`}
              className="inline-block mt-2 bg-blue-500 text-white px-3 py-1 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

