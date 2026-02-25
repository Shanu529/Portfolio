import React from "react";

function Stack() {
  const skills = [
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", dark: true },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Prisma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
    { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", dark: true },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-14">
          <span className="text-cyan-500">Technologies</span> I Use
        </h2>

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-6 
          gap-6
        ">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                flex flex-col items-center justify-center 
                bg-white/5 
                border border-white/10 
                rounded-2xl 
                p-6 
                transition-all duration-300 
                hover:bg-cyan-500/10 
                hover:border-cyan-400
              "
            >
              <div className={`w-14 h-14 flex items-center justify-center mb-4 rounded-full ${
                skill.dark ? "bg-white p-2" : ""
              }`}>
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <p className="text-sm text-gray-300">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Stack;