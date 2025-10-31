"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Measure navbar height and set a CSS variable
  useEffect(() => {
    const setNavHeightVar = () => {
      if (navRef.current) {
        const h = navRef.current.getBoundingClientRect().height;
        document.documentElement.style.setProperty("--nav-height", `${h}px`);
      }
    };

    setNavHeightVar();
    // update on resize (for responsive changes)
    window.addEventListener("resize", setNavHeightVar);
    return () => window.removeEventListener("resize", setNavHeightVar);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`w-full top-0 z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled ? "bg-[#f8fafc] shadow-md py-3" : "bg-white py-4 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-[#0099ff] text-3xl">⚒️</span>
          <span className="text-gray-900">
            ALTIN<span className="text-[#0099ff]">ORAN</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">
          <li><a href="#" className="text-gray-700 hover:text-[#0099ff] transition-colors">Home</a></li>
          <li><a href="#About" className="text-gray-700 hover:text-[#0099ff] transition-colors">About</a></li>
          <li><a href="#MD's Message" className="text-gray-700 hover:text-[#0099ff] transition-colors">MD's Message</a></li>
          <li><a href="serviecs.html" className="text-gray-700 hover:text-[#0099ff] transition-colors">Services</a></li>
          <li><a href="#our-team" className="text-gray-700 hover:text-[#0099ff] transition-colors">Our Team</a></li>
          <li><a href="#Project" className="text-gray-700 hover:text-[#0099ff] transition-colors">Projects</a></li>
          <li>
            <a href="#Contact" className="bg-[#0099ff] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#008ae6] transition-colors">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-gray-700 font-medium">
              <li><a href="#" className="block hover:text-[#0099ff]" onClick={() => setIsMenuOpen(false)}>Home</a></li>
              <li><a href="#About" className="block hover:text-[#0099ff]" onClick={() => setIsMenuOpen(false)}>About</a></li>
              <li><a href="#MD's Message" className="block hover:text-[#0099ff]" onClick={() => setIsMenuOpen(false)}>MD's Message</a></li>
              <li><a href="serviecs.html" className="block hover:text-[#0099ff]" onClick={() => setIsMenuOpen(false)}>Services</a></li>
              <li><a href="#our-team" className="block hover:text-[#0099ff]" onClick={() => setIsMenuOpen(false)}>Our Team</a></li>
              <li><a href="#Project" className="block hover:text-[#0099ff]" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
              <li>
                <a href="#Contact" className="block w-full text-center bg-[#0099ff] text-white py-2 rounded-md font-semibold hover:bg-[#008ae6]" onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
