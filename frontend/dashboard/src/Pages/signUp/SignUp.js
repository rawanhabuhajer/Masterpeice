import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [role, setRole] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const Username = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const Email = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const Password = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const ConfirmPassword = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (role === "admin" && secretKey !== "admin") {
      setError("You are not an Admin");
    } else if (role === "superAdmin" && secretKey !== "superadmin") {
      setError("You are not a superAdmin");
    } else {
      const res = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
          role,
        }),
      });
      const data = await res.json();
      console.log(data);

      setError(data.error);

      if (res.ok) {
        localStorage.setItem("user", JSON.stringify(data));

        setError(null);
      } else if (!res.ok) {
        setError(data.error);
      }
    }
  };

  return (
    <>
      <div className="signup__container">
        <form onSubmit={submitHandler}>
          <div className="signup">Sign up</div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={Username}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={Email}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={Password}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={ConfirmPassword}
          />
          <div>
          <label htmlFor="admin" style={{ fontSize: '12px' }}>
            <input
              type="radio"
              name="role"
              id="admin"
              value="admin"
              onChange={(e) => setRole(e.target.value)}
          
            />
            {'\u0020'} Admin
            </label>
            <label htmlFor="superadmin" style={{ fontSize: '12px'}}>
            <input
              type="radio"
              name="role"
              id="superAdmin"
              value="superAdmin"
              onChange={(e) => setRole(e.target.value)}
              style={{ marginLeft: "15px"}}
            />
              {'\u0020'}SuperAdmin
            </label>
          </div>
          {role === "admin" || role === "superAdmin" ? (
            <div>
              <label>Secret Key</label>
              <input
                type="text"
                placeholder="secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                style={{ marginLeft: "15px", height: "35px" }}
              />
            </div>
          ) : null}
          {error && <div className="error-message">{error}</div>}
          <button><Link to={"/"}> sign up</Link></button>
        </form>
        <div style={{fontSize:"12px" ,marginLeft:"10px" , marginTop:"10px"}}>
        If you already have an account register<br /> you can
        <Link to={"/login"} style={{color:"#62DFF0", textDecoration: "none"}}>
        {'\u0020'} Login here !
        </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
