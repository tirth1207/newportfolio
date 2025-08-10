"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

const SCROLL_ANIMATION_DURATION = 12; // seconds, unified for all

const FullscreenMenu: React.FC<FullscreenMenuProps> = ({ isOpen, onClose, darkMode }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [isProjectsHovered, setIsProjectsHovered] = useState(false);

  // Escape key & scroll control
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleMenuItemClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      } ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      {/* Close Button */}
      <button
        className="absolute top-8 right-8 text-3xl font-bold focus:outline-none"
        onClick={onClose}
        aria-label="Close menu"
      >
        ×
      </button>

      {/* Menu Navigation */}
      <nav className="flex w-full text-center flex-col items-center">
        {/* HOME Hover with Infinite Scroll Text */}
        <div
            className="relative w-full h-24 flex items-center justify-center cursor-pointer border-y overflow-hidden"
            onMouseEnter={() => setIsHomeHovered(true)}
            onMouseLeave={() => setIsHomeHovered(false)}
            >
            <div className="relative w-full h-full p-4 hover:bg-lime-500 overflow-hidden">
                {/* Static center text when NOT hovered */}
                {!isHomeHovered && (
                <motion.div
                    key="static"
                    className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-bold whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                   Home
                </motion.div>
                )}

                {/* Scrolling text when hovered */}
                {isHomeHovered && (
                <motion.div
                    key="scrolling"
                    className="absolute whitespace-nowrap text-6xl font-bold flex gap-16 bg-lime-500"
                    initial={{ opacity: 0 }}
                    animate={{
                    opacity: 1,
                    x: ["0%", "-50%"],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                    opacity: { duration: 0.3 },
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: SCROLL_ANIMATION_DURATION,
                        ease: "linear",
                    },
                    }}
                >
                    <span>Welcome to my world • Welcome to my world • Welcome to my world •</span>
                    <span>Welcome to my world • Welcome to my world • Welcome to my world •</span>
                </motion.div>
                )}
            </div>
            </div>


        {/* Other Links */}
        {/* ABOUT Hover with Infinite Scroll Text */}
            <div
            className="relative w-full h-24 flex items-center justify-center cursor-pointer border-y overflow-hidden"
            onMouseEnter={() => setActiveSection("about")}
            onMouseLeave={() => setActiveSection(null)}
            onClick={() => handleMenuItemClick("#about")}
            >
            <div className="relative w-full h-full p-4 hover:bg-lime-500 overflow-hidden">
                {!activeSection?.includes("about") && (
                <motion.div
                    key="about-static"
                    className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-bold whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    About
                </motion.div>
                )}
                {activeSection?.includes("about") && (
                <motion.div
                    key="about-scrolling"
                    className="absolute whitespace-nowrap text-6xl font-bold flex gap-16 bg-lime-500"
                    initial={{ opacity: 0 }}
                    animate={{
                    opacity: 1,
                    x: ["0%", "-50%"],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                    opacity: { duration: 0.3 },
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: SCROLL_ANIMATION_DURATION,
                        ease: "linear",
                    },
                    }}
                >
                    <span>Who am I • Who am I • Who am I • </span>
                    <span>Who am I • Who am I • Who am I • </span>
                </motion.div>
                )}
            </div>
            </div>

            {/* PROJECTS Hover with Infinite Scroll Text */}
            <div
              className="relative w-full h-24 flex items-center justify-center cursor-pointer border-y overflow-hidden"
              onMouseEnter={() => setActiveSection("projects")}
              onMouseLeave={() => setActiveSection(null)}
              onClick={() => handleMenuItemClick("#projects")}
            >
              <div className="relative w-full h-full p-4 hover:bg-lime-500 overflow-hidden">
                {!activeSection?.includes("projects") && (
                  <motion.div
                    key="projects-static"
                    className="absolute left-1/2 transform -translate-x-1/2 text-6xl font-bold whitespace-nowrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    Projects
                  </motion.div>
                )}
                {activeSection?.includes("projects") && (
                  <motion.div
                    key="projects-scrolling"
                    className="absolute whitespace-nowrap text-6xl font-bold flex gap-16 bg-lime-500"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      x: ["0%", "-50%"],
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: SCROLL_ANIMATION_DURATION,
                        ease: "linear",
                      },
                    }}
                  >
                    <span>See my work • See my work • See my work • </span>
                    <span>See my work • See my work • See my work • </span>
                  </motion.div>
                )}
              </div>
            </div>

      </nav>
    </div>
  );
};

export default FullscreenMenu;
