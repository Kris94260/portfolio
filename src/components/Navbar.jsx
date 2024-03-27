// Navbar.js
import PropTypes from "prop-types";

import "../App.css";

const Navbar = (props) => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <a href="index.html">
            {props.firstName}
            <span>{props.lastName}</span>
          </a>
        </div>
        <input type="checkbox" id="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <a href="#">Whoami?</a>
          </li>
          <li>
            <a href="#skills">Compétences</a>
          </li>
          <li>
            <a href="#projects">Projets</a>
          </li>
          
          <li>
            <a href="#veille">Veilles</a>
          </li>
          <li>
            <a href="#contact">Me contacter</a>
          </li>
          <li>
            <a href="/mon_cv.pdf" className="navbar-btn">
            Télécharger mon CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Navbar;
