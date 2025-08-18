import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // New Twitter (X) icon

export default function TopBar() {
  return (
    <div className="bg-[#088ec3] text-white px-4 md:px-10 py-2 flex flex-col md:flex-row justify-between items-center text-xs md:text-sm">
      
      {/* Left Info */}
      <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
        <a href="tel:8114780031" className="flex items-center gap-2 hover:text-[#FFD700] transition">
          <FaPhoneAlt className="text-white" /> 8114780031
        </a>

        <a
          href="mailto:creovatetechnologies@gmail.com"
          className="flex items-center gap-2 hover:text-[#FFD700] transition"
        >
          <FaEnvelope className="text-white" /> creovatetechnologies@gmail.com
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Nexus+Esplanade,+Bhubaneswar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#FFD700] transition"
        >
          <FaMapMarkerAlt className="text-white" />Nexus Esplanade, Bhubaneswar
        </a>
      </div>

      {/* Right Social Icons */}
      <div className="flex gap-2 md:gap-3 mt-2 md:mt-0">
        {[
          { icon: <FaFacebookF />, link: "https://facebook.com" },
          { icon: <FaXTwitter />, link: "https://twitter.com" }, // Updated
          { icon: <FaYoutube />, link: "https://youtube.com" },
          { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
          { icon: <FaInstagram />, link: "https://instagram.com" },
        ].map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#088ec3] rounded-full p-2 transition hover:bg-[#FFD700] hover:text-white hover:scale-110"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
