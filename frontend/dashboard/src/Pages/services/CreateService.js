import React from 'react'
import SideBar from '../../Components/SideBar/SideBar';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import back from '../../Assets/Icon/back.svg'
import './CreateService.css'

const CreateService = () => {
    const [servicename , setServicename] = useState('');
    const [servicePrice , setServicePrice] = useState('');
    const [category , setCategory] = useState('');
    // const [id , setId] = useState('');
    const [error, setError] = useState("");
  
    const createservice = async(e) =>{
  
      e.preventDefault();
         const res = await fetch("http://localhost:8000/api/services/", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
             servicename,
             servicePrice,
             category, 
          
           }),
         });
         const data = await res.json();
         console.log(data);
   
         setError(data.error);
   
         if (res.ok) {
   
            console.log('object');
           
          setError(null);
         } else if (!res.ok) {
           setError(data.error);
         }
       }
      
   
  
    return (
  
      <>
        <div className="service__container">
          <div className="service__sidebar">
            <SideBar></SideBar>
          </div>
          <div className="service__main">
            <div className="serviceProfile">Add service</div>
            <Link to={"/home"} className="link">
              <div className="back">
                <img src={back} alt="" />
                {/* <div>Back</div> */}
              </div>
            </Link>
  
            <div className="service_booking_list_container">
              <form onSubmit={createservice}>
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
                      onChange={(e)=> setServicename(e.target.value)}
                    />
                  </div>
                  <div className="form-row">
                    <label htmlFor="" className="label">
                      Category :
                    </label>
  
                    <input
                      type="text"
                      className="form-control"
                      placeholder="category"
                      value={category}
                      onChange={(e)=> setCategory(e.target.value)}
                    />
                  </div>
                  
                  <div className="form-row">
                    <label htmlFor="" className="label">
                      service price :
                    </label>
  
                    <input
                      type="text"
                      className="form-control"
                      placeholder="service price"
                      value={servicePrice}
                      onChange={(e)=> setServicePrice(e.target.value)}
                    />
                  </div>
                  
                  {/* <div className="form-row">
                    <label htmlFor="" className="label">
                      Id :
                    </label>
  
                    <input
                      type="text"
                      className="form-control"
                      placeholder="service id"
                   value={id}
                   onChange={(e)=> setId(e.target.value)}
                  
                    />
                  </div> */}
                     {error && <div className="error-message">{error}</div>}
                  <div className="form-row">
                    <button className="form-btn">Submit</button>
                  </div>
                </section>
              </form>
            </div>
          </div>
        </div>
      </>
    );
}

export default CreateService