import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../App.css";
import {
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsFacebook,
} from "react-icons/bs/index";
import { ImLocation2, ImPhone } from "react-icons/im/index";
import { MdEmail } from "react-icons/md/index";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";

function Contact() {
  
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7spb7x7', 'template_6m7rcy5', form.current, '9d-muNojGecKJ-SjQ')
        .then((result) => {
            console.log(result.text);
            console.log("messg sent");
        }, (error) => {
            console.log(error.text);
        });
    };


  return (
    <div id='contact' className="body w-full h-full mx-auto">
      <div className="contactUs p-10">
        <div
          className={`${styles.heroHeadText} flex justify-center items-center`}
        >
          <motion.h2 variants={textVariant()} viewport={{once:true}} initial="hidden" whileInView="show">
            Get in Touch
          </motion.h2>
        </div>
        <div className="box">
          <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            initial="hidden"
            animate="show"
            viewport={{once:true}}
            className="contact form bg-primary"
          >
            <h3 className={styles.sectionHeadText}>Send a Message</h3>
            <form ref={form} onSubmit={sendEmail} >
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>First Name</span>
                    <input
                      type="text"
                      required  
                      placeholder="Write your name"
                      name="user_name"
                    />
                  </div>
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Last Name</span>
                    <input
                      type="text"
                      required
                      placeholder="Write your surname"
                      name="user_surname"
                    />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Email</span>
                    <input
                      type="email"
                      required
                      placeholder="Write your Email"
                      name="user_email"
                    />
                  </div>
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Mobile</span>
                    <input
                      type="tel"
                      required
                      placeholder="Write your Contact Number"
                      name="user_contact"
                    />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Message</span>
                    <textarea
                      placeholder="Write your message here.."
                      name="message"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox cursor-pointer">
                    <input type="submit" value="Send" />
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
          <motion.div variants={slideIn("right","tween",0.5,1)} initial="hidden" whileInView="show" viewport={{once:true}} className="contact info bg-primary">
            <h3 className={styles.sectionHeadText}>Contact Info</h3>
            <div className="infoBox ">
              <div>
                <span>
                  <ImLocation2 />
                </span>
                <motion.p whileHover={{y:-10}}>VSSUT Burla</motion.p>
              </div>
              <div>
                <span>
                  <MdEmail />
                </span>
                <motion.a
                    whileHover={{y:-10}}
                href="ecellvssut@gmail.com">ecellvssutgmail.com</motion.a>
              </div>
              <div>
                <span>
                  <ImPhone />
                </span>
                <motion.a
                    whileHover={{y:-10}}
                href="tel:+91 7064214870">+91 7064214870</motion.a>
              </div>
              <ul className="sci">
                <motion.li whileHover={{y:-10}}>
                  <a
                    className="fb"
                    href={"https://www.facebook.com/ecellvssut/"}
                  >
                    <BsFacebook />
                  </a>
                </motion.li>
                <motion.li whileHover={{y:-10}}>
                  <a
                    className="ln"
                    href={
                      "https://www.linkedin.com/company/ecellvssut/mycompany/"
                    }
                  >
                    <BsLinkedin />
                  </a>
                </motion.li>
                <motion.li whileHover={{y:-10}}>
                  <a
                    className="in"
                    href={"https://www.instagram.com/ecellvssut/"}
                  >
                    <BsInstagram />
                  </a>
                </motion.li>
                <motion.li whileHover={{y:-10}}>
                  <a  className="Ghub" href={"https://github.com/E-Cell-VSSUT/"}>
                    <BsGithub />
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>

          <motion.div variants={slideIn("right","tween",0.5,1)} initial="hidden" whileInView="show" viewport={{once:true}} className="contact map ">
            <iframe
            title='google'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.2621706404366!2d83.90142197514264!3d21.497448580271804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a213da4ec28af2d%3A0xb33a5cc9af8c33c7!2sVeer%20Surendra%20Sai%20University%20of%20Technology!5e0!3m2!1sen!2sin!4v1685687269422!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>

    </div>
  );
}
// }

export default Contact;
