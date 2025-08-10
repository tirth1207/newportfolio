"use client"

import { useEffect, useState } from "react"
import { TypingAnimation } from "@/components/magicui/typing-animation"
import { CardStack } from "@/components/ui/card-stack"
import MaskedDiv from "@/components/ui/masked-div"
import { motion, useScroll, useTransform } from "framer-motion"
import { Asterisk, Sun, Moon, Camera, Heart, Code } from "lucide-react"
import type React from "react"
import WrapButtonCustom from "@/components/ui/wrap-button"
import LanguageLoader from "@/components/ui/loading-screen"
import { BlurFade } from "@/components/magicui/blur-fade"
import HoverExpand from "@/components/ui/hover-expand"
import ContactModal from "@/components/ui/contact-modal"
import FullscreenMenu from "@/components/ui/fullscreen-menu"
import { SmoothCursor } from "@/components/ui/smooth-cursor"
import { Dock, DockIcon } from "@/components/magicui/dock"

// Card type for CardStack
type Card = {
  id: number
  name: string
  designation: string
  content: React.ReactNode
}

const projectCards: Card[] = [
  {
    id: 1,
    name: "Skiper",
    designation: "AI-powered Task Manager",
    content: (
      <div className="flex flex-col h-full gap-4">
        {/* Upper Card - Video Section */}
        <div className="w-full h-[200px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-neutral-800 relative shadow-lg">
          <img
            src="https://placehold.co/700x200?text=Skiper+Video+Demo"
            alt="Skiper video demo"
            className="object-cover w-full h-full"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        {/* Lower Card - Details Section */}
        <div className="flex-1 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-[#18181b]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl text-black dark:text-white font-semibold mb-2">Skiper</h3>
              <p className="text-black dark:text-white text-sm leading-relaxed mb-3">
                A productivity app that leverages AI to help you organize, prioritize, and complete your daily tasks
                efficiently.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                  AI
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                  Productivity
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-500 dark:text-gray-400">©2024 Tirth Patel</span>
              <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">Live Now</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    name: "Portfolio V2",
    designation: "Personal Website",
    content: (
      <div className="flex flex-col h-full gap-4">
        {/* Upper Card - Video Section */}
        <div className="w-full h-[200px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-neutral-800 relative shadow-lg">
          <img
            src="https://placehold.co/700x200?text=Portfolio+V2+Video+Demo"
            alt="Portfolio V2 video demo"
            className="object-cover w-full h-full"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        {/* Lower Card - Details Section */}
        <div className="flex-1 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-white/[0.1] bg-white dark:bg-[#18181b]">
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl text-black dark:text-white font-semibold mb-2">Portfolio V2</h3>
              <p className="text-black dark:text-white text-sm leading-relaxed mb-3">
                My latest portfolio, built with Next.js, Tailwind, and Framer Motion. Showcasing my work and skills in a
                modern, interactive way.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 text-xs rounded-full">
                  Tailwind
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">
                  Framer Motion
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-500 dark:text-gray-400">©2024 Tirth Patel</span>
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">Live Now</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    name: "DevConnect",
    designation: "Developer Community Platform",
    content: (
      <div className="flex flex-col h-full">
        {/* Video Section */}
        <div className="w-full h-[200px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-neutral-800 mb-4 relative">
          <img
            src="https://placehold.co/700x200?text=DevConnect+Video+Demo"
            alt="DevConnect video demo"
            className="object-cover w-full h-full"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 cursor-pointer">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
        {/* Details Section */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl text-black dark:text-white font-semibold mb-2">DevConnect</h3>
            <p className="text-black dark:text-white text-sm leading-relaxed mb-3">
              A social platform for developers to share projects, collaborate, and grow together. Built with a scalable
              full-stack architecture.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                Next.js
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">
                Node.js
              </span>
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs rounded-full">
                MongoDB
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-500 dark:text-gray-400">©2024 Tirth Patel</span>
            <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">Coming Soon</span>
          </div>
        </div>
      </div>
    ),
  },
]

const images = [
  "https://images.pexels.com/photos/30082445/pexels-photo-30082445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.unsplash.com/photo-1692606743169-e1ae2f0a960f?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://assets.lummi.ai/assets/QmQLSBeCFHUwCv7WBpGr7T3P67UXaAw8B2vvmtKimyinrL?auto=format&w=1500",
  "https://assets.lummi.ai/assets/QmXe6v7jBF5L2R7FCio8KQdXwTX2uqzRycUJapyjoXaTqd?auto=format&w=1500",
  "https://assets.lummi.ai/assets/QmNfwUDpehZyLWzE8to7QzgbJ164S6fQy8JyUWemHtmShj?auto=format&w=1500",
  "https://images.unsplash.com/photo-1706049379414-437ec3a54e93?q=80&w=1200&auto=format",
  "https://assets.lummi.ai/assets/Qmb2P6tF2qUaFXnXpnnp2sk9HdVHNYXUv6MtoiSq7jjVhQ?auto=format&w=1500",
  "https://images.unsplash.com/photo-1508873881324-c92a3fc536ba?q=80&w=1200&auto=format",
]

// Photography images for About Me section
const photographyImages = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1200&auto=format",
]

const dockImages = [
  {
    title: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    alt: "Next.js Logo",
  },
  {
    title: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React Logo",
  },
  {
    title: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "JavaScript Logo",
  },
  {
    title: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript Logo",
  },
  {
    title: "Tailwind CSS",
    src: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/tailwindcss.png",
    alt: "Tailwind CSS Logo",
  },
  {
    title: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "Figma Logo",
  },
  {
    title: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker Logo",
  },
  {
    title: "Vercel v0",
    src: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/v0.png",
    alt: "Vercel Logo",
  },
  {
    title: "ChatGPT",
    src: "https://cdn-icons-png.flaticon.com/512/12222/12222560.png",
    alt: "ChatGPT Logo",
  },
  {
    title: "Claude",
    src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/claude-ai-icon.png",
    alt: "Claude Logo",
  },
  {
    title: "Cursor",
    src: "https://www.logoshape.com/wp-content/uploads/2025/03/Cursor_Vector_Logo.png",
    alt: "Cursor Logo",
  },
]

// Tech Stack Data
const techStackCategories = [
  {
    category: "Frontend",
    color: "#61DAFB",
    technologies: [
      { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 95 },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: 90,
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        level: 88,
      },
      {
        name: "Tailwind CSS",
        icon: "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/tailwindcss.png",
        level: 92,
      },
      { name: "Framer Motion", icon: "https://www.framer.com/images/favicons/favicon.ico", level: 85 },
    ],
  },
  {
    category: "Backend",
    color: "#68D391",
    technologies: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        level: 87,
      },
      {
        name: "Express",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        level: 85,
      },
      {
        name: "Python",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: 80,
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        level: 82,
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        level: 78,
      },
    ],
  },
  {
    category: "Tools & Cloud",
    color: "#F687B3",
    technologies: [
      {
        name: "Docker",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        level: 75,
      },
      {
        name: "AWS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
        level: 70,
      },
      {
        name: "Vercel",
        icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/v0.png",
        level: 90,
      },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 88 },
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 85 },
    ],
  },
]

