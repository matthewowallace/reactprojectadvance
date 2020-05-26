import React from 'react';

import AboutUs from "./AboutusComponent";
import ContactUs from "./ContactusComponent";
import Footer from "./FooterComponent";
import TopContributorComponent from "./TopContributorComponent";
import styled from "styled-components";
import ControlledCarousel from "../../components/homeSlider";


const Welcome = styled.div`
      color:#fff;
      padding 200px;
      font-size:120px;
      background-color:#5CBDD0;
      font-family: 'Raisonne DemiBold';
`


const Homepage = () =>(
    <>
        <Welcome><h2>WELCOME</h2></Welcome>
            <ControlledCarousel/>
        <AboutUs />
        <TopContributorComponent />
        <ContactUs />
        <Footer />
    </>
);
export  default Homepage;