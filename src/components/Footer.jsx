import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Sparkles, Terminal } from "lucide-react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black text-gray-300 overflow-hidden px-4 sm:px-6 lg:px-12 py-16 md:py-20">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 100%, black 30%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Main Footer Split Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          {/* Left Side: Badge, Availability & Catchy Callout */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Sparkles size={13} />
              Let's Build Together
            </div>

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 bg-white/[0.02] text-emerald-400 text-xs font-medium shadow-inner">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)] animate-pulse" />
              Available for Internships & Full-Time Roles
            </div>
          </div>

          {/* Center/Right Actions: Get In Touch CTA & Social Connect */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <motion.a
              href="mailto:shanu.chhetri529@gmail.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-cyan-400 text-black text-sm font-bold shadow-[0_0_30px_rgba(6,182,212,0.35)] transition-all shrink-0"
            >
              Get In Touch
              <ArrowUpRight size={18} />
            </motion.a>

            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: "https://github.com/Shanu529", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/shanu-chhetri-737b81325/", label: "LinkedIn" },
                { Icon: Terminal, href: "https://leetcode.com/u/shanu529/", label: "LeetCode" },
                { Icon: Mail, href: "mailto:shanu.chhetri529@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-xl flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 shadow-lg"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <p>© {year} Shanu Chhetri. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            Crafted with <span className="text-cyan-400">passion</span> & <span className="text-cyan-400">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;