"use client";

import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MoveRight, Play } from "lucide-react";

const features = [
  "Multiple AI Models",
  "Smart Conversations",
  "Powerful AI Tools",
  "Chrome Extension",
];

export default function Hero() {
  const [showFeatures, setShowFeatures] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFeatures((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/28b4eec6c5eb4afbb836e3dae5b9b2b5.jpg')",
        }}
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10  backdrop-blur-[1px]" />

      {/* Purple Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/60 to-violet-100/30" />

      {/* Hero Content */}
      <div className="mx-auto flex min-h-[calc(100vh-72px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-2xl">

         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50/80 px-4 py-2 text-sm font-medium text-violet-700 backdrop-blur-sm"
          >
           
            Your AI Workspace, Reimagined
          </motion.div>

    
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight text-gray-950 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span>One Workspace for</span>
            <br />

            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
              <Typewriter
                words={["All Your AI Needs."]}
                loop={true}
               
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2500}
              />
            </span>
          </motion.h1>

         
          <div className="mt-7 min-h-[110px] max-w-xl">
            <AnimatePresence mode="wait">
              {!showFeatures ? (
                <motion.p
                  key="description"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                  className="text-base leading-8 text-gray-600 sm:text-lg"
                >
                  Chat, create, analyze, and get more done with{" "}
                  <span className="font-semibold text-violet-600">
                    EchoGPT
                  </span>{" "}
                  — a modern AI workspace designed to bring your everyday AI
                  workflows together in one place.
                </motion.p>
              ) : (
                <motion.div
                  key="features"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.45 }}
                  className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="flex items-center gap-3"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-violet-600 text-xs text-white">
                        <Check />
                      </span>

                      <span className="text-sm font-medium text-gray-700 sm:text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700"
            >
              Get Started
              <span>
            <MoveRight />
              </span>
            </a>

            <a
               href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-gray-700 backdrop-blur-sm transition hover:-translate-y-0.5 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
            >
              <span>
                <Play />
              </span>
              Explore EchoGPT
            </a>
          </motion.div>

          {/* Small Trust Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500"
          >
            <span>✓ Easy to use</span>
            <span>✓ Modern AI workspace</span>
            <span>✓ Browser extension</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}