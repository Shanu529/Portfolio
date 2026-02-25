import React from "react";

function ProjectDetails() {
  const projects = [
    {
      id: 0,
      title: "AI Chatbot Platform",
      description:
        "An AI-powered chatbot system integrated with Groq API, featuring Redis caching, rate limiting, secure authentication, and scalable backend architecture for real-time conversations.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Redis",
        "JWT",
        "Groq API",
        "MongoDB",
      ],
      video: "/videos/CHATBOT.mp4",
      repo: "https://github.com/Shanu529/GenBot-LLM-Application",
      live: "#",
    },
    {
      id: 1,
      title: "Prompt-to-Image AI Generator",
      description:
        "A payment-based AI image generation platform with secure credit handling, authentication, and external API integration for dynamic prompt-based image creation.",
      tech: [
        "React",
        "Tailwind CSS",
        "GSAP",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      video: "/videos/project3.mp4",
      repo: "https://github.com/Shanu529/NextGen-.AI",
      live: "https://next-gen-ai-gold.vercel.app/",
    },
    {
      id: 2,
      title: "Short Video Platform",
      description:
        "A full-stack video platform enabling users to upload, watch, and explore short-form content with secure authentication and optimized backend performance.",
      tech: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
      ],
      video: "/videos/project2.mp4",
      repo: "https://github.com/Shanu529/video-Platform",
      live: "https://ai-image-generator.netlify.app",
    },
    {
      id: 3,
      title: "Music Streaming Web App",
      description:
        "A responsive music streaming application with smooth UI interactions and modern component-based frontend architecture.",
      tech: ["React", "Tailwind CSS", "CSS"],
      video: "/videos/project1.mp4",
      repo: "https://github.com/Shanu529/Spotify-clone",
      live: "https://musicfly.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Featured Projects
      </h1>

      <div className="flex flex-col gap-14 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Video */}
            <div className="w-full bg-black rounded-xl overflow-hidden">
              <video
                src={p.video}
                className="w-full max-h-[500px] object-contain"
                controls
                playsInline
              />
            </div>

            {/* Details */}
            <div className="mt-8 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {p.title}
              </h2>

              <p className="mt-4 text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {p.description}
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1 text-sm rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex justify-center gap-5">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white text-sm font-medium rounded-lg transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;