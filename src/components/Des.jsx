import React from "react";
import { motion } from "framer-motion";
import { Layers, ShieldCheck, Sparkles } from "lucide-react";

const PRINCIPLES = [
  {
    Icon: Layers,
    label: "Clean Architecture",
    desc: "Modular, maintainable code",
  },
  {
    Icon: ShieldCheck,
    label: "Production-Ready",
    desc: "Secure, scalable systems",
  },
  {
    Icon: Sparkles,
    label: "AI-Augmented",
    desc: "Built with modern tooling",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

function Description() {
  return (
    <section className="bg-black text-white py-16 md:py-20 px-6 sm:px-10 md:px-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={staggerContainer}
        className="
          max-w-4xl mx-auto flex flex-col sm:flex-row items-center
          justify-between gap-8 sm:gap-4
          border-y border-white/10 py-8
        "
      >
        {PRINCIPLES.map(({ Icon, label, desc }, i) => (
          <React.Fragment key={label}>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 text-center sm:text-left"
            >
              <span className="w-9 h-9 shrink-0 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                <Icon size={16} className="text-cyan-400" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white leading-none mb-1">
                  {label}
                </p>
                <p className="text-xs text-gray-500">{desc}</p>
              </div>
            </motion.div>

            {i < PRINCIPLES.length - 1 && (
              <div className="hidden sm:block w-px h-8 bg-white/10" />
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}

export default Description;