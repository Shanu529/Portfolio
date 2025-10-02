// import React from "react";

// function Hero() {
//   return (
//     <div className="bg-[url('/img/bg2.jpg')] h-screen bg-cover bg-center z-10">
//       <div className="flex items-center flex-col justify-center h-full text-white text-4xl font-bold">
//         <p className="p-2">Welcome to My Portfolio</p>
//         <p className="p-2">hi i'm web developer</p>
//         <p className="text-sm p-5 w-1/2 text-center font-thin">
//           {/* write bio of yourself here */}
//           I am a passionate web developer with experience in creating dynamic and responsive websites. I love coding and continuously learning new technologies to enhance my skills.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Hero;

// Hero.jsx

// import React from "react";

// function Hero() {
//   return (
//     <div className="relative h-screen bg-[url('/img/bg2.jpg')] bg-cover bg-center">
//       {/* Overlay for readability */}
//       <div className="absolute inset-0 bg-black/50 z-0"></div>

//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-0 text-white">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
//           Welcome to My Portfolio
//         </h1>
//         <h2 className="text-2xl md:text-3xl mb-6 drop-shadow-md">
//           Hi, I'm a Web Developer
//         </h2>
//         <p className="text-sm md:text-base max-w-xl font-light drop-shadow-sm mb-8">
//           I am a passionate web developer with experience in creating dynamic and responsive websites. I love coding and continuously learning new technologies to enhance my skills.
//         </p>
//         <button className="px-6 py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors duration-300">
//           View My Work
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import { Link, Mail } from "lucide-react";

function Hero() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden">
      {/* Subtle layered dark gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black -z-20"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-30 -z-10"></div>

      {/* Neon glowing accent blobs (cyan/blue subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-1200 top-20 left-10 sm:top-28 sm:left-20"></span>
        <span className="absolute w-48 sm:w-64 h-48 sm:h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-3200 top-32 right-10 sm:top-40 sm:right-20"></span>
      </div>

      {/* Content */}
      <div className="relative  z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 md:px-0 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-5 animate-fadeInUp delay-100 bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
          Hello, I'm Shanu Chhetri
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-300 mb-8 animate-fadeInUp delay-300">
          Web Developer & Problem Solver
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 font-light mb-12 animate-fadeInUp delay-500 max-w-lg px-2 sm:px-0">
          I build dynamic, responsive websites and love turning ideas into
          reality using modern web technologies like React, Node.js, and
          Tailwind CSS.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fadeInUp delay-700">
          <a
            href="https://github.com/Shanu529"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-cyan-600 text-black font-semibold shadow-md 
             transform transition hover:bg-cyan-500 hover:scale-105 hover:rotate-2 
             focus:outline-none inline-block"
          >
            View My Work
          </a>

          <div className="flex justify-center">
            <a
              href="mailto:shanu.chhetri529@gmail.com?subject=Portfolio%20Contact&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-7 py-3 border border-cyan-500 text-cyan-500 rounded-full shadow-lg transition hover:bg-cyan-500 hover:text-black"
            >
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Send Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-10 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 9s infinite ease-in-out;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
}

export default Hero;
