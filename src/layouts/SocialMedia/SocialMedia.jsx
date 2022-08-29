import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="social__container">
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <a href="https://github.com/enzof23" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <a
          href="https://www.linkedin.com/in/enzo-filippo-31559bab/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </motion.div>
    </div>
  );
};

export default SocialMedia;
