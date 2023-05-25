import "./index.scss"
import LogoS from "../../assets/images/logo-s.png"
// import LogoSubtitle from "../../assets/images/logo_sub.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faUser,
faClose, faBars, faSuitcase } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false)

    return (
    <div className="nav-bar">
        <Link className="logo"
         to='/'
         onClick={() => setShowNav(false)}>
            <img src={LogoS} alt="logo"></img>
            {/* <img className="sub-logo" src={LogoSubtitle} alt="logo" ></img> */}
        </Link>
        <nav className={showNav ? 'mobile-show' :''}>
            <NavLink exact="true" activeclassname="active" to="/"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink activeclassname="active" className="about-link" to="/about"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink activeclassname="active" className="portfolio-link"
            to="/portfolio" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>
            <NavLink activeclassname="active" to="/contact" className="contact-link"
            onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"></FontAwesomeIcon>
            </NavLink>

            <FontAwesomeIcon onClick={() => setShowNav(false)}
            icon={faClose} color="#ff9900" size="3x"
            className="close-icon"></FontAwesomeIcon>
        </nav>
        <ul>
            <li>
                <a target="_black"
                 rel="noreferrer" 
                 href="https://github.com/QuirkyQode">
                    <FontAwesomeIcon icon={faGithub} color="4d4d4e"
                    size="2x" className="anchor-icon"></FontAwesomeIcon>
                </a>
            </li>
            <li>
                <a target="_black" rel="noreferrer" 
                href="https://www.linkedin.com/in/meera-murthy/">
                    <FontAwesomeIcon icon={faLinkedin} color="4d4d4e"
                    size="2x" className="anchor-icon"></FontAwesomeIcon>
                </a>
            </li>
        </ul>
        <button onClick={() => setShowNav(true)}>
        <FontAwesomeIcon 
        icon={faBars} color="#ff9900" size="3x" 
        className="hamburger-icon"></FontAwesomeIcon>
        </button>
    </div>)
}

export default Sidebar;