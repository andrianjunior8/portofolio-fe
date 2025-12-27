"use client";

import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Layout,
  ChevronDown,
  ExternalLink,
  Download,
  Link,
} from "lucide-react";
import { useState, useEffect } from "react";

// ==================== PROJECT DATA ====================
// Add your projects here - easy to edit!
const PROJECTS = [
  {
    title: "Point of Sales",
    desc: "High-performance REST API handling 10k+ requests/min",
    tech: ["Golang", "MySQL", "Redis", "Next js", "Docker", "Jenkins"],
    gradient: "from-purple-500 to-pink-500",
    link: "pos",
  },
  {
    title: "Stock Opname",
    desc: "Real-time data visualization with Next.js",
    tech: ["Golang", "MySql", "Next.js", "Docker", "Jenkins", "WebSocket"],
    gradient: "from-blue-500 to-cyan-500",
    link: "stock-opname",
  },
  {
    title: "Business Continuity Management",
    desc: "Distributed system with event-driven architecture",
    tech: ["Golang", "Elastic Search", "Docker", "Jenkins"],
    gradient: "from-orange-500 to-red-500",
    link: "bcm",
  },
  {
    title: "Partner",
    desc: "WebSocket-based chat with typing indicators",
    tech: [
      "Golang",
      "SQL Server",
      "Firebase",
      "Elastic Search",
      "Docker",
      "Jenkins",
    ],
    gradient: "from-green-500 to-teal-500",
    link: "#",
  },
  {
    title: "Banking Middleware Integration",
    desc: "Secure payment processing system",
    tech: ["Golang", "Elastic Search"],
    gradient: "from-indigo-500 to-purple-500",
    link: "bsi",
  },
  {
    title: "Logistics",
    desc: "Collaborative project management tool",
    tech: [
      "Next.js",
      "Golang",
      "MySQL",
      "Elastic Search",
      "WebSocket",
      "Redis",
      "Google Cloud Storage",
    ],
    gradient: "from-yellow-500 to-orange-500",
    link: "logistic",
  },
];
// ======================================================

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const techStack = [
    {
      name: "Golang",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      level: 90,
    },
    {
      name: "Next.js",
      icon: Layout,
      color: "from-gray-700 to-gray-900",
      level: 85,
    },
    {
      name: "MySQL",
      icon: Database,
      color: "from-blue-600 to-blue-800",
      level: 88,
    },
  ];

  const projectsPerSlide = 3;
  const totalSlides = Math.ceil(PROJECTS.length / projectsPerSlide);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const goToSlide = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const visibleProjects = PROJECTS.slice(
    currentSlide * projectsPerSlide,
    (currentSlide + 1) * projectsPerSlide
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-gray-900/80 backdrop-blur-lg shadow-lg" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AJ
          </div>
          <div className="flex gap-8">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-4xl text-center relative z-10">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                <Image
                  src="/andrian.jpg"
                  alt="Andrian Junior"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Andrian Junior
          </h1>

          <p className="text-2xl md:text-3xl mb-4 text-gray-300">
            Full Stack Engineer
          </p>

          <p className="text-xl text-gray-400 mb-8">
            Building scalable systems with{" "}
            <span className="text-cyan-400 font-semibold">Golang</span>,{" "}
            <span className="text-white font-semibold">Next.js</span> &{" "}
            <span className="text-blue-400 font-semibold">MySQL</span>
          </p>

          <div className="flex gap-6 justify-center mb-12">
            {[
              {
                Icon: Github,
                href: "https://github.com/andrianjunior8",
                color: "hover:text-purple-400",
              },
              {
                Icon: Linkedin,
                href: "https://www.linkedin.com/in/andrian-karloys",
                color: "hover:text-blue-400",
              },
              { Icon: Mail, href: "#", color: "hover:text-pink-400" },
            ].map(({ Icon, href, color }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-800/50 rounded-full ${color} transition-all duration-300 hover:scale-110 hover:bg-gray-700/50`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-500" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                {`I'm a passionate full stack engineer with{" "}`}
                <span className="text-blue-400 font-semibold">
                  3 years of experience
                </span>{" "}
                building scalable backend systems and robust frontend
                interfaces.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating{" "}
                <span className="text-purple-400 font-semibold">
                  high-performance applications
                </span>{" "}
                that handle thousands of concurrent users while maintaining
                clean, maintainable code.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My approach combines{" "}
                <span className="text-pink-400 font-semibold">
                  solid engineering principles
                </span>{" "}
                with modern development practices to deliver solutions that
                scale.
              </p>
            </div>

            <div className="space-y-6">
              {techStack.map(({ name, icon: Icon, color, level }) => (
                <div key={name} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 bg-gradient-to-br ${color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="text-xl font-semibold">{name}</span>
                    </div>
                    <span className="text-gray-400">{level}%</span>
                  </div>
                  <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
                      style={{ width: `${level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="relative">
            {/* Projects Grid with smooth transition */}
            <div className="overflow-hidden">
              <div
                className={`grid md:grid-cols-3 gap-8 mb-8 transition-all duration-700 ease-out ${
                  isTransitioning
                    ? "opacity-0 transform translate-x-12"
                    : "opacity-100 transform translate-x-0"
                }`}
              >
                {visibleProjects.map((project, i) => (
                  <a
                    key={`${currentSlide}-${i}`}
                    href={"project/" + project.link}
                  >
                    <div
                      key={`${currentSlide}-${i}`}
                      className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                      />
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl mb-4 flex items-center justify-center`}
                      ></div>
                      <h3 className="text-2xl font-bold mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4">{project.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            {totalSlides > 1 && (
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevSlide}
                  disabled={isTransitioning}
                  className={`p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 ${
                    isTransitioning ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Previous projects"
                >
                  <ChevronDown size={24} className="rotate-90" />
                </button>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goToSlide(i)}
                      disabled={isTransitioning}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        i === currentSlide
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                          : "bg-gray-600 hover:bg-gray-500 w-3"
                      } ${isTransitioning ? "cursor-not-allowed" : ""}`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  disabled={isTransitioning}
                  className={`p-3 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-all duration-300 hover:scale-110 ${
                    isTransitioning ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  aria-label="Next projects"
                >
                  <ChevronDown size={24} className="-rotate-90" />
                </button>
              </div>
            )}

            {/* Project Counter */}
            <p className="text-center mt-6 text-gray-400">
              Showing {currentSlide * projectsPerSlide + 1}-
              {Math.min((currentSlide + 1) * projectsPerSlide, PROJECTS.length)}{" "}
              of {PROJECTS.length} projects
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            {`I'm always open to discussing new projects and opportunities`}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="#"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </a>
            <a
              href="#"
              className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>© 2024 Andrian Junior. Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
}
