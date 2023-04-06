import React from "react";
import "./Footer.css";
import twitter from "../../../assets/icon/twitter.svg";
import facebook from "../../../assets/icon/Facebook.svg";
import linkedin from "../../../assets/icon/Linkedin.svg";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer">
        <div className="left">
          <div className="first">
            <img src={twitter} />
            <img src={facebook} />
            <img src={linkedin} />
          </div>
          <div className="to">
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Trust & Safety</p>
          </div>
        </div>
        <div className="right">
          <label>Language :</label>
          <select>
            <option value={"EN"}>EN</option>
            <option value={"RU"}>RU</option>
            <option value={"AZ"}>AZ</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Footer;
