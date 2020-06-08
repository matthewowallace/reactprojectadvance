import React from 'react';
import AboutUs from "./AboutusComponent";
import ContactUs from "./ContactusComponent";
import Footer from "./FooterComponent";
import TopContributorComponent from "./TopContributorComponent";
import styled from "styled-components";
import ControlledCarousel from "../../components/homeSlider";
import { motion,AnimatePresence  } from "framer-motion"

const Welcome = styled.div`
      color:#fff;
      padding 20px;
      font-size:180px;
      background-color:#5CBDD0;
      font-family: 'Raisonne DemiBold';
      text-shadow:2px 2px 2px rgba(0,0,0,0.3);
              
      @media (max-width: 768px) {
      font-size:60px;
  }
`

const Homepage = () =>(
    <>
            <AnimatePresence>
                <Welcome>
                <motion.div
                         animate={{scale: 1}}
                         transition={{ duration: 2 }}
                         initial={{scale: 0.4}}
                        >  WELCOME
                </motion.div>
                </Welcome>
                <ControlledCarousel/>
                <AboutUs />
                <TopContributorComponent />
                <ContactUs />
                <Footer />
            </AnimatePresence>
    </>
);
export  default Homepage;