"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap, Code, Briefcase, Phone } from "lucide-react";
import Navbar from "@/app/components/navbar";
import Skills from "@/app/skills/page";
import Portofolio from "@/app/portofolio/page";
import Layanan from "@/app/layanan/page";
import Kontak from "@/app/kontak/page";
import Komentar from "@/app/Komentar/page";
import Rating from "@/app/Rating/page";
import Chatbot from "@/app/chatbot/page";
import ThemeToggle from "@/app/components/themetoggle";

export default function Hero() {
  return (
    <>
      <Navbar />

      {/* Section About */}
      <motion.section
        id="about"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center text-center bg-background text-foreground py-24 px-6 md:px-12 rounded-b-3xl shadow-lg border-b-4 border-yellow-500"
      >
        {/* Background Blur Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.15),transparent)] pointer-events-none"></div>

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-32 md:w-40 aspect-square rounded-full overflow-hidden border-4 border-yellow-500 shadow-2xl flex justify-center items-center bg-background p-1"
        >
          <Image
            src="/iki.jpg"
            alt="Rifki Rahmat Azis"
            width={200}
            height={200}
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mt-6 drop-shadow-lg text-yellow-400"
        >
          Rifki Rahmat Azis
        </motion.h1>

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-lg md:text-2xl font-semibold mt-2 bg-yellow-500 text-black px-6 py-2 rounded-xl shadow-md"
        >
          Web Developer & UI/UX Designer
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl text-lg md:text-xl leading-relaxed bg-foreground/10 px-6 py-4 rounded-lg shadow-md"
        >
          Saya seorang mahasiswa Ma'soem University yang memiliki minat dalam pengembangan web dan teknologi modern.
          Berpengalaman dalam membangun website interaktif, responsif, dan optimal untuk berbagai kebutuhan bisnis.
        </motion.p>

        {/* Additional Info with Icons */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {[
            { title: "Email", value: "rifkiacil8@gmail.com", icon: <Mail size={24} className="text-yellow-400" /> },
            { title: "Lokasi", value: "Sumedang, Indonesia", icon: <MapPin size={24} className="text-yellow-400" /> },
            { title: "Pendidikan", value: "Mahasiswa Sistem Informasi", icon: <GraduationCap size={24} className="text-yellow-400" /> },
            { title: "Keahlian", value: "React.js, Next.js, UI/UX Design", icon: <Code size={24} className="text-yellow-400" /> },
            { title: "Pengalaman", value: "3+ Tahun di Web Development", icon: <Briefcase size={24} className="text-yellow-400" /> },
            { title: "Kontak", value: "08765432 (WhatsApp)", icon: <Phone size={24} className="text-yellow-400" /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background text-foreground p-6 rounded-xl shadow-md flex items-center gap-4 hover:bg-foreground/10 transition duration-300"
            >
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-yellow-400">{item.title}</h3>
                <p className="text-foreground/80">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fixed Theme Toggle di pojok kiri bawah */}
        <div className="fixed bottom-4 left-4 z-50">
          <ThemeToggle />
        </div>
      </motion.section>

      {/* Section Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Section Portfolio */}
      <section id="portfolio">
        <Portofolio />
      </section>

      {/* Section Layanan */}
      <section id="layanan">
        <Layanan />
      </section>

      {/* Section Kontak */}
      <section id="kontak">
        <Kontak />
      </section>

      {/* Section Komentar */}
      <section id="komentar">
        <Komentar />
      </section>

      {/* Section Rating */}
      <section id="rating">
        <Rating />
      </section>

      {/* Section Chatbot */}
      <section id="chatbot">
        <Chatbot />
      </section>
    </>
  );
}
