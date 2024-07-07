import React from "react";

function Overlay({onClose}) {
  return (
    <div onClick={onClose} className="fixed w-full h-screen z-30 top-0 left-0 backdrop-blur-[3px]"></div>
  );
}

export default Overlay;
