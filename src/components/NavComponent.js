import React from "react";
import {Link} from 'react-router-dom';
import Button from '../components/Button';
import styled from 'styled-components'
import { motion,AnimatePresence  } from "framer-motion"


// Component  Styling //////////////////////////////////////////////////////////

const Navlink = styled.li`
    list-style:none;
    display:inline-block;
`
const Nav = styled.div`
 display:flex;
 justify-content: space-between;
 align-items:center;
 padding: 10px 10%;
 background-color:#5CBDD0;
`
//  Component  Styling //////////////////////////////////////////////////////////


// Animation  Styling //////////////////////////////////////////////////////////
const easing = [.9, -.09, .01, .99]
const fadeInRight = {
    initial: {
        x:-200,
        opacity:0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
            ease: easing
        }
    }
}
// End of Animation  Styling //////////////////////////////////////////////////////////


const NavBar = () =>(
    <motion.div animate={'animate'} initial={'initial'}>
             <Nav className={"navigator"}>
                 <h2 className={"Brand"}><Link to={"/"} style={{ textDecoration: 'none'}}>YOUNG CREATOR</Link></h2>
                 <motion.div>
                     <Navlink>
                         <ul className="nav">
                             <motion.div  initial={{x:-200 , opacity:0 }} transition={{duration:4 ,ease:easing}}  animate={{x:0 , opacity:1 }}>
                                 <li className="nav-item"><Link to={"/SocialPagelist"} style={{ textDecoration: 'none'}}>Young Creator</Link></li>
                             </motion.div>
                             <motion.div  initial={{x:-200 , opacity:0 }} transition={{duration:3 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                                 <li>About</li>
                             </motion.div>
                             <motion.div  initial={{x:-200 , opacity:0 }} transition={{duration:2 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                                 <li>Contact</li>
                             </motion.div>
                             <motion.div  initial={{x:-200 , opacity:0 }} transition={{duration:1 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                               <li><Link to={"/"} style={{ textDecoration: 'none'}}>LOGIN / CREATE ACCOUNT</Link></li>
                             </motion.div>
                         </ul>
                     </Navlink>
                 </motion.div>
             </Nav>
    </motion.div>
);
export default NavBar;