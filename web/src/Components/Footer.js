import React from "react";
import "../App.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link as LinkRoll } from "react-scroll";
import { StarsCanvas } from "./canvas";

function Footer() {
  return (
    <footer id="footer" className="bg-primary">
      <div className="footer-top">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-20 items-start items-center justify-center">
            <div className="col-lg-4 col-md-6">
              <div className="footer-info">
                <h3>E-Cell VSSUT</h3>
                <p>
                  Burla, Sambalpur<br></br>
                  768018<br></br>
                  <strong>Phone:</strong>+91 7064214870<br></br>
                  <strong>Email:</strong>pratikashpanda@gmail.com<br></br>
                </p>
                <div className="social-links mt-3 flex gap-3">
                  <motion.a
                    whileHover={{ y: -10 }}
                    href="https://twitter.com/ecellvssut?lang=en"
                    className="twitter flex items-center justify-center"
                  >
                    <AiFillTwitterSquare></AiFillTwitterSquare>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -10 }}
                    href="https://www.facebook.com/ecellvssut/"
                    className="facebook flex items-center justify-center"
                  >
                    <BsFacebook></BsFacebook>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -10 }}
                    href="https://www.instagram.com/ecellvssut/?hl=en"
                    className="instagram flex items-center justify-center"
                  >
                    <BsInstagram></BsInstagram>
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -10 }}
                    href="https://in.linkedin.com/company/ecellvssut"
                    className="linkedin flex items-center justify-center"
                  >
                    <AiOutlineLinkedin></AiOutlineLinkedin>
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-10">
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#home">
                      Home
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#about">
                      About us
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#gallery">
                      Gallery
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#testimonials">
                      Testimonials
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#ourstar">
                      Startups
                    </motion.a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Events</h4>
                <ul>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      TEDx
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      InnoBuzz
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      E-Summit
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      IPL Auction
                    </motion.a>
                  </li>
                  <li className="hover:text-red-600">
                    <BsArrowRightShort></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      Leadership Summit
                    </motion.a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          &copy; Copyright{" "}
          <strong>
            <span>Ecell VSSUT</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits"></div>
      </div>
      <StarsCanvas/>
    </footer>
  );
}

export default Footer;
