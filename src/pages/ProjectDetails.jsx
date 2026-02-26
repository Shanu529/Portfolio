import React from "react";

function ProjectDetails() {
  const projects = [
    {
      id: 0,
      title: "GitMe – Custom Git-Like Version Control System",
      video: "/videos/gitme.mp4",
      repo: "https://github.com/Shanu529/gitme",
      live: "#",
      content: (
        <div className="space-y-6 text-gray-300 text-left">

          <h3 className="text-lg font-semibold text-white">🔹 What I Built</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Developed a <span className="text-cyan-400">custom Git-like CLI</span> using Node.js and Yargs.
            </li>
            <li>
              Implemented core commands: <span className="text-cyan-400">init, add, commit, pull, revert</span>.
            </li>
            <li>
              Designed a hidden <span className="text-cyan-400">.myGit architecture</span> for repository management.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-white">🔹 How I Implemented It</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Created a <span className="text-cyan-400">staging system</span> before commit snapshots.
            </li>
            <li>
              Generated <span className="text-cyan-400">UUID-based commit IDs</span> for version tracking.
            </li>
            <li>
              Stored commit metadata in structured JSON format.
            </li>
            <li>
              Integrated <span className="text-cyan-400">Express + MongoDB backend</span> for remote repositories.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-white">🔹 Security & Performance</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Implemented <span className="text-cyan-400">JWT authentication</span> with token expiration.
            </li>
            <li>
              Added <span className="text-cyan-400">Redis-based token blacklisting</span> for secure logout.
            </li>
            <li>
              Applied <span className="text-cyan-400">API rate limiting</span> to prevent brute-force attacks.
            </li>
          </ul>

          <h3 className="text-lg font-semibold text-white">🔹 Why I Built It</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To deeply understand <span className="text-cyan-400">Git internals and version control architecture</span>.
            </li>
            <li>
              To practice <span className="text-cyan-400">system-level backend design</span>.
            </li>
          </ul>
        </div>
      ),
    },

   {
  id: 1,
  title: "AI Chatbot Platform (LLM Integrated)",
  video: "/videos/CHATBOT.mp4",
  repo: "https://github.com/Shanu529/GenBot-LLM-Application",
  live: "#",
  content: (
    <div className="space-y-5 text-gray-300 text-left">

      <h3 className="text-white font-semibold">🔹 Architecture Design</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Built a full-stack AI system using <span className="text-cyan-400">React + Express</span>.
        </li>
        <li>
          Integrated <span className="text-cyan-400">Groq LLM (llama-3.1-8b-instant)</span> for real-time AI responses.
        </li>
        <li>
          Designed a modular <span className="text-cyan-400">tool-calling architecture</span>.
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Intelligent Tool Calling</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Enabled automatic <span className="text-cyan-400">LLM function calling</span> for real-world queries.
        </li>
        <li>
          Integrated <span className="text-cyan-400">Tavily Web Search API</span> for live information.
        </li>
        <li>
          Implemented a <span className="text-cyan-400">two-step LLM flow</span> (initial call → tool execution → final response).
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Conversation Memory System</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Maintained session-based memory using <span className="text-cyan-400">NodeCache</span>.
        </li>
        <li>
          Stored conversation history per <span className="text-cyan-400">conversationId</span>.
        </li>
        <li>
          Designed architecture upgrade-ready for <span className="text-cyan-400">Redis persistent memory</span>.
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Security & Backend Controls</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Secured APIs using <span className="text-cyan-400">JWT authentication</span>.
        </li>
        <li>
          Implemented <span className="text-cyan-400">rate limiting</span> to prevent brute-force or API abuse.
        </li>
        <li>
          Structured middleware-based validation for secure request handling.
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Advanced Features</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Implemented dynamic <span className="text-cyan-400">personality switching system</span> (JARVIS, Loki, Thor, etc.).
        </li>
        <li>
          Injected system-level prompts to control AI behavior.
        </li>
        <li>
          Designed scalable backend architecture for production-ready AI deployment.
        </li>
      </ul>

    </div>
  ),
},

   {
  id: 2,
  title: "Prompt-to-Image AI Generator (Payment Integrated)",
  video: "/videos/project3.mp4",
  repo: "https://github.com/Shanu529/NextGen-.AI",
  live: "https://next-gen-ai-gold.vercel.app/",
  content: (
    <div className="space-y-5 text-gray-300 text-left">

      <h3 className="text-white font-semibold">🔹 Core System</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Built an AI-based image generation platform using <span className="text-cyan-400">MERN stack</span>.
        </li>
        <li>
          Integrated third-party <span className="text-cyan-400">AI image generation APIs</span> for dynamic prompt-based outputs.
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Credit & Payment Architecture</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Designed a secure <span className="text-cyan-400">credit-based usage system</span>.
        </li>
        <li>
          Integrated <span className="text-cyan-400">Razorpay payment gateway</span> for purchasing credits.
        </li>
        <li>
          Implemented server-side <span className="text-cyan-400">payment verification logic</span> to prevent fraud.
        </li>
        <li>
          Automatically updated user credits after successful payment validation.
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Security & Validation</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Secured routes using <span className="text-cyan-400">JWT authentication</span>.
        </li>
        <li>
          Implemented backend validation to ensure users cannot bypass credit deduction.
        </li>
        <li>
          Protected image generation endpoints with proper middleware checks.
        </li>
      </ul>

      <h3 className="text-white font-semibold">🔹 Why It’s Strong</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Demonstrates real-world <span className="text-cyan-400">payment integration workflow</span>.
        </li>
        <li>
          Shows understanding of <span className="text-cyan-400">secure transaction handling</span>.
        </li>
        <li>
          Combines AI integration with business logic and scalable backend design.
        </li>
      </ul>

    </div>
  ),
},
    {
      id: 3,
      title: "Short Video Platform",
      video: "/videos/project2.mp4",
      repo: "https://github.com/Shanu529/video-Platform",
      live: "https://ai-image-generator.netlify.app",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-left">
          <li>
            Developed full-stack <span className="text-cyan-400">MERN media platform</span>.
          </li>
          <li>
            Implemented secure <span className="text-cyan-400">authentication & media uploads</span>.
          </li>
          <li>
            Structured database modeling for scalable content management.
          </li>
        </ul>
      ),
    },

    {
      id: 4,
      title: "Music Streaming Web Application",
      video: "/videos/project1.mp4",
      repo: "https://github.com/Shanu529/Spotify-clone",
      live: "https://musicfly.vercel.app/",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-left">
          <li>
            Built responsive UI using <span className="text-cyan-400">React + Tailwind</span>.
          </li>
          <li>
            Implemented reusable component architecture.
          </li>
          <li>
            Focused on smooth UI/UX interactions.
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 py-16 px-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Featured Projects
      </h1>

      <div className="flex flex-col gap-14 max-w-6xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl shadow-xl overflow-hidden p-6 md:p-10 transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <div className="w-full bg-black rounded-xl overflow-hidden">
              <video
                src={p.video}
                className="w-full max-h-[500px] object-contain"
                controls
                playsInline
              />
            </div>

            <div className="mt-8 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                {p.title}
              </h2>

              <div className="mt-6">{p.content}</div>

              <div className="mt-8 flex justify-center gap-5">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white text-sm font-medium rounded-lg transition"
                >
                  Live Demo
                </a>
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;