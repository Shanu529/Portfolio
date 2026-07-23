import React, { useState } from "react";
import { Menu, X, Terminal } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", id: "home" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (!element) return;

    const navbarOffset = 80;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({ top, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo wrapped in an anchor tag so clicking it scrolls to the "home" section */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="inline-block"
          >
            <h1 className="text-lg sm:text-xl font-bold tracking-wide text-white transition-transform duration-300 hover:scale-105 cursor-pointer">
              Portfolio
            </h1>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="relative group">
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="relative py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.label}
                  {/* Underline motion indicator */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Icons + Mobile Button */}
          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href="https://github.com/Shanu529"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.604-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 016 0c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.804 5.625-5.475 5.921.43.372.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/shanu-chhetri-737b81325/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hidden sm:inline-flex text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.568c0-1.328-.027-3.036-1.849-3.036-1.849 0-2.132 1.445-2.132 2.94v5.664H9.362V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.368-1.849 3.602 0 4.263 2.37 4.263 5.452v6.288zM5.337 7.433a2.063 2.063 0 11.001-4.125 2.063 2.063 0 010 4.126zm-1.782 13.02h3.564V9H3.555v11.454z" />
              </svg>
            </a>

            <a
              href="https://leetcode.com/u/shanu529/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode"
              className="hidden sm:inline-flex text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <Terminal size={20} />
            </a>

            <a
              href="mailto:shanu.chhetri529@gmail.com"
              aria-label="Email"
              className="hidden sm:inline-flex text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
            >
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 13.065L0 6v15h24V6l-12 7.065zM12 10.935L24 4H0l12 6.935z" />
              </svg>
            </a>

            {/* Mobile menu button with smooth rotation animation */}
            <button
              className="md:hidden inline-flex items-center justify-center text-gray-300 hover:text-cyan-400 transition-transform duration-300 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className={`transition-transform duration-300 ${isOpen ? "rotate-90 scale-110 text-cyan-400" : "rotate-0"}`}>
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with smooth height, opacity, and translate transition */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-4 py-4 shadow-2xl">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link, index) => (
              <li 
                key={link.id}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`transition-all duration-300 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
              >
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="block rounded-xl px-4 py-2.5 text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 border border-transparent hover:border-cyan-500/20"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;