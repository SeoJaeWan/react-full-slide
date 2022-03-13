import React from "react";
import Slider from "react-slick";
import { SlideContainer, SlidePage } from "../styles";

const VariableWidthSlide = ({}) => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <SlideContainer>
      <h1>VariableWidthSlide</h1>

      <Slider {...settings}>
        <SlidePage style={{ width: 100 }} padding={`50px 0`}>
          100
        </SlidePage>
        <SlidePage style={{ width: 400 }} padding={`50px 0`}>
          400
        </SlidePage>
        <SlidePage style={{ width: 700 }} padding={`50px 0`}>
          700
        </SlidePage>
        <SlidePage style={{ width: 200 }} padding={`50px 0`}>
          200
        </SlidePage>
        <SlidePage style={{ width: 500 }} padding={`50px 0`}>
          500
        </SlidePage>
        <SlidePage style={{ width: 300 }} padding={`50px 0`}>
          300
        </SlidePage>
        <SlidePage style={{ width: 1000 }} padding={`50px 0`}>
          1000
        </SlidePage>
      </Slider>
    </SlideContainer>
  );
};

export default VariableWidthSlide;
