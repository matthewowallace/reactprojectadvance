import React from "react";
import posts from "../pages/social/social-content";
import {Link} from "react-router-dom";

const PostList = ({socialpost}) => (
    <>
        {socialpost.map((post, key) =>(
            <Link key={key} to={`/SocialPage/${post.name}`}>
                <h3>{post.title}</h3>
                <p>{post.content[0].substring(0,150)}...</p>
            </Link>
        ))}
    </>
    );

export default PostList;