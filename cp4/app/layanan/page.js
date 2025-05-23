"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Monitor,
  Smartphone,
  PaintBucket,
  Shield,
  Database,
} from "lucide-react";

export default function Layanan() {
  const services = [
    {
      title: "Pengembangan Website",
      description:
        "Membangun website profesional dengan teknologi modern yang responsif dan cepat.",
      icon: <Code size={40} className="text-yellow-400" />,
    },
    {
      title: "Desain UI/UX",
      description:
        "Membuat desain antarmuka yang menarik dan pengalaman pengguna yang optimal.",
      icon: <PaintBucket size={40} className="text-yellow-400" />,
    },
    {
      title: "Pengembangan Aplikasi Mobile",
      description:
        "Membangun aplikasi mobile Android & iOS yang inovatif dan user-friendly.",
      icon: <Smartphone size={40} className="text-yellow-400" />,
    },
    {
      title: "Keamanan Jaringan",
      description:
        "Menjaga keamanan sistem dan data dari ancaman siber dengan solusi keamanan yang kuat.",
      icon: <Shield size={40} className="text-yellow-400" />,
    },
    {
      title: "Manajemen Server & Database",
      description:
        "Menyediakan solusi pengelolaan server dan database yang aman dan skalabel.",
      icon: <Database size={40} className="text-yellow-400" />,
    },
    {
      title: "IT Support & Konsultasi",
      description:
        "Memberikan dukungan teknis dan konsultasi IT untuk kebutuhan bisnis Anda.",
      icon: <Monitor size={40} className="text-yellow-400" />,
    },
  ];

  return (
    <section
      id="layanan"
      className="relative bg-background text-foreground py-20 px-6 md:px-12 rounded-3xl shadow-2xl border-t-4 border-b-4 border-border overflow-hidden transition-colors duration-300"
    >
      {/* Efek animasi latar belakang */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-500 rounded-full blur-3xl opacity-30 top-10 left-10" />
        <div className="absolute w-96 h-96 bg-yellow-700 rounded-full blur-3xl opacity-30 bottom-10 right-10" />
      </div>

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 relative z-10 text-yellow-400"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Layanan IT
      </motion.h2>

      <motion.p
        className="text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        viewport={{ once: false }}
      >
        Kami menyediakan berbagai layanan IT profesional untuk mendukung kebutuhan bisnis dan teknologi Anda.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-background text-foreground border-2 border-yellow-400 p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105 transition-colors"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false }}
          >
            <motion.div
              className="flex justify-center mb-4"
              initial={{ rotateY: 180 }}
              whileInView={{ rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              viewport={{ once: false }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-yellow-400">{service.title}</h3>
            <p className="mt-2 text-muted-foreground">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
