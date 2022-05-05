import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
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

  return (
    <>
      <h2 className="head-text">Contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto: enzo.filippo23@gmail.com" className="p-text">
            Send me an email !
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form className="app__footer-form app__flex" ref={form}>
          <div className="app__flex">
            <input
              className={`p-text ${
                showError && !contactValue.name ? "border-error" : ""
              }`}
              type="text"
              placeholder="Your Name*"
              name="name"
              onChange={(e) => handleChange(e.currentTarget.value, "name")}
            />
          </div>
          <div className="app__flex">
            <input
              className={`p-text ${
                showError && !contactValue.email ? "border-error" : ""
              }`}
              type="email"
              placeholder="Your Email*"
              name="email"
              onChange={(e) => handleChange(e.currentTarget.value, "email")}
            />
          </div>
          <div>
            <textarea
              className={`p-text ${
                showError && !contactValue.message ? "border-error" : ""
              }`}
              placeholder="Your Message*"
              name="message"
              onChange={(e) => handleChange(e.currentTarget.value, "message")}
            />
          </div>
          {showError ? (
            <p className="app__footer-error">Please fill all required input</p>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="p-text"
            onClick={(e) => sendEmail(e)}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
