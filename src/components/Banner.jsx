// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import GameCard from "./GameCard";

// const Banner = () => {
//   const [games, setGames] = useState([]);
//   const sliderRef = useRef(null);
//   useEffect(() => {
//     fetch("/games.json")
//       .then((res) => res.json())
//       .then((data) => setGames(data))
//       .catch((err) => console.error("Error loading games:", err));
//   }, []);
//   useEffect(() => {
//     if (games.length > 0 && sliderRef.current) {
//       const slider = sliderRef.current;
//       const totalWidth = slider.scrollWidth / 2; 

//       gsap.to(slider, {
//         x: `-${totalWidth}px`,
//         duration: 49,
//         ease: "none",
//         repeat: -1, 
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), 
//         },
//       });
//     }
//   }, [games]);

//   return (
//     <div
//       className="hero min-h-screen relative overflow-hidden w-full"
//       style={{
//         backgroundImage:
//           "url(https://i.ibb.co.com/wr7f2nkg/mario-gogh-VBLHICVh-l-I-unsplash.jpg)",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="hero-overlay bg-opacity-60"></div>

//       <div className="hero-content text-neutral-content text-center">
//         <div className="max-w-3xl">
//           <h1 className="mb-5 text-5xl font-bold text-center">Welcome to GameHub</h1>
//           <p className="mb-8 font-semibold text-gray-400 text-center">
//             Explore the latest and most popular mobile phones and computer games from all over the
//             world. Enjoy sliding through your favorite titles!
//           </p>
//           <div className="relative overflow-hidden w-full">
//             <div ref={sliderRef} className="flex w-max gap-4">
//               {[...games, ...games].map((game, i) => (
//                 <div key={i} className="w-72 flex-shrink-0">
//                   <GameCard game={game} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import GameCard from "./GameCard";

// const Banner = () => {
//   const [games, setGames] = useState([]);
//   const [currentBg, setCurrentBg] = useState(0);
//   const sliderRef = useRef(null);

//   // Multiple background images array
//   const backgroundImages = [
//     "https://i.ibb.co.com/wr7f2nkg/mario-gogh-VBLHICVh-l-I-unsplash.jpg",
//     "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
//     "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
//     "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//   ];

//   // Fetch games data
//   useEffect(() => {
//     fetch("/games.json")
//       .then((res) => res.json())
//       .then((data) => setGames(data))
//       .catch((err) => console.error("Error loading games:", err));
//   }, []);

//   // GSAP animation for game cards slider - Responsive duration
//   useEffect(() => {
//     if (games.length > 0 && sliderRef.current) {
//       const slider = sliderRef.current;
//       const totalWidth = slider.scrollWidth / 2;

//       // Responsive duration based on screen size
//       const duration = window.innerWidth < 768 ? 30 : 49;

//       gsap.to(slider, {
//         x: `-${totalWidth}px`,
//         duration: duration,
//         ease: "none",
//         repeat: -1,
//         modifiers: {
//           x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
//         },
//       });
//     }
//   }, [games]);

//   // Auto change background image every 5 seconds
//   useEffect(() => {
//     const bgInterval = setInterval(() => {
//       setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
//     }, 5000);

//     return () => clearInterval(bgInterval);
//   }, []);

//   return (
//     <div
//       className="min-h-screen relative overflow-hidden w-full transition-all duration-1000"
//       style={{
//         backgroundImage: `url(${backgroundImages[currentBg]})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundAttachment: "fixed", // Better for mobile
//       }}
//     >
//       {/* Background Overlay with responsive opacity */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70"></div>

//       <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 md:py-16">
//         <div className="max-w-6xl w-full mx-auto">
//           {/* Text Content */}
//           <div className="text-center mb-6 md:mb-12">
//             <h1 className="mb-3 md:mb-5 text-3xl md:text-5xl lg:text-6xl font-bold text-white">
//               Hire the best freelancers for any job, online.
//             </h1>
//             <p className="text-sm md:text-base lg:text-lg font-semibold text-gray-300 max-w-2xl mx-auto px-4">
//               Explore the latest and most popular mobile phones and computer games from all over the
//               world. Enjoy sliding through your favorite titles!
//             </p>
//           </div>

