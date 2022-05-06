import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import AppWrap from "../../wrapper/AppWrap";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="badge-cmp app__flex"
          >
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Enzo</h1>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="tag-cmp app__flex"
          >
            <p className="p-text">Web Developer</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.8, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.javascript, images.react, images.redux].map(
          (circle, index) => (
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="circle-cmp app__flex"
              key={`circle-${index}`}
            >
              <img src={circle} alt={circle}></img>
            </motion.div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");
