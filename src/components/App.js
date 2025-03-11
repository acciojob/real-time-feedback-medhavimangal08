import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  let [user, setUser] = useState({ username: "", email: "", password: "" });
  let [errors, setErrors] = useState({});

  function handleChange(e) {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });

    let { username, email, password } = user;
    let validationerror = {};
    if (!username) {
      validationerror.username = "Name is required";
    }
    if (!/^\S+@\S+\.\S+(\.\S+)?$/.test(email)) {
      validationerror.email = "Invalid Email Format";
    }
    if (password.length < 6) {
      validationerror.password = "Password must be 6 character long";
    }

    if (Object.keys(validationerror).length > 0) {
      setErrors(validationerror);
    }
  }
  return (
    <div>
      {/* Do not remove the main div */}
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "170px",
          rowGap: "7px",
        }}
      >
        <label>Name :</label>
        <input
          type="text"
          name="username"
          id="name"
          onChange={handleChange}
        ></input>
        {errors.username && <p className="error-message">{errors.username}</p>}

        <label>Email :</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
        ></input>
        {errors.email && <p className="error-message">{errors.email}</p>}
        <label>Password :</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        ></input>
        {errors.password && <p className="error-message">{errors.password}</p>}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
