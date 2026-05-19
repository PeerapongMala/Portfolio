import "./index.css";
import {
  Code,
  BookOpen,
  TrendingUp,
  Gamepad2,
  ArrowRight,
  Mail,
  Github,
  Menu,
  X,
  ChevronDown,
  Database,
  Globe,
} from "lucide-react";
import { useState } from "react";
import profileImg from "./profile.jpg";
import imgFearfree from "./project-fearfree.jpg";
import imgTrustmate from "./project-trustmate.jpg";
import imgBubbleshop from "./project-bubbleshop.jpg";
import imgJoryquiz from "./project-joryquiz.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "#contact" },
];

const techStack = [
  { name: "Java", color: "text-orange-400" },
  { name: "React", color: "text-cyan-400" },
  { name: "Go", color: "text-sky-400" },
  { name: "PostgreSQL", color: "text-blue-400" },
  { name: "HTML/CSS", color: "text-pink-400" },
];

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Full Stack solutions using React & Java. Custom Web Apps and API integration.",
    accent: "from-cyan-500 to-blue-500",
    border: "hover:border-cyan-500/50",
  },
  {
    icon: BookOpen,
    title: "Tutoring",
    description:
      "Math & Computer Science tutoring for grades P.6 - M.1. Friendly and foundational.",
    accent: "from-emerald-500 to-teal-500",
    border: "hover:border-emerald-500/50",
  },
  {
    icon: TrendingUp,
    title: "Investment Basics",
    description:
      "Consulting on stock market basics & technical analysis for beginners.",
    accent: "from-violet-500 to-purple-500",
    border: "hover:border-violet-500/50",
  },
  {
    icon: Gamepad2,
    title: "Gaming & Lifestyle",
    description:
      "Trusted Game ID Middleman, Gameplay Coaching, and Football Watch Buddy.",
    accent: "from-rose-500 to-orange-500",
    border: "hover:border-rose-500/50",
  },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Peerapong Mala
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-800/50">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 pt-24 flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="flex-1 text-center md:text-left">
          <div className="animate-fade-in-up">
            <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-6">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
              <br />
              <span className="text-white">&</span>{" "}
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Multidisciplinary Tutor
              </span>
            </h1>
          </div>

          <p className="animate-fade-in-up-delay text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Bridging the gap between robust Code, Education, and Lifestyle
            services.
          </p>

          <div className="animate-fade-in-up-delay-2 flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-lg shadow-cyan-500/25"
            >
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="/cv"
              className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:text-white transition-all"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-slate-600 text-slate-300 font-semibold rounded-lg hover:border-cyan-500/50 hover:text-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile image */}
        <div className="animate-fade-in-up flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            <img
              src={profileImg}
              alt="Peerapong Mala"
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-slate-700/50 shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="py-20 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-sm font-medium tracking-widest uppercase text-slate-500 mb-10">
          Core Tech Stack
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-2 px-5 py-3 bg-slate-800/50 border border-slate-700/50 rounded-full hover:border-slate-600 transition-colors"
            >
              <Database size={16} className={tech.color} />
              <span className="text-sm font-medium text-slate-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group p-8 bg-slate-800/30 border border-slate-700/50 rounded-2xl ${service.border} transition-all hover:bg-slate-800/50`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} mb-5`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "FearFree Animals",
    description:
      "Full-stack: Go backend (auth, game logic, rewards, assessment) + React FE. Deployed on Render & Vercel.",
    tags: ["Go", "React", "TypeScript", "PostgreSQL", "Playwright"],
    url: "https://fearfree-frontend.vercel.app",
    github: "https://github.com/PeerapongMala/fearfree-frontend",
    accent: "from-emerald-500 to-teal-500",
    border: "hover:border-emerald-500/50",
    image: imgFearfree,
  },
  {
    name: "TrustMate",
    description:
      "Mental health platform: AI chatbot, mood tracking, therapist booking, crisis detection. 131 unit + 18 integration tests.",
    tags: ["NestJS", "Prisma", "React", "Google OAuth"],
    url: "https://trustmate-th.vercel.app",
    github: "https://github.com/PeerapongMala/2026-04-trustmate-frontend",
    accent: "from-violet-500 to-purple-500",
    border: "hover:border-violet-500/50",
    image: imgTrustmate,
  },
  {
    name: "BubbleShop",
    description:
      "E-commerce for in-game items: real-time order board, multi-admin roles, stock tracking, coupons, commission tiers.",
    tags: ["JavaScript", "Firebase", "Firestore", "reCAPTCHA v3"],
    url: "https://talesrunner-bubbleshop.web.app",
    github: "https://github.com/PeerapongMala/Bubbleshop",
    accent: "from-rose-500 to-orange-500",
    border: "hover:border-rose-500/50",
    image: imgBubbleshop,
  },
  {
    name: "JORY Quiz Web",
    description:
      "Quiz app with result image generation and Instagram story sharing via Web Share API.",
    tags: ["Next.js", "TypeScript", "Web Share API"],
    url: "https://jory-quiz-web.vercel.app",
    github: "https://github.com/PeerapongMala/JORY-quiz-web",
    accent: "from-cyan-500 to-blue-500",
    border: "hover:border-cyan-500/50",
    image: imgJoryquiz,
  },
];

function ProjectSection() {
  return (
    <section id="projects" className="py-24 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.name}
              className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl ${project.border} transition-all hover:bg-slate-800/50 overflow-hidden`}
            >
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-44 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div className="p-7">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Globe size={14} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={14} />
                  Code
                </a>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer id="contact" className="py-20 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Contact
        </h2>
        <p className="text-slate-400 max-w-md mx-auto mb-10">
          Interested in working together or have a question? Feel free to reach
          out.
        </p>

        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="mailto:peetae012@gmail.com"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
          <a
            href="https://github.com/PeerapongMala"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </div>

        <div className="border-t border-slate-800/50 pt-8">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Peerapong. Built with React &
            Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="bg-slate-950 text-slate-200 min-h-screen">
      <Navbar />
      <Hero />
      <TechStackSection />
      <ServicesSection />
      <ProjectSection />
      <ContactFooter />
    </div>
  );
}

export default App;
