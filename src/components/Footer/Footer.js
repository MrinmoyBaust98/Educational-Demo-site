import React from "react";
import "./Footer.css";
import foterImge from "../../picture/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="first-part">
          <img
            style={{ width: "150px", height: "50px" }}
            src={foterImge}
            alt="footer imagee"
          />
          <p className="foter-para">
            Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id
            placerat tacimates definitionem sea, prima quidam vim no. Duo nobis
            persecuti cu. Nihil facilisi indoctum an vix, ut delectus expetendis
            vis.
          </p>
          <p>FOLLOW US :</p>
        </div>
        <div className="useful-part">
          <h3>Useful links</h3>

          <li>Admission</li>
          <li>About </li>
          <li>Login</li>
          <li>Register </li>
          <li>News & Events</li>
          <li>Contacts</li>
        </div>
        <div className="contact-part">
          <h3>Contact with Us</h3>
          <p>+ 61 23 8093 3400</p>
          <p>teach@gmail.com</p>
          <p>@teach_you</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
