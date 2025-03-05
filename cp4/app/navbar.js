"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 transition-all duration-500 shadow-lg ${
        scrolling ? "bg-black/80 backdrop-blur-md" : "bg-gradient-to-r from-gray-900 via-gray-800 to-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo dengan Background Sama dengan Navbar & Border Kuning */}
        <Link
          href="/"
          className="relative text-3xl md:text-4xl font-extrabold tracking-wide text-gold px-6 py-2 rounded-lg border-4"
          style={{
            background: scrolling
              ? "rgba(0, 0, 0, 0.8)" // Menyesuaikan dengan background navbar saat scroll
              : "linear-gradient(to right, #1F2937, #111827)", // Menyesuaikan dengan navbar utama
            borderColor: "#FFD700", // Kotak line kuning
            textShadow: "2px 2px 4px rgba(255, 215, 0, 0.5)",
          }}
        >
          CV Rifki
        </Link>

        {/* Navigasi */}
        <ul className="flex space-x-6 md:space-x-10 text-lg">
          {[
            { name: "About", href: "#about" },
            { name: "Skills", href: "#skills" },
            { name: "Portofolio", href: "#portfolio" },
            { name: "Layanan", href: "#layanan" },
            { name: "Kontak", href: "#kontak" },
          ].map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link
                href={item.href}
                className="text-gray-300 hover:text-gold transition duration-300 text-lg font-semibold px-4 py-2 rounded-lg"
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
