import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  const location = useLocation();
  const [message, setMessage] = useState(location.state?.message);
  const [visible, setVisible] = useState(!!message);

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    if (message) {
      setVisible(true);
    }
  }, [message]);

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      {visible && (
        <div className="bg-green-600 text-white p-4 relative shadow-md rounded mx-4 mt-4 flex items-center justify-between">
          <div className="flex-1 text-center">
            <span className="text-lg">{message}</span>
          </div>
          <button 
            onClick={handleClose} 
            className="text-white text-2xl font-bold p-1 rounded focus:outline-none transition-transform duration-200 hover:scale-110 hover:bg-green-500"
          >
            X
          </button>
        </div>
      )}
      <main className="flex-grow py-12">
        <Hero />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