//           {/* Game Cards Slider - Responsive container */}
//           <div className="relative overflow-hidden w-full mt-4 md:mt-8">
//             <div ref={sliderRef} className="flex w-max gap-3 md:gap-4 lg:gap-6">
//               {[...games, ...games].map((game, i) => (
//                 <div 
//                   key={i} 
//                   className="flex-shrink-0 w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <GameCard game={game} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Background Image Indicators - Responsive size */}
//           <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
//             {backgroundImages.map((_, index) => (
//               <button
//                 key={index}
//                 className={`transition-all duration-300 ${
//                   index === currentBg 
//                     ? 'bg-white scale-110 md:scale-125' 
//                     : 'bg-white/50 hover:bg-white/70'
//                 } ${
//                   window.innerWidth < 640 ? 'w-2 h-2' : 'w-3 h-3'
//                 } rounded-full`}
//                 onClick={() => setCurrentBg(index)}
//                 aria-label={`Change background to image ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Optional: Manual navigation arrows for mobile */}
//           <div className="flex justify-center mt-4 md:hidden">
//             <button 
//               onClick={() => setCurrentBg((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)}
//               className="p-2 mx-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//             >
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button 
//               onClick={() => setCurrentBg((prev) => (prev + 1) % backgroundImages.length)}
//               className="p-2 mx-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
//             >
//               <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const Banner = () => {
  const [currentBg, setCurrentBg] = useState(0);

  // Multiple background images array
  const backgroundImages = [
    "https://i.ibb.co.com/wr7f2nkg/mario-gogh-VBLHICVh-l-I-unsplash.jpg",
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ];

  // Auto change background image every 5 seconds
  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(bgInterval);
  }, []);

  return (
    <div
      className="min-h-screen relative overflow-hidden w-full transition-all duration-1000"
      style={{
        backgroundImage: `url(${backgroundImages[currentBg]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay with responsive opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 md:from-black/70 md:via-black/50 md:to-black/70"></div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-8 md:py-16">
        <div className="max-w-4xl w-full">
          {/* Text Content */}
          <div className="text-center">
            <h1 className="mb-4 md:mb-6 text-4xl md:text-6xl lg:text-7xl font-bold text-white">
              Hire the best freelancers for any job, online.
            </h1>
            <p className="text-base md:text-xl lg:text-2xl font-semibold text-gray-300 max-w-3xl mx-auto px-4 mb-8">
              Find the perfect talent for your projects. Browse through thousands of job listings and connect with top freelancers worldwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link to="/addjobs" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto">
                Post a Job --
              </Link>
              {/* <button className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 border border-white/30 w-full sm:w-auto">
                Browse Jobs
              </button> */}
              <Link to="/all-jobs" className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 border border-white/30 w-full sm:w-auto">Browse Jobs</Link>
            </div>
          </div>

          {/* Background Image Indicators - Responsive size */}
          <div className="flex justify-center mt-12 md:mt-16 space-x-2 md:space-x-3">
            {backgroundImages.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 ${index === currentBg
                    ? 'bg-white scale-110 md:scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                  } ${window.innerWidth < 640 ? 'w-2 h-2' : 'w-3 h-3'
                  } rounded-full`}
                onClick={() => setCurrentBg(index)}
                aria-label={`Change background to image ${index + 1}`}
              />
            ))}
          </div>

          {/* Optional: Manual navigation arrows for mobile */}
          <div className="flex justify-center mt-6 md:hidden">
            <button
              onClick={() => setCurrentBg((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length)}
              className="p-3 mx-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setCurrentBg((prev) => (prev + 1) % backgroundImages.length)}
              className="p-3 mx-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-16">
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">50K+</div>
              <div className="text-sm md:text-base text-gray-300">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">100K+</div>
              <div className="text-sm md:text-base text-gray-300">Freelancers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">95%</div>
              <div className="text-sm md:text-base text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-sm md:text-base text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;