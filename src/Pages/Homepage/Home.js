import React from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts-folder/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
