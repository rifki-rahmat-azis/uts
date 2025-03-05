"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

export default function Contact() {
  const contacts = [
    {
      title: "Email",
      detail: "rifkiacil8@gmail.com",
      icon: <FaEnvelope className="text-yellow-600 text-4xl mx-auto mb-4" />,
    },
    {
      title: "Instagram",
      detail: "@1eu1k1",
      icon: <FaInstagram className="text-pink-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "TikTok",
      detail: "@bintangjauh",
      icon: <FaTiktok className="text-black text-4xl mx-auto mb-4" />,
    },
    {
      title: "WhatsApp",
      detail: "08765432",
      icon: <FaWhatsapp className="text-green-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "LinkedIn",
      detail: "Rifki Rahmat Azis",
      icon: <FaLinkedin className="text-blue-500 text-4xl mx-auto mb-4" />,
    },
    {
      title: "GitHub",
      detail: "github.com/rifki-azis",
      icon: <FaGithub className="text-gray-900 text-4xl mx-auto mb-4" />,
    },
  ];

  return (
    <section
      id="kontak"
      className="relative bg-gradient-to-r from-white to-yellow-400 text-black py-20 px-6 md:px-12 rounded-t-3xl shadow-lg border-t-4 border-white/20"
    >
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-extrabold tracking-wide text-black drop-shadow-lg mb-6"
        >
          Kontak Saya
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Jangan ragu untuk menghubungi saya melalui media sosial atau email berikut!
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="bg-white/30 p-6 rounded-xl shadow-md text-center transition-transform duration-300 hover:scale-105"
            >
              {contact.icon}
              <h3 className="text-xl font-semibold">{contact.title}</h3>
              <p className="text-gray-700">{contact.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
