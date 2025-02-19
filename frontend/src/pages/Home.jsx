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
        <div className="bg-green-600 text-white text-center p-4 relative shadow-md rounded mx-4 mt-4">
          <span>{message}</span>
          <button 
            onClick={handleClose} 
            className="absolute top-1 right-2 text-white hover:text-gray-200"
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
