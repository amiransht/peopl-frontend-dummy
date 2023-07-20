import React from "react";
import "./HomeStyle.css";
import CreatePostHome from "../../components/CreatePost/CreatePostHome";
import PostCard from "../../components/PostCard/PostCard";

const Home = () => {
  document.body.style.backgroundColor = "var(--neutral-10)";
  return (
    <div className="home-layout">
      <CreatePostHome />
      <div className="posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default Home;
