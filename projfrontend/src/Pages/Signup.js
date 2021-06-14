import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

const Signup = () => {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    loading: false,
    error: false,
  });

  const { firstname, lastname, email, password, loading, error } = data;

  const handleChange = (name) => (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ loading: true });
    if (!firstname || !lastname || !email || !password) {
      setData({ error: true });
    }
  };

  return (
    <div className="container-fluid p-5 w-50 mt-5">
      {loading ? (
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      ) : (
        <React.Fragment>
          <div className="text-center pb-4 mb-5">
            <h1>Sign Up</h1>
          </div>
          {error ? (
            <div class="alert alert-danger" role="alert">
              Please enter all details...
            </div>
          ) : (
            ""
          )}

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-6">
              <label for="inputFirstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputFirstName"
                value={firstname}
                onChange={handleChange("firstname")}
              />
            </div>
            <div className="col-md-6">
              <label for="inputLastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputLastName"
                value={lastname}
                onChange={handleChange("lastname")}
              />
            </div>
            <div className="col-12">
              <label for="inputEmail" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                value={email}
                onChange={handleChange("email")}
              />
            </div>
            <div className="col-12">
              <label for="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={handleChange("password")}
              />
            </div>
            <div>
              Already have an account?
              <Link className="navbar-brand" to="/signin">
                Log In
              </Link>{" "}
            </div>
            <div className="col-12 ">
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </div>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default Signup;
