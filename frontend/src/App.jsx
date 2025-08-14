import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/`)
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>MERN + Vite</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
