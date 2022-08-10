import React from "react";
import "./Sidebar.css";

const sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/4656915/pexels-photo-4656915.jpeg?cs=srgb&dl=pexels-amine-m%27siouri-4656915.jpg&fm=jpg"
          alt=""
          className="sidebar-img"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          necessitatibus officia tempore quod totam cum ipsam deleniti, commodi
          vel perspiciatis.
        </p>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">CATEGORIES</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sports</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">FOLLOW US</span>
        <div className="sidebar-social">
          <i className="sidebar-icon fa-brands fa-facebook"></i>
          <i className="sidebar-icon fa-brands fa-twitter"></i>
          <i className="sidebar-icon fa-brands fa-pinterest"></i>
          <i className="sidebar-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
