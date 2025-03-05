"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 95, color: "bg-blue-500" },
  { name: "JavaScript (ES6+)", level: 90, color: "bg-yellow-400" },
  { name: "React.js & Next.js", level: 85, color: "bg-blue-400" },
  { name: "Tailwind CSS", level: 90, color: "bg-teal-400" },
  { name: "UI/UX Design (Figma, Adobe XD)", level: 80, color: "bg-purple-400" },
  { name: "Git & GitHub", level: 85, color: "bg-red-400" },
  { name: "API & RESTful Services", level: 80, color: "bg-indigo-400" },
  { name: "Node.js & Express.js", level: 75, color: "bg-green-400" },
  { name: "MongoDB & Firebase", level: 70, color: "bg-emerald-400" },
  { name: "Docker & DevOps Basics", level: 65, color: "bg-gray-400" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-12 rounded-3xl shadow-2xl border-t-4 border-b-4 border-white/20 overflow-hidden"
    >
      {/* Efek Animasi Latar Belakang */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-30 top-10 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>
      </div>

      <motion.h2 
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        My Skills
      </motion.h2>

      <div className="max-w-4xl mx-auto relative z-10">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.5 }}
          >
            <div className="flex justify-between">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-lg font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3 mt-2 overflow-hidden shadow-md">
              <motion.div
                className={`h-full ${skill.color}`}
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.5 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
