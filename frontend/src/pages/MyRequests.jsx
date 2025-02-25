import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MyRequests = () => {
  const requests = [
    {
      id: 1,
      pickup_country: 'USA',
      pickup_city: 'New York',
      delivery_country: 'Bulgaria',
      delivery_city: 'Sofia',
      status: 'Pending Approval',
      small_car_count: 2,
      big_car_count: 1,
      suv_count: 0,
      bus_count: 0,
      final_sum: '1200.00'
    },
    {
      id: 2,
      pickup_country: 'UK',
      pickup_city: 'London',
      delivery_country: 'Bulgaria',
      delivery_city: 'Sofia',
      status: 'Approved',
      small_car_count: 1,
      big_car_count: 0,
      suv_count: 2,
      bus_count: 1,
      final_sum: '2500.00'
    }
  ];

  return (
    <div className="font-sans bg-gray-800 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-6">My Vehicle Transport Requests</h2>
        <div className="space-y-6 p-6 bg-white shadow-lg rounded-lg">
          {requests.map(request => (
            <div key={request.id} className="p-6 border rounded-lg shadow-md bg-gray-100">
              <p className="text-gray-700 font-semibold">Pickup: {request.pickup_city}, {request.pickup_country}</p>
              <p className="text-gray-700 font-semibold">Delivery: {request.delivery_city}, {request.delivery_country}</p>
              <p className="text-gray-700">Small Cars: {request.small_car_count}</p>
              <p className="text-gray-700">Big Cars: {request.big_car_count}</p>
              <p className="text-gray-700">SUVs: {request.suv_count}</p>
              <p className="text-gray-700">Buses: {request.bus_count}</p>
              <p className="text-gray-900 font-bold">Total Cost: ${request.final_sum}</p>
              <p className={`text-lg font-bold mt-2 ${request.status === 'Pending Approval' ? 'text-yellow-500' : 'text-green-500'}`}>
                Status: {request.status}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MyRequests;