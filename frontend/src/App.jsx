import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "./assets/lottie/loader.json"; 
import Footer from "./components/Footer";

// Components
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact";  
import Home from "./components/Home";



function App() {
  const [loading, setLoading] = useState(true);

  // Preloader (2 second delay)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <Player
          autoplay
          loop
          src={loaderAnimation}
          style={{ height: "150px", width: "150px" }}
        />
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      {/* <Footer/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
