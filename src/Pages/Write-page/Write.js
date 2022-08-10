import React from "react";
import "./Write.css";

const Write = () => {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/1261572/pexels-photo-1261572.jpeg?cs=srgb&dl=pexels-susanne-jutzeler-sujufoto-1261572.jpg&fm=jpg"
        alt=""
        className="write-img"
      />
      <form action="write-form">
        <div className="writeform-group">
          <label htmlFor="file-input">
            <i className="fa-solid fa-plus write-icon"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="writeform-group">
          <textarea
            placeholder="Tell Your Story..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Post</button>
      </form>
    </div>
  );
};

export default Write;
