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
  const [contactValue, setContactValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showError, setShowError] = useState(false);

  const form = useRef();

  const handleChange = (value, type) => {
    if (showError) {
      setShowError(false);
    }

    switch (type) {
      case "name":
        setContactValue((prevValue) => ({ ...prevValue, name: value }));
        break;
      case "email":
        setContactValue((prevValue) => ({ ...prevValue, email: value }));
        break;
      case "message":
        setContactValue((prevValue) => ({ ...prevValue, message: value }));
        break;
      default:
        console.log("naught");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, message } = contactValue;

    console.log(serviceID, templateID, publicKey);

    if (name && email && message) {
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
    } else {
      setShowError(true);
    }
  };

  return !isFormSubmitted ? (
    <>
      <div className="footer__content">
        <form className="footer__form app__flex" ref={form}>
          <h2 className="head-text">
            Contact <span style={{ fontWeight: 800 }}>me</span>
          </h2>
          <input
            className={`p-text ${
              showError && !contactValue.name ? "border-error" : ""
            }`}
            type="text"
            placeholder="Your Name*"
            name="name"
            onChange={(e) => handleChange(e.currentTarget.value, "name")}
          />

          <input
            className={`p-text ${
              showError && !contactValue.email ? "border-error" : ""
            }`}
            type="email"
            placeholder="Your Email*"
            name="email"
            onChange={(e) => handleChange(e.currentTarget.value, "email")}
          />
          <textarea
            className={`p-text ${
              showError && !contactValue.message ? "border-error" : ""
            }`}
            placeholder="Your Message*"
            name="message"
            onChange={(e) => handleChange(e.currentTarget.value, "message")}
          />
          {showError ? (
            <p className="footer__error">Please fill all required input</p>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="p-text"
            onClick={(e) => sendEmail(e)}
            disabled={loading}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>

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
  ) : (
    <div>
      <h3 className="head-text">Thank you for getting in touch!</h3>
    </div>
  );
};

export default AppWrap(
  MotionWrap(Footer, "footer__container"),
  "contact",
  "background__secondary"
);
