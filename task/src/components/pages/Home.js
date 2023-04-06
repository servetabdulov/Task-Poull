import React from "react";
import Text from "../layout/Text/Text";
import "./Home.css";
import SearchBar from "../elements/SearchBar";

const Home = () => {
  return (
    <>
      <div className="cont">
        <div className="miniCont">
          <p className="domaintxt">Use Domain Finder to find unique domains!</p>
          <p className="htm">
            Millions of people are searching for companies, domains, meta tags,
            company names and etc., on Domain finder. Try today!
            1 000 000 data for your search.
          </p>
          <SearchBar />
          <div className="buttons">
            <span>Top searches:</span>
            <button>development</button>
            <button>agile</button>
            <button>design</button>
            <button>finance</button>
            <button>startup</button>
            <button>delivery</button>
          </div>
        </div>
      </div>
      <Text />
    </>
  );
};

export default Home;
