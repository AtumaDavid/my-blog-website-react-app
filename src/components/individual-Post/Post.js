import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/848573/pexels-photo-848573.jpeg?cs=srgb&dl=pexels-lord-coke%27lat-%22brown%22-senior-commander-848573.jpg&fm=jpg"
        alt=""
        className="post-img"
      />
      <div className="post-info">
        <div className="post-categories">
          <span className="post-category">Music</span>
          <span className="post-category">Life</span>
        </div>
        <span className="post-title">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, cumque.
        </span>
        <hr />
        <span className="post-date">1-hour ago</span>
      </div>
      <p className="post-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam,
        suscipit quasi? Maxime fugiat hic deserunt rem sit! Recusandae
        temporibus vero odit autem aut voluptas? Neque consectetur vero aperiam
        recusandae eligendi. Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Veniam, suscipit quasi? Maxime fugiat hic deserunt rem sit!
        Recusandae temporibus vero odit autem aut voluptas? Neque consectetur
        vero aperiam recusandae eligendi.
      </p>
    </div>
  );
};

export default Post;
