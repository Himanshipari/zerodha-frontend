import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {

  const toDashboard = () => {
    window.location.href = "http://localhost:3001/";
  };

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "https://zerodha-clone-backend-u9w5.onrender.com/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      const { success, message } = data;

      if (success) {

        handleSuccess(message);

        setTimeout(() => {
          toDashboard();
        }, 1000);

      } else {
        handleError(message);
      }

    } catch (error) {
      console.log(error);
      handleError("Login failed");
    }

    setInputValue({
      email: "",
      password: "",
    });
  };

  return (

    <div className="container p-3 p-sm-5 text-center">

      <form onSubmit={handleSubmit}>

        <div className="row">

          <div className="col-12 col-sm-7">
            <img
              src="/media/images/signup.png"
              alt="login"
              style={{ width: "100%" }}
            />
          </div>

          <div className="col-12 col-sm-5 p-3 p-sm-5">

            <h2 className="text-center">Login</h2>

            <div className="mt-4">

              <input
                className="form-control mb-3"
                type="email"
                name="email"
                value={email}
                placeholder="Enter your email"
                onChange={handleOnChange}
                required
              />

              <input
                className="form-control mb-3"
                type="password"
                name="password"
                value={password}
                placeholder="Enter your password"
                onChange={handleOnChange}
                required
              />

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Submit
              </button>

              <p className="mt-3">
                Don't have an account? <Link to="/signup">Signup</Link>
              </p>

            </div>

          </div>

        </div>

      </form>

      <ToastContainer />

    </div>
  );
};

export default Login;
