import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { toast } from "sonner";

function Footer() {
  const [email, setEmail] = useState("");

  const addEmailHandler = async (event) => {
    event.preventDefault();
    if (email.length < 8) return toast.error("Invalid Email!");
    const res = await fetch("http://localhost:4000/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    });

    if (res.status === 201) {
      setEmail("");
      return toast.success("You Joined Us Successfully :))");
    }
  };

  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
      <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Get In Touch
          </h4>
          <p>
            <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
            123 Street, New York, USA
          </p>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
            +012 345 67890
          </p>
          <p className="m-0">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            info@example.com
          </p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Follow Us
          </h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="d-flex justify-content-start">
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className="btn btn-lg btn-outline-light btn-lg-square mr-2"
              href="#"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="btn btn-lg btn-outline-light btn-lg-square" href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Open Hours
          </h4>
          <div>
            <h6 className="text-white text-uppercase">Monday - Friday</h6>
            <p>8.00 AM - 8.00 PM</p>
            <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
            <p>2.00 PM - 8.00 PM</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
          <h4
            className="text-white text-uppercase mb-4"
            style={{ letterSpacing: "3px" }}
          >
            Newsletter
          </h4>
          <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
          <div className="w-100">
            <div className="input-group">
              <input
                type="text"
                className="form-control border-light"
                style={{ padding: "25px" }}
                placeholder="Your Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-primary font-weight-bold px-3"
                  type="submit"
                  onClick={addEmailHandler}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
      >
        <p className="mb-2 text-white">
          Copyright &copy;{" "}
          <a className="font-weight-bold" href="#">
            Domain
          </a>
          . All Rights Reserved.
        </p>
        <p className="m-0 text-white">
          Designed by{" "}
          <a className="font-weight-bold" href="https://htmlcodex.com">
            HTML Codex
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
