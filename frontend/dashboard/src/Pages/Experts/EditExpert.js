import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import back from "../../Assets/Icon/back.svg";
import "./CreateExpert.css";
import { useLocation } from "react-router-dom";

const EditExpert = () => {
  const [expertname, setExpertname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [availability, setAvailability] = useState("");
  const [experience, setExperience] = useState("");
  const [about, setAbout] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [tel, setTel] = useState("");
  const [error, setError] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const locationHook = useLocation();

  useEffect(() => {
    setExpertname(locationHook.state.expertname);
    setEmail(locationHook.state.email);
    setPassword(locationHook.state.password);
    setAvailability(locationHook.state.availability);
    setExperience(locationHook.state.experience);
    setAbout(locationHook.state.about);
    setLocation(locationHook.state.location);
    setDepartment(locationHook.state.department);
    setTel(locationHook.state.tel);
  }, []);
  const editExpert = async (e) => {
    e.preventDefault();

    const updatedservice = {
      email,
      experience,
      expertname,
      tel,
      about,
      availability,
      location,
      department,
      password,
    };

    const expertId = locationHook.state._id;

    fetch(`http://localhost:8000/api/experts/${expertId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedservice),
    })
      .then((response) => {
        if (response.ok) {
          setEmail("");
          setExperience("");
          setPassword("");
          setAbout("");
          setAvailability("");
          setDepartment("");
          setTel("");
          setExpertname("");
          setLocation("");
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
    <>
      <div className="expert__container">
        <div className="expert__sidebar">
          <SideBar></SideBar>
        </div>
        <div className="expert__main">
          <div className="expertProfile">Add expert</div>
          <Link to={"/home"} className="link">
            {alertMessage && (
              <div className={`alert alert-${alertType}`}>{alertMessage}</div>
            )}
            <div className="back">
              <img src={back} alt="" />
              {/* <div>Back</div> */}
            </div>
          </Link>

          <div className="expert_booking_list_container">
            <form onSubmit={editExpert}>
              <h4>expert information</h4>
              <section className="expert_section">
                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Expert name :
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="expert name"
                    value={expertname}
                    onChange={(e) => setExpertname(e.target.value)}
                  />
                </div>
                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Email :
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Password :
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Experience :
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="experience"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                  />
                </div>
                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Department :
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  />
                </div>
                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Phone :
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="phone"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>
                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Location :
                  </label>

                  <input
                    type="text"
                    className="form-control expert_form-row"
                    placeholder="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    Availability :
                  </label>
                  <input
                    type="radio"
                    value="true"
                    checked={availability === "true"}
                    onChange={(e) => setAvailability(e.target.value)}
                  />{" "}
                  Available
                  <input
                    type="radio"
                    value="false"
                    checked={availability === "false"}
                    onChange={(e) => setAvailability(e.target.value)}
                  />{" "}
                  Not Available
                </div>

                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    About :
                  </label>

                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="about"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </div>
                {/* <div className="form-row">
                    <label htmlFor="" className="label">
                    Id :
                    </label>
                    
                    <input
                    type="text"
                      className="form-control"
                      placeholder="expert id"
                      value={id}
                      onChange={(e)=> setId(e.target.value)}
                      
                      />
                  </div> */}
                {error && <div className="error-message">{error}</div>}
                <div className="form-row expert_form-row">
                  <button className="expert_form-btn">Submit</button>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditExpert;
