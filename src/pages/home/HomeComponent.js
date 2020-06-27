
import React from 'react';
import AboutUs from "./AboutusComponent";
import ContactUs from "./ContactusComponent";
import Footer from "./FooterComponent";
import TopContributorComponent from "./TopContributorComponent";
import styled from "styled-components";
import ControlledCarousel from "../../components/homeSlider";
import { motion,AnimatePresence  } from "framer-motion";
import NavMini from "../../components/MIniNav/MiniNav";
import image from '../../assets/youth.png';
import logo from '../../assets/LOGO.svg';
import NavBar from "../../components/NavComponent";
import Socialnav from "../../components/SocialIcon/SocialNav";

const Welcome = styled.div`
      margin-top:13%;   
      padding 0px;     
       @media screen and (max-width: 768px){
       margin-top: 100px;
   }
`
const WelcomeBG = styled.div`
      height:100vh; 
      background-image: url(${image});
      background-size:cover;
  }
`
const LOGO = styled.div`
   width: 500px;
   margin-left:36%;
   @media screen and (max-width: 768px){
       width: 200px;
       margin-left:30%;
   }
`


const Homepage = () =>(
    <>
        <WelcomeBG>
        <NavBar />
                <Welcome>
                <motion.div
                         animate={{scale: 1}}
                         transition={{ duration: 2 }}
                         initial={{scale: 0.4}}
                        >
                    <LOGO>
                        <img src={logo}/>
                    </LOGO>
                </motion.div>
                    <ControlledCarousel/>
                </Welcome>
            <Socialnav/>
        </WelcomeBG>

    </>
);
export  default Homepage;