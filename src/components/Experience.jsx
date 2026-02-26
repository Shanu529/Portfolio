import React from "react";

const experiences = [
  {
    title: "Full-Stack Developer Intern – IT Company, Ludhiana",
    period: "2026",
    description: [
      "Selected as Full-Stack Developer Intern.",
      "Built frontend using React and backend APIs using Node.js & Express.",
      "Worked with Prisma ORM, MySQL, and cloud deployment.",
    ],
  },
  {
    title: "Full-Stack Developer (Client Project)",
    period: "2026",
    description: [
      "Developed full-stack application with blog section & admin panel.",
      "Designed secure REST APIs with authentication & database integration.",
      "Deployed backend services on Railway Cloud.",
    ],
  },
  {
    title: "Hackathon Finalist – Top 20 (CGC University, Mohali)",
    period: "2025",
    description: [
      "Selected among Top 20 teams.",
      "Built scalable solution in team-based environment.",
    ],
  },
  {
    title: "Open Source Contributor – Social Winter of Code",
    period: "2025",
    description: [
      "Selected contributor and collaborated on open-source projects.",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
          Professional <span className="text-cyan-400">Experience</span>
        </h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl p-5 bg-white/5 hover:bg-white/10 transition"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg md:text-xl font-semibold">
                  {exp.title}
                </h3>
                <span className="text-xs text-gray-400">
                  {exp.period}
                </span>
              </div>

              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-gray-400 text-sm md:text-base">
          <p>
            Built <span className="text-cyan-400 font-medium">20+ Projects</span> across MERN & AI integrations.
          </p>
          <p>
            2+ Years Academic Experience • CGPA <span className="text-cyan-400 font-medium">8+</span>
          </p>
        </div>

      </div>
    </section>
  );
}

export default Experience;