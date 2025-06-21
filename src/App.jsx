// Filename - App.js
// It contains the Form, its Structure
// and Basic Form Functionalities

import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    rollNo: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    gender: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container">
      <div className="form-glass">
        <h2>Seminar Registration</h2>
        <form onSubmit={handleSubmit}>
          <label>Roll No</label>
          <input type="text" name="rollNo" value={formData.rollNo} onChange={handleChange} required />

          <label>First Name</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

          <label>Last Name</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">--Select--</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label>Department</label>
          <select name="department" value={formData.department} onChange={handleChange} required>
            <option value="">--Select Department--</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="Civil">Civil</option>
            <option value="Mech">Mech</option>
          </select>

          <button type="submit">Register</button>
        </form>
        {showPopup && <div className="popup">Form submitted successfully!</div>}
      </div>
    </div>
  );
}

export default App;
