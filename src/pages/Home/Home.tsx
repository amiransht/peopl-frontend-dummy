import React from "react";
import "./HomeStyle.css";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";

const Home = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
  return (
    <div className="home-layout">
      <CreatePostHome />
    </div>
  );
};

export default Home;
