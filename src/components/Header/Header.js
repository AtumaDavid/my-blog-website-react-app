import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="header-titles-sm">React and Node</span>
        <span className="header-titles-lg">Blog</span>
      </div>

      <img
        src="https://images.pexels.com/photos/103123/pexels-photo-103123.jpeg?cs=srgb&dl=pexels-julian-jagtenberg-103123.jpg&fm=jpg"
        alt=""
        className="headerimg"
      />
    </div>
  );
};

export default Header;
