import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-14 px-6 md:px-16 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12">

        {/* About Section */}
        <div>
          <h3 className="text-cyan-500 text-lg font-semibold mb-4">
            About Me
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Full-stack developer focused on scalable system design, GenAI
            integrations, and production-ready deployments using modern web
            technologies and DevOps principles.
          </p>

          <p className="text-gray-500 text-xs mt-8">
            © {new Date().getFullYear()} Shanu Chhetri. All rights reserved.
          </p>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-cyan-500 text-lg font-semibold mb-4">
            Tech Stack
          </h3>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-cyan-400 transition">
              JavaScript & TypeScript
            </li>
            <li className="hover:text-cyan-400 transition">
              React • Node.js • Express
            </li>
            <li className="hover:text-cyan-400 transition">
              PostgreSQL • Prisma • MongoDB
            </li>
            <li className="hover:text-cyan-400 transition">
              GenAI • Redis • Groq API
            </li>
            <li className="hover:text-cyan-400 transition">
              Docker • CI/CD • DevOps
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-cyan-500 text-lg font-semibold mb-4">
            Connect
          </h3>

          <div className="flex space-x-6 text-gray-400">

            <a
              href="https://github.com/Shanu529"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/shanu-chhetri-737b81325/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>

            <a
              href="mailto:shanu.chhetri529@gmail.com"
              className="hover:text-cyan-400 hover:scale-110 transition duration-300"
              aria-label="Email"
            >
              <Mail size={28} />
            </a>

          </div>

          <p className="text-gray-500 text-xs mt-6">
            Open to internships, collaborations, and innovative projects.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;