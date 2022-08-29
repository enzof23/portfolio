import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";

import AppWrap from "../../layouts/AppWrap";

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
  const techImages = [images.javascript, images.react, images.materialui];
  return (
    <div className="header__container">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="header__info"
      >
        <div className="header__badge">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="badge-cmp app__flex"
          >
            <span>👋</span>
            <div style={{ marginLeft: 15 }}>
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
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, delayChildren: 0.5 }}
        className="header__image"
      >
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
          src={images.profile}
          alt="image"
        />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="overlay_circle"
          src={images.circle}
          alt="profile_circle"
        />
      </motion.div>

      <motion.div
        whileInView={scaleVariants.whileInView}
        className="header__circles"
      >
        {techImages.map((image, index) => (
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="circle-cmp app__flex"
            key={`circle-${index}`}
          >
            <img src={image} alt={`tech ${index}`}></img>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home", "background__primary");
