import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Play, Pause, Volume2, VolumeX, Sparkles, ArrowLeft } from "lucide-react";

function ProjectVideoPlayer({ src, title }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Guaranteed robust autoplay with muted policy compliance
    video.muted = true;
    video.play().then(() => {
      setIsPlaying(true);
    }).catch((error) => {
      console.log("Autoplay was prevented:", error);
      setIsPlaying(false);
    });
  }, [src]);

  // Handle metadata to detect video orientation dynamically
  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    const { videoWidth, videoHeight } = video;
    // If width > height, it's a horizontal/landscape video
    setIsLandscape(videoWidth > videoHeight);
    setIsVideoLoaded(true);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress(currentProgress || 0);
  };

  return (
    <div className="relative group w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-black/80 shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.2)]">
      {/* Absolute Glow Overlay */}
      <div className="absolute -inset-px bg-gradient-to-r from-cyan-500/20 via-transparent to-blue-500/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-10" />

      {/* 
        Container dynamic adaptation: 
        - If landscape (horizontal): standard aspect-video or auto height with object-contain
        - If portrait/vertical: centered max height container with object-contain so it never gets cropped
      */}
      <div 
        className={`relative w-full bg-black/90 flex items-center justify-center overflow-hidden transition-all duration-300 ${
          isLandscape ? "aspect-video max-h-[500px]" : "h-[480px] sm:h-[550px]"
        }`}
      >
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
          autoPlay
          loop
          muted
          playsInline
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />

        {/* Custom Modern Floating Controls Bar */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between rounded-xl border border-white/10 bg-black/70 px-4 py-2.5 backdrop-blur-md opacity-90 transition-opacity duration-300">
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlay}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400 transition-colors hover:bg-cyan-500 hover:text-black cursor-pointer"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={toggleMute}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-colors hover:bg-white/20 cursor-pointer"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>
            <span className="text-xs font-medium text-gray-300 truncate max-w-[150px] sm:max-w-xs">
              {title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-400 border border-cyan-500/35">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
              {isLandscape ? "Horizontal View" : "Vertical View"}
            </span>
          </div>
        </div>

        {/* Video Progress Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/15 z-20">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

function ProjectDetails() {
  const projects = [
    {
      id: 0,
      title: "ParaDox AI – Microservices-Based AI Workspace",
      video: "/videos/paradox.mp4",
      repo: "https://github.com/Shanu529/pdf-rag-system.git",
      live: "#",
      content: (
        <div className="space-y-6 text-gray-300 text-left">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> What I Built
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Built an <span className="text-cyan-400 font-medium">AI-powered document workspace</span> where users can upload PDFs, organize them into folders, generate summaries, and chat with their documents.
            </li>
            <li>
              Designed the project using a <span className="text-cyan-400 font-medium">microservices architecture</span> with independent services for authentication, documents, folders, chat, AI processing, and notifications.
            </li>
            <li>
              Implemented a complete <span className="text-cyan-400 font-medium">Retrieval-Augmented Generation (RAG)</span> pipeline using vector embeddings and semantic search.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> How I Implemented It
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Created an <span className="text-cyan-400 font-medium">API Gateway</span> to route requests between multiple backend services.
            </li>
            <li>
              Processed PDFs asynchronously using <span className="text-cyan-400 font-medium">Redis + BullMQ workers</span> for text extraction, chunking, embedding generation, and indexing.
            </li>
            <li>
              Stored vector embeddings in <span className="text-cyan-400 font-medium">ChromaDB</span> and used semantic retrieval with reranking before generating answers.
            </li>
            <li>
              Integrated <span className="text-cyan-400 font-medium">FastAPI, Sentence Transformers, and Groq Llama 3.3 70B</span> to generate summaries and context-aware responses.
            </li>
            <li>
              Implemented <span className="text-cyan-400 font-medium">Kafka + Socket.IO</span> for real-time document processing notifications.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Security & Performance
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Secured APIs using <span className="text-cyan-400 font-medium">JWT Access & Refresh Tokens</span>.
            </li>
            <li>
              Used <span className="text-cyan-400 font-medium">PostgreSQL + Prisma ORM</span> for reliable relational data management.
            </li>
            <li>
              Improved scalability through <span className="text-cyan-400 font-medium">microservices, asynchronous processing, Docker, and event-driven communication</span>.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Why I Built It
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To learn <span className="text-cyan-400 font-medium">AI, RAG, vector databases, and LLM integration</span> while building a production-style application.
            </li>
            <li>
              To gain practical experience with <span className="text-cyan-400 font-medium">microservices, distributed systems, Docker, Kafka, Redis, and scalable backend architecture</span>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 1,
      title: "ShadowChat – Anonymous Real-Time Chat Platform",
      video: "/videos/shadowchat.mp4",
      repo: "https://github.com/Shanu529/Shadow-Chat.git",
      live: "https://www.shadowchat.in",
      content: (
        <div className="space-y-6 text-gray-300 text-left">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> What I Built
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Developed an <span className="text-cyan-400 font-medium">anonymous real-time chat platform</span> enabling users to connect instantly without revealing personal identities.
            </li>
            <li>
              Implemented <span className="text-cyan-400 font-medium">private one-to-one messaging</span> with a modern responsive interface.
            </li>
            <li>
              Built a scalable backend capable of handling multiple concurrent users and live communication.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> How I Implemented It
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Built the frontend using <span className="text-cyan-400 font-medium">Next.js, React, and TypeScript</span>.
            </li>
            <li>
              Developed REST APIs using <span className="text-cyan-400 font-medium">Node.js and Express</span>.
            </li>
            <li>
              Integrated <span className="text-cyan-400 font-medium">Socket.IO</span> for instant bidirectional messaging.
            </li>
            <li>
              Used <span className="text-cyan-400 font-medium">Redis</span> for fast temporary data management and improved real-time performance.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Security & Performance
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Protected user sessions using <span className="text-cyan-400 font-medium">JWT authentication</span>.
            </li>
            <li>
              Optimized message delivery with <span className="text-cyan-400 font-medium">Socket.IO event-based communication</span>.
            </li>
            <li>
              Designed a responsive interface providing a smooth experience across desktop and mobile devices.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Why I Built It
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To gain hands-on experience building <span className="text-cyan-400 font-medium">real-time communication systems</span>.
            </li>
            <li>
              To understand <span className="text-cyan-400 font-medium">WebSockets, Socket.IO, scalable backend architecture, and Redis-based real-time applications</span>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 2,
      title: "GitMe – Custom Git-Like Version Control System",
      video: "/videos/gitme.mp4",
      repo: "https://github.com/Shanu529/gitme",
      live: "#",
      content: (
        <div className="space-y-6 text-gray-300 text-left">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> What I Built
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Developed a <span className="text-cyan-400 font-medium">custom Git-like CLI</span> using Node.js and Yargs.
            </li>
            <li>
              Implemented core commands: <span className="text-cyan-400 font-medium">init, add, commit, pull, revert</span>.
            </li>
            <li>
              Designed a hidden <span className="text-cyan-400 font-medium">.myGit architecture</span> for repository management.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> How I Implemented It
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Created a <span className="text-cyan-400 font-medium">staging system</span> before commit snapshots.
            </li>
            <li>
              Generated <span className="text-cyan-400 font-medium">UUID-based commit IDs</span> for version tracking.
            </li>
            <li>
              Stored commit metadata in structured JSON format.
            </li>
            <li>
              Integrated <span className="text-cyan-400 font-medium">Express + MongoDB backend</span> for remote repositories.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Security & Performance
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Implemented <span className="text-cyan-400 font-medium">JWT authentication</span> with token expiration.
            </li>
            <li>
              Added <span className="text-cyan-400 font-medium">Redis-based token blacklisting</span> for secure logout.
            </li>
            <li>
              Applied <span className="text-cyan-400 font-medium">API rate limiting</span> to prevent brute-force attacks.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Why I Built It
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              To deeply understand <span className="text-cyan-400 font-medium">Git internals and version control architecture</span>.
            </li>
            <li>
              To practice <span className="text-cyan-400 font-medium">system-level backend design</span>.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 3,
      title: "AI Chatbot Platform (LLM Integrated)",
      video: "/videos/CHATBOT.mp4",
      repo: "https://github.com/Shanu529/GenBot-LLM-Application",
      live: "#",
      content: (
        <div className="space-y-5 text-gray-300 text-left">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Architecture Design
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Built a full-stack AI system using <span className="text-cyan-400 font-medium">React + Express</span>.
            </li>
            <li>
              Integrated <span className="text-cyan-400 font-medium">Groq LLM (llama-3.1-8b-instant)</span> for real-time AI responses.
            </li>
            <li>
              Designed a modular <span className="text-cyan-400 font-medium">tool-calling architecture</span>.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Intelligent Tool Calling
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Enabled automatic <span className="text-cyan-400 font-medium">LLM function calling</span> for real-world queries.
            </li>
            <li>
              Integrated <span className="text-cyan-400 font-medium">Tavily Web Search API</span> for live information.
            </li>
            <li>
              Implemented a <span className="text-cyan-400 font-medium">two-step LLM flow</span> (initial call → tool execution → final response).
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Conversation Memory System
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Maintained session-based memory using <span className="text-cyan-400 font-medium">NodeCache</span>.
            </li>
            <li>
              Stored conversation history per <span className="text-cyan-400 font-medium">conversationId</span>.
            </li>
            <li>
              Designed architecture upgrade-ready for <span className="text-cyan-400 font-medium">Redis persistent memory</span>.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Security & Backend Controls
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Secured APIs using <span className="text-cyan-400 font-medium">JWT authentication</span>.
            </li>
            <li>
              Implemented <span className="text-cyan-400 font-medium">rate limiting</span> to prevent brute-force or API abuse.
            </li>
            <li>
              Structured middleware-based validation for secure request handling.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Advanced Features
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Implemented dynamic <span className="text-cyan-400 font-medium">personality switching system</span> (JARVIS, Loki, Thor, etc.).
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
      id: 4,
      title: "Prompt-to-Image AI Generator (Payment Integrated)",
      video: "/videos/project3.mp4",
      repo: "https://github.com/Shanu529/NextGen-.AI",
      live: "https://next-gen-ai-gold.vercel.app/",
      content: (
        <div className="space-y-5 text-gray-300 text-left">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Core System
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Built an AI-based image generation platform using <span className="text-cyan-400 font-medium">MERN stack</span>.
            </li>
            <li>
              Integrated third-party <span className="text-cyan-400 font-medium">AI image generation APIs</span> for dynamic prompt-based outputs.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Credit & Payment Architecture
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Designed a secure <span className="text-cyan-400 font-medium">credit-based usage system</span>.
            </li>
            <li>
              Integrated <span className="text-cyan-400 font-medium">Razorpay payment gateway</span> for purchasing credits.
            </li>
            <li>
              Implemented server-side <span className="text-cyan-400 font-medium">payment verification logic</span> to prevent fraud.
            </li>
            <li>
              Automatically updated user credits after successful payment validation.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Security & Validation
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Secured routes using <span className="text-cyan-400 font-medium">JWT authentication</span>.
            </li>
            <li>
              Implemented backend validation to ensure users cannot bypass credit deduction.
            </li>
            <li>
              Protected image generation endpoints with proper middleware checks.
            </li>
          </ul>

          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Sparkles size={16} className="text-cyan-400" /> Why It’s Strong
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Demonstrates real-world <span className="text-cyan-400 font-medium">payment integration workflow</span>.
            </li>
            <li>
              Shows understanding of <span className="text-cyan-400 font-medium">secure transaction handling</span>.
            </li>
            <li>
              Combines AI integration with business logic and scalable backend design.
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 5,
      title: "Short Video Platform",
      video: "/videos/project2.mp4",
      repo: "https://github.com/Shanu529/video-Platform",
      live: "https://ai-image-generator.netlify.app",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-left">
          <li>
            Developed full-stack <span className="text-cyan-400 font-medium">MERN media platform</span>.
          </li>
          <li>
            Implemented secure <span className="text-cyan-400 font-medium">authentication & media uploads</span>.
          </li>
          <li>
            Structured database modeling for scalable content management.
          </li>
        </ul>
      ),
    },
    {
      id: 6,
      title: "Music Streaming Web Application",
      video: "/videos/project1.mp4",
      repo: "https://github.com/Shanu529/Spotify-clone",
      live: "https://musicfly.vercel.app/",
      content: (
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-left">
          <li>
            Built responsive UI using <span className="text-cyan-400 font-medium">React + Tailwind</span>.
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
    <div className="relative min-h-screen bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-28 overflow-hidden">
      {/* Background Grid & Ambient Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 25%, black 35%, transparent 100%)",
          }}
        />
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Top-Left Back Button */}
        <div className="mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-cyan-500/40 hover:text-white hover:scale-[1.02] shadow-lg"
          >
            <ArrowLeft size={16} className="text-cyan-400" />
            <span>Back to Home</span>
          </a>
        </div>

        <div className="text-center mb-16">
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-4 backdrop-blur-md">
            Portfolio Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Featured Projects
          </h1>
          <p className="mt-3 text-sm text-gray-400 sm:text-base">
            Explore production-ready systems, scalable backends, and AI architectures.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {projects.map((p) => (
            <div
              key={p.id}
              className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-white/[0.05]"
            >
              <ProjectVideoPlayer src={p.video} title={p.title} />

              <div className="mt-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide">
                  {p.title}
                </h2>

                <div className="mt-6 border-t border-white/10 pt-6">
                  {p.content}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/40"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-[1.02]"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;