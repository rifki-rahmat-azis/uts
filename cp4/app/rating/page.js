"use client";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Rating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [totalVotes, setTotalVotes] = useState(11);
  const [averageRating, setAverageRating] = useState(4.9);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedRating = localStorage.getItem("userRating");
      const storedSubmitted = localStorage.getItem("ratingSubmitted");
      const storedTotalVotes = localStorage.getItem("totalVotes");
      const storedAverageRating = localStorage.getItem("averageRating");
  
      if (storedRating) setRating(JSON.parse(storedRating));
      if (storedSubmitted) setSubmitted(JSON.parse(storedSubmitted));
      if (storedTotalVotes) setTotalVotes(JSON.parse(storedTotalVotes));
      if (storedAverageRating) setAverageRating(JSON.parse(storedAverageRating));
    }
  }, []);
  

  const handleClick = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0 && !submitted) {
      const newTotalVotes = totalVotes + 1;
      const newAverageRating = ((averageRating * totalVotes) + rating) / newTotalVotes;

      setTotalVotes(newTotalVotes);
      setAverageRating(parseFloat(newAverageRating.toFixed(1)));
      setSubmitted(true);

      localStorage.setItem("userRating", JSON.stringify(rating));
      localStorage.setItem("ratingSubmitted", JSON.stringify(true));
      localStorage.setItem("totalVotes", JSON.stringify(newTotalVotes));
      localStorage.setItem("averageRating", JSON.stringify(parseFloat(newAverageRating.toFixed(1))));
    }
  };

  return (
    <section
      id="rating"
      className="bg-background text-foreground py-16 px-6 md:px-12 rounded-3xl shadow-xl text-center mt-10"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-yellow-400 flex justify-center items-center gap-3 mb-6"
      >
        <FaStar className="text-yellow-400 text-4xl" />
        Rate This Website
      </motion.h2>

      <div className="w-24 h-1 bg-yellow-400 mx-auto mb-10 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center gap-3 mb-6">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              key={star}
              onClick={() => handleClick(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none"
            >
              <FaStar
                className={`text-5xl transition duration-300 ${
                  (hover || rating) >= star ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            </motion.button>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: !submitted && rating > 0 ? 1.05 : 1 }}
          whileTap={{ scale: !submitted && rating > 0 ? 0.95 : 1 }}
          onClick={handleSubmit}
          disabled={rating === 0 || submitted}
          className={`px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-md 
          ${
            rating === 0 || submitted
              ? "bg-muted text-muted-foreground cursor-not-allowed"
              : "bg-yellow-400 text-black hover:bg-yellow-300"
          }`}
        >
          {submitted ? "Rating Submitted" : "Submit Rating"}
        </motion.button>

        <p className="mt-6 text-lg text-muted-foreground">
          Rating:{" "}
          <span className="text-yellow-400 font-bold">{averageRating}</span>{" "}
          (from {totalVotes} voters)
        </p>
      </motion.div>
    </section>
  );
}
