import React from 'react'
import '../App.css'
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer id="footer" className=' bg-primary'>
    <div className="footer-top">
      <div className="container">
        <div className="row flex gap-20 items-start">

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
                <motion.a whileHover={{y:-10}} href="#" className="twitter flex items-center justify-center"><AiFillTwitterSquare></AiFillTwitterSquare></motion.a>
                <motion.a whileHover={{y:-10}} href="#" className="facebook flex items-center justify-center"><BsFacebook></BsFacebook></motion.a>
                <motion.a whileHover={{y:-10}} href="#" className="instagram flex items-center justify-center"><BsInstagram></BsInstagram></motion.a>
                <motion.a whileHover={{y:-10}} href="#" className="linkedin flex items-center justify-center"><AiOutlineLinkedin></AiOutlineLinkedin></motion.a>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#hero">Home</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#about">About us</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#potfolio">Gallery</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#testimonials">Testimonials</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#startup">Startups</motion.a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Events</h4>
            <ul >
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#">TEDx</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#">InnoBuzz</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#">E-Summit</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#">IPL Auction</motion.a></li>
              <li className='hover:text-red-600'><BsArrowRightShort></BsArrowRightShort> <motion.a whileHover={{y:-10}} href="#">Leadership Summit</motion.a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Ecell VSSUT</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      </div>
    </div>


  </footer>
  )
}

export default Footer
