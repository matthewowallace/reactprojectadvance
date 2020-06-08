import React from "react";
import posts from "../pages/social/social-content";
import {Link} from "react-router-dom";
import { motion,AnimatePresence  } from "framer-motion"


// Animation  Styling //////////////////////////////////////////////////////////
const easing = [.6, -.05, .01, .99]
const fadeInUp = {
    initial: {
        y:60,
        opacity:0
    },
    animate:{
        y: 0,
        opacity: 1,
        transition:{
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
// End of Animation  Styling //////////////////////////////////////////////////////////



const PostList = ({socialpost}) => (
    <motion.div initial={'initial'} animate={'animate'}>
        <motion.div variants={stagger}>
            {socialpost.map((post, key) =>(
                <Link key={key} to={`/SocialPage/${post.name}`}>
                    <motion.div variants={fadeInUp}>
                        <h3>{post.title}</h3>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <p>{post.content[0].substring(0,150)}...</p>
                    </motion.div>
                </Link>
            ))}
        </motion.div>
    </motion.div>
    );

export default PostList;