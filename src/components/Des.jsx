import React from "react";

function Description() {
  return (
    <section className="bg-black text-white bg-cover bg-eight bg-center md:bg-bottom py-20 md:py-32 px-6 sm:px-10 md:px-20 flex flex-col justify-center">
      {/* Top Intro Section */}
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <span className="text-cyan-400 uppercase tracking-wide text-sm md:text-base">
          How I Build Full Stack Web Applications
        </span>
        <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
          Here is a brief overview of my skills and{" "}
          <span className="text-cyan-400 font-medium">technologies</span> I use
          to build full-stack web applications.
        </p>
      </div>

      {/* Skills Cards Section */}
      <div className="mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="group bg-gray-900/70 hover:bg-gray-900 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
            Frontend Development
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            I use <span className="text-cyan-400">React.js</span>,{" "}
            <span className="text-cyan-400">Tailwind CSS</span>, and{" "}
            <span className="text-cyan-400">JavaScript</span> to create fast,
            modern, and responsive web applications with reusable components and
            smooth animations.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-gray-900/70 hover:bg-gray-900 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
            Backend Development
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            I build robust APIs with{" "}
            <span className="text-cyan-400">Node.js</span> and{" "}
            <span className="text-cyan-400">Express</span>, handling secure
            authentication using <span className="text-cyan-400">JWT</span> and{" "}
            <span className="text-cyan-400">bcrypt</span>. My backend focuses on
            scalability, performance, and clean architecture.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-gray-900/70 hover:bg-gray-900 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
            Database & Deployment
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
            I manage data with{" "}
            <span className="text-cyan-400">MongoDB</span> and{" "}
            <span className="text-cyan-400">Mongoose</span>. I deploy projects
            on <span className="text-cyan-400">Vercel</span>,{" "}
            <span className="text-cyan-400">Netlify</span>, and{" "}
            <span className="text-cyan-400">Render</span>, integrating with{" "}
            <span className="text-cyan-400">MongoDB Atlas</span> for cloud-hosted
            databases to ensure uptime and security.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Description;