// 3D Keyboard Keys Data
const keyboardKeys = [
  // Top row
  {
    key: "HOME",
    action: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    position: { row: 0, col: 0 },
    size: "normal",
    color: "#4A90E2",
  },
  {
    key: "ABOUT",
    action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
    position: { row: 0, col: 1 },
    size: "normal",
    color: "#7B68EE",
  },
  {
    key: "PROJECTS",
    action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }),
    position: { row: 0, col: 2 },
    size: "normal",
    color: "#FF6B6B",
  },
  {
    key: "CONTACT",
    action: () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }),
    position: { row: 0, col: 3 },
    size: "normal",
    color: "#4ECDC4",
  },

  // Second row
  {
    key: "TECH",
    action: () => document.getElementById("tech-stack")?.scrollIntoView({ behavior: "smooth" }),
    position: { row: 1, col: 0 },
    size: "normal",
    color: "#95E1D3",
  },
  {
    key: "PHOTO",
    action: () => document.getElementById("about-me")?.scrollIntoView({ behavior: "smooth" }),
    position: { row: 1, col: 1 },
    size: "normal",
    color: "#F38BA8",
  },
  {
    key: "RESUME",
    action: () => window.open("#", "_blank"),
    position: { row: 1, col: 2 },
    size: "normal",
    color: "#A8E6CF",
  },
  {
    key: "GITHUB",
    action: () => window.open("https://github.com", "_blank"),
    position: { row: 1, col: 3 },
    size: "normal",
    color: "#FFD93D",
  },

  // Third row - Space bar
  {
    key: "SCROLL TO TOP",
    action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    position: { row: 2, col: 0 },
    size: "wide",
    color: "#6C5CE7",
  },
]

