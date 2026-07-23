import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Code2, Trophy, GitBranch } from "lucide-react";

const experiences = [
  {
    title: "Full-Stack Developer Intern – IT Company, Ludhiana",
    period: "2026",
    Icon: Briefcase,
    description: [
      "Selected as Full-Stack Developer Intern.",
      "Built frontend using React and backend APIs using Node.js & Express.",
      "Worked with Prisma ORM, MySQL, and cloud deployment.",
    ],
  },
  {
    title: "Full-Stack Developer (Client Project)",
    period: "2026",
    Icon: Code2,
    description: [
      "Developed full-stack application with blog section & admin panel.",
      "Designed secure REST APIs with authentication & database integration.",
      "Deployed backend services on Railway Cloud.",
    ],
  },
  {
    title: "Hackathon Finalist – Top 20 (CGC University, Mohali)",
    period: "2025",
    Icon: Trophy,
    description: [
      "Selected among Top 20 teams.",
      "Built scalable solution in team-based environment.",
    ],
  },
  {
    title: "Open Source Contributor – Social Winter of Code",
    period: "2025",
    Icon: GitBranch,
    description: [
      "Selected contributor and collaborated on open-source projects.",
    ],
  },
];

const STATS = [
  { label: "Projects", value: "20+" },
  { label: "Project Experience ", value: "2+ Yrs" },
  { label: "CGPA", value: "8+" },
   { label: "DSA Questions", value: "250+" },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-black text-white py-20 md:py-28 px-6 md:px-12 overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[160px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          Professional <span className="text-cyan-400">Experience</span>
        </motion.h2>

        {/* ================= Timeline ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="relative"
        >
          {/* connecting line */}
          <div className="absolute left-[19px] md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative flex gap-5 md:gap-6"
              >
                {/* marker */}
                <div className="relative shrink-0">
                  <div
                    className="
                      w-10 h-10 md:w-12 md:h-12 rounded-xl
                      bg-cyan-400/10 border border-cyan-400/30
                      backdrop-blur-xl flex items-center justify-center
                      relative z-10
                    "
                  >
                    <exp.Icon size={18} className="text-cyan-400" />
                  </div>
                </div>

                {/* card */}
                <motion.div
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(6,182,212,.5)",
                    boxShadow: "0 0 35px rgba(6,182,212,.18)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="
                    flex-1 border border-white/10 rounded-2xl p-5 md:p-6
                    bg-white/[0.03] backdrop-blur-xl
                  "
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-3">
                    <h3 className="text-base md:text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-cyan-400/80 font-medium tracking-wide shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-1.5">
                    {exp.description.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="mt-2 w-1 h-1 rounded-full bg-cyan-400/60 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= Stats footer ================= */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="
            mt-16 pt-8 border-t border-white/10
            flex flex-col sm:flex-row items-center justify-center
            gap-6 sm:gap-12 text-center
          "
        >
          {STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <p className="text-xl font-bold text-cyan-400">{stat.value}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;