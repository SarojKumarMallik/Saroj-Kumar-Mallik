"use client";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Core Features",
      desc: "Cutting-edge, custom software with user-centric design, scalability, security, and comprehensive support. Reliable and innovative solutions for business success.",
      img: "https://cdn-icons-png.flaticon.com/512/993/993707.png",
    },
    {
      title: "Easy Customizable",
      desc: "Flexible software solutions designed for easy customization, allowing seamless adjustments to meet specific business needs. User-friendly interfaces ensure effortless modifications and efficient scalability.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "Fast Support",
      desc: "Rapid and reliable support services, ensuring quick resolutions and minimal downtime. Our dedicated team is available around the clock to address your needs promptly and efficiently.",
      img: "https://cdn-icons-png.flaticon.com/512/3063/3063825.png",
    },
  ];

  return (
    <section className="py-16"> {/* ✅ No background applied */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <p className="text-[#228B22] font-medium mb-2">Why Choose Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Effortless Customer Support
        </h2>
        <p className="mt-3 text-gray-700 max-w-3xl mx-auto">
          This letter expresses our sincere gratitude for the excellent work
          that your company has done. I would like to note the high
          professionalism of the entire team, the ability to work with the
          customer, taking into account all his wishes.
        </p>

       {/* Features */}
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-xl rounded-2xl p-10 border border-gray-100 hover:shadow-2xl hover:border-[#6B8E23]/50 transition-all flex flex-col items-center"
            >
              <div className="flex justify-center mb-6">
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
