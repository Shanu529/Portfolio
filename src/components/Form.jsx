import React from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";

function Form() {
  return (
    <section 
    id="contact"
    className="relative bg-black py-20 px-6 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-md mx-auto text-center"
      >
        <p className="text-sm md:text-lg font-semibold text-gray-300 mb-8 leading-relaxed">
          I'd love to hear from you. Whether it's a job opportunity or a
          project idea,{" "}
          <span className="text-cyan-400 font-semibold">let's talk!</span>
        </p>

        <motion.a
          href="mailto:nextin766@gmail.com?subject=Portfolio%20Contact&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            y: -3,
            boxShadow: "0 0 35px rgba(6,182,212,.4)",
          }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.25 }}
          className="
            inline-flex items-center gap-3 px-7 py-3 rounded-xl
            border border-cyan-400/40 bg-white/[0.03] backdrop-blur-xl
            text-cyan-400 font-semibold
            hover:bg-cyan-500 hover:text-black hover:border-cyan-500
            transition-colors duration-300
          "
        >
          <Mail className="w-5 h-5" />
          Send Email
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Form;