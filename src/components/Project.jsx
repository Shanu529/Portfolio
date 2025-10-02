// import React from "react";

// function Project() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-20">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//         My Work Experiences
//       </h2>

//       {/* Projects Grid */}
//       <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//         <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition">
//           <h3 className="text-xl font-bold">Portfolio Website</h3>
//           <p className="text-sm mt-2">React + Tailwind CSS</p>
//           <img
//             src="/img/project1img.webp"
//             alt="Portfolio Screenshot"
//             className="rounded-lg mt-4"
//           />
//         </div>

//         <div className="bg-white text-black p-5 rounded-xl shadow-lg hover:scale-105 transition">
//           <h3 className="text-xl font-bold">AI Image Generator</h3>
//           <p className="text-sm mt-2">MERN + ClipDrop API</p>
//           <img
//             src="/img/Screenshot 2025-09-11 214700.png"
//             alt="AI Generator"
//             className="rounded-lg mt-4"
//           />
//         </div>

//         <div className="bg-gray-800 p-5 rounded-xl shadow-lg hover:scale-105 transition">
//           <h3 className="text-xl font-bold">Spotify Clone</h3>
//           <p className="text-sm mt-2">React (Frontend Only)</p>
//           <img
//             src="/img/spotifycover.png"
//             alt="Spotify Clone"
//             className="rounded-lg mt-4"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Project;

import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import ProjectDetails from "@/pages/ProjectDetails";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    tech: "React + Tailwind CSS",
    image: "/public/img/project portfolio.png",
  },
  {
    id: 2,
    title: "AI Image Generator",
    tech: "MERN + ClipDrop API",
    image: "/public/img/Your paragraph text (2).png",
  },
  {
    id: 3,
    title: "Spotify Clone",
    tech: "React (Frontend Only)",
    image: "/img/spotifycover.png",
  },
];

function Project() {
  const [active, setActive] = useState(1);

  const navigate = useNavigate();
  return (
    <div className="bg-black text-white p-10   flex flex-col md:flex-row items-start justify-center gap-10 py-14 md:px-32 ">
      {/* Left Tabs */}

      <div className="flex flex-col gap-4 w-full md:w-1/3">
        <h2 className="text-lg md:text-2xl font-bold mb-6">
          My Work{" "}
          <span className="bg-white text-black px-2 py-1 rounded-md">
            Experience
          </span>
        </h2>
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setActive(project.id)}
            className={`p-4 rounded-xl text-left transition-all duration-300 ${
              active === project.id
                ? "bg-white text-black font-semibold"
                : "bg-cyan-900  hover:bg-cyan-400 "
            }`}
          >
            <p className="text-lg">{project.title}</p>
            <span className="text-sm opacity-80">{project.tech}</span>
          </button>
        ))}
      </div>

      {/* Right Preview */}
      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        <img
          src={projects.find((p) => p.id === active).image}
          alt={projects.find((p) => p.id === active).title}
          className="rounded-2xl shadow-lg w-full h-auto object-cover col-span-2 items-center flex"
        />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-5 mt-5">
          <button
            onClick={() => navigate("/ProjectDetails")}
            className="px-4 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-400 transition-all hover:scale-105 duration-700 w-full sm:w-auto text-center"
          >
            See Project Details
          </button>

          <div className="flex justify-center gap-2 sm:gap-5 items-center">
            <h2 className="text-center text-sm sm:text-base">
              <a
                href="https://github.com/Shanu529"
                className="hover:text-cyan-400 transition"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Repository
              </a>
            </h2>
            <a
              href="https://github.com/Shanu529"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-10 h-10 transition-all hover:scale-125 duration-700"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 016 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
