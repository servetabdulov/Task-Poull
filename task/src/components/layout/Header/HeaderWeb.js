import { NavLink } from "react-router-dom";
import "./Header.css";

const HeaderWeb = () => {
  return (
    <>
      <NavLink to="/">
        <h5>DOMAINFINDER</h5>
      </NavLink>
      <div className="rightNavi">
        <NavLink className={"rightFirst"} to="/about"> About us</NavLink>
        <p className="rightSecond">For Developers</p>
      </div>
    </>
  );
};

export default HeaderWeb;
