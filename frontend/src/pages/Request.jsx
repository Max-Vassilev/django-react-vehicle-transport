import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Request = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    pickupCountry: "",
    pickupCity: "",
    deliveryCountry: "Bulgaria",
    deliveryCity: "Sofia",
    smallCarCount: 0,
    bigCarCount: 0,
    suvCount: 0,
    busCount: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 flex flex-col items-center">
        <h1 className="text-white text-3xl text-center">Request Vehicle Transport</h1>
        <form onSubmit={handleSubmit} className="mt-8 bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-lg">
          {[
            { label: "First name", name: "firstName", type: "text" },
            { label: "Last name", name: "lastName", type: "text" },
            { label: "Phone", name: "phone", type: "tel" },
            { label: "Pickup country", name: "pickupCountry", type: "text" },
            { label: "Pickup city", name: "pickupCity", type: "text" },
          ].map(({ label, name, type }) => (
            <div key={name} className="mb-4">
              <label className="block text-white">{label}:</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                required
              />
            </div>
          ))}

          <div className="mb-4">
            <label className="block text-white">Delivery country:</label>
            <input
              type="text"
              value="Bulgaria"
              readOnly
              className="w-full p-2 rounded bg-gray-700 text-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white">Delivery city:</label>
            <input
              type="text"
              value="Sofia"
              readOnly
              className="w-full p-2 rounded bg-gray-700 text-gray-400"
            />
          </div>

          {[
            { label: "Small car count", name: "smallCarCount" },
            { label: "Big car count", name: "bigCarCount" },
            { label: "SUV count", name: "suvCount" },
            { label: "Bus count", name: "busCount" },
          ].map(({ label, name }) => (
            <div key={name} className="mb-4">
              <label className="block text-white">{label}:</label>
              <input
                type="number"
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                min="0"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-4 p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
          >
            Submit Request
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Request;
