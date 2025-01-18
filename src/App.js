// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DeliveryServiceList from './components/DeliveryServiceList';
import DeliveryForm from './components/DeliveryForm';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<DeliveryServiceList />} />
          <Route path="/schedule" element={<DeliveryForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

