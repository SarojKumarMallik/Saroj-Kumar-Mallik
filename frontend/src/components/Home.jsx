// src/pages/Home.jsx
import Hero from "./Home/Hero";
import WhyChooseUs from "./Home/WhyChooseUs";
import ServicesSection from "./Home/ServicesSection";
import TechStack from "./Home/TechStack";
import StatsCounter from "./Home/StatsCounter";
import ContactCTA from "./Home/ContactCTA";
import Testimonial from "./Home/Testimonial";
import Footer from "./Footer";


export default function Home() {
  return (
    <div>
         <Hero />
         <WhyChooseUs/>
          <StatsCounter />
         <ServicesSection/>
        <Testimonial/>
         <TechStack />
         <ContactCTA />
         <Footer/>
    </div>
  );
}
