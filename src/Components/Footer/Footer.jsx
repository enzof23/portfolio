import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../layouts";
import "./Footer.scss";

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        setLoading(false);
        console.log(result.text);
        setIsFormSubmitted(true);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className="footer__content">
        {!isFormSubmitted ? (
          <form
            className="footer__form app__flex"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className="head-text">
              Contact <span style={{ fontWeight: 800 }}>me</span>
            </h2>
            <input
              className="p-text"
              type="text"
              placeholder="Your Name*"
              name="name"
              required
            />

            <input
              className="p-text"
              type="email"
              placeholder="Your Email*"
              name="email"
              required
            />
            <textarea
              required
              className="p-text"
              placeholder="Your Message*"
              name="message"
            />

            <button type="submit" className="p-text" disabled={loading}>
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </form>
        ) : (
          <div style={{ alignSelf: "center" }}>
            <h3 className="head-text">
              Thank you for getting in <span>touch!</span>
            </h3>
          </div>
        )}

        <div className="footer__links">
          <h2 className="head-text">
            Useful <span style={{ fontWeight: 800 }}>links</span>
          </h2>
          <a href="mailto: enzo.filippo23@gmail.com" className="footer__link">
            <img src={images.email} alt="email" />
            Send me an email !
          </a>
          <a
            href="https://github.com/enzof23"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <img src={images.github} alt="email" />
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/enzo-filippo-31559bab/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            <img src={images.linkedin} alt="email" />
            LinkedIn
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "footer__container"),
  "contact",
  "background__secondary"
);
