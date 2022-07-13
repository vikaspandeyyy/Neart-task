import React from "react";
import "../App.css";
import Award from "../asserts/1.png";
import bg from "../asserts/2.png";

const Header = () => {
  return (
    <div className="header">
      <div className="left-section">
        <img src={Award} alt="" />
      </div>
      <div className="right-section">
        <h3 className="title">
          C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h3>
        <div className="header-para">
          <ul className="ulList">
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <div className="bg-img">
            <img src={bg} alt="" />
          </div>
          <p className="paragraph">
            Government of India has awarded the <b> "National Energy Conservation
            Award 2018".</b> Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
