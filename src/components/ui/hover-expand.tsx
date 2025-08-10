"use client"

import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface HoverExpandProps {
  images: string[]
  initialSelectedIndex?: number
  thumbnailHeight?: number
  modalImageSize?: number
  maxThumbnails?: number
}

export default function HoverExpand({
  images,
  initialSelectedIndex = 0,
  thumbnailHeight = 200,
  modalImageSize = 400,
  maxThumbnails = 11,
}: HoverExpandProps) {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false)
      }
    }

    if (isModalOpen) {
      document.body.classList.add("overflow-hidden")
      document.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.classList.remove("overflow-hidden")
    }
  }, [isModalOpen])

  return (
    <div className="relative w-full flex justify-center">
      <div className="flex w-full max-w-6xl h-[60vh] gap-2 rounded-3xl overflow-hidden">
        {images.slice(0, maxThumbnails).map((imageUrl, i) => (
          <div
            key={`image-container-${i}`}
            className={`group relative h-full overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
              selectedIndex === i 
                ? "flex-[8] rounded-2xl" 
                : "flex-[1] hover:flex-[1.5] rounded-xl"
            }`}
            onMouseEnter={() => setSelectedIndex(i)}
            onClick={() => {
              setSelectedIndex(i)
              setIsModalOpen(true)
            }}
          >
            <motion.div
              layoutId={`image-${i}`}
              className="absolute inset-0 size-full"
            >
              <img
                src={imageUrl}
                alt={`Design ${i + 1}`}
                className="size-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Overlay for non-selected images */}
              <div 
                className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                  selectedIndex === i ? "opacity-0" : "opacity-50 hover:opacity-30"
                }`}
              />
              
              {/* Gradient overlay for better text readability if needed */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                  selectedIndex === i ? "opacity-0" : "opacity-80"
                }`}
              />
            </motion.div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/10 backdrop-blur-lg dark:bg-black/50"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-3xl bg-black/20 backdrop-blur-sm border border-white/20 shadow-2xl"
            >
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative w-[90vw] h-[90vh] max-w-6xl max-h-4xl"
              >
                <img
                  src={images[selectedIndex]}
                  alt={`Design ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 grid place-content-center bg-white/10 backdrop-blur-lg dark:bg-black/50"
            onClick={() => setIsModalOpen(false)}
          >
            <div
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
              className="cursor-pointer overflow-hidden rounded-3xl bg-black/20 backdrop-blur-sm border border-white/20 shadow-2xl"
            >
              <motion.div
                layoutId={`image-${selectedIndex}`}
                className="relative w-[90vw] h-[90vh] max-w-6xl max-h-4xl"
              >
                <img
                  src={images[selectedIndex]}
                  alt={`Design ${selectedIndex + 1}`}
                  className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}