import React, { useState } from "react";
import Slider from "react-slick";
import { SlideContainer, SlidePage } from "../styles";

const GallerySlide = () => {
  const [mainSlide, setMainSlide] = useState();
  const [subSlide, setSubSlide] = useState();

  return (
    <SlideContainer>
      <h1>GallerySlide</h1>

      <Slider asNavFor={subSlide} ref={(slider) => setMainSlide(slider)}>
        <SlidePage padding={`50px 0`}>1</SlidePage>
        <SlidePage padding={`50px 0`}>2</SlidePage>
        <SlidePage padding={`50px 0`}>3</SlidePage>
        <SlidePage padding={`50px 0`}>4</SlidePage>
        <SlidePage padding={`50px 0`}>5</SlidePage>
        <SlidePage padding={`50px 0`}>6</SlidePage>
        <SlidePage padding={`50px 0`}>7</SlidePage>
      </Slider>

      <Slider
        asNavFor={mainSlide}
        ref={(slider) => setSubSlide(slider)}
        slidesToShow={3}
        focusOnSelect={true}
      >
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

export default GallerySlide;
