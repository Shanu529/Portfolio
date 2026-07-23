import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight, Code2, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ParaDox AI – Microservices RAG PDF Platform",
    tag: "GenAI & Backend",
    techList: ["React", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "Kafka", "Docker", "ChromaDB"],
    image: "/img/paradox.png",
    repo: "https://github.com/Shanu529/pdf-rag-system.git",
  },
  {
    id: 2,
    title: "ShadowChat – Anonymous Real-Time Chat",
    tag: "Full Stack",
    techList: ["Next.js", "Node.js", "Socket.IO", "Redis", "JWT"],
    image: "/img/shadowchat.png",
    repo: "https://github.com/Shanu529/Shadow-Chat.git",
    live: "https://www.shadowchat.in",
  },
  {
    id: 3,
    title: "GitMe – Custom Version Control System",
    tag: "Core Systems",
    techList: ["Node.js", "Express", "MongoDB", "Redis", "Yargs CLI"],
    image: "/img/gitme.png",
    repo: "https://github.com/Shanu529/gitme",
  },
  {
    id: 4,
    title: "GenBot – AI Chatbot Platform",
    tag: "AI Application",
    techList: ["React", "TypeScript", "Express", "Groq API", "Redis"],
    image: "/img/chatbotnew.jpeg",
    repo: "https://github.com/Shanu529/GenBot-LLM-Application",
  },
  {
    id: 5,
    title: "NextGen AI – Prompt-to-Image Generator",
    tag: "Full Stack",
    techList: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
    image: "/img/nextgen.png",
    repo: "https://github.com/Shanu529/NextGen-.AI",
  },
  {
    id: 6,
    title: "Short Video Sharing Platform",
    tag: "Media Streaming",
    techList: ["React", "Node.js", "Express", "Cloudinary", "MongoDB"],
    image: "/img/shortVideo2.png",
    repo: "https://github.com/Shanu529/video-Platform",
  },
];

function Project() {
  const [active, setActive] = useState(1);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const activeProject = projects.find((p) => p.id === active) || projects[0];
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section 
      id="projects"
      className="relative bg-black text-white md:pb-20  px-4 sm:px-6 lg:px-12 overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 30%, black 35%, transparent 100%)",
          }}
        />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-xs font-medium mb-3">
              <Sparkles size={12} />
              Featured Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Engineering <span className="text-cyan-400"> Projects
              </span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-sm">
            Explore robust systems, scalable architectures, and AI-driven applications built from scratch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ================= Left: Interactive Project Selector ================= */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <div 
              className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none"
              tabIndex={0}
              role="region"
              aria-label="Project list"
            >
              <AnimatePresence initial={false}>
                {visibleProjects.map((project) => {
                  const isActive = active === project.id;
                  return (
                    <motion.button
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ x: isActive ? 0 : 4 }}
                      onClick={() => setActive(project.id)}
                      className={`
                        min-w-[260px] lg:min-w-0 p-4 sm:p-5 rounded-2xl text-left transition-all duration-300
                        border backdrop-blur-xl relative group flex flex-col justify-between
                        ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/10 via-white/[0.04] to-transparent border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                            : "bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
                        }
                      `}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full border ${
                          isActive ? "border-cyan-400/30 bg-cyan-950/40 text-cyan-300" : "border-white/10 bg-white/5 text-gray-400"
                        }`}>
                          {project.tag}
                        </span>
                        <Code2 size={15} className={isActive ? "text-cyan-400" : "text-gray-600 group-hover:text-gray-400"} />
                      </div>
                      <h3 className={`text-sm sm:text-base font-semibold tracking-wide transition-colors ${
                        isActive ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}>
                        {project.title}
                      </h3>
                    </motion.button>
                  );
                })}
              </AnimatePresence>
            </div>

            {projects.length > 4 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="w-full py-3 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl text-xs font-medium text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-colors"
              >
                {showAll ? "Show Less Projects" : `Show All Projects (${projects.length})`}
              </button>
            )}
          </div>

          {/* ================= Right: Active Project Showcase Window ================= */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 sm:p-7 shadow-2xl relative overflow-hidden"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-[240px] sm:h-[320px] rounded-2xl overflow-hidden border border-white/10 bg-black/40 mb-6 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 pointer-events-none" />
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProject.id + "-img"}
                    src={activeProject.image}
                    alt={activeProject.title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </AnimatePresence>
              </div>

              {/* Title & Tech stack tags */}
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {activeProject.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.techList.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                <motion.button
                  onClick={() => navigate("/ProjectDetails")}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-400 text-black rounded-xl text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
                >
                  View Details
                  <ArrowUpRight size={15} />
                </motion.button>

                <motion.a
                  href={activeProject.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(6,182,212,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/15 rounded-xl text-xs sm:text-sm font-medium text-white transition-all"
                >
                  <Github size={15} />
                  Code Repository
                </motion.a>

                {activeProject.live && (
                  <motion.a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, y: -2, borderColor: "rgba(6,182,212,0.5)" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 border border-white/15 rounded-xl text-xs sm:text-sm font-medium text-white transition-all"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;