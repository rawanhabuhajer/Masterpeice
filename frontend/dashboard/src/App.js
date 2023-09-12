import "./App.css";
import "./Components/SearchBar/SearchBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
// import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Schedule from "./Pages/Schedule/Schedule";
import Users from "./Pages/Users/Users";
import Transactions from "./Pages/Transactions/Transactions";
import UserProfile from "./Pages/UserProfile/UserProfile";
import SignIn from "./Pages/signIn/SignIn";
import SignUp from "./Pages/signUp/SignUp";
import Experts from "./Pages/Experts/Experts";
import AddUser from "./Pages/addUser/AddUser";
import Profile from "./Pages/profile/Profile";
import { Navigate } from "react-router-dom";
import CreateService from "./Pages/services/CreateService";
import UpdateServices from "./Pages/services/UpdateServices";
import CreateExpert from "./Pages/Experts/CreateExpert";
import EditExpert from "./Pages/Experts/EditExpert";

function App() {
  const userData = localStorage.getItem("user");
  const user = JSON.parse(userData);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={!user ? <SignUp /> : <Navigate to="/home" />}
          ></Route>
          <Route path="/login"   element={!user ? <SignIn /> : <Navigate to="/home" />}></Route>

          <Route
            path="/home"
            element={user ? <Home /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/schedule"
            element={user ? <Schedule /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/users"
            element={user ? <Users /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/transactions"
            element={user ? <Transactions /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/user-profile"
            element={user ? <UserProfile /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/experts"
            element={user ? <Experts /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/users/add-user"
            element={user ? <AddUser /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/edit-user"
            element={user ? <Profile /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/create-service"
            element={user ? <CreateService /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/edit-service"
            element={user ? <UpdateServices /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/edit-expert"
            element={user ? <EditExpert /> : <Navigate to="/" />}
          ></Route>
          <Route
            path="/create-expert"
            element={user ? <CreateExpert/> : <Navigate to="/" />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
