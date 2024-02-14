import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant,slideIn } from "../utils/motion";
import { StarsCanvas } from "./canvas";
function About() {

  return (
   <section id="about" className="w-full h-fit mx-auto lg:h-screen">
    <div className={`${styles.paddingX}`}>
      <motion.h1 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={`${styles.heroHeadText} flex justify-center mb-20`}>About Us</motion.h1>
      <div className="flex w-full flex-col gap-10  lg:flex-row ">
      <motion.div
        variants={slideIn("right", "spring",0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
      className=" sm:w-3/4 flex   h-auto ">
          <img className="w-11/12 h-auto " src={aboutLogo} alt='about' />
      </motion.div>
      <motion.div
        variants={slideIn("left", "spring", 1.2, 1)}
        initial="hidden"
        animate="show"
        viewport={{once:true}}
      className="flex flex-wrap justify-center items-center lg:w-7/12 font-mono font-bold">
        <p className= {`${styles.sectionSubText}  tracking-widest leading-9 `}>
              Entrepreneurship Cell(E-Cell) is a non-profit organisation run by students of VSSUT, Odisha. We create awareness among
              the students about Entrepreneurship through our various programs
              like workshops, speaker session and other such
              events. We support the upcoming Entrepreneurs by providing them necessary resources such mentors, consultancy, seed fund and networking.
            </p>
      </motion.div>
      
      </div>
    </div>
   </section>
    
  );
}

export default About;
