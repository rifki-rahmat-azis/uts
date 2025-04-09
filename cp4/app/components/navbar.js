"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 left-0 w-full z-50 py-2 px-6 md:px-12 transition-all duration-500 shadow-lg ${
        scrolling
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="relative text-xl md:text-2xl font-extrabold tracking-wide text-foreground px-4 py-1 rounded-lg border-2 border-yellow-500 transition-colors"
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          CV Rifki
        </Link>

        {/* Toggler Button */}
        <button
          className="md:hidden text-yellow-500 text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigasi */}
        <ul
          className={`md:flex space-x-4 md:space-x-8 text-base absolute md:static top-14 left-0 w-full md:w-auto bg-background md:bg-transparent flex-col md:flex-row transition-all duration-500 ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          {[
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Portofolio", href: "#portfolio" },
            { name: "Layanan", href: "#layanan" },
            { name: "Kontak", href: "#kontak" },
            { name: "Komentar", href: "#komentar" },
            { name: "Rating", href: "#rating" },
            { name: "Chatbot", href: "#chatbot" },
          ].map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="text-center md:text-left py-1 md:py-0"
            >
              <Link
                href={item.href}
                className="text-foreground hover:text-yellow-500 transition-colors duration-300 text-base font-semibold px-3 py-1 rounded-lg block"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
