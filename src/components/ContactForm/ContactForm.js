import React, { useState } from "react";
import axios from "axios";

export default function ContactForm(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleClick = e => {
    e.preventDefault();

    if (e.target.id === "firstName") {
      setFirstName(e.target.value);
    } else if (e.target.id === "lastName") {
      setLastName(e.target.value);
    } else if (e.target.id === "phone") {
      setPhone(e.target.value);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "subject") {
      setSubject(e.target.value);
    } else {
      setMessage(e.target.value);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    alert("Form Submitted! I will get back to you shortly.");
    window.location = "/";

    const dataToSubmit = {
      firstName,
      lastName,
      phone,
      email,
      subject,
      message
    };

    try {
      const contactForm = await axios.post("/api/sendMail", dataToSubmit);
    } catch (e) {
      console.log(`My error ${e}`);
    }
  }

  return (
    <div id="contact" className="contact__container">
      <div className="contact__form--card">
        <h1 className="contact__title">Contact me if you have any questions</h1>

        <form onSubmit={handleSubmit}>
          <div className="contact__form--name">
            <div className="contact__form first--name">
              <label>
                <input
                  id="firstName"
                  required
                  value={firstName}
                  onChange={handleClick}
                  placeholder="First Name"
                />
              </label>
            </div>
            <div className="contact__form last--name">
              <label>
                <input
                  id="lastName"
                  required
                  value={lastName}
                  onChange={handleClick}
                  placeholder="Last Name"
                />
              </label>
            </div>
          </div>

          <div className="contact__form--info">
            <div className="contact__form email">
              <label>
                <input
                  id="email"
                  required
                  value={email}
                  onChange={handleClick}
                  placeholder="Email"
                />
              </label>
            </div>
            <div className="contact__form phone">
              <label>
                <input
                  id="phone"
                  value={phone}
                  onChange={handleClick}
                  placeholder="Phone Number"
                />
              </label>
            </div>
          </div>

          <div className="contact__subject--box">
            <label>
              <input
                id="subject"
                placeholder="Subject"
                required
                value={subject}
                onChange={handleClick}
                className="contact__subject"
              />
            </label>
          </div>

          <div className="contact__message--box">
            <label>
              <textarea
                id="message"
                className="contact__message"
                required
                rows="5"
                value={message}
                onChange={handleClick}
                placeholder="Message"
                className="contact__textarea"
              />
            </label>
          </div>

          <div className="form__bottom">
            <p>
              <button className="connectInTouch btn--send" type="submit">
                Send
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
