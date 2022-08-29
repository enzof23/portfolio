import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";
import { images } from "../../constants";
import projects from "../../constants/data/work";

import { AppWrap, MotionWrap } from "../../layouts";
import "./Work.scss";
import { useMediaQuery } from "@mui/material";

const Work = () => {
  const largeScreen = useMediaQuery("(min-width:871px)");

  return (
    <>
      <h2 className="head-text">
        Some <span>Projects</span> I've Built
      </h2>

      <ul
        className="app__flex"
        style={{ flexDirection: "column", gap: "2rem" }}
      >
        {largeScreen ? <ProjectsLargeScreen /> : <ProjectsSmallScreen />}
      </ul>

      <div className="project__more app__flex">
        <h3>See More on</h3>
        <IoIosArrowForward />
        <a href="https://github.com/enzof23" target="_blank" rel="noreferrer">
          Github
        </a>
        -
        <a href="https://codepen.io/enzof23" target="_blank" rel="noreferrer">
          CodePen
        </a>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, "projects__container"),
  "work",
  "background__secondary"
);

const ProjectsLargeScreen = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {projects?.map((project, index) => {
        const { title, description, image, tech, links } = project;

        return (
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            key={title}
            className="app__flex"
          >
            <li className="project__item" key={title}>
              <a
                href={links.live}
                target="_blank"
                rel="noreferrer"
                className={`project__image ${index === 1 ? "right" : null}`}
              >
                <img src={images[image]} alt={title} />
              </a>

              <div
                className={`project__content ${index === 1 ? "left" : null}`}
              >
                <h3>
                  <a href={links.live} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h3>
                <div className="project__description">
                  <p className="p-text">{description}</p>
                </div>
                <ul className="project__techs">
                  {tech?.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project__links app__flex">
                  <a href={links.github} target="_blank" rel="noreferrer">
                    <AiFillGithub />
                  </a>
                  <a href={links.live} target="_blank" rel="noreferrer">
                    <GoLinkExternal />
                  </a>
                </div>
              </div>
            </li>
          </motion.div>
        );
      })}
    </>
  );
};

const ProjectsSmallScreen = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      {projects?.map((project, index) => {
        const { title, description, tech, links } = project;

        return (
          <motion.div
            variant={scaleVariants}
            whileInView={scaleVariants.whileInView}
            key={title}
            className="app__flex"
            style={{ width: "100%" }}
          >
            <li className="project__item-small app__flex" key={title}>
              <h3 style={{ fontSize: "1.5rem" }}>
                <a href={links.live} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </h3>
              <ul className="project__techs-small">
                {tech?.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project__description-small">
                <p className="p-text">{description}</p>
              </div>
              <div className="project__links app__flex">
                <a href={links.github} target="_blank" rel="noreferrer">
                  <AiFillGithub />
                </a>
                <a href={links.live} target="_blank" rel="noreferrer">
                  <GoLinkExternal />
                </a>
              </div>
            </li>
          </motion.div>
        );
      })}
    </>
  );
};
