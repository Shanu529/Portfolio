import React from "react";
import { Link, Mail } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-cyan-500 text-lg font-semibold mb-4">About Me</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {/* about me */}
            Innovating and building impactful web solutions with modern
            technologies. Dedicated to continuous learning and contributing to
            open source communities. Let’s create the future of the web
            together.
          </p>
          <p className="text-gray-500 text-xs mt-8">
            &copy; © 2025 Shanu Chhetri. All rights reserved.
          </p>
        </div>

        {/* Popular Links */}
        <div>
          <h3 className="text-cyan-500 text-lg font-semibold mb-4">
            Skills & Language
          </h3>
          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-cyan-400 transition">React</li>

            <li className="hover:text-cyan-400 transition">
              JavaScript (ES6+)
            </li>

            <li className="hover:text-cyan-400 transition">Node.js</li>

            <li className="hover:text-cyan-400 transition">MongoDB</li>
            <li className="hover:text-cyan-400 transition">Java DSA</li>

            <li className="hover:text-cyan-400 transition">Git & Github</li>
          </ul>
        </div>

        {/* Connect / Social */}
        <div>
          <h3 className="text-cyan-500 text-lg font-semibold mb-4">
            Connect with Us
          </h3>
          <div className="flex space-x-6 text-gray-400 text-xl">
            <a
              href="https://github.com/Shanu529"
              className="hover:text-cyan-400 transition"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 016 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shanu-chhetri-737b81325/"
              className="hover:text-cyan-400 transition"
              aria-label="LinkedIn"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.027-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.94v5.664H9.362V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.263 2.37 4.263 5.452v6.288zM5.337 7.433a2.063 2.063 0 11.001-4.125 2.063 2.063 0 010 4.126zm-1.782 13.02h3.564V9H3.555v11.454z" />
              </svg>
            </a>
            <a
              href="mailto:shanu.chhetri529@gmail.com?subject=Portfolio%20Contact&body=Hi,%20I%20would%20like%20to%20connect%20with%20you."
              target="_blank"
              aria-label="Email"
              className="hover:text-cyan-400 transition"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M12 13.065l-11.993-7.065v14.938h23.987v-14.938l-11.994 7.065zm0-2.13l11.993-7.065h-23.987l11.994 7.065z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
