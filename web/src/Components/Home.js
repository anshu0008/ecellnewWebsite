import React from "react";
import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";

function Home() {
  return (
    <section id="home" className="relative w-full h-screen mx-auto my-20">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-col items-start gap-5 my-19`}
      >
        <motion.div variants={slideIn("up", "spring", 0.2, 1)}
        initial="hidden"
        animate="show"
        >
          <img className="h-20" src={logo} alt="" />
          <motion.h1 className={`${styles.heroHeadText}text-white-100`}>
            ENTREPRENEURSHIP CELL | VSSUT
          </motion.h1>
          <h2 className={`${styles.heroSubText} mt-2  text-white-100`}>
            <i>A Techno-Managment Club</i>
          </h2>
        </motion.div>
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          initial="hidden"
         animate="show"
          className="p-2 hover:bg-red-500 border-none"
          whileHover={{transition:{delay:1}}}
          style={{ border: "2px solid white" }}
        >
          <a className={`${styles.sectionSubText}text-white-100`} href="#about">
            Explore
          </a>
        </motion.div>
      </div>
      <StarsCanvas />
    </section>
  );
}

export default Home;
