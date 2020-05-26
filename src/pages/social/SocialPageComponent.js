import React from "react";
import posts from "./social-content";
import PostList from "../../components/PostList";
import NotFoundPage from "../Error404/NotFoundPage";

const SocialPageComponent = ({match}) => {
    const name = match.params.name;
    const post = posts.find(post => post.name === name);

    if(!post) return <NotFoundPage />

    const otherPost = posts.filter(post => post.name !== name);

    return (
        <>
            <h1>{post.name}</h1>
            <h2>{post.title}</h2>
            {post.content.map((paragraph, key)=>(
                <p key={{key}}> {paragraph} </p>
            ))}
            <h3>Other Post:</h3>
            <PostList socialpost={otherPost} />
        </>
    );
}
export default SocialPageComponent;