"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Flag, Settings, Star } from "lucide-react";

const data = [
  {
    key: "mission",
    title: "Our Mission",
    icon: Target,
    text: "Deliver reliable, sustainable, and high-quality construction solutions focused on client satisfaction and safety.",
  },
  {
    key: "vision",
    title: "Our Vision",
    icon: Eye,
    text: "To become the most trusted name in innovative infrastructure and urban development across the region.",
  },
  {
    key: "goal",
    title: "Our Goal",
    icon: Flag,
    text: "Achieve consistent project success by maintaining quality, transparency, and client confidence in every step.",
  },
  {
    key: "strategy",
    title: "Our Strategy",
    icon: Settings,
    text: "Adopt modern technology, data-driven planning, and effective risk management to ensure timely project delivery.",
  },
  {
    key: "values",
    title: "Our Values",
    icon: Star,
    text: "Integrity, accountability, innovation, teamwork, and respect — the pillars of everything we build.",
  },
];

const fadeUp = (i = 1) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, type: "spring", stiffness: 80 },
  },
});

export default function GridInfographic() {
  return (
    <section className="relative w-full bg-[#0A192F] text-[#E6F1FF] py-16 px-4 sm:px-10 overflow-hidden">
      {/* 🌠 Animated Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0099ff] tracking-wide">
          Mission • Vision • Goal • Strategy • Values
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mt-3 text-sm sm:text-base">
          A unified overview of our guiding principles, goals, and core beliefs.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center z-10">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.key}
              variants={fadeUp(i)}
              initial="hidden"
              animate="visible"
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "0 8px 25px rgba(0,153,255,0.2)",
              }}
              className="bg-[#112240]/90 border border-[#0099ff]/10 rounded-2xl p-6 sm:p-8 w-full max-w-[360px]
                         flex flex-col items-center text-center transition-transform duration-300 backdrop-blur-sm"
            >
              <div className="p-3 rounded-full bg-[#0A192F] border border-[#0099ff]/40 mb-4">
                <Icon size={28} className="text-[#0099ff]" />
              </div>

              <h5 className="text-lg font-semibold text-[#E6F1FF] mb-2">
                {item.title}
              </h5>
              <p className="text-sm text-slate-300 leading-relaxed">
                {item.text}
              </p>

              {/* Decorative Accent */}
              <motion.div
                className="w-16 h-[2px] bg-[#0099ff]/40 mt-5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              />
            </motion.div>
          );
        })}
      </div>

      {/* ✨ CSS for Starfield + Twinkle Animation */}
      <style jsx>{`
        .stars,
        .stars2,
        .stars3 {
          position: absolute;
          width: 2px;
          height: 2px;
          background: transparent;
          animation: animStar 120s linear infinite, twinkle 3s ease-in-out infinite alternate;
        }

        .stars {
          box-shadow: 
            1000px 2000px #fff, 1200px 1300px #fff, 800px 1700px #fff,
            1500px 2500px #fff, 1800px 900px #fff, 300px 200px #fff,
            500px 800px #fff, 2200px 1900px #fff, 2400px 400px #fff;
          animation-duration: 100s, 3s;
        }

        .stars2 {
          box-shadow: 
            700px 1500px #fff, 1400px 2300px #fff, 1600px 300px #fff,
            200px 900px #fff, 1000px 600px #fff, 1900px 1800px #fff;
          animation-duration: 150s, 4s;
        }

        .stars3 {
          box-shadow: 
            400px 2200px #fff, 900px 1000px #fff, 1300px 700px #fff,
            2100px 1600px #fff, 500px 500px #fff, 1700px 200px #fff;
          animation-duration: 200s, 5s;
        }

        @keyframes animStar {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-2000px);
          }
        }

        @keyframes twinkle {
          0% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.3;
          }
        }
      `}</style>
    </section>
  );
}
