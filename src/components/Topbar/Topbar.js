import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  const user = false;
  return (
    <div className="topbar">
      <div className="topleft">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-pinterest"></i>
        <i className="top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="toplist-item">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="toplist-item">
            <Link className="link" to="/about">
              ABOUT
            </Link>
          </li>
          <li className="toplist-item">
            <Link className="link" to="/contact">
              CONTACT
            </Link>
          </li>
          <li className="toplist-item">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="toplist-item">
            {user && (
              <Link className="link" to="/logout">
                LOGOUT
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="topright">
        {user ? (
          <img
            src="https://images.pexels.com/photos/1322444/pexels-photo-1322444.jpeg?cs=srgb&dl=pexels-zahaoha-1322444.jpg&fm=jpg"
            alt=""
            className="topimg"
          />
        ) : (
          <ul className="toplist">
            <li className="toplist-item">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="toplist-item">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default Topbar;
