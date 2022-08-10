import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="single-post">
      <div className="singlepost-wrapper">
        <img
          src="https://images.pexels.com/photos/748870/pexels-photo-748870.jpeg?cs=srgb&dl=pexels-ika-kenes-748870.jpg&fm=jpg"
          alt=""
          className="singlepost-img"
        />
      </div>
      <h1 className="singlepost-title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolore.
        <div className="singlepost-edit">
          <i className="fa-regular fa-pen-to-square singlepost-icon"></i>
          <i className="fa-regular fa-trash-can singlepost-icon"></i>
        </div>
      </h1>
      <div className="singlepost-info">
        <span className="singlepost-author">
          Author: <b>Atuma David</b>
        </span>
        <span className="singlepost-date">1 hour ago</span>
      </div>
      <p className="singlepost-descripton">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        similique quidem recusandae atque quia, laudantium provident ipsam natus
        ipsum nemo nulla necessitatibus minus architecto veniam eos debitis
        officiis est facere cupiditate unde. Nulla saepe ab laborum cum
        similique fugit? Officiis ea neque nobis similique libero provident
        doloribus, ullam officia deserunt! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Soluta, similique quidem recusandae atque
        quia, laudantium provident ipsam natus ipsum nemo nulla necessitatibus
        minus architecto veniam eos debitis officiis est facere cupiditate unde.
        Nulla saepe ab laborum cum similique fugit? Officiis ea neque nobis
        similique libero provident doloribus, ullam officia deserunt! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Soluta, similique
        quidem recusandae atque quia, laudantium provident ipsam natus ipsum
        nemo nulla necessitatibus minus architecto veniam eos debitis officiis
        est facere cupiditate unde. Nulla saepe ab laborum cum similique fugit?
        Officiis ea neque nobis similique libero provident doloribus, ullam
        officia deserunt!
      </p>
    </div>
  );
};

export default SinglePost;
