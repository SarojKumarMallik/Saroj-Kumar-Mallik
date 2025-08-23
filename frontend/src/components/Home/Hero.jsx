// src/pages/Home/Hero.jsx
"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // removed Pagination
import "swiper/css";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-50 flex items-center justify-center px-6 md:px-20 overflow-hidden pt-20 md:pt-0">
      {/* Background Blur Shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left" 
        >
          <h2 className="text-lg font-semibold tracking-widest text-blue-600 uppercase mb-3">
            Creovate Technologies
          </h2>
         <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold leading-snug mb-6">
  Professional{" "}
  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
Web Development & SEO Services</span>{" "}
  {/* <br /> */}
  in Bhubaneswar
</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg">
          We build high-performing websites that load fast, look modern, and rank higher on Google.
Our SEO strategies help your business get discovered by the right audience.
With Creovate Technologies, your brand grows with visibility, traffic, and trust.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#services"
              className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Explore Services
            </a>
          </div>
        </motion.div>

        {/* Right Side - Slider with bigger images & no dots */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-lg mx-auto"
        >
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-full h-[420px]"
          >
            <SwiperSlide>
              <img
                src="/assets/video/hero1.png"
                alt="Web Development"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/video/hero2.png"
                alt="Coding Illustration"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/assets/video/hero3.png"
                alt="App Development"
                className="w-full h-full object-contain"
              />
            </SwiperSlide>
          </Swiper>

          {/* Floating Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-6 -right-6 bg-white shadow-xl rounded-xl px-5 py-3"
          >
            <p className="text-sm font-semibold text-gray-700">
              🚀 Trusted by 25+ Clients
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