// Helper to get and set dark mode in localStorage
function getInitialMode() {
  if (typeof window === "undefined") return false
  if (window.localStorage.getItem("theme") === "dark") return true
  if (window.localStorage.getItem("theme") === "light") return false
  // fallback to system
  return window.matchMedia("(prefers-color-scheme: dark)").matches
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(getInitialMode)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      window.localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      window.localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  // Add scroll listener for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LanguageLoader onComplete={handleLoadingComplete} />
  }

  return (
    <div className={`transition-colors duration-300 ${darkMode ? "bg-black" : "bg-white"}`}>
      {/* Enhanced Navigation with Pure Glassmorphism */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-all duration-500 ${
          isScrolled ? "bg-white/10 dark:bg-black/10 backdrop-blur-2xl backdrop-saturate-150" : "bg-transparent"
        }`}
        style={{ height: "72px" }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <BlurFade delay={0.25} inView>
          <div className="flex items-center gap-2">
            <motion.button
              onClick={() => setIsMenuOpen(true)}
              className={`p-3 rounded-xl transition-all duration-300 group cursor-pointer relative overflow-hidden ${
                isScrolled
                  ? "bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10"
                  : "bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/5"
              }`}
              aria-label="Open menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Enhanced hamburger menu with better visibility */}
              <div className="flex flex-col items-center justify-center gap-1.5 relative z-10">
                <motion.div
                  className={`h-0.5 w-5 rounded-full transition-all duration-300 ${
                    darkMode ? "bg-white shadow-sm" : "bg-black shadow-sm"
                  }`}
                  whileHover={{ width: "24px" }}
                />
                <motion.div
                  className={`h-0.5 w-4 rounded-full transition-all duration-300 ${
                    darkMode ? "bg-white shadow-sm" : "bg-black shadow-sm"
                  }`}
                  whileHover={{ width: "20px" }}
                />
                <motion.div
                  className={`h-0.5 w-3 rounded-full transition-all duration-300 ${
                    darkMode ? "bg-white shadow-sm" : "bg-black shadow-sm"
                  }`}
                  whileHover={{ width: "16px" }}
                />
              </div>

              {/* Subtle glow effect */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  darkMode ? "bg-white/5" : "bg-black/5"
                }`}
              />
            </motion.button>
          </div>
        </BlurFade>

        <BlurFade delay={0.35} inView>
          <div className="flex items-center gap-4">
            <motion.button
              aria-label="Toggle dark mode"
              onClick={() => setDarkMode((d) => !d)}
              className={`rounded-full p-2 transition-all duration-300 ${
                isScrolled
                  ? "bg-white/20 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 hover:bg-white/30 dark:hover:bg-black/30"
                  : "bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/5 hover:bg-white/20 dark:hover:bg-black/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-gray-800" />}
            </motion.button>

            <motion.button
              onClick={() => setIsContactModalOpen(true)}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <WrapButtonCustom>Contact Me</WrapButtonCustom>
            </motion.button>
          </div>
        </BlurFade>
      </motion.nav>

      {/* Add padding top to compensate for fixed navbar */}
      <div style={{ paddingTop: "72px" }}>
        {/* Enhanced Hero with Parallax */}
        <BlurFade delay={0.25 * 2} inView>
          <motion.div
            id="home"
            className={`flex flex-col items-center justify-center text-center relative overflow-hidden ${darkMode ? "text-white" : "text-black"}`}
            style={{ minHeight: "calc(100vh - 72px)" }}
          >
            {/* Animated background elements */}
            <motion.div className="absolute inset-0 opacity-10" style={{ y }}>
              <div
                className={`absolute top-20 left-20 w-32 h-32 rounded-full ${darkMode ? "bg-white" : "bg-black"} blur-3xl`}
              />
              <div
                className={`absolute bottom-20 right-20 w-48 h-48 rounded-full ${darkMode ? "bg-white" : "bg-black"} blur-3xl`}
              />
            </motion.div>

            <motion.h1
              className="text-5xl font-semibold relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              i'm tirth
            </motion.h1>
            <motion.h1
              className="text-8xl font-bold relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bringing ideas to reality
            </motion.h1>

            {/* Floating elements */}
            <motion.div
              className="absolute top-1/4 right-1/4 opacity-20"
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Code className="w-16 h-16" />
            </motion.div>

            <motion.div
              className="absolute bottom-1/4 left-1/4 opacity-20"
              animate={{
                rotate: -360,
                y: [0, -20, 0],
              }}
              transition={{
                rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
              }}
            >
              <Camera className="w-12 h-12" />
            </motion.div>
          </motion.div>
        </BlurFade>

        {/* Enhanced Feature Section */}
        <BlurFade delay={0.25} inView>
          <section
            id="about"
            className="w-full flex flex-col md:flex-row justify-center items-stretch gap-8 px-6 md:px-16 py-16"
          >
            {/* Left Card with enhanced animations */}
            <motion.div
              className={`rounded-3xl shadow-lg w-full md:w-2/3 p-10 flex flex-col justify-between relative overflow-hidden ${darkMode ? "bg-[#18181b]" : "bg-white"}`}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                  background: [
                    "linear-gradient(45deg, #fe7500, transparent)",
                    "linear-gradient(135deg, transparent, #fe7500)",
                    "linear-gradient(225deg, #fe7500, transparent)",
                    "linear-gradient(315deg, transparent, #fe7500)",
                  ],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />

              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Asterisk size={40} className={`${darkMode ? "text-white" : "text-black"} mb-4 relative z-10`} />
              </motion.div>

              <h1 className={`text-4xl md:text-6xl font-bold ${darkMode ? "text-white" : "text-black"} relative z-10`}>
                I'm your <span className={darkMode ? "text-white" : "text-black"}>Full Stack Developer</span>
              </h1>
              <p
                className={`text-base md:text-xl mt-6 leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-500"} relative z-10`}
              >
                From designing beautiful interfaces to making sure everything runs smoothly behind the scenes, I've got
                you covered. Let's turn your ideas into interactive wonders that make waves online. With me by your
                side, your website will be more than just pixels.
              </p>
              <TypingAnimation className="text-[#fe7500] text-2xl font-semibold mt-6 relative z-10">
                {"{ Simplicity for the bold }"}
              </TypingAnimation>
            </motion.div>

            {/* Right Image + Enhanced Animated Logo */}
            <div className="relative w-full md:w-1/3 rounded-3xl overflow-hidden flex">
              <MaskedDiv maskType="type-1" size={1} className="w-full">
                <motion.img
                  src="/tirth.png"
                  alt="Tirth"
                  className="w-full h-full object-cover rounded-3xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </MaskedDiv>

              {/* Enhanced Bouncing Logo with more effects */}
              <motion.div
                className="absolute top-3 right-3 w-20 h-20 rounded-full bg-[#fe7500] flex items-center justify-center shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  y: { repeat: Number.POSITIVE_INFINITY, duration: 1.2, ease: "easeInOut" },
                  rotate: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" },
                  scale: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.2 }}
              >
                <span className="text-white font-bold text-lg">⚡</span>
              </motion.div>
            </div>
          </section>
        </BlurFade>

        {/* New About Me Section with Photography */}
        <BlurFade delay={0.25} inView>
          <section id="about-me" className={`py-20 px-6 md:px-16 ${darkMode ? "bg-black" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <Camera className={`w-8 h-8 ${darkMode ? "text-white" : "text-black"}`} />
                    <h2 className={`text-4xl font-bold ${darkMode ? "text-white" : "text-black"}`}>About Me</h2>
                  </div>

                  <div className="space-y-6">
                    <motion.p
                      className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      When I'm not crafting digital experiences, you'll find me behind the lens, capturing the world
                      through photography. There's something magical about freezing a moment in time and telling a story
                      through visuals.
                    </motion.p>

                    <motion.p
                      className={`text-lg leading-relaxed ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      Photography has taught me to see details differently, which translates beautifully into my
                      development work. Both require patience, creativity, and an eye for composition.
                    </motion.p>

                    {/* Interest tags */}
                    <motion.div
                      className="flex flex-wrap gap-3 mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      {["Landscape Photography", "Street Photography", "Portrait Photography", "Nature", "Travel"].map(
                        (interest, index) => (
                          <motion.span
                            key={interest}
                            className="px-4 py-2 bg-[#fe7500]/10 text-[#fe7500] rounded-full text-sm font-medium border border-[#fe7500]/20"
                            whileHover={{ scale: 1.05, backgroundColor: "#fe7500", color: "white" }}
                            transition={{ duration: 0.2 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            style={{ transitionDelay: `${index * 0.1}s` }}
                          >
                            {interest}
                          </motion.span>
                        ),
                      )}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <div className="text-center">
                        <motion.div
                          className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1 }}
                        >
                          500+
                        </motion.div>
                        <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Photos Taken</div>
                      </div>
                      <div className="text-center">
                        <motion.div
                          className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                        >
                          50+
                        </motion.div>
                        <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Projects Built</div>
                      </div>
                      <div className="text-center">
                        <motion.div
                          className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 1.4 }}
                        >
                          3+
                        </motion.div>
                        <div className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                          Years Experience
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Right side - Photography gallery */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="grid grid-cols-2 gap-4">
                    {photographyImages.slice(0, 4).map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-2xl aspect-square"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                      >
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Photography ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Floating camera icon */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-[#fe7500] rounded-full flex items-center justify-center shadow-lg"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      rotate: { repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut" },
                      scale: { repeat: Number.POSITIVE_INFINITY, duration: 2, ease: "easeInOut" },
                    }}
                  >
                    <Heart className="w-8 h-8 text-white" />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </BlurFade>

        {/* New Tech Stack Section */}
        <BlurFade delay={0.25} inView>
          <section id="tech-stack" className={`py-20 px-6 md:px-16 ${darkMode ? "bg-black" : "bg-white"}`}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="inline-block mb-4"
                >
                  <Code className={`w-12 h-12 ${darkMode ? "text-white" : "text-black"}`} />
                </motion.div>
                <motion.h2
                  className={`text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-black"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  My Tech Stack
                </motion.h2>
                <motion.p
                  className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Technologies I use to build fullstack applications
                </motion.p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {techStackCategories.map((category, categoryIndex) => (
                  <motion.div
                    key={category.category}
                    className={`rounded-3xl p-8 ${
                      darkMode ? "bg-gray-900/50 border border-gray-800" : "bg-gray-50 border border-gray-200"
                    } backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: category.color }} />
                      <h3 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-black"}`}>
                        {category.category}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      {category.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech.name}
                          className="flex items-center gap-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: categoryIndex * 0.2 + techIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 p-2 flex items-center justify-center shadow-sm">
                            <img
                              src={tech.icon || "/placeholder.svg"}
                              alt={tech.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                              <span className={`font-medium ${darkMode ? "text-white" : "text-black"}`}>
                                {tech.name}
                              </span>
                              <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                                {tech.level}%
                              </span>
                            </div>
                            <div className={`w-full h-2 rounded-full ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
                              <motion.div
                                className="h-full rounded-full"
                                style={{ backgroundColor: category.color }}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${tech.level}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: categoryIndex * 0.2 + techIndex * 0.1 + 0.5 }}
                              />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Floating Tech Icons */}
              <div className="relative mt-16 h-32 overflow-hidden">
                <motion.div
                  className="flex gap-8 absolute"
                  animate={{ x: [0, -1000] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  {[...dockImages, ...dockImages].map((tech, index) => (
                    <motion.div
                      key={index}
                      className="w-16 h-16 rounded-xl bg-white/10 dark:bg-black/10 backdrop-blur-sm p-3 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, y: -10 }}
                    >
                      <img
                        src={tech.src || "/placeholder.svg"}
                        alt={tech.alt}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>
        </BlurFade>

        {/* Enhanced Projects Section */}
        <BlurFade delay={0.25} inView>
          <section
            id="projects"
            className={`flex flex-col py-20 justify-content-center transition-colors duration-300 ${darkMode ? "bg-black" : "bg-white"}`}
          >
            <div className="max-w-5xl mx-auto text-center mb-12">
              <motion.h2
                className={`text-4xl font-bold ${darkMode ? "text-white" : "text-black"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                My Projects
              </motion.h2>
              <motion.p
                className={`mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Here are some things I've built recently.
              </motion.p>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 items-start ml-10">
              {/* Card Stack */}
              <div className="lg:w-2/3 flex justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`relative w-full flex justify-center items-center ${darkMode ? "text-white" : "text-black"}`}
                >
                  <CardStack
                    items={projectCards}
                    selectedProject={selectedProject}
                    onProjectSelect={handleProjectClick}
                  />
                </motion.div>
              </div>
              <div className="lg:w-1/3">
                <div className="sticky top-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Asterisk size={40} className={`${darkMode ? "text-white" : "text-black"} mb-4`} />
                  </motion.div>
                  <h3 className={`text-3xl font-semibold ml-6 mb-6 ${darkMode ? "text-white" : "text-black"}`}>
                    SOME <br />
                    FEATURED <br />
                    <strong>PROJECTS</strong>
                  </h3>
                  <div className="space-y-4 ml-6">
                    {projectCards.map((project, index) => (
                      <motion.div
                        key={project.id}
                        className="cursor-pointer transition-colors duration-200"
                        onClick={() => handleProjectClick(project.id)}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{ transitionDelay: `${index * 0.1}s` }}
                      >
                        <span
                          className={`font-semibold text-lg hover:opacity-80 transition-opacity ${
                            selectedProject === project.id
                              ? darkMode
                                ? "text-white"
                                : "text-black"
                              : darkMode
                                ? "text-gray-400"
                                : "text-gray-500"
                          }`}
                        >
                          {project.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <WrapButtonCustom className="mt-6 w-full text-black font-semibold py-3 px-6 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                      Go To Project Page
                    </WrapButtonCustom>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </BlurFade>

        {/* Enhanced Contact Section */}
        <BlurFade delay={0.25} inView>
          <section
            id="contact"
            className={`flex flex-col py-20 transition-colors duration-300 ${darkMode ? "bg-black" : "bg-white"}`}
          >
            {/* Text Section - Fixed positioning */}
            <div className="px-8 md:px-16 mb-12">
              <div className="ml-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Asterisk size={40} className={`${darkMode ? "text-white" : "text-black"} mb-4`} />
                </motion.div>
                <motion.h3
                  className={`text-3xl font-semibold mb-8 ${darkMode ? "text-white" : "text-black"}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  SOME FEATURED <br />
                  <strong>DESIGNS</strong>
                </motion.h3>
              </div>
            </div>

            {/* Images Section - Properly contained */}
            <div className="relative w-full">
              <div className="mx-auto w-full rounded-[24px] p-2">
                <div className="relative mx-2 flex w-full flex-col items-center justify-center rounded-[24px]">
                  <HoverExpand images={images} initialSelectedIndex={0} modalImageSize={400} maxThumbnails={11} />
                </div>
              </div>
            </div>
          </section>
        </BlurFade>
      </div>

      {/* Enhanced Tech Stack Dock */}
      <section
        id="tech-stack"
        className="relative z-10 flex flex-col items-center justify-center py-24  from-transparent via-neutral-100/60 to-neutral-200/80 dark:via-neutral-900/60 dark:to-neutral-950/80"
      >
        <motion.h2
          className={`text-4xl md:text-5xl font-extrabold text-center mb-4 text-black ${darkMode ? "text-white" : "text-black"}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="block">Using Best Stack</span>
          <span className="block text-primary dark:text-primary-light">To Create Best Shit</span>
        </motion.h2>
        {/* <motion.p
          className="text-lg md:text-xl text-center text-neutral-700 dark:text-neutral-300 max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Every pixel, every interaction, every experience—powered by the most modern, robust, and creative technologies in the industry.
        </motion.p> */}
        <div className="relative w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <Dock iconSize={100} iconMagnification={100} iconDistance={120}>
              {dockImages.map((img, index) => (
                <motion.div
                  key={img.title}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.09 + 0.1 }}
                >
                  <DockIcon
                    className="bg-white dark:bg-white shadow-lg shadow-black/5 dark:shadow-white/5 border border-black dark:border-neutral-800 backdrop-blur-md"
                    title={img.title}
                  >
                    <img
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      className="size-full object-contain"
                      draggable={false}
                      style={{ pointerEvents: "none", userSelect: "none" }}
                    />
                  </DockIcon>
                </motion.div>
              ))}
            </Dock>
          </motion.div>
        </div>
      </section>

      {/* 3D Keyboard Footer */}
      {/* Modern Layered Footer */}

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} darkMode={darkMode} />

      {/* Fullscreen Menu */}
      <FullscreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} darkMode={darkMode} />

      <SmoothCursor />
    </div>
  )
}
