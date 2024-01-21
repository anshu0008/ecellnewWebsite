import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant,slideIn } from "../utils/motion";
import "../App.css";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { AiFillTwitterSquare } from "react-icons/ai";
import { teams } from "../Constants";

function Team() {
  return (
    <section className="w-full h-auto mx-auto py-20 bg-primary flex flex-col gap-10">
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        variants={textVariant(1)}
        className={`${styles.heroHeadText} flex justify-center mb-5`}
      >
        Teams
      </motion.h1>

      {/* leads  */}

      <div
        className={`${styles.paddingX} w-[100%] h-100vh flex flex-col gap-y-10`}
      >
        <motion.h3 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={styles.heroSubText}>Leads</motion.h3>
        <div className="flex flex-wrap gap-20 items-center justify-center">
          {teams.lead.map((team,index) => (
            <motion.div initial="hidden" animate="show" variants={slideIn("left","spring",0.2*index,0.5)} viewport={{once:true}} className="profile-card ">
              <div className="img">
                <img src={team.url} alt="co" />
              </div>
              <div className="caption">
                <h3>{team.name}</h3>
                <p>{team.designation}</p>
                <div className="social-links">
                  <ul>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.tlink}>
                        <AiFillTwitterSquare />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.ilink}>
                        <BsInstagram />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }} href={team.llink}>
                      <a href={team.llink}>
                        <AiOutlineLinkedin />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.flink}>
                        <BsFacebook />
                      </a>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* members */}

      <div
        className={`${styles.paddingX} w-[100%] h-100vh flex flex-col gap-10`}
      >
        <motion.h3 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={styles.heroSubText}>Members</motion.h3>
        <div className="flex flex-wrap gap-20 items-center justify-center">
          {teams.member.map((team,index) => (
            <motion.div initial="hidden" animate="show" variants={slideIn("left","spring",0.2*index,0.5)} viewport={{once:true}}  className="profile-card p">
              <div className="img">
                <img src={team.url} alt="co" />
              </div>
              <div className="caption">
                <h3>{team.name}</h3>
                <p>{team.designation}</p>
                <div className="social-links">
                  <ul>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.tlink}>
                        <AiFillTwitterSquare />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.ilink}>
                        <BsInstagram />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }} href={team.llink}>
                      <a href={team.llink}>
                        <AiOutlineLinkedin />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.flink}>
                        <BsFacebook />
                      </a>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* jmember */}

      <div
        className={`${styles.paddingX} w-[100%] h-100vh flex flex-col gap-y-10`}
      >
        <motion.h3 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={styles.heroSubText}>Junior Members</motion.h3>
        <div className="flex flex-wrap gap-20 items-center justify-center">
          {teams.Jmember.map((team,index) => (
            <motion.div initial="hidden" animate="show" variants={slideIn("left","spring",0.2*index,0.5)} viewport={{once:true}} className="profile-card ">
              <div className="img">
                <img src={team.url} alt="co" />
              </div>
              <div className="caption">
                <h3>{team.name}</h3>
                <p>{team.designation}</p>
                <div className="social-links">
                  <ul>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.tlink}>
                        <AiFillTwitterSquare />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.ilink}>
                        <BsInstagram />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }} href={team.llink}>
                      <a href={team.llink}>
                        <AiOutlineLinkedin />
                      </a>
                    </motion.li>
                    <motion.li whileHover={{ y: -10 }}>
                      <a href={team.flink}>
                        <BsFacebook />
                      </a>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    
    </section>
  );
}

export default Team;
