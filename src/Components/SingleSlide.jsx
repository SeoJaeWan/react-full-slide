import React from "react";
import Slider from "react-slick";
import { SlideContainer, SlidePage } from "../styles";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
};

const SingleSlide = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    // 슬라이드 변경 시간
    speed: 2000,
    // 자동 재생 유지 시간
    autoplaySpeed: 2000,
    cssEase: "linear",
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <SlideContainer>
      <h1>SingleSlide</h1>

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

export default SingleSlide;
