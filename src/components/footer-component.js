import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faYoutube,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";

const FooterComponent = () => {
  return (
    <footer id="footer">
      <div className="container">
        <ul className="icons">
          <li>
            <Link className="icon" to="#">
              <FontAwesomeIcon icon={faTwitter} />
            </Link>
          </li>
          <li>
            <Link className="icon" to="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </Link>
          </li>
          <li>
            <Link className="icon" to="#">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </li>
          <li>
            <Link className="icon" to="#">
              <FontAwesomeIcon icon={faYoutube} />
            </Link>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; 作品僅供練習之用。</li>
          <li>
            Design: <a href="http://html5up.net">HTML5 UP</a> / Code: Winnie Lin
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default FooterComponent;
