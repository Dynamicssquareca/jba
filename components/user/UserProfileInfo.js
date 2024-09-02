import React, { useState } from "react";
import AppURL from "@/pages/api/AppUrl";
 
const UserProfileInfo = ({ userData }) => {
  const [formData, setFormData] = useState({
name: userData.name || "",
email: userData.email || "",
phone: userData.phone || "",
  });
  
  const [errors, setErrors] = useState({});
 
  const validateForm = () => {
    let formErrors = {};
if (!formData.name) formErrors.name = "First Name is required.";
if (!formData.email) {
formErrors.email = "Email is required.";
} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
formErrors.email = "Email is invalid.";
    }
    if (!formData.phone) formErrors.phone = "phone number is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    if (!validateForm()) return;
 
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(AppURL.UserUpdateDetails, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });
 
      if (response.ok) {
        const data = await response.json();
        if (data.status === 1) {
          alert("Details updated successfully!");
          
        } else {
          alert("Failed to update details.");
        }
      } else {
        alert("Error updating details. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while updating details.");
    }
  };
 
  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-12">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="First Name"
          value={formData.name}
          onChange={handleChange}
        />
{errors.name &&
<div className="text-danger">{errors.name}</div>}</div>
      <div className="col-12">
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="Email ID"
          value={formData.email}
          onChange={handleChange}
        />
{errors.email &&
<div className="text-danger">{errors.email}</div>}
      </div>
      <div className="col-md-12">
        <input
          type="text"
          className="form-control"
          name="phone"
          id="inputZip"
          placeholder="1234567890"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
      </div>
      <div className="check-out mt-50">
        <button type="submit" className="btn btn-warning">
          Update Details
        </button>
      </div>
    </form>
  );
};
 
export default UserProfileInfo;