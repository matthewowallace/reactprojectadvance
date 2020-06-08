import React from "react";
import posts from "./social-content";
import PostList from "../../components/PostList";
import NotFoundPage from "../Error404/NotFoundPage";
import {AnimatePresence, motion} from "framer-motion"


// Animation  Styling //////////////////////////////////////////////////////////
const easing = [.9, -.09, .01, .99]
const fadeInUp = {
    initial: {
        y:100,
        opacity:0
    },
    animate:{
        y: 0,
        opacity: 1,
        transaction:{
            duration: 0.8,
            ease: easing
        }
    }
}

const stagger = {
    animate: {
        transition:{
            staggerChildren: 0.05
        }
    }
}

// End of Animation Styling///////////////////////////////////////////////

const SocialPageComponent = ({match}) => {
    const name = match.params.name;
    const post = posts.find(post => post.name === name);

    if(!post) return <NotFoundPage />

    const otherPost = posts.filter(post => post.name !== name);

    return (
        <motion.div animate={'animate' } initial={'initial'}>
            <motion.div variants={stagger}>
                <motion.div variants={fadeInUp}>
                    <h1>{post.name}</h1>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    <h2>{post.title}</h2>
                </motion.div>

                <motion.div variants={fadeInUp}>
                    {post.content.map((paragraph, key)=>(
                        <p key={{key}}> {paragraph} </p>
                    ))}
                </motion.div>
            </motion.div>

            <h3>Other Post:</h3>
            <PostList socialpost={otherPost} />
        </motion.div>
    );
}
export default SocialPageComponent;