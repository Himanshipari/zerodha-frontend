import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Signup = () => {



  const [inputValue, setInputValue] = useState({
    email: "",
    username: "",
    password: "",
  });

  const { email, username, password } = inputValue;

  const handleOnChange = (e) => {

    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://zerodha-backend-nu2q.onrender.com/signup",//http://localhost:3002/signup
        {
          email,
          username,
          password,
        }
      );

      console.log(res.data);

      if (res.data.success) {

        toast.success(res.data.message);

        setTimeout(() => {
          // redirect to dashboard app after successful signup
          // window.location.href = "https://zerodha-dashboard-6gww.onrender.com";///http://localhost:3001
        const token = res.data.token;
window.location.href = `https://zerodha-dashboard-6gww.onrender.com?token=${token}`;
        
        }, 1500);

      } else {

        toast.error(res.data.message);

      }

    } catch (error) {

      console.log(error);
      toast.error("Server error");

    }

  };

  return (

    <div className="container p-5 text-center">

      <div className="row">

        <div className="col-sm-7">

          <img
            src="/media/images/signup.png"
            alt="signup"
            style={{ width: "100%" }}
          />

        </div>

        <div className="col-sm-5">

          <h2>Signup</h2>

          <form onSubmit={handleSubmit}>

            <input
              className="form-control mb-3"
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleOnChange}
              required
            />

            <input
              className="form-control mb-3"
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleOnChange}
              required
            />

            <input
              className="form-control mb-3"
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleOnChange}
              required
            />

            <button className="btn btn-primary w-100" type="submit">
              Submit
            </button>

          </form>

          <p className="mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>

      </div>

      <ToastContainer />

    </div>

  );
};

export default Signup;
