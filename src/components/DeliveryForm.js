// src/components/DeliveryForm.js
import React, { useState } from 'react';

const DeliveryForm = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropOffLocation, setDropOffLocation] = useState('');
  const [packageDetails, setPackageDetails] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!pickupLocation || !dropOffLocation || !packageDetails || !deliveryTime) {
      setError('All fields are required');
    } else {
      setError('');
    
	    console.log({ pickupLocation, dropOffLocation, packageDetails, deliveryTime });
    }
  };

  return (
    <div>
      <h2>Schedule a Delivery</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pickup Location:</label>
          <input 
            type="text" 
            value={pickupLocation} 
            onChange={(e) => setPickupLocation(e.target.value)} 
          />
        </div>
        <div>
          <label>Drop-off Location:</label>
          <input 
            type="text" 
            value={dropOffLocation} 
            onChange={(e) => setDropOffLocation(e.target.value)} 
          />
        </div>
        <div>
          <label>Package Details:</label>
          <input 
            type="text" 
            value={packageDetails} 
            onChange={(e) => setPackageDetails(e.target.value)} 
          />
        </div>
        <div>
          <label>Preferred Delivery Time (in days):</label>
          <input 
            type="number" 
            value={deliveryTime} 
            onChange={(e) => setDeliveryTime(e.target.value)} 
          />
        </div>
        <button type="submit">Schedule Delivery</button>
      </form>
    </div>
  );
};

export default DeliveryForm;

