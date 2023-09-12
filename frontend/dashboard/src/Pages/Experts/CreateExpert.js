import React from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import back from "../../Assets/Icon/back.svg";
import "./CreateExpert.css";
const CreateExpert = () => {
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

  const createExpert = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/experts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        expertname,
        email,
        about,
        availability,
        experience,
        location,
        password,
        department,
        tel
      }),
    });
    const data = await res.json();
    console.log(data);

    setError(data.error);

    if (res.ok) {
      console.log("object");

      setError(null);
    } else if (!res.ok) {
      setError(data.error);
    }
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
            <div className="back">
              <img src={back} alt="" />
              {/* <div>Back</div> */}
            </div>
          </Link>

          <div className="expert_booking_list_container">
            <form onSubmit={createExpert}>
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
                  /> Available

                 <input
                    type="radio"
                    value="false"
                    checked={availability === "false"}
                    onChange={(e) => setAvailability(e.target.value)}
                  /> Not Available
                </div>

                <div className="form-row expert_form-row">
                  <label htmlFor="" className="label">
                    About :
                  </label>

                  <input
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

export default CreateExpert;
