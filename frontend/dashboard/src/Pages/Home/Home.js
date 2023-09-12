/* eslint-disable no-lone-blocks */
import "./Home.css";
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
// import Container from "react-bootstrap/Container";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import add from "../../Assets/Icon/add.svg";

const Home = () => {
  const [serviceData, setServiceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const Navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8000/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServiceData(data.data.services);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }


  const deleteService = (id) => {
    fetch(`http://localhost:8000/api/services/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const updatedServiceData = serviceData.filter(
            (service) => service._id !== id
          );
          setServiceData(updatedServiceData);
        } else {
          console.error("Failed to delete service.");
        }
      })
      .catch((error) => {
        console.error("Error deleting service:", error);
      });
  };

  

  return (
    <div>
      <div className=" home__container">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="top">
          <SearchBar />
        </div>
        <div className="main">
          <h6 className="Services__category">Services category</h6>
          <div
            style={{ marginLeft: "78rem" }}
            className="addNew"
            onClick={() => Navigate("/create-service")}
          >
            <div>add new</div>
            <img src={add} alt="" style={{ width: "15px" }} />
          </div>
          <div className="service__list">
            <div className="service__list__title">
              <div>Category</div>
              <div>service Name</div>
              <div>Price</div>
              <div>Service Id</div>
              <div>Control</div>
            </div>
            <div className="service__data__container">
              {serviceData.map((service) => (
                <div className="service__data" key={service._id}>
                  <div>{service.category}</div>
                  <div>{service.servicename}</div>
                  <div>${service.servicePrice}</div>
                  <div>{service._id}</div>
          

                  <div className="service__icon__container">
                    <div>
                      <img
                        src={edit}
                        alt=""
                        onClick={() =>
                          Navigate("/edit-service", { state: service })
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={deleteIcon}
                        alt=""
                        onClick={() => deleteService(service._id)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;

