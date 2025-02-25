import React, { useEffect, useState } from "react";
import axios from "axios";

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}api/my-requests/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setRequests(response.data);
      } catch (err) {
        setError("Failed to fetch requests");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Requests</h2>
      {requests.length === 0 ? (
        <p className="text-gray-500">No requests found.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request.id}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-lg font-medium text-gray-800">
                {request.pickup_city} → {request.delivery_city}
              </h3>
              <p className="text-gray-600">Status: {request.status}</p>
              <p className="text-gray-600">
                Vehicles: {request.small_car_count} Small, {request.big_car_count} Big, {request.suv_count} SUV, {request.bus_count} Bus
              </p>
              <p className="text-gray-600">Final Sum: ${request.final_sum}</p>
              <p className="text-gray-400 text-sm">Created: {new Date(request.created_at).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRequests;
