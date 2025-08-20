import React from "react";
import Wave from "react-wavify";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function WaveFooter() {
  return (
    <footer className="relative mt-20">
      {/* Wavy Top Shape */}
      <div className="absolute -top-16 md:-top-24 left-0 w-full h-16 md:h-24 overflow-hidden">
        <Wave
          fill="#0f172a"
          paused={false}
          options={{
            height: 20, 
            amplitude: 25,
            speed: 0.2,
            points: 4,
          }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative bg-slate-900 text-white px-4 sm:px-8 md:px-20 py-10 sm:py-12 md:py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Logo & About */}
          <div>
            <div className="bg-white rounded-xl p-2 inline-block shadow-md">
              <img
                src="/assets/images/creovate_new.png"
                alt="Creovate Logo"
                className="h-12 sm:h-14 w-auto"
              />
            </div>
            <p className="text-gray-300 text-base sm:text-sm leading-relaxed mt-4 tracking-wide">
              Creovate Technologies builds modern, scalable websites and apps
              tailored for your business growth.
            </p>
            
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 tracking-wider uppercase">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base tracking-wide">
              <li><a href="/services/web-development" className="hover:text-white">Web Development</a></li>
              <li><a href="/services/crm-software" className="hover:text-white">CRM Software</a></li>
              <li><a href="/services/ecommerce" className="hover:text-white">E-Commerce Solutions</a></li>
              <li><a href="/services/ui-ux" className="hover:text-white">UI & UX Design</a></li>
              <li><a href="/services/seo" className="hover:text-white">Search Engine Optimization</a></li>
              <li><a href="/services/digital-marketing" className="hover:text-white">Digital Marketing</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base tracking-wide">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/career" className="hover:text-white">Career</a></li>
              <li><a href="/blog" className="hover:text-white">Blog</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3 tracking-wider uppercase">
              Get in Touch
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-2 tracking-wide">
              Email: <a href="mailto:creovatetechnologies@gmail.com" className="hover:text-white">creovatetechnologies@gmail.com</a>
            </p>
            <p className="text-gray-300 text-sm sm:text-base mb-4 tracking-wide">
              Phone: <a href="tel:+918114780031" className="hover:text-white">+91 8114780031</a>
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
              </a>
              <a href="https://linkedin.com/company/creovate" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
              </a>
              <a href="mailto:creovatetechnologies@gmail.com">
                <Mail className="w-6 h-6 hover:text-red-500 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 sm:mt-10 pt-4 sm:pt-6 text-center text-white-400 text-sm sm:text-base tracking-wide">
          © {new Date().getFullYear()} <a href="/" className="hover:text-white"><b>Creovate Technologies</b></a>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
