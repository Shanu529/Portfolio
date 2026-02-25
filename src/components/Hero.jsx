import React, { useLayoutEffect, useRef } from "react";
import { Github, Mail } from "lucide-react";
import gsap from "gsap";

function Hero() {
  const container = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text > *", {
        opacity: 0,
        y: 25,
        filter: "blur(6px)",
        duration: 1,
        stagger: 0.12,
        ease: "power2.out"
      });

      gsap.from(".hero-img", {
        opacity: 0,
        scale: 0.96,
        duration: 1.2,
        ease: "power2.out"
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      className="min-h-screen bg-black text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 w-full">

        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-14 items-center">

          <div className="flex justify-center mb-32 md:mb-5 md:justify-start">
            <div className="relative">
              <div className="absolute -inset-4 bg-cyan-500/10 blur-2xl rounded-3xl -z-10"></div>

              <img
                src="/img/profile.jpg"
                alt="Shanu Chhetri"
                className="
                  hero-img
                  w-[280px]
                  sm:w-[340px]
                  md:w-[420px]
                  lg:w-[360px]
                  aspect-[4/5]
                  object-cover
                  rounded-3xl
                  shadow-2xl
                  border border-white/10
                  transition-transform duration-500
                  hover:scale-110
                "
              />
            </div>
          </div>
          <div className="hero-text md:mt-0 mt-24 space-y-6">

            <h1 className="text-2xl sm:text-4xl md:text-4xl font-semibold leading-tight">
              Hi, I’m{" "}
              <span className="text-cyan-500">
                Shanu Chhetri
              </span>
            </h1>

            <h2 className="text-md sm:text-xl md:text-1xl text-gray-400 font-medium">
              Full-Stack Developer • GenAI Integrator • System Design Learner
            </h2>

            <p className="text-gray-400 max-w-lg mx-auto md:mx-0 text-sm md:text-sm leading-relaxed">
              I build scalable full-stack applications using modern technologies
              like React, TypeScript, PostgreSQL, and Prisma. I integrate GenAI
              tools such as Groq API, deploy using Docker and CI/CD pipelines,
              and focus on clean architecture and performance optimization.
            </p>

            <div className="flex flex-wrap  md:justify-start gap-3">
              {[
                "React",
                "TypeScript",
                "Node.js",
                "PostgreSQL",
                "Prisma",
                "Redis",
                "MongoDB",
                "Docker",
                "GenAI",
                "DevOps",
                "System Design"
                
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 hover:bg-cyan-500 hover:text-black bg-white/5 border border-white/10 text-sm rounded-full text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">

              <a
                href="/ProjectDetails"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  px-6 py-3 rounded-lg
                  bg-white text-black font-medium
                  hover:scale-105 hover:bg-gray-200
                  transition-all duration-300
                "
              >
                <Github size={18} />
                View Projects
              </a>

              <a
                href="mailto:shanu.chhetri529@gmail.com"
                className="
                  flex items-center justify-center gap-2
                  px-6 py-3 rounded-lg
                  border border-gray-600 text-gray-300
                  hover:border-white hover:text-white
                  hover:scale-105
                  transition-all duration-300
                "
              >
                <Mail size={18} />
                Contact Me
              </a>

              <a
              href="#experience"
              className="
                  flex items-center justify-center gap-2
                  px-6 py-3 rounded-lg
                  border border-gray-600 text-gray-300
                  hover:border-white hover:text-white
                  hover:scale-105
                  transition-all duration-300
                "
              >
            
                Experiences
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;