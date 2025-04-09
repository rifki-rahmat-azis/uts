"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaPalette, FaDatabase, FaServer, FaTools, FaMobileAlt } from "react-icons/fa";

const skills = [
  { name: "Frontend Development", date: "Jan 2023", description: "Pengembangan antarmuka pengguna.", icon: <FaCode />, side: "left" },
  { name: "UI/UX Design", date: "Mar 2023", description: "Desain tampilan dan pengalaman pengguna.", icon: <FaPalette />, side: "right" },
  { name: "Database Management", date: "Jun 2023", description: "Pengelolaan basis data dan optimasi.", icon: <FaDatabase />, side: "left" },
  { name: "Backend Development", date: "Sep 2023", description: "Pembangunan sistem backend dan API.", icon: <FaServer />, side: "right" },
  { name: "DevOps & Tools", date: "Dec 2023", description: "Pengelolaan deployment dan otomatisasi.", icon: <FaTools />, side: "left" },
  { name: "Mobile Development", date: "Feb 2024", description: "Pengembangan aplikasi mobile.", icon: <FaMobileAlt />, side: "right" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-background text-foreground py-20 px-6 md:px-12 rounded-3xl shadow-xl border-t-4 border-b-4 border-gray-700">
      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-yellow-400"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Skills
      </motion.h2>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Garis vertikal utama */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500 h-full"></div>

        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className={`relative w-full md:w-1/2 p-4 ${skill.side === "left" ? "pr-8 ml-auto" : "pl-8"}`}
            initial={{ opacity: 0, x: skill.side === "left" ? -50 : 50, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            style={{ marginTop: index % 2 === 0 ? "20px" : "50px" }}
          >
            {/* Titik indikator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-background"></div>

            <div className="bg-card p-6 rounded-xl shadow-lg flex flex-col items-start border-l-4 border-yellow-500">
              <div className="text-3xl text-yellow-400 mb-2">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-yellow-400">{skill.name}</h3>
              <p className="text-sm text-foreground">{skill.date}</p>
              <p className="mt-2 text-foreground">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
