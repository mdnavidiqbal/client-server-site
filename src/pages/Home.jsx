
// import React, { useEffect, useState, useRef } from "react";
// import { useLocation } from "react-router";
// import Newsletter from "../components/Newsletter";
// import Banner from "../components/Banner";
// import GameCard from "../components/GameCard";

// export default function Home() {
//   const [games, setGames] = useState([]);
//   const location = useLocation();
//   const popularRef = useRef(null);

//   const query = new URLSearchParams(location.search);
//   const showPopularOnly = query.get("popular") === "true";

//   useEffect(() => {
//     fetch("/games.json")
//       .then((res) => res.json())
//       .then((data) => setGames(data))
//       .catch((err) => console.error(err));
//   }, []);

//   useEffect(() => {
//     if (showPopularOnly && popularRef.current) {
//       popularRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [showPopularOnly, games]);

//   const displayGames = showPopularOnly ? games.slice(0, 3) : games;

//   return (
//     <div className="mx-auto" >
//       <Banner />
//       <section className="mb-8">
//         <h1 className="text-3xl font-bold text-center pt-5 ">Welcome To The World OF YOUR DESTINATION</h1>
//         <p className="text-sm text-gray-600 text-center">
//           Dicover Your Journey With Us Also Find Out Your Bright Future
//         </p>
//       </section>

//       <section className="w-11/12 mx-auto" id="popular" ref={popularRef}>
//         <h2 className="text-2xl font-semibold mb-4">Popular Games</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           {displayGames.map((game) => (
//             <GameCard key={game.id} game={game} />
//           ))}
//         </div>
//         <Newsletter />
//       </section>
//     </div>
//   );
// }

// import React from "react";
// import Banner from "../components/Banner";
// import Newsletter from "../components/Newsletter";
// import AllJobs from "./AllJobs";
// import { useLoaderData } from "react-router";
// import JobsCard from "../components/JobsCard";
// import Card from "../components/Card";


// export default function Home() {
//   const data = useLoaderData()
//   console.log(data);
//   const showJobs = data.slice(0, 6);
//   return (
//     <div className="mx-auto">
//       <Banner />

//       <section className="mb-8 w-11/12 mx-auto">
//         <h1 className="text-3xl font-bold text-center pt-5">
//           Welcome To The World Of Your Destination
//         </h1>
//         <p className="text-sm text-gray-600 text-center">
//           Discover Your Journey With Us And Explore Bright Opportunities
//         </p>
//       </section>
//       {/* <section>
//         <h2 className="text-2xl font-semibold mb-4">Popular Jobs</h2>
//          {showJobs.length === 0 ? (
//           <p>No jobs available</p>
//         ) : (
//           <div className="flex md:grid-cols-2 lg:grid-cols-3 gap-1">
//             {showJobs.map((job) => (
//               <Card key={job._id} job={job} />
//             ))}
//           </div>
//         )}
//       </section> */}

//       <section className="py-8 relative">
//   <h2 className="text-6xl font-semibold mb-6 mx-10">Popular Jobs</h2>
  
//   {showJobs.length === 0 ? (
//     <p className="text-gray-500 text-center py-8">No jobs available</p>
//   ) : (
//     <div className="relative">
//       {/* Cards Container - Scrollbar removed */}
//       <div className="flex gap-4 overflow-hidden">
//         {showJobs.map((job) => (
//           <div key={job._id} className="min-w-[300px] flex-shrink-0">
//             <Card job={job} />
//           </div>
//         ))}
//       </div>
      
//       {/* Left Arrow */}
//       <button 
//         onClick={() => {
//           const container = document.querySelector('.flex.gap-4.overflow-hidden');
//           container.scrollBy({ left: -300, behavior: 'smooth' });
//         }}
//         className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
//       >
//         <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//         </svg>
//       </button>
      
//       {/* Right Arrow */}
//       <button 
//         onClick={() => {
//           const container = document.querySelector('.flex.gap-4.overflow-hidden');
//           container.scrollBy({ left: 300, behavior: 'smooth' });
//         }}
//         className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
//       >
//         <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//         </svg>
//       </button>
//     </div>
//   )}
// </section>

//       <Newsletter />
//     </div>
//   );
// }

import React from "react";
import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter";
import { useLoaderData } from "react-router";
import Card from "../components/Card";

export default function Home() {
  const data = useLoaderData();
  const showJobs = data.slice(0, 6);

  const scrollLeft = () => {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".scroll-container");
    container.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full overflow-x-hidden">
      {/* 🌄 Banner */}
      <Banner />

      {/* 🏠 Intro Section */}
      <section className="mb-8 w-11/12 mx-auto text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pt-6 text-gray-800">
          Welcome To The World Of Your Destination
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-2">
          Discover Your Journey With Us And Explore Bright Opportunities
        </p>
      </section>

      {/* 💼 Popular Jobs Section */}
      <section className="py-8 relative w-11/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-900 text-center md:text-left">
          Popular Jobs
        </h2>

        {showJobs.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No jobs available</p>
        ) : (
          <div className="relative">
            {/* Cards Container (Scrollbar Hidden via inline CSS) */}
            <div
              className="scroll-container flex gap-4 overflow-x-scroll snap-x snap-mandatory pb-4 px-1 sm:px-2"
              style={{
                scrollbarWidth: "none", // Firefox
                msOverflowStyle: "none", // IE and Edge
              }}
              onScroll={(e) => {
                e.currentTarget.style.scrollbarWidth = "none";
              }}
            >
              <style>{`
                .scroll-container::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {showJobs.map((job) => (
                <div
                  key={job._id}
                  className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] flex-shrink-0 snap-center"
                >
                  <Card job={job} />
                </div>
              ))}
            </div>

            {/* ⬅ Left Arrow */}
            <button
              onClick={scrollLeft}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md items-center justify-center hover:bg-gray-100 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* ➡ Right Arrow */}
            <button
              onClick={scrollRight}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full shadow-md items-center justify-center hover:bg-gray-100 transition-all duration-200"
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* 📰 Newsletter */}
      <Newsletter />
    </div>
  );
}
