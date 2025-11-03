"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Briefcase,
  Lightbulb,
  Hammer,
} from "lucide-react";

const About = () => {
  const images = [
    "10139.jpg",
    "14503.jpg",
    "47688.jpg",
    "5138438.jpg",
    "5197057.jpg",
    "building.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      id="About"
      className="relative bg-gradient-to-b from-[#0A192F] via-[#0E223F] to-[#112240] text-[#E6F1FF] overflow-hidden"
    >
      {/* Mobile-only Background Image - Now a changing slider with dark overlay */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[currentIndex]}
            src={images[currentIndex]}
            alt="Building background"
            // Ensure the image covers the entire container and has some opacity
            className="w-full h-full object-cover opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }} // Animate to 20% opacity
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </AnimatePresence>
        {/* Dark overlay for better text readability on mobile, now lighter as image has opacity */}
        <div className="absolute inset-0 bg-black/40"></div> {/* Adjusted overlay opacity */}
      </div>

      {/* Main Section */}
      <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-20 gap-10 z-20"> {/* Ensure content is above background */}
        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0099FF] leading-snug flex items-center gap-3">
            <Hammer className="text-[#5AC8FA]" size={40} />
            About ALTIN ORAN
          </h1>
          <p className="text-base md:text-lg text-[#E6F1FF]/90 leading-relaxed max-w-xl">
            ALTIN ORAN Construction blends innovation, precision, and reliability
            to create structures that define excellence in modern architecture.
          </p>
          <p className="text-base md:text-lg text-[#E6F1FF]/80 leading-relaxed max-w-xl">
            We are registered with{" "}
            <span className="font-semibold text-[#0099FF]">
              Pakistan Engineering Council (PEC)
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#0099FF]">
              Securities & Exchange Commission of Pakistan (SECP)
            </span>
            , ensuring top-tier standards in all our projects.
          </p>
        </motion.div>

        {/* Smooth Image Slider - HIDDEN on mobile, visible on lg+ */}
        <motion.div
          className="flex-1 relative justify-center items-center h-[350px] md:h-[450px] hidden lg:flex"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[currentIndex]}
                src={images[currentIndex]}
                alt="Construction Vector"
                className="w-80 md:w-96 h-auto rounded-2xl border border-[#0099FF]/30 bg-[#0A192F]/40 p-6 shadow-lg"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onError={(e) => {
                  e.target.src = `https://placehold.co/400x400/0A192F/E6F1FF?text=Image+Not+Found`;
                }}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Info Cards */}
      <section className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 lg:px-20 pb-20 z-20"> {/* Ensure content is above background */}
        {[
          {
            icon: <Briefcase size={32} className="text-[#0099FF]" />,
            title: "Experience",
            text: "25+ years of industry leadership — delivering excellence in residential, commercial, and industrial construction.",
          },
          {
            icon: <Award size={32} className="text-[#0099FF]" />,
            title: "Expertise",
            text: "Comprehensive services from concept to completion, guided by innovation, safety, and craftsmanship.",
          },
          {
            icon: <Lightbulb size={32} className="text-[#0099FF]" />,
            title: "Innovation",
            text: "Adopting smart construction practices, sustainable materials, and technology-driven project management.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-[#112240]/70 backdrop-blur-md border border-[#0099FF]/20 hover:border-[#0099FF] p-6 rounded-2xl transition-all duration-500 hover:shadow-lg hover:shadow-[#0099FF]/20 text-center flex flex-col items-center space-y-4"
            whileHover={{ y: -8 }}
          >
            <div className="p-3 rounded-full bg-[#0A192F] border border-[#0099FF]/30">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-[#E6F1FF]">{item.title}</h3>
            <p className="text-[#E6F1FF]/80 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default About;

