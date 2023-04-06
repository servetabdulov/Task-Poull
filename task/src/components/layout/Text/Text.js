import React from "react";
import "./Text.css";
import text from "../../../assets/image/textimg.svg";
import first from "../../../assets/image/1.svg";
import to from "../../../assets/image/2.svg";
import three from "../../../assets/image/3.svg";
import arrow from "../../../assets/image/arrow.svg";

function Text() {
  return (
    <div className="text">
      <div>
        <p className="domain">Use Domain Finder to find unique domains!</p>
        <p className="domainTo">
          Millions of people are searching for companies, domains, meta tags,
          company names and etc., on Domain finder. Try today! <b>1 000 000</b>{" "}
          data for your search.
        </p>
        <div className="images">
          <img src={first} alt="d" />
          <span>Type to search</span>
          <img src={arrow} alt="d" />
          <img src={to} alt="d" />
          <span>Find domains</span>
          <img src={arrow} alt="d" />
          <img src={three} alt="d" />
          <span>Filter them</span>
        </div>
      </div>
      <div className="textimg">
        <img src={text} alt="d" />
      </div>
    </div>
  );
}

export default Text;
