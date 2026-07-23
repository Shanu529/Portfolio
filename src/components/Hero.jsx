

import { useEffect, useMemo, useState } from "react";
import {
  Github,
  Mail,
  Code2,
  Atom,
  Box,
  Server,
  Zap,
  Database,
  Layers,
  HardDrive,
  Coffee,
  FileCode2,
  Sparkles,
  Network,
  Terminal,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

const TECH_LIST = [
  { name: "React", desc: "Interactive UIs", Icon: Atom },
  { name: "Docker", desc: "Containerization", Icon: Box },
  { name: "Node.js", desc: "Backend runtime", Icon: Server },
  { name: "Kafka", desc: "Event streams", Icon: Zap },
  { name: "Redis", desc: "Caching", Icon: Database },
  { name: "MongoDB", desc: "NoSQL store", Icon: Layers },
  { name: "PostgreSQL", desc: "Relational data", Icon: HardDrive },
  { name: "Java", desc: "OOP & DSA", Icon: Coffee },
  { name: "TypeScript", desc: "Type-safety", Icon: FileCode2 },
  { name: "GenAI", desc: "LLM features", Icon: Sparkles },
  { name: "GitHub", desc: "CI/CD & Git", Icon: Github },
  { name: "System Design", desc: "Scalability", Icon: Network },
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

function DeveloperCore() {
  const [hovered, setHovered] = useState(null);
  const isMobile = useIsMobile();
  const reduceMotion = useReducedMotion();

  const layout = useMemo(() => {
    const size = isMobile ? 260 : 460;
    const coreSize = isMobile ? 90 : 130;
    const glowSize = isMobile ? 160 : 320;
    const cx = 50;
    const cy = 50;
    const rx = isMobile ? 36 : 38;
    const ry = isMobile ? 36 : 38;

    const nodes = TECH_LIST.map((tech, i) => {
      const angle = (i / TECH_LIST.length) * 2 * Math.PI - Math.PI / 2;
      return {
        ...tech,
        x: cx + rx * Math.cos(angle),
        y: cy + ry * Math.sin(angle),
      };
    });

    return { size, coreSize, glowSize, cx, cy, nodes };
  }, [isMobile]);

  return (
    <div
      id="home"
      className="relative mx-auto flex items-center justify-center overflow-visible select-none my-2 lg:my-0"
      style={{ width: layout.size, height: layout.size }}
    >
      {/* Sunlight / Cyberpunk Atmosphere Glow in Background */}
      {!reduceMotion && (
        <>
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 rounded-full bg-gradient-to-tr from-cyan-500/20 via-teal-400/20 to-blue-600/10 blur-3xl pointer-events-none"
            style={{
              width: layout.glowSize,
              height: layout.glowSize,
              transform: "translate(-50%, -50%)",
            }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-cyan-500/10 pointer-events-none"
            style={{ borderStyle: "dashed" }}
          />
        </>
      )}

      {/* Animated Orbiting Rings */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        <motion.circle
          cx={layout.cx}
          cy={layout.cy}
          r={isMobile ? "36" : "38"}
          fill="none"
          stroke="rgba(34,211,238,0.15)"
          strokeWidth="0.6"
          strokeDasharray="3 3"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />

        {layout.nodes.map((n, i) => (
          <motion.line
            key={n.name}
            x1={layout.cx}
            y1={layout.cy}
            x2={n.x}
            y2={n.y}
            stroke={hovered === i ? "#22D3EE" : "rgba(34,211,238,0.18)"}
            strokeWidth={hovered === i ? 1.4 : 0.6}
            animate={{ opacity: hovered === i ? 1 : 0.6 }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </svg>

      {/* Core Center Node */}
      <div
        className="absolute left-1/2 top-1/2 z-10 flex flex-col items-center justify-center rounded-2xl bg-black/90 p-2 text-center shadow-[0_0_35px_rgba(34,211,238,0.25)] border border-cyan-400/30 backdrop-blur-xl"
        style={{
          width: layout.coreSize,
          height: layout.coreSize,
          transform: "translate(-50%, -50%)",
        }}
      >
        <Code2 size={isMobile ? 16 : 20} className="mb-1 text-cyan-400 animate-pulse" />
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-white">CORE</span>
        <span className="px-1 text-[7px] sm:text-[8px] leading-tight text-gray-400 line-clamp-2">
          Backend • DSA • System Design • GenAI RAG
        </span>
      </div>

      {/* Tech Nodes */}
      {layout.nodes.map((n, i) => {
        const { Icon } = n;
        const isRightSide = n.x > 50;

        return (
          <motion.div
            key={n.name}
            onMouseEnter={() => !isMobile && setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            whileHover={isMobile ? undefined : { scale: 1.15 }}
            className="absolute flex cursor-pointer flex-col items-center gap-0.5"
            style={{
              left: `${n.x}%`,
              top: `${n.y}%`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border backdrop-blur-md transition-colors duration-200 ${
                hovered === i
                  ? "border-cyan-400 bg-cyan-500/20 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  : "border-white/10 bg-white/5 text-gray-300"
              }`}
            >
              <Icon size={isMobile ? 14 : 18} />
            </div>

            <span className="whitespace-nowrap text-center text-[8px] sm:text-[9px] font-medium text-gray-400">
              {n.name}
            </span>

            {hovered === i && !isMobile && (
              <div
                className={`absolute z-30 whitespace-nowrap rounded border border-cyan-400/30 bg-black/95 px-2 py-0.5 text-[9px] font-medium text-cyan-300 shadow-xl pointer-events-none ${
                  isRightSide ? "right-full mr-2 top-1/2 -translate-y-1/2" : "left-full ml-2 top-1/2 -translate-y-1/2"
                }`}
              >
                {n.desc}
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}

function Hero() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative flex min-h-[90vh] lg:min-h-screen items-center bg-black text-white overflow-x-hidden w-full">
      {/* Ambient background sunlight radial glow matching theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto mt-20 md:mt-0 w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-12 relative z-10">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          
          <div className="w-full lg:col-span-6 flex justify-center order-2 lg:order-1 overflow-visible">
            <DeveloperCore />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full lg:col-span-6 space-y-4 text-left order-1 lg:order-2"
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight"
            >
              <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                Hi, I'm Shanu Chhetri
              </span>
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-xs sm:text-sm md:text-base font-semibold tracking-wide text-gray-300"
            >
              Full-Stack Developer • GenAI RAG • DSA in JAVA  • System Design 
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-xl"
            >
              "I approach software engineering through first principles, studying algorithmic efficiency, systems design, concurrency models, distributed computing, caching strategies, and database internals to
              build software that's predictable, resilient, and engineered for long-term evolution."
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {[
                "Generative AI",
                "React",
                "JavaScript",
                "Node.js",
                "PostgreSQL",
                "Docker",
                 "DSA",
                "Kafka",
                "DevOps",
                "System Design",
                "Etc.."
              ].map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full border border-cyan-500/20 bg-cyan-950/20 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-cyan-300 backdrop-blur-md"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex 
              flex-wrap items-center gap-2.5 pt-3"
            >
              <a
                href="https://leetcode.com/u/shanu529/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <Terminal size={15} className="text-cyan-400" />
                <span>LeetCode</span>
              </a>

              <Link
                to="/ProjectDetails"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 py-2.5 text-xs sm:text-sm font-bold text-black shadow-[0_0_20px_rgba(34,211,238,0.45)] transition-all hover:bg-cyan-300 hover:scale-[1.02]"
              >
                <Github size={15} />
                <span>Projects</span>
              </Link>

              <a
                href="mailto:shanu.chhetri529@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <Mail size={15} />
                <span>Contact</span>
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all hover:border-cyan-400/40 hover:bg-cyan-500/10"
              >
                <span>Experience</span>
              </a>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Hero;