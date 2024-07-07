import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";

function SocialMediaIcons() {
  return (
    <div className="flex items-center gap-4">
      <Link to='facebook' className="">
        <FaFacebook className="social-media-links" />
      </Link>
      <Link to='facebook' className="">
        <FaWhatsapp className="social-media-links" />
      </Link>
      <Link to='facebook' className="">
        <FaTwitter className="social-media-links" />
      </Link>
      <Link to='facebook' className="">
        <FaInstagram className="social-media-links" />
      </Link>
    </div>
  );
}

export default SocialMediaIcons;
