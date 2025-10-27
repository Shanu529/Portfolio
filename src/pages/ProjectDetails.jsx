import React from "react";

function ProjectDetails() {
  const projects = [
    {
      id: 1,
      title: "Prompt to image AI Generator",
      description:
        "A web application that generates images from text prompts using AI external APIs.",
      tech: ["React", "Tailwind CSS", "GSAP", "Node.js", "Express" , "MongoDB"],
      video: "/videos/project3.mp4",
      repo: "https://github.com/Shanu529/NextGen-.AI",
      live: "https://next-gen-ai-gold.vercel.app/",
    },
    
    {
      id: 2,
      title: "video Platform where people can watch short videos",
      description:
        "A full-stack video platform that allows users to upload, watch, and discover short videos.",
      tech: ["React", "tailwindcss", "Node.js", "Express", "MongoDB", "JWT"],
      video: "/videos/project2.mp4",
      repo: "https://github.com/Shanu529/video-Platform",
      live: "https://ai-image-generator.netlify.appp",
    },
    {
      id: 3,
      title: "music web application",
      description:
        "A web application that allows users to listen to music.",
      tech: ["React", "CSS", "tailwindcss",],
      video: "/videos/project1.mp4",
      repo: "https://github.com/Shanu529/Spotify-clone",
      live: "https://musicfly.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        My Projects
      </h1>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden flex flex-col items-center p-6"
          >
            {/* Video */}
            <div className="w-full flex justify-center bg-black rounded-lg">
              <video
                src={p.video}
                className="w-full max-h-[550px] object-contain rounded-lg"
                controls
                playsInline
              />
            </div>

            {/* Details */}
            <div className="mt-6 text-center px-4">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h2>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition"
                >
                  Code
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
