import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { startups } from "../Constants";


function Startups() {
  return (
    <section id="ourstar" className={`${styles.paddingX} shadow`}>
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroHeadText} flex justify-center`}
      >
        Startups 
      </motion.h1>
      <motion.h5
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroSubText} flex justify-center mb-10`}
      >
        The Pride of our Society
      </motion.h5>
      <div clasName="startour py-5 px-2">
        <div className="making" data-aos="fade-up">
          {startups.map((startup,index) => (
            <motion.div
              variants={fadeIn("right", "spring", 0.1*index, 0.75)}
              initial='hidden'
              whileInView='show'
              viewport={{once:true}}
              className="card"
              data-aos="fade-up"
            >
              <motion.div 
              initial='hidden'
              whileInView='show'
              viewport={{once:true}}
              variants={fadeIn("right", "spring", 0.3*index, 0.75)} className="circle"></motion.div>
              <div className="content">
                <a className="py-3" href={startup.url}>
                  <b>{startup.name}</b>
                </a>
                <p className="py-3">{startup.about}</p>
              </div>
              <img src={startup.url} alt="homevery" style={{ width: "80px" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Startups;
