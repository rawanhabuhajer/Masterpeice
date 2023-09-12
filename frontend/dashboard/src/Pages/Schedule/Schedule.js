import React from "react";
import "./Schedule.css";
import SideBar from "../../Components/SideBar/SideBar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import deleteIcon from "../../Assets/Icon/deleteIcon.svg";
import edit from "../../Assets/Icon/edit.svg";
import pending from "../../Assets/Icon/pending.svg";
const Schedule = () => {
  return (
    <div className="schedule__container">
      <div class="schedule__sidebar">
        <SideBar />
      </div>
      <div class="schedule__top">
        <SearchBar />
      </div>
      <div class="schedule__main">
        <h4>Schedule</h4>
        <div className="schedule__list">
          <div className="schedule__list__title">
            <div>Booking No.</div>
            <div>User ID</div>

            <div>Category</div>
            <div>Area</div>
            <div>Service ID</div>

            <div>Location</div>
            <div>Amount</div>
            <div>Date and time</div>
            <div>Status</div>
            <div>Control</div>
          </div>
          <div className="schedule__data__container">
            <div className="schedule__data">
              <div>42555784</div>
              <div>#74589</div>

              <div>Office cleaning</div>
              <div>30</div>
              <div>2000m</div>
              <div>#66458</div>
              <div>Amman</div>

              <div>2.Sep.23 - 11:00 am</div>
              <div className="status__container">
                <img src={pending} alt="" />
                <div>pending</div>
              </div>

              <div className="schedule__icon__container">
                <div>
                  <img src={edit} alt="" />
                </div>
                <div>
                  <img src={deleteIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
