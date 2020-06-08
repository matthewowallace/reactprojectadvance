import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from "styled-components";
import Button from "../components/Button"

const Slider = styled.div`
      color:#fff;
      padding 0px;
      font-size:13px;
      background-color:#5CBDD0;
      font-family: 'Raisonne DemiBold';     
`
const SliderCaption = styled.h5`
        padding:60px;     
        font-size: 15px; 
`


const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Slider>
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
           <SliderCaption>Nulla vitae elit libero, a pharetra augue mollis interdum.</SliderCaption>
            </Carousel.Item>
            <Carousel.Item>
                <SliderCaption>Nulla vitae elit libero, a pharetra augue mollis interdum.</SliderCaption>
            </Carousel.Item>
            <Carousel.Item>
                <SliderCaption>Nulla vitae elit libero, a pharetra augue mollis interdum.</SliderCaption>
            </Carousel.Item>
        </Carousel>
            <Button>JOIN US</Button>
        </Slider>

    );
};
export  default ControlledCarousel