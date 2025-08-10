'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type LanguageLoaderProps = {
  onComplete: () => void;
};

const greetings = [
  'Hello',
  'Bonjour',
  'Hola',
  'नमस्ते',
  'નમસ્તે',
  'こんにちは',
  'Ciao',
  '你好',
  'Привет',
  'مرحبا',
];

export default function LanguageLoader({ onComplete }: LanguageLoaderProps) {
  const [index, setIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 >= greetings.length) {
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => {
              onComplete();
            }, 400); // Slight delay after animation
          }, 600); // Final word delay
          return prev;
        }
        return prev + 1;
      });
    }, 700); // Faster interval

    return () => clearInterval(interval);
  }, [onComplete]);

  if (isComplete) {
    return (
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="h-screen w-screen flex items-center justify-center bg-black text-white"
      />
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={greetings[index]}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="text-4xl sm:text-6xl font-bold tracking-wide"
        >
          {greetings[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
