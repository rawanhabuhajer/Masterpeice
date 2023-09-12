import React, { useState } from "react";
import { Link } from "react-router-dom";



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
     setError('You are not an Admin')
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
      <div className="signin__container">
        <form onSubmit={submitHandler}>
          <div className="signin">Sign up</div>
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
          <input
            type="radio"
            name="role"
            id="admin"
            value="admin"
            onChange={(e) => setRole(e.target.value)}
            />
            Admin
          <input
            type="radio"
            name="role"
            id="superAdmin"
            value="superAdmin"
            onChange={(e) => setRole(e.target.value)}
            />
            SuperAdmin
          </div>
          {role === "admin" || role === "superAdmin" ? (
            <div>
              <label>secretKey</label>
              <input
                type="text"
                placeholder="secret key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                />
            </div>
          ) : null}
          {error && <div className="error-message">{error}</div>}
          <button>sign up</button>
        </form>
          <Link to={'/login'}>sign in</Link>
      </div>
    </>
  );
};

export default SignUp;
