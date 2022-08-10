import React from "react";
import "./Settings.css";
import Sidebar from "../../components/Sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-updatetitle">Update Your Account</span>
          <span className="settings-deletetitle">Delete Account</span>
        </div>
        <form action="" className="settings-form">
          <label htmlFor="">Profile Picture</label>
          <div className="settings-profilepicture">
            <img
              src="https://images.pexels.com/photos/1261597/pexels-photo-1261597.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1261597.jpg&fm=jpg"
              alt=""
              className="settings-form-img"
            />
            <label htmlFor="file-input">
              <i className="fa-solid fa-user settings-profilepicture-icon"></i>
            </label>
            <input type="file" id="file-input" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="David" />
          <label htmlFor="">Email</label>
          <input type="email" placeholder="David@gmail.com" />
          <label htmlFor="">Password</label>
          <input type="password" />
          <button className="settings-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
};

export default Settings;
