// src/components/DeliveryServiceList.js
import React, { useState, useEffect } from 'react';

const DeliveryServiceList = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [filter, setFilter] = useState('price');

  useEffect(() => {
    // Mock data for delivery services
    const servicesData = [
      { id: 1, name: 'Express Delivery', price: 50, time: 2, rating: 4.5 },
      { id: 2, name: 'Standard Delivery', price: 30, time: 5, rating: 4.0 },
      { id: 3, name: 'Economy Delivery', price: 20, time: 7, rating: 3.5 },
    ];
    
    setServices(servicesData);
    setFilteredServices(servicesData);
  }, []);

  useEffect(() => {
    // Sorting services based on the selected filter
    const sortedServices = [...services].sort((a, b) => {
      if (filter === 'price') return a.price - b.price;
      if (filter === 'time') return a.time - b.time;
      if (filter === 'rating') return b.rating - a.rating;
      return 0;
    });
    setFilteredServices(sortedServices);
  }, [filter, services]);

  return (
    <div>
      <h2>Available Delivery Services</h2>
      <label>
        Sort by:
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="price">Price</option>
          <option value="time">Delivery Time</option>
          <option value="rating">Rating</option>
        </select>
      </label>
      <ul>
        {filteredServices.map((service) => (
          <li key={service.id}>
            <h3>{service.name}</h3>
            <p>Price: ${service.price}</p>
            <p>Delivery Time: {service.time} days</p>
            <p>Rating: {service.rating}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeliveryServiceList;

