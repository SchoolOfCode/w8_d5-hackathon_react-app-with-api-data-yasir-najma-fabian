import React from "react";
import BannerLogo from "../../bannerl.jpg";
import "./Banner.css";

function Banner() {
  return (
    <header>
      <img src={`${BannerLogo}`} alt="banner" />
    </header>
  );
}

export default Banner;
