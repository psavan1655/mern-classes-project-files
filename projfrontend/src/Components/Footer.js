import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container-fluid fixed-bottom">
      <footer className="footer bg-dark mt-auto py-3 fixed-bottom">
        <div className="row">
          <div className="col-6">
            <div className="container">
              <span className="text-muted">
                &copy; <span className="text-white">2021 </span> by{" "}
                <span className="text-white">SAVAN PATEL. </span>
                All rights reserved
              </span>
            </div>
          </div>
          <div className="col-6 d-flex flex-row-reverse">
            <ul className="navbar-nav px-5">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Facebook
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  //   style={currentTab(history, "/signup")}
                  className="nav-link"
                  to="/"
                >
                  Instagram
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  //   style={currentTab(history, "/signin")}
                  className="nav-link"
                  to="/"
                >
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
