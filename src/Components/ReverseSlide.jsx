import React from "react";
import Slider from "react-slick";
import { SlideContainer, SlidePage } from "../styles";

const ReverseSlide = ({}) => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    slidesToScroll: 1,
    rtl: true,
  };

  return (
    <SlideContainer>
      <h1>ReverseSlide</h1>

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

export default ReverseSlide;
