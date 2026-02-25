import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Description() {
  const boxAnimetion = useRef(null);
  const card1 = useRef(null);
  const card2 = useRef(null);
  const card3 = useRef(null);

  //Helper: dynamic offset based on screen width
  const isMobile = window.innerWidth < 768;
  const yOffset = isMobile ? 80 : 150;
  const xOffset = isMobile ? 80 : 200;

  // Top text animation
  useGSAP(() => {
    gsap.from(boxAnimetion.current, {
      y: yOffset,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: boxAnimetion.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });

  // Card 1 (left)
  useGSAP(() => {
    gsap.from(card1.current, {
      x: -xOffset,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: card1.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });

  // Card 2 (center)
  useGSAP(() => {
    gsap.from(card2.current, {
      y: yOffset,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: card2.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });

  // Card 3 (right)
  useGSAP(() => {
    gsap.from(card3.current, {
      x: xOffset,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: card3.current,
        start: "top 90%",
        end: "top 60%",
        scrub: true,
      },
    });
  });

  return (
    <section className="bg-black overflow-x-hidden text-white bg-cover bg-eight bg-center md:bg-bottom py-20 md:py-32 px-6 sm:px-10 md:px-20 flex flex-col justify-center">
      {/* Header */}
      <div ref={boxAnimetion} className="max-w-4xl mx-auto md:text-center text-left">
        <span className="text-cyan-400 uppercase tracking-wide text-sm md:text-base">
          How I Build Full Stack Web Applications
        </span>
        <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
          Here is a brief overview of my skills and{" "}
          <span className="text-cyan-400 font-medium">technologies</span> I use
          to build full-stack web applications.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div
          ref={card1}
          className="group bg-gray-900/70 hover:bg-gray-900 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
            Frontend Development
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
  I build modern, responsive interfaces using{" "}
  <span className="text-cyan-400">React.js</span>,{" "}
  <span className="text-cyan-400">TypeScript</span>, and{" "}
  <span className="text-cyan-400">Tailwind CSS</span>, creating reusable
  components with clean architecture and smooth animations using{" "}
  <span className="text-cyan-400">GSAP</span>.
</p>
        </div>

        <div
          ref={card2}
          className="group bg-gray-900/70 hover:bg-gray-900 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
            Backend Development
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
  I build scalable backend systems using{" "}
  <span className="text-cyan-400">Node.js</span> and{" "}
  <span className="text-cyan-400">Express</span>, implementing secure auth with{" "}
  <span className="text-cyan-400">JWT</span> and{" "}
  <span className="text-cyan-400">bcrypt</span>. I work with{" "}
  <span className="text-cyan-400">PostgreSQL</span>,{" "}
  <span className="text-cyan-400">MongoDB</span>, and{" "}
  <span className="text-cyan-400">Prisma</span>, containerize apps using{" "}
  <span className="text-cyan-400">Docker</span>, and integrate AI features with{" "}
  <span className="text-cyan-400">LangChain</span> and{" "}
  <span className="text-cyan-400">Groq API</span>.
</p>
        </div>

        <div
          ref={card3}
          className="group bg-gray-900/70 hover:bg-gray-900 transition-all duration-300 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/40"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
            Database & Deployment
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed">
  I manage data using <span className="text-cyan-400">MongoDB</span>,{" "}
  <span className="text-cyan-400">PostgreSQL</span>, and{" "}
  <span className="text-cyan-400">MySQL</span>, leveraging{" "}
  <span className="text-cyan-400">Prisma</span> and{" "}
  <span className="text-cyan-400">Mongoose</span> for efficient database
  modeling and queries. I deploy client and personal projects on{" "}
  <span className="text-cyan-400">Vercel</span>,{" "}
  <span className="text-cyan-400">Netlify</span>, and{" "}
  <span className="text-cyan-400">Render</span>, integrating with{" "}
  <span className="text-cyan-400">MongoDB Atlas</span> and managed SQL
  services to ensure scalability, uptime, and production-level security.
</p>
        </div>
      </div>
    </section>
  );
}

export default Description;
