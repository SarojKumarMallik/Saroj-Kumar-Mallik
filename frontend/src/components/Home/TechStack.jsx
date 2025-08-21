// src/components/TechStack.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaNodeJs,
  FaPhp,
  FaPython,
  FaJava,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDotnet,
  SiRubyonrails,
  SiTailwindcss,
  SiDjango,
  SiDocker,
  SiKubernetes,
  SiNextdotjs,
  SiReact,
  SiPostgresql,
  SiOracle,
} from "react-icons/si";

export default function TechStack() {
  const [activeTab, setActiveTab] = useState("Backend");

  const techCategories = {
    Backend: [
      { Icon: FaNodeJs, label: "Node.js", color: "text-green-600" },
      { Icon: SiExpress, label: "Express.js", color: "text-gray-700" },
      { Icon: FaPhp, label: "PHP", color: "text-indigo-600" },
      { Icon: FaPython, label: "Python", color: "text-yellow-600" },
      { Icon: FaJava, label: "Java", color: "text-red-600" },
      { Icon: SiDotnet, label: ".NET Core", color: "text-purple-600" },
      { Icon: SiRubyonrails, label: "Rails", color: "text-red-500" },
    ],
    Frontend: [
      { Icon: FaReact, label: "React", color: "text-sky-500" },
      { Icon: SiNextdotjs, label: "Next.js", color: "text-black" },
      { Icon: SiReact, label: "React Native", color: "text-blue-500" },
      { Icon: FaAngular, label: "Angular", color: "text-red-600" },
      { Icon: FaHtml5, label: "HTML5", color: "text-orange-500" },
      { Icon: FaCss3, label: "CSS3", color: "text-blue-500" },
      { Icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-500" },
      { Icon: FaBootstrap, label: "Bootstrap", color: "text-purple-600" },
    ],
    Databases: [
      { Icon: SiMongodb, label: "MongoDB", color: "text-green-700" },
      { Icon: SiMysql, label: "MySQL", color: "text-blue-600" },
      { Icon: SiPostgresql, label: "PostgreSQL", color: "text-sky-700" },
      { Icon: SiOracle, label: "Oracle", color: "text-red-700" },
      { Icon: FaDatabase, label: "SQL", color: "text-gray-600" },
    ],
    CloudTesting: [
      { Icon: SiDjango, label: "Django", color: "text-green-800" },
    ],
    DevOps: [
      { Icon: SiDocker, label: "Docker", color: "text-blue-500" },
      { Icon: SiKubernetes, label: "Kubernetes", color: "text-sky-600" },
    ],
    
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-6 md:px-20 text-center font-sans">
      {/* Heading */}
      <h4 className="text-orange-500 font-semibold mb-2 uppercase tracking-wide">
        Technology We Use
      </h4>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Our <span className="text-orange-500">Tech Stack</span>
      </h2>
      <p className="mt-3 text-gray-600 max-w-2xl mx-auto text-lg">
        From <strong>MERN</strong> to enterprise-grade frameworks, frontend and backend, we
        use the most powerful technologies to build scalable apps.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mt-6 gap-3 flex-wrap">
        {Object.keys(techCategories).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition shadow-sm ${
              activeTab === tab
                ? "bg-orange-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-orange-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mt-12 justify-items-center"
      >
        {techCategories[activeTab].map(({ Icon, label, color }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.15, rotate: 2 }}
            className="flex flex-col items-center space-y-3 bg-white shadow-md hover:shadow-xl p-6 rounded-2xl border border-gray-100 transition"
          >
            <Icon className={`text-6xl ${color} drop-shadow-md`} />
            <span className="text-gray-800 font-semibold text-lg tracking-wide">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
