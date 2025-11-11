
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
import { Link, useLoaderData } from "react-router";
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
    <div className="mx-auto w-full overflow-x-hidden ">
      {/* 🌄 Banner */}
      <Banner />

      {/* 🏠 Intro Section */}
      <section className="mb-8 w-11/12 mx-auto text-center ">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold pt-6 text-black">
          Welcome To The World Of Your Destination
        </h1>
        <p className="text-sm sm:text-base  text-black mt-2">
          Discover Your Journey With Us And Explore Bright Opportunities
        </p>
      </section>

      {/* 💼 Popular Jobs Section */}
      {/* <section className="py-8 relative w-11/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-black text-center md:text-left">
          Popular Jobs
        </h2>

        {showJobs.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No jobs available</p>
        ) : (
          <div className="relative">
           
            <div
              className="scroll-container flex gap-1 overflow-x-scroll snap-x snap-mandatory pb-4 px-1 sm:px-2"
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
                  className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] shrink-0 snap-center"
                >
                  <Card job={job} />
                </div>
              ))}
            </div>
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
      </section> */}
      <section className="py-8 w-11/12 mx-auto">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-black text-center md:text-left">
    Popular Jobs
  </h2>

  {showJobs.length === 0 ? (
    <p className="text-gray-500 text-center py-8">No jobs available</p>
  ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {showJobs.slice(0, 6).map((job) => (
        <Card key={job._id} job={job} />
      ))}
    </div>
  )}
</section>


      

      <section className="py-10 px-4">
        <div className="max-w-[1240px] mx-auto bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] rounded-lg overflow-hidden flex flex-col-reverse md:flex-row items-center">

          {/* Text Section */}
          <div className="p-6 md:p-20 w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-bold text-3xl sm:text-4xl text-white mb-4">
              Need help with Vibe <br /> coding?
            </h1>
            <p className="font-semibold text-white mb-6 text-sm sm:text-base">
              Get matched with the right expert to keep building and <br className="hidden sm:block" /> marketing your project
            </p>
            <Link to="/all-jobs" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600e text-white font-bold p-3 rounded-lg ">
              Find An Expert
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center">
            <div className="w-[300px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg 
            bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] p-2">
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={'https://i.ibb.co/jkXsmrdn/pexels-caio-56759.jpg'}
                alt="Vibe coding"
              />
            </div>
          </div>

        </div>
      </section>

      {/* <section>
        <div className="w-[1140px] h-[400px] rounded-lg mx-auto bg-gradient-to-r from-[#ed4264] to-[#ffedbc]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center py-5">
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-60 h-40 rounded-lg flex pt-5 justify-center font-semibold text-lg">
              <div>
                <h2>Web Development</h2>
                <img className="w-30 h-27" src={'https://i.ibb.co.com/LXcsMCgT/coding.png'} alt="" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-60 h-40 rounded-lg flex items-center justify-center font-semibold text-lg">
              <div>
                <h2>Mobile Development</h2>
                <img className="w-30 h-27" src={'https://i.ibb.co.com/BVP0sBPv/smartphone.png'} alt="" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-60 h-40 rounded-lg flex items-center justify-center font-semibold text-lg">
              <div>
                <h2>Data Science</h2>
                <img className="w-30 h-27" src={'https://i.ibb.co.com/7t8PtKPT/monitor.png'} alt="" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-60 h-40 rounded-lg flex items-center justify-center font-semibold text-lg">
              <div>
                <h2>Digital Marketing</h2>
                <img className="w-30 h-27" src={'https://i.ibb.co.com/VYd4Y0yT/bullhorn.png'} alt="" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-60 h-40 rounded-lg flex items-center justify-center font-semibold text-lg">
              <div>
                <h2>Graphic Design</h2>
                <img className="w-30 h-27" src={'https://i.ibb.co.com/CKS4W0Qq/layers.png'} alt="" />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-60 h-40 rounded-lg flex items-center justify-center font-semibold text-lg">
              <div>
                <h2>Content Writing</h2>
                <img className="w-30 h-27" src={'https://i.ibb.co.com/P0PgyCq/seo.png'} alt="" />
              </div>
            </div>
          </div>

        </div>
      </section> */}

      <section className="px-4 py-8">
        <h1 className="font-bod text-6xl text-center mb-10" >Job Category</h1>
        <div className="max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-[#ed4264] to-[#ffedbc] p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

            {/* Card 1 */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
              <h2 className="text-lg mb-2">Web Development</h2>
              <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/LXcsMCgT/coding.png" alt="Web Development" />
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
              <h2 className="text-lg mb-2">Mobile Development</h2>
              <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/BVP0sBPv/smartphone.png" alt="Mobile Development" />
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
              <h2 className="text-lg mb-2">Data Science</h2>
              <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/7t8PtKPT/monitor.png" alt="Data Science" />
            </div>

            {/* Card 4 */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
              <h2 className="text-lg mb-2">Digital Marketing</h2>
              <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/VYd4Y0yT/bullhorn.png" alt="Digital Marketing" />
            </div>

            {/* Card 5 */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
              <h2 className="text-lg mb-2">Graphic Design</h2>
              <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/CKS4W0Qq/layers.png" alt="Graphic Design" />
            </div>

            {/* Card 6 */}
            <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
              <h2 className="text-lg mb-2">Content Writing</h2>
              <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/P0PgyCq/seo.png" alt="Content Writing" />
            </div>
          </div>
        </div>
      </section>


      {/* 📰 Newsletter */}
      <Newsletter />
    </div>
  );
}
