import React from "react";

function HowBuild() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] rounded-lg overflow-hidden shadow-lg group">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed "
        style={{ backgroundImage: "url('/img/developer.jpeg')" }}
      ></div>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex flex-col justify-center items-start md:items-center  h-full text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white  mb-4">
          Projects I Build
        </h2>
        <p className="max-w-3xl text-white text-start md:text-center text-base md:text-lg leading-relaxed">
          I build full stack web applications using the MERN stack (MongoDB,
          Express.js, React.js, Node.js) and Tailwind CSS for styling. I focus
          on creating responsive, user-friendly interfaces and robust backend
          systems to deliver seamless user experiences.
        </p>
      </div>
    </section>
  );
}

export default HowBuild;
