import React, { useState, useEffect } from "react";
import ReactModelAddress from "../elements/ReactModelAddress";
import AppURL from "@/pages/api/AppUrl";
 
const UserAccAddress = ({ onAddressSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // 'add' or 'edit'
  const [currentAddress, setCurrentAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [countryMap, setCountryMap] = useState({});
  const [stateMap, setStateMap] = useState({});
  const [cityMap, setCityMap] = useState({});
  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const handleAddressSelection = (addressId) => {
    setSelectedAddressId(addressId);
    onAddressSelect(addressId); 
  };
  
  const fetchAddresses = async () => {
    console.log(selectedAddressId);
    try {
      const response = await fetch(AppURL.UserGetAddress, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,  
        },
      });
      if (!response.ok) throw new Error("Failed to fetch addresses");
      const result = await response.json();
      if (result.status === 1) {
        setAddresses(result.data || []);
      } else {
        console.error(result.message);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };
 
  // Fetch countries from the API
  const fetchCountries = async () => {
    try {
      const response = await fetch(AppURL.AllCountries);
      if (!response.ok) throw new Error("Failed to fetch countries");
      const { data } = await response.json();
      setCountries(data);
      setCountryMap(
        data.reduce((map, country) => {
        map[country.id] = country.name;
          return map;
        }, {})
      );
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
 
  // Fetch states from the API
  const fetchStates = async () => {
    try {
      const response = await fetch(AppURL.AllStates);
      if (!response.ok) throw new Error("Failed to fetch states");
      const { data } = await response.json();
      setStates(data);
      setStateMap(
        data.reduce((map, state) => {
        map[state.id] = state.name;
          return map;
        }, {})
      );
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };
 
  // Fetch cities from the API
  const fetchCities = async () => {
    try {
      const response = await fetch(AppURL.AllCities);
      if (!response.ok) throw new Error("Failed to fetch cities");
      const { data } = await response.json();
      setCities(data);
      setCityMap(
        data.reduce((map, city) => {
        map[city.id] = city.name;
          return map;
        }, {})
      );
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };
 
  useEffect(() => {
    fetchAddresses();
    fetchCountries();
    fetchStates();
    fetchCities();
  }, []);
 
  const openModal = (mode, address = null) => {
    setModalMode(mode);
    setCurrentAddress(address);
    setIsModalOpen(true);
  };
 
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentAddress(null);
  };
 
  const handleSave = async (address) => {
    if (modalMode === "add") {
      try {
        const response = await fetch(AppURL.SaveAddress, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify(address),
        });
        if (!response.ok) throw new Error("Failed to add address");
        await response.json();
        fetchAddresses();  
      } catch (error) {
        console.error("Error adding address:", error);
      }
    } else if (modalMode === "edit") {
      try {
const response = await fetch(`${AppURL.UpdateAddress}/${address.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
          body: JSON.stringify(address),
        });
        if (!response.ok) throw new Error("Failed to update address");
        await response.json();
        fetchAddresses();  
      } catch (error) {
        console.error("Error updating address:", error);
      }
    }
    closeModal();
  };
 
  return (
    <>
      <div className="user-address">
        <h3>My Address</h3>
        <div className="row">
          {addresses.length > 0 ? (
            addresses.map((address) => (
          <div key={address.id} className="col-lg-6 mb-3">
                <div className="address-list">
                  <div className="head">
                    <input
                      type="radio"
                      name="addressSelection"
                      value={address.id}
                      checked={selectedAddressId === address.id}
                      onChange={() => handleAddressSelection(
                        address.id
                        )}
                      className="form-check-input"
                    />
                    {address.address_type}{" "}
                    <a
                      href="#"
                      onClick={() =>
                        openModal("edit", {
                          ...address,
                          countryName: countryMap[address.country_id],
                          stateName: stateMap[address.state_id],
                          cityName: cityMap[address.city_id],
                        })
                      }
                    >
                      Edit <i className="bi bi-pencil"></i>
                    </a>
                  </div>
                  <div className="info">
                    <span>
                      {address.address_line1} {address.address_line2 && `, ${address.address_line2}`} <br />
                      {address.city}{" "}
                      {address.state}{" "}
                      {address.country} <br />
                      {address.mobile} <br />
                      {address.pincode}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-lg-12">
              <p>No addresses found.</p>
            </div>
          )}
          <div className="col-lg-12">
            <div className="btn-addrres add-new-add">
              <button onClick={() => openModal("add")}>Add New Address</button>
            </div>
          </div>
        </div>
      </div>
      <ReactModelAddress
        isOpen={isModalOpen}
        toggle={closeModal}
        mode={modalMode}
        address={currentAddress}
        onSave={handleSave}
      />
    </>
  );
};
 
export default UserAccAddress;