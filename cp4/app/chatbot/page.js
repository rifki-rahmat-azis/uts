"use client";
import React, { useState } from "react";
import axios from "axios";
import { FaComments, FaUser, FaRobot, FaPaperPlane } from "react-icons/fa";

const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const fetchNews = async (query) => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${query}&language=id&sortBy=publishedAt&apiKey=${apiKey}`
      );
      return response.data.articles
        .slice(0, 3)
        .map((article) => `• ${article.title}`)
        .join("\n");
    } catch (error) {
      return "Maaf, tidak dapat mengambil berita saat ini.";
    }
  };

  const extractKeyword = (text) => {
    const stopWords = ["berita", "tentang", "apa", "yang", "ada", "terbaru", "hari ini", "?", " "];
    let words = text.toLowerCase().split(" ").filter((word) => !stopWords.includes(word));
    return words.length > 0 ? words.join(" ") : "terkini";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    let botResponse;
    if (input.toLowerCase().includes("berita")) {
      const keyword = extractKeyword(input);
      const news = await fetchNews(keyword);
      botResponse = { sender: "bot", text: `Berikut berita terkait *${keyword}*:\n${news}` };
    } else {
      botResponse = { sender: "bot", text: "Saya hanya bisa memberikan berita terkini!" };
    }

    setMessages((prev) => [...prev, botResponse]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto bg-background text-foreground p-6 rounded-3xl shadow-xl border border-border">
      <h2 className="text-3xl font-bold flex items-center gap-2 text-yellow-400 mb-6">
        <FaComments className="text-yellow-400 text-3xl" /> Chatbot Berita
      </h2>
      <div className="h-72 overflow-y-auto bg-muted p-4 rounded-xl space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="flex flex-col max-w-[75%]">
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl text-sm whitespace-pre-line shadow-md ${
                  msg.sender === "user"
                    ? "bg-yellow-400 text-black rounded-br-none"
                    : "bg-muted text-foreground border border-border rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                {msg.sender === "user" ? (
                  <>
                    <span>Anda</span>
                    <FaUser className="text-yellow-400" />
                  </>
                ) : (
                  <>
                    <FaRobot className="text-yellow-400" />
                    <span>Bot</span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-6">
        <input
          type="text"
          className="flex-1 p-3 bg-muted text-foreground border border-border rounded-l-xl focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Tanyakan berita terkini..."
        />
        <button
          onClick={handleSend}
          className="bg-yellow-400 text-black px-4 py-3 rounded-r-xl hover:bg-yellow-500 transition flex items-center gap-2"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
}
