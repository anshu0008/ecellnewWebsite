import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant,slideIn } from "../utils/motion";

function About() {
  return (
   <section className="w-full h-screen mx-auto">
    <div className={`${styles.paddingX}`}>
      <motion.h1 initial="hidden" animate="show" variants={textVariant(1)} className={`${styles.heroHeadText} flex justify-center mb-20`}>About Us</motion.h1>
      <div className="flex flex-row w-full gap-10">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        initial="hidden"
        animate="show"
      className="flex flex-wrap w-1/2">
        <p className={`${styles.heroSubText}`}>
              Entrepreneurship Cell(E-Cell) is a non-profit organisation run by students of VSSUT, Odisha. We create awareness among
              the students about Entrepreneurship through our various programs
              like workshops, speaker session and other such
              events. We support the upcoming Entrepreneurs by providing them necessary resources such mentors, consultancy, seed fund and networking.
            </p>
      </motion.div>
      <motion.div
        variants={slideIn("right", "spring", 0.2, 1)}
        initial="hidden"
        animate="show"
      className="flex w-1/2 h-auto">
          <img className="w-full h-auto" src={aboutLogo} alt='about' />
      </motion.div>
      </div>
    </div>
   </section>
    
  );
}

export default About;
