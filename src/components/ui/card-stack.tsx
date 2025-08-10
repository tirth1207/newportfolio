"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
  selectedProject,
  onProjectSelect,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
  selectedProject?: number | null;
  onProjectSelect?: (projectId: number) => void;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Reorder cards when a project is selected
  useEffect(() => {
    if (selectedProject) {
      const selectedIndex = items.findIndex(card => card.id === selectedProject);
      if (selectedIndex !== -1) {
        const reorderedCards = [
          items[selectedIndex],
          ...items.filter(card => card.id !== selectedProject)
        ];
        setCards(reorderedCards);
        // Stop auto-scrolling when a project is selected
        stopFlipping();
      }
    } else {
      setCards(items);
      // Resume auto-scrolling when no project is selected
      startFlipping();
    }
  }, [selectedProject, items]);

  useEffect(() => {
    // Check initial dark mode state
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };

    checkDarkMode();

    // Listen for changes to dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    // Only start flipping if no project is selected
    if (!selectedProject) {
      startFlipping();
    }

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [selectedProject]);

  const startFlipping = () => {
    // Clear any existing interval first
    if (interval) {
      clearInterval(interval);
    }
    
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  const stopFlipping = () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  };

  // Custom card size: h-[340px] w-[500px]
  return (
    <div className="relative h-[500px] w-[700px]">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute w-[700px] flex flex-col gap-4 transition-colors duration-300"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            {/* Upper Card - Video Section */}
            <motion.div
              className="h-[200px] w-[700px] rounded-2xl overflow-hidden flex items-center justify-center bg-gray-200 dark:bg-neutral-800 relative shadow-xl border border-neutral-200 dark:border-white/[0.1]"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                scale: 1 - index * SCALE_FACTOR,
              }}
            >
              <img
                src={`https://placehold.co/700x200?text=${card.name}+Video+Demo`}
                alt={`${card.name} video demo`}
                className="object-cover w-full h-full"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-50 transition-all duration-300 cursor-pointer">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                  <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </motion.div>

            {/* Lower Card - Details Section */}
            <motion.div
              className={`h-[200px] w-[700px] rounded-2xl p-6 shadow-xl border flex flex-col justify-between transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-[#18181b] border-white/[0.1] shadow-white/[0.05]' 
                  : 'bg-white border-neutral-200 shadow-black/[0.1]'
              }`}
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                scale: 1 - index * SCALE_FACTOR,
              }}
            >
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-black'
                  }`}>
                    {card.name}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-3 transition-colors duration-300 ${
                    isDarkMode ? 'text-neutral-200' : 'text-neutral-700'
                  }`}>
                    {card.designation}
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">Next.js</span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded-full">React</span>
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs rounded-full">TypeScript</span>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    ©2024 Tirth Patel
                  </span>
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">Live Now</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};
