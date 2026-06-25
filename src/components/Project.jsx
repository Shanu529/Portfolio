import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: "ParaDox AI – Microservices RAG PDF Platform",
    tech: "React • TypeScript • Node.js • Express • python • FastAPI • PostgreSQL • Prisma • Redis • BullMQ • Kafka • Docker • ChromaDB • ",
    image: "/img/paradox.png",
    repo: "https://github.com/Shanu529/pdf-rag-system.git", // update if different
  },

  {
    id: 2,
    title: "ShadowChat – Anonymous Real-Time Chat Platform",
    tech: "Next.js • Node.js • Typescript • Express • Socket.IO • Redis • JWT • Responsive UI",
    image: "/img/shadowchat.png",
    repo: "https://github.com/Shanu529/Shadow-Chat.git", // update if different
    live: "https://www.shadowchat.in",
  },

  {
    id: 3,
    title: "GitMe – Custom Git-like Version Control System",
    tech: "Node.js • Express • MongoDB • JWT • Redis • Yargs CLI",
    image: "/img/gitme.png",
    repo: "https://github.com/Shanu529/gitme",
  },

  {
    id: 4,
    title: "GenBot – AI Chatbot Platform",
    tech: "React • TypeScript • Node.js • Express • Redis • Groq API • JWT",
    image: "/img/chatbotnew.jpeg",
    repo: "https://github.com/Shanu529/GenBot-LLM-Application",
  },

  {
    id: 5,
    title: "NextGen AI – Prompt-to-Image Generator",
    tech: "React • Node.js • Express • MongoDB • JWT • AI API • Payment Integration",
    image: "/img/nextgen.png",
    repo: "https://github.com/Shanu529/NextGen-.AI",
  },

  {
    id: 6,
    title: "Short Video Sharing Platform",
    tech: "React • Node.js • Express • MongoDB • JWT • Cloudinary • Media Upload",
    image: "/img/shortVideo2.png",
    repo: "https://github.com/Shanu529/video-Platform",
  },
];

function Project() {
  const [active, setActive] = useState(1);
  const navigate = useNavigate();
  const activeProject = projects.find((p) => p.id === active);
  const [showAll, setShowAll] = useState(false);

  const visibility =  showAll ? projects : projects.slice(0, 4);

  return (
    <div className=" bg-black
    text-white py-14 px-5 md:px-20">
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 max-w-7xl mx-auto">

        <div className="w-full md:w-1/3 flex md:flex-col gap-4 md:gap-5 overflow-x-auto md:overflow-visible pb-2 md:pb-0">

          <h2 className="hidden md:block text-3xl font-bold mb-4">
            My Work{" "}
            <span className="bg-cyan-500 text-black px-3 py-1 rounded-md">
              Experience
            </span>
          </h2>

          {visibility.map((project) => (
            <button
              key={project.id}
              onClick={() => setActive(project.id)}
              className={`min-w-[220px] md:min-w-0 p-4 md:p-5 rounded-2xl text-left transition-all duration-300 border ${
                active === project.id
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-white/5 border-white/10 hover:bg-cyan-500/20 hover:border-cyan-400"
              }`}
            >
              <p className="text-sm md:text-lg font-semibold">
                {project.title}
              </p>
              <span className="text-xs md:text-sm opacity-70">
                {project.tech}
              </span>
            </button>
          ))}
          {
            projects.length>4 && (
              <button
              onClick={()=>setShowAll(!showAll)}
              className="md:mt-4 md:px-4 py-2 border mt-2 px-2
              hover:bg-cyan-500/20 hover:border-cyan-400
              border-white/15 rounded-lg"
              >
                {showAll ? "Show less" : "See more"}
              </button>
            )
          }
        </div>

        <div className="flex-1 flex flex-col items-center">

          <h2 className="md:hidden text-2xl font-bold mb-6 text-center">
            My Work{" "}
            <span className="bg-cyan-500 text-black px-2 py-1 rounded-md">
              Experience
            </span>
          </h2>

          <div className="w-full bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex justify-center items-center p-4">

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="max-h-[500px] w-auto object-contain"
            />

          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full sm:w-auto">
            <button
              onClick={() => navigate("/ProjectDetails")}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium hover:opacity-90 transition w-full sm:w-auto"
            >
              View Details
            </button>

            <a
              href={activeProject.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition text-center w-full sm:w-auto"
            >
              GitHub Repository
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Project;