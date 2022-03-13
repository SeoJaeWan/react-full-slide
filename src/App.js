import React from "react";
import { useResizeDetector, withResizeDetector } from "react-resize-detector";
import MultipleSlide from "./Components/MultipleSlide";
import SingleSlide from "./Components/SingleSlide";
import CenterSlide from "./Components/CenterSlide";
import FadeSlide from "./Components/Fade";
import VariableWidthSlide from "./Components/VariableWidthSlide";
import VerticalModeSlide from "./Components/VerticalModeSlide";
import FocusOnSelectSlide from "./Components/FocusOnSelectSlide";
import ReverseSlide from "./Components/ReverseSlide";
import GallerySlide from "./Components/GallerySlide";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({}) {
  return (
    <div>
      <SingleSlide />
      <MultipleSlide />
      <CenterSlide />
      <FadeSlide />
      <VariableWidthSlide />
      <VerticalModeSlide />
      <FocusOnSelectSlide />
      <ReverseSlide />

      <GallerySlide />
    </div>
  );
}

export default App;
