import { motion } from "framer-motion";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../layouts";
import { skills, abouts } from "../../constants/data/about";

import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about__content">
        <h2 className="about__header head-text">
          About <span>Me</span>
        </h2>
        <div className="about__profile">
          <div className="about__intro">
            <h3>Who Am I ?</h3>
            <p className="p-text">
              Self taught web developer from France, my interest in building web
              pages dates back to 2016 when I was building e-commerce websites
              with Shopify and Wix for personal projects. Fast forward to today,
              I taught myself more advanced development technologies such as
              React to build better pages and create better users experience.{" "}
              <br /> <br /> Constant seeker of new knowledge and information, I
              find working as a developer extremely stimulating. Hence why I
              decided to make the move to become a full-time developer and work
              with a company to learn more and become a better developer. <br />
              <br />I am currently looking for a new opportunity so if you're in
              need of someone qualified and motivated...
            </p>
            <a href="#contact">Let's work together !</a>
          </div>
          <div>
            <h3 className="h3-subtitle">
              Here are a few <span>technologies</span> I've been working with
              recently:
            </h3>
            <div className="about__skills">
              {skills?.map((skill) => (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, type: "tween" }}
                  className="about__skill app__flex"
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
        <div className="about__talent">
          {abouts.map((about) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="about__talent-item"
              key={about.title}
            >
              <img src={images[about.image]} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 8 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 3 }}>
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
  MotionWrap(About, "about__container"),
  "about",
  "background__primary"
);
