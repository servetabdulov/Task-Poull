import React from "react";
import SearchBar from "../elements/SearchBar";
import Filter from "../elements/Filter";
import ResultList from "../elements/ResultList";
import "./Results.css";

const Results = () => {
  return (
    <div>
      <div className="srchBar">
        <SearchBar />
      </div>
      <div className="resultRight">
        <div>
          <Filter />
        </div>
        <div>
          <ResultList />
        </div>
      </div>
    </div>
  );
};

export default Results;
