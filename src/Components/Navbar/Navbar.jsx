import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import images from "../../constants/images";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "work", "about", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <div />
          <a href={images.resume} target="_blank">
            my resume
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <>
            <div>
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {["home", "work", "about", "contact"].map((item) => (
                  <li key={{ item }}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
                {/* <li>
                  <a href="#" onClick={() => setToggle(false)}>
                    my resume
                  </a>
                </li> */}
                <a
                  className="app__navbar-menu-socials"
                  href="https://github.com/enzof23"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
                <a
                  className="app__navbar-menu-socials"
                  href="https://www.linkedin.com/in/enzo-filippo-31559bab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
              </ul>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
