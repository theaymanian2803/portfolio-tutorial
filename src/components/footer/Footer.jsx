import React from "react";
import "./footer.scss";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

function Footer() {
  return (
    <div className="footer">
      <h2>
        &copy; <span>all rights are reserved</span>
      </h2>
      <h2>designed by the aymanian</h2>
      <div className="icons">
        <CiFacebook />
        <FaInstagram />
        <CiLinkedin />
      </div>
    </div>
  );
}

export default Footer;
