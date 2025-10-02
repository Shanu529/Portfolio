import React from "react";

function AboutMe() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-6 md:px-32 py-20 w-full">
      <div className="flex justify-center md:justify-start w-full md:w-1/3">
        <img
          src="/img/me.png"////
          alt="Profile"
          className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover shadow-lg border-2 border-gray-300"
        />
      </div>

      <div className="flex flex-col gap-6 md:w-2/3 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Me
        </h2>
        <p className="text-gray-700 text-sm md:text-base text-start leading-relaxed">
          I'm Shanu Chhetri.
          I am a computer science student from SViet near Chandigarh, focusing
          on problem-solving and development. Web developer passionate about
          creating dynamic and responsive websites. I have a strong foundation
          in both front-end and back-end technologies, aiming to build
          applications that are visually appealing and highly functional. I am
          committed to continuous learning and contributing to exciting
          projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
          <div className="flex flex-col gap-1 bg-gray-50 p-4 rounded-lg shadow hover:scale-105 duration-700 transition-transform">
            <h3 className="text-lg font-semibold text-gray-900">Front End</h3>
            <p className="text-gray-600 text-sm">
              HTML, CSS, JavaScript, React, Tailwind CSS, GSAP
            </p>
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 p-4 rounded-lg shadow hover:scale-105 duration-700  transition-transform">
            <h3 className="text-lg font-semibold text-gray-900">Back End</h3>
            <p className="text-gray-600 text-sm">Node.js, Express, MongoDB</p>
          </div>

          <div className="flex flex-col gap-1 bg-gray-50 p-4 rounded-lg shadow hover:scale-105 duration-700  transition-transform">
            <h3 className="text-lg font-semibold text-gray-900">
              Graphic Design
            </h3>
            <p className="text-gray-600 text-sm">Adobe Photoshop, Canva</p>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="/img/Print Review.pdf" ///////
            download="Resume.pdf"
            className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-medium px-6 py-2 rounded-md shadow-md transition transform hover:scale-105"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
