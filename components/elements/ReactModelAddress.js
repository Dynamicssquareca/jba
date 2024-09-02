import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AppURL from "@/pages/api/AppUrl";

const ReactModelAddress = ({ isOpen, toggle, mode, address, onSave }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_code: "+91",
    phone: "",
    postcode: "",
    city: "",
    state: "",
    country: "",
    addressType: "",
    addressLine1: "",
    addressLine2: "",
  });

  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (mode === "edit" && address) {
      setFormData({
        name: address.name || "",
        email: address.email || "",
        phone_code: address.phone_code || "+91",
        phone: address.mobile || "",
        postcode: address.pincode || "",
        city: address.city_id || "",
        state: address.state_id || "",
        country: address.country_id || "",
        addressType: address.address_type || "",
        addressLine1: address.address_line1 || "",
        addressLine2: address.address_line2 || "",
      });
    } else {
      setFormData({
        name: "",
        email: "",
        phone_code: "+91",
        phone: "",
        postcode: "",
        city: "",
        state: "",
        country: "",
        addressType: "",
        addressLine1: "",
        addressLine2: "",
      });
    }
  }, [mode, address, isOpen]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(AppURL.AllCountries);
        if (!response.ok) throw new Error("Failed to fetch countries");
        const { data } = await response.json();
        setCountries(data.map(country => ({
          id: country.id,
          name: country.name,
          phone_code: country.phone_code
        })));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  const fetchStates = async (country) => {
    if (!country) return;

    try {
      const response = await fetch(AppURL.GetStatesByCountry(country));
      if (!response.ok) throw new Error("Failed to fetch states");
      const { data } = await response.json();
      setStates(data.map(state => ({
        id: state.id,
        name: state.name
      })));
      setCities([]);  
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (state) => {
    if (!state) return;

    try {
      const response = await fetch(AppURL.GetCitiesByState(state));
      if (!response.ok) throw new Error("Failed to fetch cities");
      const { data } = await response.json();
      setCities(data.map(city => ({
        id: city.id,
        name: city.name
      })));
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    if (formData.country) {
      fetchStates(formData.country);
    }
  }, [formData.country]);

  useEffect(() => {
    if (formData.state) {
      fetchCities(formData.state);
    }
  }, [formData.state]);

  const validate = () => {
    let isValid = true;
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    }
    if (!formData.phone) {
      errors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = "Phone Number must be 10 digits";
      isValid = false;
    }
    if (!formData.postcode) {
      errors.postcode = "Pincode is required";
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.postcode)) {
      errors.postcode = "Pincode must be 6 digits";
      isValid = false;
    }
    if (!formData.city) {
      errors.city = "City is required";
      isValid = false;
    }
    if (!formData.state) {
      errors.state = "State is required";
      isValid = false;
    }
    if (!formData.country) {
      errors.country = "Country is required";
      isValid = false;
    }
    if (!formData.addressType) {
      errors.addressType = "Address Type is required";
      isValid = false;
    }
    if (!formData.addressLine1) {
      errors.addressLine1 = "Address Line 1 is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        const url = mode === "edit"
          ? `${AppURL.UserUpdateAddress(address.id)}` 
          : AppURL.UserAddAddress;

        const method = mode === "edit" ? "POST" : "POST";

        const response = await fetch(url, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone_code: formData.phone_code,
            phone: formData.phone,
            postcode: formData.postcode,
            country: formData.country,
            state: formData.state,
            city: formData.city,
            address_type: formData.addressType,
            address_line1: formData.addressLine1,
            address_line2: formData.addressLine2,
          }),
        });

        if (!response.ok) throw new Error("Failed to save address");

        const result = await response.json();
        console.log("Address saved successfully:", result);
        onSave(result.data);  
        toggle();  
        window.location.reload();
      } catch (error) {
        console.error("Error saving address:", error);
      }
    }
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>
        {mode === "edit" ? "Edit Address" : "Add New Address"}
      </ModalHeader>
      <ModalBody>
        <form className="row g-3" onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="phone_code"
              className="form-control"
              value={formData.phone_code}
              readOnly
            />
          </div>
          
          <div className="col-md-6">
            <input
              type="text"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="col-md-6">
            <input
              type="text"
              name="postcode"
              className={`form-control ${errors.postcode ? "is-invalid" : ""}`}
              placeholder="Postcode"
              value={formData.postcode}
              onChange={handleChange}
            />
            {errors.postcode && <div className="invalid-feedback">{errors.postcode}</div>}
          </div>
          <div className="col-md-6">
            <select
              name="country"
              className={`form-control ${errors.country ? "is-invalid" : ""}`}
              value={formData.country}
              onChange={(e) => {
                const country = e.target.value;
                handleChange(e);
                fetchStates(country);
              }}
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            {errors.country && <div className="invalid-feedback">{errors.country}</div>}
          </div>
          <div className="col-md-6">
            <select
              name="state"
              className={`form-control ${errors.state ? "is-invalid" : ""}`}
              value={formData.state}
              onChange={(e) => {
                const state = e.target.value;
                handleChange(e);
                fetchCities(state);
              }}
              disabled={!formData.country}
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors.state && <div className="invalid-feedback">{errors.state}</div>}
          </div>
          <div className="col-md-6">
            <select
              name="city"
              className={`form-control ${errors.city ? "is-invalid" : ""}`}
              value={formData.city}
              onChange={handleChange}
              disabled={!formData.state}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.city && <div className="invalid-feedback">{errors.city}</div>}
          </div>
          <div className="col-md-6">
            <select
              name="addressType"
              className={`form-control ${errors.addressType ? "is-invalid" : ""}`}
              value={formData.addressType}
              onChange={handleChange}
            >
              <option value="">Select Address Type</option>
              <option value="home">Home</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
            {errors.addressType && <div className="invalid-feedback">{errors.addressType}</div>}
          </div>
          <div className="col-12">
            <input
              type="text"
              name="addressLine1"
              className={`form-control ${errors.addressLine1 ? "is-invalid" : ""}`}
              placeholder="Address Line 1"
              value={formData.addressLine1}
              onChange={handleChange}
            />
            {errors.addressLine1 && <div className="invalid-feedback">{errors.addressLine1}</div>}
          </div>
          <div className="col-12">
            <input
              type="text"
              name="addressLine2"
              className="form-control"
              placeholder="Address Line 2 (optional)"
              value={formData.addressLine2}
              onChange={handleChange}
            />
          </div>
          <ModalFooter>
            <Button color="primary" type="submit">
              {mode === "edit" ? "Update Address" : "Add Address"}
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </form>
      </ModalBody>
    </Modal>
  );
};

export default ReactModelAddress;