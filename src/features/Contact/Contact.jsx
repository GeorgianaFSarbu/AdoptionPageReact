import emailjs from "emailjs-com";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useAlert } from "react-alert";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Contact.css";

export function Contact() {
  const form = useRef();
  const navigate = useNavigate();
  //const alert = useAlert()
  const sendEmail = (e) => {
    e.preventDefault();
    navigate("/");

    emailjs
      .sendForm(
        "service_5yhzx86",
        "template_k14i5os",
        form.current,
        "yrZb7aMLWIA0_bWbB"
      )
      .then(
        (result) => {
          console.log(result.text);
          // alert.show('Oh look, an alert!')
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };

  return (
    <div className="container">
      <div className="styled"></div>
      <div className="rows">
        <div className="columns">
          <h1 className="contact">Contact Us</h1>
          <p className="contact">
            Share your story with us for a chance to be featured!
          </p>
          <br />
          <br />
          <Link className="icons" to="https://www.facebook.com/">
            {" "}
            <BsFacebook /> Find us on Facebook
          </Link>{" "}
          <br />
          <Link className="icons" to="https://www.instagram.com/">
            {" "}
            <BsInstagram /> Find us on Instagram
          </Link>{" "}
          <br />
          <Link className="icons" to="https://www.twitter.com/">
            {" "}
            <BsTwitter /> Find us on Twitter
          </Link>
        </div>
        <div className="columns">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Your name:</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Enter your name"
          
            />

            <label htmlFor="email">Your email:</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
            />

            <label htmlFor="email_body">Message</label>
            <textarea
              id="email_body"
              rows="100"
              placeholder="Write something..."
              required
              style={{ height: "150px" }}
            ></textarea>

            <button type="submit" value="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
