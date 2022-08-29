import "./Navbar.scss";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import images from "../../constants/images";
import { useMediaQuery, SwipeableDrawer } from "@mui/material";

const Navbar = () => {
  const largeScreen = useMediaQuery("(min-width:871px)");

  return largeScreen ? <Topbar /> : <Sidebar />;
};

export default Navbar;

const Topbar = () => {
  const navbarMenuItems = ["home", "work", "about", "contact"];
  return (
    <div
      className="navbar__container"
      style={{ paddingBlock: "calc(1rem - 4px) calc(1rem + 4px)" }}
    >
      <nav>
        <ul className="navbar__ul">
          {navbarMenuItems.map((item) => (
            <li className="app__flex" key={`${item}-link`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
          <li className="app__flex">
            <div />
            <a href={images.resume} target="blank">
              my resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);
  const navbarMenuItems = ["home", "work", "about", "contact"];

  return (
    <>
      <div className="sidebar__closed app__flex">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
      </div>

      <SwipeableDrawer
        anchor="right"
        open={toggle}
        onClose={() => setToggle(false)}
        onOpen={() => setToggle(true)}
      >
        <div className="sidebar__menu">
          <HiX onClick={() => setToggle(false)} />
          <nav>
            <ul>
              {navbarMenuItems.map((item) => (
                <li key={`${item}-link`}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={images.resume}
                  target="blank"
                  onClick={() => setToggle(false)}
                >
                  my resume
                </a>
              </li>
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
          </nav>
        </div>
      </SwipeableDrawer>
    </>
  );
};
