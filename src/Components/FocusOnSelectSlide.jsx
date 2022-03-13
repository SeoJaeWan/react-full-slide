import React from "react";
import Slider from "react-slick";
import { SlideContainer, SlidePage } from "../styles";

const FocusOnSelectSlide = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <SlideContainer>
      <h1>FocusOnSelectSlide</h1>

      <Slider {...settings}>
        <SlidePage padding={`50px 0`}>1</SlidePage>
        <SlidePage padding={`50px 0`}>2</SlidePage>
        <SlidePage padding={`50px 0`}>3</SlidePage>
        <SlidePage padding={`50px 0`}>4</SlidePage>
        <SlidePage padding={`50px 0`}>5</SlidePage>
        <SlidePage padding={`50px 0`}>6</SlidePage>
        <SlidePage padding={`50px 0`}>7</SlidePage>
      </Slider>
    </SlideContainer>
  );
};

export default FocusOnSelectSlide;
