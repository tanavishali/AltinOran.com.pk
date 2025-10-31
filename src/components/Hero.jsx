"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  Clock,
  Users,
  Hammer,
  Wrench,
  Ruler,
  HardHat,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [displayText, setDisplayText] = useState("");

  const fullText =
    "ALTIN ORAN ENGINEERING \nARCHITECTURAL / INTERIORS \n/TOWN PLANNING CONSULTANTS";

  // Typing Effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1597004898408-99a4f0b7cf11?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1600294037681-1cf9a3c2c6a2?auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "100+", label: "Projects Completed", icon: <Briefcase size={26} /> },
    { number: "25", label: "Years of Experience", icon: <Clock size={26} /> },
    { number: "100+", label: "Happy Clients", icon: <Users size={26} /> },
    { number: "20", label: "Awards Won", icon: <Award size={26} /> },
  ];

  const toolIcons = [Hammer, Wrench, Ruler, HardHat];

  const floatingIcons = Array.from({ length: 20 }).map((_, i) => {
    const Icon = toolIcons[i % toolIcons.length];
    const size = Math.floor(Math.random() * 20) + 25;
    const left = `${Math.random() * 100}%`;
    const top = `${Math.random() * 100}%`;
    const delay = Math.random() * 4;
    const duration = 10 + Math.random() * 10;
    const moveX = (Math.random() - 0.5) * 100;
    const moveY = (Math.random() - 0.5) * 100;

    return (
      <motion.div
        key={i}
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          x: [0, moveX, -moveX, 0],
          y: [0, moveY, -moveY, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "anticipate",
        }}
        className="absolute text-cyan-400/10 z-0"
        style={{ left, top }}
      >
        <Icon size={size} />
      </motion.div>
    );
  });

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#0a0a0a] text-white pt-[var(--nav-height)]">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#004080] to-[#00aaff] opacity-30"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.7)), url('/img/WC-BAnner-2-scaled.jpg')",
        }}
      ></div>

      {/* Floating tool icons */}
      <div className="absolute inset-0 z-0 overflow-hidden">{floatingIcons}</div>

      {/* Main Grid Layout */}
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6 sm:px-8 md:px-12 py-16 md:py-20 w-full">
        {/* Left Side */}
        <motion.div
          className="flex flex-col justify-center text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Typing Effect Heading */}
          <motion.h1
            className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-extrabold mb-6 leading-tight whitespace-pre-line"
            variants={itemVariants}
          >
            {displayText}
            <span className="animate-pulse text-cyan-400">|</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-10 max-w-[650px] mx-auto lg:mx-0 leading-relaxed"
            variants={itemVariants}
          >
            Turning your vision into reality with precision engineering and expert
            craftsmanship since 1995.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0px 8px 25px rgba(0, 188, 212, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 text-sm sm:text-base md:text-lg font-semibold rounded-lg uppercase bg-cyan-500 text-[#111] w-40 sm:w-auto"
            >
              Get a Quote
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                backgroundColor: "rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
              className="py-3 px-8 text-sm sm:text-base md:text-lg font-semibold rounded-lg uppercase border-2 border-white text-white w-40 sm:w-auto"
            >
              Our Projects
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-10 mt-12 sm:mt-16"
            variants={itemVariants}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex flex-col items-center text-center w-[110px] sm:w-auto"
              >
                <div className="mb-2 text-cyan-400">{stat.icon}</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs md:text-sm uppercase tracking-wider text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side (Image Slider) */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Slide ${i}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: i === currentImage ? 1 : 0,
                x: i === currentImage ? 0 : 50,
              }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </section>
  );
}
