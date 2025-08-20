import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ paths, title = "" }) {
  return (
    <nav className="relative w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 h-[400px] sm:h-[450px] md:h-[500px]"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6) contrast(1.1)",
          transform: "scale(1.05)",
        }}
      ></div>

      {/* Deeper Curved bottom for entire section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-48 md:h-56 lg:h-64" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224 C480,400 960,80 1440,256 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-[400px] sm:h-[450px] md:h-[500px] flex flex-col justify-center items-center px-6 text-center">
        {/* Title with animated gradient */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 drop-shadow-lg mb-6 animate-gradient">
          {title}
        </h1>

        {/* Breadcrumb Links with glassmorphism */}
        {paths && paths.length > 0 && (
          <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
            <ol className="flex flex-wrap justify-center items-center text-white text-sm md:text-base gap-2">
              {paths.map((path, idx) => (
                <li
                  key={idx}
                  className="flex items-center transition-all duration-300 hover:scale-105"
                >
                  <a
                    href={path.link}
                    className="hover:text-yellow-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] font-medium transition-all duration-300"
                  >
                    {path.name}
                  </a>
                  {idx < paths.length - 1 && (
                    <ChevronRight className="mx-2 w-4 h-4 opacity-70" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite, float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </nav>
  );
}
