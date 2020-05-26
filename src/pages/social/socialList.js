import React from "react";
import posts from "./social-content";
import PostList from "../../components/PostList";

const SocialList = () => (
    <>
        <h2>Posts</h2>
      <PostList socialpost ={posts} />
    </>
);
export default SocialList;

