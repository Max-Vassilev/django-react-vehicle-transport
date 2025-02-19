import { useState, useEffect } from "react";
import api from "../api";
import smallCarImg from '../assets/images/small_car.jpg';
import bigCarImg from '../assets/images/big_car.jpg';
import suvImg from '../assets/images/suv.jpg';
import carTransporterImg from '../assets/images/car_transporter.jpg';

function Home() {
    return (
        <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
          <header className="bg-gray-900 text-white py-5 shadow-md">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
              <nav>
                <ul className="list-none flex space-x-6">
                  <li>
                    <a href="/pricing" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                      <i className="fas fa-dollar-sign mr-2"></i> Pricing
                    </a>
                  </li>
                  <li>
                    <a href="/contacts" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                      <i className="fas fa-phone mr-2"></i> Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                      <i className="fas fa-circle-info mr-2"></i> About
                    </a>
                  </li>
                  <li>
                    <a href="/home" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                      <i className="fas fa-home mr-2"></i> Home
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="flex space-x-4">
                <a href="http://localhost:5173/login/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                  <i className="fa-solid fa-right-to-bracket mr-2"></i> Login
                </a>
                <a href="http://localhost:5173/register/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                  <i className="fa-solid fa-id-card mr-2"></i> Register
                </a>
                <a href="http://localhost:5173/logout/" className="text-white text-lg px-6 py-3 rounded transition duration-300 hover:bg-purple-600">
                  <i className="fa-solid fa-right-from-bracket mr-2"></i> Logout
                </a>
              </div>
            </div>
          </header>
    
          <main className="flex-grow py-12">
            <section className="hero text-center py-16 bg-gray-800">
              <h2 className="text-3xl font-semibold text-gray-200">
                Request a vehicle transport in Europe.
              </h2>
            </section>
    
            <section className="gallery grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
              <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={smallCarImg} alt="Small Car" className="w-full h-full object-cover" />
              </div>
              <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={bigCarImg} alt="Big Car" className="w-full h-full object-cover" />
              </div>
              <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={suvImg} alt="SUV" className="w-full h-full object-cover" />
              </div>
              <div className="image relative bg-white shadow-lg rounded-lg overflow-hidden">
                <img src={carTransporterImg} alt="Car Transporter" className="w-full h-full object-cover" />
              </div>
            </section>
    
            <section className="cta text-center py-8">
              <a
                href="/request"
                className="bg-gradient-to-r from-pink-600 to-indigo-700 text-white py-5 px-10 text-xl rounded-full shadow-xl transform hover:scale-110 hover:shadow-2xl hover:bg-indigo-600 transition duration-300 ease-in-out">
                Make a Request
              </a>
            </section>
          </main>
    
          <footer className="bg-gray-900 text-white text-center py-4 mt-auto">
            <p>&copy; 2025 Vehicle Transport Company</p>
          </footer>
        </div>
      );
}

export default Home;
