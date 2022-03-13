import React from "react";
import Slider from "react-slick";
import { MultiItem, SlideContainer, SlidePage } from "../styles";

const MultipleSlide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <SlideContainer>
      <h1>MultipleRowSlide</h1>

      <Slider {...settings}>
        <SlidePage>
          <MultiItem>1</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>2</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>3</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>4</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>5</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>6</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>7</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>8</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>9</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>10</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>11</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>12</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>13</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>14</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>15</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>16</MultiItem>
        </SlidePage>
      </Slider>
    </SlideContainer>
  );
};

export default MultipleSlide;
