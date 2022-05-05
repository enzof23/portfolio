import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { skills, abouts } from "../../constants/data/about";

import "./About.scss";

const About = () => {
  return (
    <>
      <h2 className="head-text">
        About <span>Me</span>
      </h2>

      <div className="app__about-me">
        <div className="app__about-profile">
          <div className="app__about-intro">
            <h3>Who Am I ?</h3>
            <p className="p-text">
              Self taught web developer from France, my interest in building web
              pages dates back to 2016 when I was building e-commerce websites
              with Shopify and Wix for personal projects. Fast forward to today,
              I taught myself more advanced technologies such as React to build
              better pages and create better users experience. <br /> <br />{" "}
              Constant seeker of new knowledge and information, I find working
              as a developer extremely stimulating. Hence why I decided to make
              the move to become a full-time developer and work with a company
              to learn more and become a better developer. <br />
              <br />I am currently looking for a new opportunity so if you're in
              need of someone qualified and motivated...
            </p>
            <a href="#contact">Let's work together !</a>
          </div>
          <div className="app__about-skills">
            <h4>
              Here are a few technologies I've been working with recently:
            </h4>
            <div className="app__about-skill">
              {skills?.map((skill) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, type: "tween" }}
                  className="app__about-skill-item app__flex"
                  key={skill.name}
                >
                  <div className="app__flex">
                    <img src={images[skill.image]} alt={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="app__about-talent">
          {abouts.map((about) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__talent-item"
              key={about.title}
            >
              <img src={images[about.image]} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 10 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 5 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__secondarybg"
);
