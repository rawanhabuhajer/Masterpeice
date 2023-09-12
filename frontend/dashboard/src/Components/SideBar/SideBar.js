import React from "react";
import "./SideBar.css";
import logo from "../../Assets/Img/logo.svg";
import Scedule from "../../Assets/Icon/Scedule.svg";
import experts from "../../Assets/Icon/experts.svg";
import messages from "../../Assets/Icon/messages.svg";
import home from "../../Assets/Icon/home.svg";
import transictions from "../../Assets/Icon/transictions.svg";
import users from "../../Assets/Icon/users.svg";
import logout from "../../Assets/Icon/logout.svg";
import { Link } from "react-router-dom";
const SideBar = () => {
  return (
    <>
      <div className="side__bar position-fixed">
        <div className="top__icons__container">
          <img src={logo} alt="logo" className="logo" />
          <div className="icons__container">
            <Link to='/home'>
              <img src={home} alt="" />
            </Link>
            <Link to="/schedule">
              <img src={Scedule} alt="" />
            </Link>
            <Link to="/users">
              {" "}
              <img src={users} alt="" />
            </Link>
            <Link to="/Transactions">
              <img src={transictions} alt="" />
            </Link>
            <Link to="/experts">
              <img src={experts} alt="" />
            </Link>
            <Link to="/messages">
              {" "}
              <img src={messages} alt="" />
            </Link>
          </div>
        </div>

        <div className="logout">
          <img src={logout} alt="" />
        </div>
      </div>
    </>
  );
};

export default SideBar;
