"use client";
import React, { useState, useEffect } from "react";
import { FaComments } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Komentar() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedComments = JSON.parse(localStorage.getItem("comments")) || [];
      setComments(storedComments);
    }
  }, []);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && comment) {
      const newComments = [{ name, comment }, ...comments];
      setComments(newComments);
      localStorage.setItem("comments", JSON.stringify(newComments));
      setName("");
      setComment("");
    }
  };

  return (
    <section
      id="komentar"
      className="bg-background text-foreground py-16 px-6 md:px-12 rounded-3xl shadow-lg mt-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-extrabold text-yellow-400 flex items-center gap-3 justify-center mb-6"
      >
        <FaComments className="text-4xl text-yellow-400" />
        Berikan Komentar
      </motion.h2>

      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="space-y-5 max-w-2xl mx-auto"
      >
        <input
          type="text"
          placeholder="Masukkan Nama Anda"
          className="w-full bg-card text-foreground border border-border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Tulis Komentar Anda..."
          className="w-full bg-card text-foreground border border-border px-4 py-3 rounded-lg h-28 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-lg hover:bg-yellow-300 transition shadow-md"
        >
          Kirim Komentar
        </motion.button>
      </motion.form>

      <div className="w-full h-1 bg-border my-12"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-8 space-y-6 max-w-3xl mx-auto"
      >
        {comments.length === 0 ? (
          <p className="text-muted-foreground text-center">Belum ada komentar.</p>
        ) : (
          comments.map((c, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border-l-4 border-yellow-400 p-5 rounded-xl shadow-md"
            >
              <p className="text-yellow-400 font-semibold text-lg">{c.name}</p>
              <p className="text-muted-foreground mt-1">{c.comment}</p>
            </motion.div>
          ))
        )}
      </motion.div>
    </section>
  );
}
