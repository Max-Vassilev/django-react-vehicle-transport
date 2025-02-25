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
    <>
      <Header />
      <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">My Vehicle Transport Requests</h2>
        <div className="space-y-4">
          {requests.map(request => (
            <div key={request.id} className="p-4 border rounded-lg shadow-md">
              <p className="text-gray-600">Pickup: {request.pickup_city}, {request.pickup_country}</p>
              <p className="text-gray-600">Delivery: {request.delivery_city}, {request.delivery_country}</p>
              <p className="text-gray-600">Small Cars: {request.small_car_count}</p>
              <p className="text-gray-600">Big Cars: {request.big_car_count}</p>
              <p className="text-gray-600">SUVs: {request.suv_count}</p>
              <p className="text-gray-600">Buses: {request.bus_count}</p>
              <p className="text-gray-600 font-semibold">Total Cost: ${request.final_sum}</p>
              <p className={`text-sm font-semibold ${request.status === 'Pending Approval' ? 'text-yellow-500' : 'text-green-500'}`}>
                Status: {request.status}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyRequests;
