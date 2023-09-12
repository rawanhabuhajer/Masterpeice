import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import search from "../../Assets/Icon/search.svg";
import admin from "../../Assets/Img/admin.svg";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
const [username , setUsername] = useState('')
const navigate = useNavigate()
const [currenUser, setCurrentUser] = useState('');


  useEffect(()=>{
    const data = localStorage.getItem("user");
    const user = JSON.parse(data);
    setUsername(user.username)
    setCurrentUser (user)
    console.log(user);
  },[])

  return (
    <>
      <div className="search__bar">
        <div className="search__right__container">
          <h1>Admin Dashboard</h1>
          <div className="bar__container">
            <input className="bar" placeholder="Find for something .."></input>
            <img src={search} alt="" className="search__icon" />
          </div>
        </div>
        <div className="img-div">
          <div className="admin__name">{username}</div>
          <img src={admin} alt="" className="admin__img" onClick={()=> navigate('/user-profile', {state:currenUser})}/>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
