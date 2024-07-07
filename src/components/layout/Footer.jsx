import React from "react";
import CallToAction from "../footer/CallToAction";
import MainFooter from "../footer/MainFooter";
import BottomFooter from "../footer/BottomFooter";

function Footer() {
  return (
    <footer className="px-2 flex-col flex gap-5 bg-accent/10">
      <CallToAction />
      <div>
        <MainFooter />
        <BottomFooter />
      </div>
    </footer>
  );
}

export default Footer;
