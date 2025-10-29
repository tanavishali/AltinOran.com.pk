"use client";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center text-white bg-[#0a0a0a]">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#001f3f] via-[#004080] to-[#00aaff] opacity-30"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ backgroundSize: "200% 200%" }}
      />

      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url('/img/WC-BAnner-2-scaled.jpg')",
        }}
      ></div>

      {/* Diagonal decorative overlay */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-[#001f3f]/80 to-transparent -skew-x-6 z-0" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          variants={itemVariants}
        >
          ALTIN ORAN ENGINEERING <br />
          ARCHITECTURAL / INTERIORS <br />
          /TOWN PLANNING CONSULTANTS
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-[700px] leading-relaxed"
          variants={itemVariants}
        >
          Turning your vision into reality with precision engineering and expert
          craftsmanship since 1995.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0px 8px 25px rgba(0, 188, 212, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="py-3 px-10 text-lg font-semibold rounded-lg uppercase bg-cyan-500 text-[#111]"
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
            className="py-3 px-10 text-lg font-semibold rounded-lg uppercase border-2 border-white text-white"
          >
            Our Projects
          </motion.button>
        </motion.div>

        {/* Stats section */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-8 mt-16"
          variants={itemVariants}
        >
          {[
            { number: "100+", label: "Projects Completed" },
            { number: "25", label: "Years of Experience" },
            { number: "100+", label: "Happy Clients" },
            { number: "20", label: "Awards Won" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-1">
                {stat.number}
              </div>
              <div className="text-sm md:text-base uppercase tracking-wider text-gray-200">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
