import React from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import back from '../../Assets/Icon/back.svg'
import './CreateService.css'
import { useLocation } from "react-router-dom";

const UpdateServices = () => {
    const [servicename, setServicename] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [category, setCategory] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("success");
    const location = useLocation();
  
  
    useEffect(() => {
      console.log(location);
      setServicename(location.state.servicename);
      setServicePrice(location.state.servicePrice);
      setCategory(location.state.category);

    }, []);
  
    const updateInfo = (e) => {
      e.preventDefault();
  
      const updatedservice = {
        servicename,
        category,
        servicePrice,
      };
  
      const serviceId = location.state._id; 
  
      fetch(`http://localhost:8000/api/services/${serviceId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedservice),
      })
        .then((response) => {
          if (response.ok) {
            setCategory("")
            setServicePrice("")
            setServicename("")
            setAlertType("success");
            setAlertMessage("service information updated successfully");
          } else {
            console.error("Failed to update service.");
          }
        })
        .catch((error) => {
          console.error("Error updating service:", error);
        });
    };
    return (
      <div>
        <div className="service__container">
          {/* <div className="service__top">
            <SearchBar></SearchBar>
          </div> */}
          <div className="service__sidebar">
            <SideBar></SideBar>
          </div>
          <div className="service__main">
            <div className="serviceProfile">Edit service</div>
            <Link to={'/home'}><img src={back} alt="" /></Link>
            {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )}
            <div className="service_booking_list_container">
              <form onSubmit={updateInfo}>
                <h4>service information</h4>
                <section>
                  <div className="form-row">
                    <label htmlFor="" className="label">
                      servicename :
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="service name"
                      value={servicename}
                      onChange={(e) => setServicename(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="" className="label">
                      category :
                    </label>
  
                    <input
                      type="text"
                      className="form-control"
                      placeholder="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="" className="label">
                      servicePrice :
                    </label>
  
                    <input
                      type="servicePrice"
                      className="form-control"
                      placeholder="servicePrice"
                      value={servicePrice}
                      onChange={(e) => setServicePrice(e.target.value)}
                    />
                  </div>
                  
                  <div className="form-row">
                    <button className="form-btn">Submit</button>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
}

export default UpdateServices