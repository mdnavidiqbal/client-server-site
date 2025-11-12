
// import React from "react";
// import Banner from "../components/Banner";
// import Newsletter from "../components/Newsletter";
// import { Link, useLoaderData } from "react-router";
// import Card from "../components/Card";

// export default function Home() {
//   const data = useLoaderData();
//   const showJobs = data.slice(0, 6);

//   const scrollLeft = () => {
//     const container = document.querySelector(".scroll-container");
//     container.scrollBy({ left: -300, behavior: "smooth" });
//   };

//   const scrollRight = () => {
//     const container = document.querySelector(".scroll-container");
//     container.scrollBy({ left: 300, behavior: "smooth" });
//   };

//   return (
//     <div className="mx-auto w-full overflow-x-hidden ">
//       <Banner />
//       <section className="mb-8 w-11/12 mx-auto text-center ">
//         <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold pt-6 text-black">
//           Welcome To The World Of Your Destination
//         </h1>
//         <p className="text-sm sm:text-base  text-black mt-2">
//           Discover Your Journey With Us And Explore Bright Opportunities
//         </p>
//       </section>

//       <section className="py-8 w-11/12 mx-auto">
//   <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-black text-center md:text-left">
//     Popular Jobs
//   </h2>

//   {showJobs.length === 0 ? (
//     <p className="text-gray-500 text-center py-8">No jobs available</p>
//   ) : (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {showJobs.slice(0, 6).map((job) => (
//         <Card key={job._id} job={job} />
//       ))}
//     </div>
//   )}
// </section>


      

//       <section className="py-10 px-4">
//         <div className="max-w-[1240px] mx-auto bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] rounded-lg overflow-hidden flex flex-col-reverse md:flex-row items-center">

//           {/* Text Section */}
//           <div className="p-6 md:p-20 w-full md:w-1/2 text-center md:text-left">
//             <h1 className="font-bold text-3xl sm:text-4xl text-white mb-4">
//               Need help with Vibe <br /> coding?
//             </h1>
//             <p className="font-semibold text-white mb-6 text-sm sm:text-base">
//               Get matched with the right expert to keep building and <br className="hidden sm:block" /> marketing your project
//             </p>
//             <Link to="/all-jobs" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600e text-white font-bold p-3 rounded-lg ">
//               Find An Expert
//             </Link>
//           </div>

//           {/* Image Section */}
//           <div className="w-full md:w-1/2 p-6 md:p-10 flex justify-center">
//             <div className="w-[300px] sm:w-[400px] rounded-lg overflow-hidden shadow-lg 
//             bg-gradient-to-r from-[#fbd3e9] to-[#bb377d] p-2">
//               <img
//                 className="w-full h-auto object-cover rounded-lg"
//                 src={'https://i.ibb.co/jkXsmrdn/pexels-caio-56759.jpg'}
//                 alt="Vibe coding"
//               />
//             </div>
//           </div>

//         </div>
//       </section>

//       <section className="px-4 py-8">
//         <h1 className="font-bod text-6xl text-center mb-10" >Job Category</h1>
//         <div className="max-w-6xl mx-auto rounded-lg bg-gradient-to-r from-[#ed4264] to-[#ffedbc] p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">

//             {/* Card 1 */}
//             <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
//               <h2 className="text-lg mb-2">Web Development</h2>
//               <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/LXcsMCgT/coding.png" alt="Web Development" />
//             </div>

//             {/* Card 2 */}
//             <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
//               <h2 className="text-lg mb-2">Mobile Development</h2>
//               <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/BVP0sBPv/smartphone.png" alt="Mobile Development" />
//             </div>

//             {/* Card 3 */}
//             <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
//               <h2 className="text-lg mb-2">Data Science</h2>
//               <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/7t8PtKPT/monitor.png" alt="Data Science" />
//             </div>

//             {/* Card 4 */}
//             <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
//               <h2 className="text-lg mb-2">Digital Marketing</h2>
//               <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/VYd4Y0yT/bullhorn.png" alt="Digital Marketing" />
//             </div>

//             {/* Card 5 */}
//             <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
//               <h2 className="text-lg mb-2">Graphic Design</h2>
//               <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/CKS4W0Qq/layers.png" alt="Graphic Design" />
//             </div>

//             {/* Card 6 */}
//             <div className="bg-gradient-to-r from-[#c04848] to-[#480048] w-full sm:w-60 h-44 rounded-lg flex flex-col items-center justify-center text-white font-semibold text-center p-4 transition-transform duration-300 hover:scale-105">
//               <h2 className="text-lg mb-2">Content Writing</h2>
//               <img className="w-16 h-16 mx-auto" src="https://i.ibb.co.com/P0PgyCq/seo.png" alt="Content Writing" />
//             </div>
//           </div>
//         </div>
//       </section>


//       {/* Newsletter */}
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
  
  // Safe data access - check if data is array
  const showJobs = Array.isArray(data) ? data.slice(0, 6) : [];
  console.log("Loaded data:", data); // Debugging er jonno

  const scrollLeft = () => {
    const container = document.querySelector(".scroll-container");
    container?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".scroll-container");
    container?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="mx-auto w-full overflow-x-hidden ">
      <Banner />
      <section className="mb-8 w-11/12 mx-auto text-center ">
        <h1 className="text-4xl sm:text-3xl md:text-4xl font-bold pt-6 text-black">
          Welcome To The World Of Your Destination
        </h1>
        <p className="text-sm sm:text-base  text-black mt-2">
          Discover Your Journey With Us And Explore Bright Opportunities
        </p>
      </section>

      <section className="py-8 w-11/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-black text-center md:text-left">
          Popular Jobs
        </h2>

        {showJobs.length === 0 ? (
          <p className="text-gray-500 text-center py-8">No jobs available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showJobs.map((job) => (
              <Card key={job._id} job={job} />
            ))}
          </div>
        )}
      </section>

      {/* ... rest of your code remains same ... */}
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

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}