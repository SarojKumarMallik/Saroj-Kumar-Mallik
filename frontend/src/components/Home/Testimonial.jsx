// src/components/AutoSlideTestimonial.jsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AutoSlideTestimonial() {
  const testimonials = [
    {
      name: "Jane Doe",
      role: "CEO, ExampleCorp",
      message:
        "Creovate Technologies transformed our website. Their team is professional, creative, and highly responsive.",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      name: "John Smith",
      role: "CTO, TechWorld",
      message:
        "Working with Creovate was amazing! Their solutions are innovative and delivered on time.",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      name: "Emily Johnson",
      role: "Founder, StartupX",
      message:
        "Highly recommend Creovate Technologies. Excellent communication and top-notch design.",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 4000); // every 4 seconds
    return () => clearInterval(interval);
  }, [length]);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800">Our Clients Love Us</h2>
        <p className="text-gray-600 mt-4">Hear from those who trusted Creovate Technologies.</p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/30 backdrop-blur-md border border-purple-200 rounded-3xl p-8 shadow-xl"
          >
            {/* Quote background */}
            <svg
              className="w-12 h-12 text-purple-100 absolute top-6 left-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V17h5.17V11.17h.06L7.17 6zm10 0a5.17 5.17 0 0 0-5.17 5.17V17H17v-5.83h.06L17.17 6z" />
            </svg>

            {/* Avatar */}
            <img
              src={testimonials[current].avatar}
              alt={testimonials[current].name}
              className="w-20 h-20 rounded-full border-4 border-purple-500 absolute -top-10 left-1/2 transform -translate-x-1/2 shadow-lg"
            />

            {/* Message */}
            <p className="text-gray-800 italic mt-12 text-center">
              "{testimonials[current].message}"
            </p>

            {/* Name and role */}
            <div className="mt-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">{testimonials[current].name}</h3>
              <p className="text-purple-600 text-sm">{testimonials[current].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                idx === current ? "bg-purple-600" : "bg-purple-200"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
