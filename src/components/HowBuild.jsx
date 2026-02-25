import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HowBuild() {
  const boxAnimation = useRef(null);
  const headingRef = useRef(null);

  const isMobile = window.innerWidth < 768;
  const yOffset = isMobile ? 60 : 120;

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: -40,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 85%",
      },
    });

    gsap.from(boxAnimation.current, {
      y: yOffset,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: boxAnimation.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/img/developer.jpeg')" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2
          ref={headingRef}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          Projects I Build
        </h2>

        <div
          ref={boxAnimation}
          className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-10 shadow-2xl"
        >
<p className="text-gray-200 text-base md:text-lg leading-relaxed">
  I have built multiple full-stack projects, including a payment-based
  prompt-to-image AI platform with secure credit handling and authentication.
  I developed an AI-powered chatbot integrating the Groq API with optimized
  backend performance. I also created GitMe, a GitHub-inspired developer
  platform focused on clean architecture and scalability. Alongside personal
  builds, I’ve worked on client and collaborative group projects, earning a
  Top 20 position in a national-level hackathon.
</p>
        </div>
      </div>
    </section>
  );
}

export default HowBuild;