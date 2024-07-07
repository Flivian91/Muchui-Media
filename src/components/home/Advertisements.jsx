import React from "react";
import advert from "../../assets/images/img/img.png";
import IntroductionLabel from "../common/IntroductionLabel";
function Advertisements() {
  return (
    <div className="flex flex-col gap-5">
      <IntroductionLabel>Adverts</IntroductionLabel>
      <img src={advert} alt="" />
    </div>
  );
}

export default Advertisements;
