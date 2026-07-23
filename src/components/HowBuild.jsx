import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal } from "lucide-react";

function DesignBadge() {
  return (
    <div className="flex items-center justify-center py-10 bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500" />
        
        <div className="relative flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-black/90 text-white backdrop-blur-xl">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500/10 border border-cyan-400/30">
            <Sparkles size={12} className="text-cyan-400 animate-pulse" />
          </span>
          <span className="text-xs font-medium tracking-wide text-gray-300">
            Engineering Digital Experiences
          </span>
          <Terminal size={12} className="text-cyan-400 opacity-60" />
        </div>
      </motion.div>
    </div>
  );
}

export default DesignBadge;