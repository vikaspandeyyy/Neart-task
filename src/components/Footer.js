import React from "react";
import "../App.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="number">
        <i class="fa fa-phone"></i>
        <p>
          Toll free <strong>1800 200 1234</strong>
        </p>
      </div>
      <div className="facebook">
        <i class="fa fa-facebook-f"></i>
        <p>www.facebook.com/cripumps</p>
      </div>
      <div className="website">
        <span class="material-symbols-outlined">language</span>
        <p>www.crigroups.com</p>
      </div>
    </div>
  );
}

export default Footer;
