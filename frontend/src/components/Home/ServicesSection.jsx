// src/components/ServicesSection.jsx
"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs , FaApple ,FaFigma , FaSketch} from "react-icons/fa";
import { SiMongodb, SiExpress, SiFlutter, SiAndroid, SiFirebase , SiCanva ,SiAdobexd ,SiAdobephotoshop} from "react-icons/si";

export default function ServicesSection() {
  return (
    <section className="w-full bg-gray-50 py-24 px-6 md:px-20 flex flex-col items-center font-sans">
      {/* Top Heading & Paragraph */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl text-center"
      >
        <p className="text-orange-500 font-semibold tracking-widest mb-3 uppercase text-lg md:text-xl">
          Our Services
        </p>
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug text-gray-900"
        >
          Check What Services We Provide
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg leading-relaxed md:leading-loose max-w-full"
        >
          Empowering businesses with cutting-edge technology, our comprehensive software solutions
          encompass development, design, consulting, and steadfast support. Each solution is tailored
          to meet diverse business needs with innovation and unwavering quality.
        </motion.p>
      </motion.div>

      {/* ========= New Split Section ========= */}
      <div className="mt-20 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Web Development
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-[2px] bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 origin-left"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
            At <span className="font-semibold text-gray-900">Creovate Technologies</span>, we offer
            top-notch web development services that cater to the unique needs of
            businesses of all sizes. Our team of skilled developers is equipped
            with the latest tools and technologies to build fast, secure, and
            user-friendly websites that drive results.
          </motion.p>

          {/* MERN Logos with Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-10 pt-4"
          >
            {[
              { Icon: SiMongodb, color: "text-green-600", label: "MongoDB" },
              { Icon: SiExpress, color: "text-gray-700", label: "Express" },
              { Icon: FaReact, color: "text-sky-500", label: "React" },
              { Icon: FaNodeJs, color: "text-green-500", label: "Node.js" },
            ].map(({ Icon, color, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Icon className={`text-3xl ${color}`} />
                <span className="text-lg font-medium text-gray-800">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 py-3 border border-orange-400 text-orange-500 font-medium rounded-md hover:shadow-lg transition"
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/assets/video/web.png"
            alt="Web Development Illustration"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-full"
          />
        </motion.div>
      </div>




      {/* ========= New Split Section ========= */}
      <div className="mt-20 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* left Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/assets/video/app.png"
            alt="Web Development Illustration"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-full"
          />
        </motion.div>
        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
Android & iOS App Development
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-[2px] bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 origin-left"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
           Creovate Technologies offers top-notch app development services that will help your business grow and stand out in the competitive mobile app market. Experience the best of both worlds with our hybrid app development service, combining the power of native apps with the flexibility of web-based technologies to deliver a seamless user experience across multiple platforms.
          </motion.p>

          {/* MERN Logos with Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-10 pt-4"
          >
            {[
               { Icon: SiFlutter, color: "text-[#02569B]", label: "Flutter" },   // official blue
  { Icon: SiAndroid, color: "text-[#3DDC84]", label: "Android" },   // official green
  { Icon: FaApple, color: "text-black", label: "iOS" },             // Apple logo = black
  { Icon: SiFirebase, color: "text-[#FFCA28]", label: "Firebase" }, // official yellow
            ].map(({ Icon, color, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Icon className={`text-3xl ${color}`} />
                <span className="text-lg font-medium text-gray-800">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 py-3 border border-orange-400 text-orange-500 font-medium rounded-md hover:shadow-lg transition"
          >
            Know More
          </motion.button>
        </motion.div>

        
      </div>


       {/* ========= New Split Section ========= */}
      <div className="mt-20 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Ui / Ux Design
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-[2px] bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 origin-left"
          ></motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 text-base md:text-lg leading-relaxed"
          >
           Unlock the power of user-centric design with our UI/UX expertise, tailored to bring your software to life and drive user engagement. Experience a seamless digital journey with our intuitive UI/UX design, crafted to elevate your software and enhance user satisfaction.
          </motion.p>

          {/* MERN Logos with Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.2 },
              },
            }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center gap-10 pt-4"
          >
            {[
              { Icon: FaFigma, color: "text-pink-500", label: "Figma" },
              { Icon: SiAdobexd, color: "text-purple-500", label: "Adobe XD" },
              { Icon: FaSketch, color: "text-yellow-500", label: "Sketch" },
               { Icon: SiCanva, color: "text-sky-500", label: "Canva" },
               { Icon: SiAdobephotoshop, color: "text-blue-600", label: "Photoshop" },
               
            ].map(({ Icon, color, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Icon className={`text-3xl ${color}`} />
                <span className="text-lg font-medium text-gray-800">{label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#f97316", color: "#fff" }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-6 py-3 border border-orange-400 text-orange-500 font-medium rounded-md hover:shadow-lg transition"
          >
            Know More
          </motion.button>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.img
            src="/assets/video/web.png"
            alt="Web Development Illustration"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="max-w-full"
          />
        </motion.div>
      </div>

      
    </section>
  );
}
