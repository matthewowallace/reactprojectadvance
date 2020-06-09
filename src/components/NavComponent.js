import React, {useState} from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components'
import { motion,AnimatePresence  } from "framer-motion"


// Component  Styling //////////////////////////////////////////////////////////

const Navlink = styled.li`
      list-style:none;
      display:inline-block;
      margin-top:5px;
      
      @media (max-width: 768px) {
      position:absolute;
      right:0;
      display:flex;
      flex-direction:column;
      align-items: center;
      width:40%;
      background-color:#000;
      transform:translateX(${(props) => (props.isOpen ? '0%' : '100%')});
      transition: 2s ease;
      z-index: 999;
  }
`
const Nav = styled.div`
  display:flex;
  align-items:center;
  margin-left:30px;
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


function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!isOpen);}

    return(
    <motion.div animate={'animate'} initial={'initial'}>
             <Nav className={"navigator"}>
                 <h2 className={"Brand"}><Link to={"/"} style={{ textDecoration: 'none'}}>YOUNG CREATOR</Link></h2>
                 <motion.div>
                     <Navlink  isOpen={ isOpen }>
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
                         </ul>
                     </Navlink>
                     <div className={"Create"}>
                         <motion.div  initial={{x:-200 , opacity:0 }} transition={{duration:1 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                             <li><Link to={"/"} style={{ textDecoration: 'none'}}>LOGIN / CREATE ACCOUNT</Link></li>
                         </motion.div>
                     </div>
                     <div className={"burger"} onClick={toggle}>
                         <div className={"line1"}></div>
                         <div className={"line2"}></div>
                         <div className={"line3"}></div>
                     </div>
                 </motion.div>
             </Nav>
    </motion.div>
);
}
export default NavBar;