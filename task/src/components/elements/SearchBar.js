import React from "react";
import "./SearchBar.css"
import lupa from "../../assets/image/lupa.svg"
import { useNavigate } from "react-router-dom";

function SearchBar() {
  let navigate = useNavigate();
  return (
    <div className="search">
      <div className="select">
        <select>
          <option selected>Resources</option>
          <option>
            Only domain <input type={"checkbox"}></input>
          </option>
          <option>
            Other options <input type={"checkbox"}></input>{" "}
          </option>
        </select>
      </div>
      <div className="input">
        <input placeholder="Search something..."/>
        <button onClick={()=>{navigate("/results")}}><img src={lupa} alt="S"/></button>
      </div>
    </div>
  );
}

export default SearchBar;
