"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/app/components/navbar";
import Skills from "@/app/skills/page";
import Portofolio from "@/app/portofolio/page";
import Layanan from "@/app/layanan/page";
import Kontak from "@/app/kontak/page";

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
        className="relative flex flex-col items-center text-center bg-gradient-to-r from-white to-yellow-400 text-black py-24 px-6 md:px-12 rounded-b-3xl shadow-lg border-b-4 border-white/30"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="relative w-1/5 aspect-square rounded-full overflow-hidden border-4 border-white shadow-2xl flex justify-center items-center"
        >
          <Image
            src="/rifki.jpg"
            alt="Rifki Rahmat Azis"
            width={200}
            height={200}
            className="object-cover w-full h-full rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold mt-6 drop-shadow-lg"
        >
          Rifki Rahmat Azis
        </motion.h1>

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-semibold mt-2 bg-yellow-500 text-white px-6 py-2 rounded-xl shadow-md"
        >
          Web Developer & UI/UX Designer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-800 mt-6 max-w-3xl text-lg md:text-xl leading-relaxed bg-white/50 px-6 py-4 rounded-lg shadow-md"
        >
          Saya seorang mahasiswa Ma'soem University yang memiliki minat dalam pengembangan web dan teknologi modern.
          Berpengalaman dalam membangun website interaktif, responsif, dan optimal untuk berbagai kebutuhan bisnis.
        </motion.p>

        {/* Informasi Tambahan */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
          {["Email", "Lokasi", "Pendidikan", "Keahlian", "Pengalaman", "Kontak"].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/50 p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-gray-700">
                {title === "Email" && "rifkiacil8@gmail.com"}
                {title === "Lokasi" && "Sumedang, Indonesia"}
                {title === "Pendidikan" && "Mahasiswa Sistem Informasi"}
                {title === "Keahlian" && "React.js, Next.js, UI/UX Design"}
                {title === "Pengalaman" && "3+ Tahun di Web Development"}
                {title === "Kontak" && "08765432 (WhatsApp)"}
              </p>
            </motion.div>
          ))}
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
    </>
  );
}
