import React from "react";
import Dock from "./Dock";
import "./Dock.css";

function Stack() {
  const skills = [
    { name: "React", img: "/stack/react.png" },
    { name: "Node.js", img: "/stack/nodejs.png" },
    { name: "MongoDB", img: "/stack/mongo.png" },
    { name: "Express.js", img: "/stack/expressjs.webp" },
    { name: "JavaScript", img: "/stack/js.webp" },
    { name: "Tailwind CSS", img: "/stack/tailwind.png" },
    { name: "GSAP", img: "/stack/gsap.png" },
    { name: "Git", img: "/stack/git.png" },
    { name: "Github", img: "/stack/github.png" },
    { name: "Java", img: "/stack/java.webp" },
  ];
 
  const items = [
    {
      icon: <img src="/stack/react.png" alt="React" className="rounded-full" />,
      label: `"React"JavaScript library for building user interfaces`,
      description: "JavaScript library for building user interfaces",
      onClick: () => alert("React!"),
    },
    {
      icon: (
        <img src="/stack/nodejs.png" alt="Node.js" className="rounded-full" />
      ),
      label: `"Node.js"JavaScript runtime for building backend applications`,
      description: "JavaScript runtime for building backend applications",
      onClick: () => alert("Node.js!"),
    },
    {
      icon: (
        <img
          src="/stack/expressjs.webp"
          alt="Express.js"
          className="rounded-full"
        />
      ),
      label: `"Express.js"Minimal backend web framework for Node.js`,
      description: "Minimal backend web framework for Node.js",
      onClick: () => alert("Express.js!"),
    },
    {
      icon: (
        <img src="/stack/mongo.png" alt="MongoDB" className="rounded-full" />
      ),
      label: `"MongoDB"NoSQL database for modern applications`,
      description: "NoSQL database for modern applications",
      onClick: () => alert("MongoDB!"),
    },
    {
      icon: (
        <img src="/stack/js.webp" alt="JavaScript" className="rounded-full" />
      ),
      label: `"JavaScript"Core programming language of the web`,
      description: "Core programming language of the web",
      onClick: () => alert("JavaScript!"),
    },
    {
      icon: (
        <img
          src="/stack/tailwind.png"
          alt="Tailwind CSS"
          className="rounded-full"
        />
      ),
      label: `"Tailwind CSS"Utility-first CSS framework for styling`,
      description: "Utility-first CSS framework for styling",
      onClick: () => alert("Tailwind!"),
    },
    {
      icon: <img src="/stack/css3.png" alt="CSS3" className="rounded-full" />,
      label: `"CSS3"Stylesheet language for designing web pages`,
      description: "Stylesheet language for designing web pages",
      onClick: () => alert("CSS3!"),
    },
    {
      icon: <img src="/stack/html.jpg" alt="HTML5" className="rounded-full" />,
      label: `"HTML5"Markup language for structuring web content`,
      description: "Markup language for structuring web content",
      onClick: () => alert("HTML5!"),
    },
    {
      icon: <img src="/stack/java.jpg" alt="Java" className="rounded-full" />,
      label: `"Java"Popular object-oriented programming language`,
      description: "Popular object-oriented programming language",
      onClick: () => alert("Java!"),
    },
    {
      icon: <img src="/stack/gsap.png" alt="GSAP" className="rounded-full" />,
      label:` "GSAP" Animation library for smooth web animations`,
      description: "Animation library for smooth web animations",
      onClick: () => alert("GSAP!"),
    },
    {
      icon: <img src="/stack/git.png" alt="Git" className="rounded-full" />,
      label: `"Version control" system for tracking code changes`,
      description: "Version control system for tracking code changes",
      onClick: () => alert("Git!"),
    },
    {
      icon: (
        <img src="/stack/github.png" alt="GitHub" className="rounded-full" />
      ),
      label: `"GitHub" Cloud platform for hosting Git repositories`,
      description: "Cloud platform for hosting Git repositories",
      onClick: () => alert("GitHub!"),
    },
  ];

  return (
    <>
      <section className=" md:hidden ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-2 py-5  border-gray-300">
          <h2 className="md:text-3xl text-2xl font-bold text-center mb-10">
            <span className="text-cyan-600">Technologies </span> and tools I
            work with
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col  items-center gap-2 group transition-transform rounded-full hover:scale-110"
              >
                <img
                  src={skill.img}
                  alt={skill.name}
                  className="w-16 h-16 sm:w-20 sm:h-20   object-contain rounded-full animate-wiggle "
                />
             
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-black  hidden md:inline ">
        <div className="bg-black text-white p-14 ">
          <p className="bg-black text-white ">
            <h2 className="text-lg  text-center mb-4">
              here are the technologies I work with
            </h2>
          </p>
          <div
            className="stack-container flex gap-32 bg-black "
            style={{ position: "relative", height: "100px", padding: "20px" }}
          >
            <Dock
              items={items}
              panelHeight={80}
              baseItemSize={50}
              magnification={70}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Stack;
