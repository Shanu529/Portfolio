import React from "react";

function Description() {
  return (
    <div className=" text-white md:py-16 px-6 md:px-20 bg-[url(/img/bghero.png)] bg-cover bg-eight md:bg-bottom  flex flex-col md:justify-end py-32">
      <div className="">
        <div>
          <span className="text-cyan-400">
            how i build full stack web applications
          </span>
        </div>
        <p className=" text-md md:text-xl  md:mb-12 md:w-1/3">
          here is a brief overview of my skills and{" "}
          <span className="text-cyan-400">technologies</span> I use to build
          full-stack web applications.
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between gap-10 mt-14 md:mt-80 ">
        {/* Card 1 */}
        <div className=" text-start   flex flex-col gap-4 p-6 rounded-2xl bg-gray-900/60 md:bg-transparent   shadow-xl hover:shadow-cyan-500/50   duration-300 md:text-left flex-1">
          <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold">
            Frontend Development
          </h2>
          <p className="text-sm md:text-base lg:text-[0.9rem] text-start leading-relaxed text-gray-300 max-w-md">
            I use <span className="text-cyan-400">React.js</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
            <span className="text-cyan-400">JavaScript</span> to create fast,
            modern, and responsive web applications. My focus is on reusable
            components, smooth animations, and delivering a great user
            experience.
          </p>
        </div>

        {/* Card 2 */}
        <div className=" text-start   flex shadow-xl hover:shadow-cyan-500/50 bg-gray-900/60 md:bg-transparent  flex-col gap-4 p-6 rounded-2xl  hover:shadow-xl transition-shadow duration-300  md:text-left flex-1">
          <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold">
            Backend Development
          </h2>
          <p className="text-sm md:text-base lg:text-[0.9rem]leading-relaxed text-gray-300 max-w-md">
            I build robust APIs with{" "}
            <span className="text-cyan-400">Node.js</span>,{" "}
            <span className="text-cyan-400">Express</span>, and handle secure
            authentication with <span className="text-cyan-400">JWT</span> &
            <span className="text-cyan-400"> bcrypt</span>. My backend ensures
            scalability, performance, and clean architecture.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex shadow-xl hover:shadow-cyan-500/50  flex-col gap-4 p-6 rounded-2xl bg-gray-900/60 md:bg-transparent  hover:shadow-xl transition-shadow duration-300  text-start   md:text-left flex-1">
          <h2 className="text-xl md:text-2xl lg:text-[2rem] font-semibold">
            Database & Deployment
          </h2>
          <p className="text-sm md:text-base lg:text-[0.9rem] leading-relaxed text-gray-300 max-w-md">
            Managing data and making apps live. Using{" "}
            <span className="text-cyan-400">MongoDB & Mongoose</span>, I design
            efficient schemas and queries. I deploy projects on{" "}
            <span className="text-cyan-400">Vercel</span>,{" "}
            <span className="text-cyan-400">Netlify</span>, and{" "}
            <span className="text-cyan-400">Render</span> with cloud-hosted
            databases like <span className="text-cyan-400">MongoDB Atlas</span>,
            ensuring apps are always live and secure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Description;
