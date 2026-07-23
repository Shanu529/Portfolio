
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useReducedMotion } from "framer-motion";
import {
  Code2,
  Rocket,
  Layers,
  Briefcase,
  Sparkles,
  Atom,
  FileCode2,
  Wind,
  Move,
  Braces,
  Server,
  Coffee,
  Route,
  Database,
  Boxes,
  Box,
  Flame,
  Waves,
  BrainCircuit,
  RefreshCw,
  Zap,
  Globe,
  Network,
  Workflow,
} from "lucide-react";

const STATS = [
  { label: "Projects", value: 20, suffix: "+", Icon: Rocket },
  { label: "DSA Questions", value: 250, suffix: "+", Icon: Sparkles },
  { label: "Technologies", value: 20, suffix: "+", Icon: Layers },
  { label: "Group & Internship", value:10 , suffix: "+", Icon: Briefcase },
 
];

const TECH_GROUPS = [
  {
    title: "Frontend",
    items: [
      { name: "React", Icon: Atom },
      { name: "TypeScript", Icon: FileCode2 },
      { name: "Tailwind CSS", Icon: Wind },
      { name: "Motion", Icon: Move },
      { name: "JavaScript", Icon: Braces },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", Icon: Server },
      { name: "Python", Icon: FileCode2 },
      { name: "Java", Icon: Coffee },
      { name: "Express", Icon: Route },
      { name: "FastAPI", Icon: Zap },
      { name: "REST APIs", Icon: Globe },
      { name: "PostgreSQL", Icon: Database },
      { name: "MongoDB", Icon: Layers },
      { name: "Prisma", Icon: Boxes },
    ],
  },
  {
    title: "AI & DevOps",
    items: [
      { name: "Docker", Icon: Box },
      { name: "Redis", Icon: Flame },
      { name: "Kafka", Icon: Waves },
      { name: "WebSockets", Icon: Network },
      { name: "BullMQ", Icon: Workflow },
      { name: "GenAI", Icon: BrainCircuit },
      { name: "CI/CD", Icon: RefreshCw },
    ],
  },
];

const PARTICLES = Array.from({ length: 10 }, (_, i) => {
  const seed = i * 137.5;
  return {
    left: (Math.sin(seed) * 0.5 + 0.5) * 100,
    top: (Math.cos(seed * 1.3) * 0.5 + 0.5) * 100,
    size: 1 + ((i * 7) % 3),
    duration: 8 + ((i * 3) % 10),
    delay: (i % 6) * 0.7,
  };
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function CountUp({ value, suffix = "", duration = 1.6 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [isInView, value, duration, reduceMotion]);

  return <span ref={ref}>{display}{suffix}</span>;
}

function AboutMe() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04] sm:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 25%, black 35%, transparent 100%)",
          }}
        />
        {!reduceMotion && (
          <motion.div
            animate={{ opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.03] via-transparent to-transparent"
          />
        )}
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px] sm:h-[560px] sm:w-[560px] sm:blur-[150px] lg:h-[700px] lg:w-[700px] lg:blur-[180px]" />
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            animate={reduceMotion ? {} : { y: [0, -16, 0], opacity: [0.12, 0.45, 0.12] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: p.delay,
            }}
            className="absolute rounded-full bg-cyan-300"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto flex max-w-md justify-center"
        >
          <motion.div
            animate={reduceMotion ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_50px_rgba(6,182,212,0.10)] backdrop-blur-2xl sm:p-7 md:p-8"
          >
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 sm:h-11 sm:w-11">
                <Code2 size={18} className="text-cyan-400 sm:size-5" />
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-400 sm:text-[11px]">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
                Available for Work
              </div>
            </div>

            <h3 className="text-lg font-bold tracking-wide sm:text-xl">
              Shanu Chhetri
            </h3>
            <p className="mt-2 text-sm font-medium text-cyan-400">
              Computer Science Student
            </p>
            <p className="mt-0.5 text-sm text-gray-400">
              Gen Ai ( RAG ) Developer • Full stack & BackEnd Developer 
            </p>

            <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="flex flex-wrap gap-2">
              {[      
                    "Data Structures & Algorithms",
                    "System Design",
                    "HLD / LLD",
                    "Database Systems",
                    "Microservice Architecture",
                    "DevOps & CI/CD",
                    "Generative AI",
                    "JavaScript Ecosystem",
                    "Backend ev"
                ].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6 lg:mt-20"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-center backdrop-blur-xl sm:p-5 md:p-6"
            >
              <stat.Icon size={18} className="mx-auto mb-2 text-cyan-400 sm:size-5" />
              <div className="text-2xl font-black tracking-tight sm:text-3xl">
                {stat.value !== null ? (
                  <CountUp value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.display
                )}
              </div>
              <div className="mt-1 text-[11px] tracking-wide text-gray-400 sm:text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-16 grid gap-4 sm:gap-5 md:grid-cols-3 md:gap-6 lg:mt-24"
        >
          {TECH_GROUPS.map((group) => (
            <motion.div
              key={group.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl sm:p-6"
            >
              <div className="mb-4">
                <h4 className="text-base font-bold text-white sm:text-lg">
                  {group.title}
                </h4>
              </div>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/10">
                      <item.Icon size={14} className="text-cyan-400" />
                    </span>
                    <span className="text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutMe;