"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import Breadcrumb from "./Breadcrumb"; // ✅ Import Breadcrumb
import Footer from "./Footer"; // ✅ Import Breadcrumb
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Breadcrumb */}
      <Breadcrumb
        title="Contact Us"
        paths={[
          { name: "Home", link: "/" },
          { name: "Contact Us", link: "/contact" },
        ]}
      />

      {/* Contact Section */}
      <section className="relative max-w-7xl w-full mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
            Let’s <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions, suggestions, or need assistance? Our team is just a click away. Reach out and let’s make something amazing happen together.
          </p>

          <div className="grid gap-6">
            {/* Phone */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl transition cursor-pointer"
            >
              <Phone className="text-pink-500 w-8 h-8 animate-bounce" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-gray-800">+91 8114780031</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl transition cursor-pointer"
            >
              <Mail className="text-pink-500 w-8 h-8 animate-pulse" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-gray-800">creovatetechnologies@gmail.com</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-xl transition cursor-pointer"
            >
              <MapPin className="text-pink-500 w-8 h-8 animate-bounce" />
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-semibold text-gray-800">
                  Nexus Esplanade,Bhubaneswar
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-pink-100 via-white to-red-100 rounded-3xl blur-2xl animate-pulse"></div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-5">
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                />
              </motion.div>

              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="block text-sm font-medium text-gray-600">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition"
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-xl shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      

      <Footer/>
    </div>
  );
}
