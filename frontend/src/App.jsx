import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import loaderAnimation from "./assets/lottie/loader.json"; // Lottie JSON file
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [loading, setLoading] = useState(true);

  // Preloader (1 second delay)
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
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Creovate Solutions</h1>
        {/* other routes/pages/components go here */}
      </main>
    </>
  );
}

export default App;
