import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRequests = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const response = await fetch('https://vehicles-backend.azurewebsites.net/api/user-vehicle-requests/', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 401) {
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, [navigate]);

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">My Vehicle Transport Requests</h2>
        {loading ? (
          <p className="text-white text-center">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center">Error: {error}</p>
        ) : (
          <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
            {requests.map(request => (
              <div key={request.id} className="p-6 border rounded-lg shadow-md bg-gray-100">
                <p>Pickup: {request.pickup_city}, {request.pickup_country}</p>
                <p>Delivery: {request.delivery_city}, {request.delivery_country}</p>
                <p>Small Cars: {request.small_car_count}</p>
                <p>Big Cars: {request.big_car_count}</p>
                <p>SUVs: {request.suv_count}</p>
                <p>Buses: {request.bus_count}</p>
                <p>Total Cost: ${request.final_sum}</p>
                <p>Status: {request.status}</p>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default MyRequests;
