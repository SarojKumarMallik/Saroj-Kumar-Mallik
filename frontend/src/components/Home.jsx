// src/pages/Home.jsx
import Hero from "./Home/Hero";
import WhyChooseUs from "./Home/WhyChooseUs";
import ServicesSection from "./Home/ServicesSection";
import TechStack from "./Home/TechStack";

export default function Home() {
  return (
    <div>
         <Hero />
         <WhyChooseUs/>
         <ServicesSection/>
         <TechStack />
    </div>
  );
}
