import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import {FaXTwitter} from 'react-icons/fa6';
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from "framer-motion";

import { Link as LinkRoll } from "react-scroll";
import { StarsCanvas } from "./canvas";



const Footer=()=>{
  return(
    <div className="footer ">
      <div className="sb_footer section_padding  bg-slate-900">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div 1stPart">
            <h4><b><span>E-Cell</span> VSSUT</b></h4>
            <a href="/">
              <p><b>The Entrepreneurship Cell.</b></p>
              
            </a>
            <a href="/">
              <p>Burla,Sambulpur</p>
              <p>768018</p>
            </a>
            <a href="/">
              <p><b>Phone</b>:7064214870</p>
            </a>
            <a href="/">
              <p><b>Email:</b>pratikashpanda@gmail.com</p>
            </a>
            <div className="social-iicons mt-4 gap-3 flex justify-center items-center  mr-40">
              {/* <p><img src={X} alt=""/></p> */}
              <motion.a
                    whileHover={{ y: -5 }}
                    href="https://twitter.com/ecellvssut?lang=en"
                    className="twitter flex items-center justify-center "
                  >
                    
                    <FaXTwitter style={{ fontSize: '2em' }}e></FaXTwitter>
              </motion.a>
              <motion.a
                    whileHover={{ y: -5 }}
                    href="https://www.facebook.com/ecellvssut/"
                    className="facebook flex items-center justify-center"
                  >
                    <BsFacebook style={{ fontSize: '2em' }}></BsFacebook>
              </motion.a>
              <motion.a
                    whileHover={{ y: -5 }}
                    href="https://www.instagram.com/ecellvssut/?hl=en"
                    className="instagram flex items-center justify-center"
                  >
                    <BsInstagram style={{ fontSize: '2em' }}></BsInstagram>
              </motion.a>
              <motion.a
                    whileHover={{ y: -5 }}
                    href="https://in.linkedin.com/company/ecellvssut"
                    className="linkedin flex items-center justify-center"
                  >
                    <AiOutlineLinkedin style={{ fontSize: '2em' }}></AiOutlineLinkedin>
              </motion.a>

            </div>
          </div>
          <div className="sb_footer-links_div">
            <h4 className="underline">Useful Links</h4>
            <ul>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#home">
                      Home
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#about">
                      About us
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#gallery">
                      Gallery
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#testimonials">
                      Testimonials
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#ourstar">
                      Startups
                    </motion.a>
                  </li>
                </ul>
          </div>
          <div className="sb_footer-links_div">
            <h4 className="underline">Events</h4>
            <ul>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      TEDx
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      InnoBuzz
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      E-Summit
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      IPL Auction
                    </motion.a>
                  </li>
                  <li className="footer-links">
                    <BsArrowRightShort style={{ display: 'inline-block', marginRight: '5px' }}></BsArrowRightShort>{" "}
                    <motion.a whileHover={{ y: -10 }} href="#">
                      Leadership Summit
                    </motion.a>
                  </li>
                </ul>
          </div>
          
          
        </div>

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              @{new Date().getFullYear()} ECELL VSSUT. All rights reserved.
            </p>
          </div>
          </div>

      </div>

      <StarsCanvas/>
   
 

    </div>
  )

}

export default Footer;