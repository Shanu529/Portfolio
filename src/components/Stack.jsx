import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", dark: true },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Prisma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Kafka", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg", dark: true },
  { name: "FastAPI", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-plain.svg", dark: true },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", dark: true },
  { name: "Bull MQ", img: "/img/bullmq.png" },
  { name: "Docker", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg", dark: true },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", dark: true },
];

const ROW_1 = skills.slice(0, 6);
const ROW_2 = skills.slice(6, 12);
const ROW_3 = skills.slice(12, 18);

const ROWS = [
  { items: ROW_1, direction: "left", duration: 28 },
  { items: ROW_2, direction: "right", duration: 34 },
  { items: ROW_3, direction: "left", duration: 30 },
];

function SkillCard({ skill }) {
  return (
    <div
      className="
        flex flex-col items-center justify-center
        bg-white/[0.03] backdrop-blur-xl
        border border-white/10
        rounded-2xl
        px-3 py-4 sm:px-5 sm:py-5 md:p-6
        w-[110px] sm:w-[130px] md:w-[150px]
        shrink-0
        transition-colors duration-300
        hover:border-cyan-400/50 hover:bg-cyan-500/[0.06]
      "
    >
      <div
        className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center mb-2 sm:mb-3 md:mb-4 rounded-full ${
          skill.dark ? "bg-white p-2" : ""
        }`}
      >
        <img
          src={skill.img}
          alt={skill.name}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <p className="text-[11px] sm:text-xs md:text-sm text-gray-300 text-center leading-tight">
        {skill.name}
      </p>
    </div>
  );
}

function MarqueeRow({ items, direction, duration }) {
  const looped = [...items, ...items];
  const animationName = direction === "left" ? "marquee-left" : "marquee-right";

  return (
    <div className="group relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-12 md:w-24 bg-gradient-to-r from-black to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-12 md:w-24 bg-gradient-to-l from-black to-transparent z-20" />

      <div
        className="flex gap-3 sm:gap-4 md:gap-5 w-max will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animationName,
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
        }}
      >
        {looped.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}

function Stack() {
  return (
    <section className="relative bg-black py-14 sm:py-16 md:py-20 overflow-hidden">
      <style>
        {`
          @keyframes marquee-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 20%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[320px] sm:w-[480px] md:w-[600px] h-[320px] sm:h-[480px] md:h-[600px] rounded-full bg-cyan-500/15 blur-[120px] sm:blur-[150px] md:blur-[170px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center px-4 sm:px-6 mb-10 sm:mb-12 md:mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        >
          <span className="text-cyan-500">Technologies</span> I Use
        </motion.h2>
      </div>

      <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
        {ROWS.map((row, i) => (
          <MarqueeRow
            key={i}
            items={row.items}
            direction={row.direction}
            duration={row.duration}
          />
        ))}
      </div>
    </section>
  );
}

export default Stack;