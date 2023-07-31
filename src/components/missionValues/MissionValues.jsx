import React from "react";
import About from "../about/About";
import CtabCarousel from "../cTabCarousel/CtabCarousel";

import "./style/MissionValues.css";

const MissionValues = () => {
  return (
    <div>
      <CtabCarousel />
      <div className="bottom_mission_values"></div>
      {/* <About /> */}
    </div>
  );
};

export default MissionValues;
