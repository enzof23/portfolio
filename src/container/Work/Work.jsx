import { AiFillGithub } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { GoLinkExternal } from "react-icons/go";
import { motion } from "framer-motion";
import { images } from "../../constants";
import works from "../../constants/data/work";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
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
    <div className="app__work-list app__flex">
      <h2 className="head-text">
        Some <span>Projects</span> I've Built
      </h2>

      <ul className="app__work-portfolio app__flex">
        {works?.map((work, index) => {
          const { title, description, image, tech, links } = work;

          return (
            <motion.div
              variant={scaleVariants}
              whileInView={scaleVariants.whileInView}
              key={title}
            >
              <li className="app__work-project" key={title}>
                <a
                  href={links.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`app__work-image app__flex ${
                    index === 1 ? "right" : ""
                  }`}
                >
                  <img src={images[image]} alt={title} />
                </a>
                <div
                  className={`app__work-content ${index === 1 ? "left" : ""}`}
                >
                  <h3>
                    <a href={links.live} target="_blank" rel="noreferrer">
                      {title}
                    </a>
                  </h3>
                  <div className="app__work-description">
                    <p className="p-text">{description}</p>
                  </div>
                  <ul className="app__work-tech-list">
                    {tech?.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  <div className="app__work-links">
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
      </ul>
      <div className="app__work-more app__flex">
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
    </div>
  );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__whitebg");
