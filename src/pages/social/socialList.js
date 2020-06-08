import React from "react";
import posts from "./social-content";
import PostList from "../../components/PostList";
import { motion,AnimatePresence  } from "framer-motion"

const SocialList = () => (
    <div>
        <h2> Posts </h2>
        <PostList socialpost ={posts} />
    </div>
);
export default SocialList;

