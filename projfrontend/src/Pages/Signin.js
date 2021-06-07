import React from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="container-fluid p-5 w-50 mt-5">
      <div className="text-center pb-4">
        <h1>Sign In</h1>
      </div>
      <form className="row g-3">
        <div className="col-12">
          <label for="inputEmail" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail" />
        </div>
        <div className="col-12">
          <label for="inputPassword" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="inputPassword" />
        </div>
        <div>
          Don't have an account?{" "}
          <Link className="navbar-brand" to="/signup">
            Create One
          </Link>{" "}
        </div>

        <div className="col-12 ">
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
