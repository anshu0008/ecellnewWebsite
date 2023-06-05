import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../../Constants";
import { Link as LinkRoll } from "react-scroll";
import { Link } from "react-router-dom";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
    typeof: "spring",
  },
};

function Hamburger() {
  const [active, setActive] = useState("");
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      {isActive && (
        <div>
          <motion.svg
          className='z-10'
            variants={svgVariants}
            initial="hidden"
            animate="visible"
            height="30"
            viewBox="0 0 18 15"
            onClick={() => setIsActive(!isActive)}
          >
            <motion.path
              initial={{ rotate: 0 }}
              animate={{ rotate: -45, translateY: 6 }}
              transition={{ duration: 1 }}
              fill="#ffffff"
              d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
            />
            <motion.path
              initial={{ rotate: 0 }}
              animate={{ rotate: 45 }}
              transition={{ duration: 1 }}
              fill="#ffffff"
              d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
            />
            <motion.path
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              fill="#ffffff"
              d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
            />
          </motion.svg>

          <motion.div
            initial={{ height: 0 }}
            animate={{
              height: "100vh",
              width: "100vw",
            }}
            transition={{ duration: 1, type: "spring" }}
          
          >
            <motion.ul className="gap-3 flex flex-col justify-center items-center ">
            {navLinks.map((link) => (
              <motion.li
              initial={{opacity:0,y:-40}}
              animate={{opacity:1,y:0}}
              transition={{delay:0.5}}
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
               
              >
               {link.title==="Team" ? <Link to="/team" onClick={() => {
                  setActive(link.title)
                  setIsActive(false);
                }}>{link.title}</Link>  : <LinkRoll to={link.id} spy={true} smooth={true} offset={-100} duration={500}  onClick={() => {
                  setActive(link.title)
                  setIsActive(false);
                }}><Link to="/">{link.title}</Link></LinkRoll>}
              </motion.li>
            ))}
            </motion.ul>
          </motion.div>
        </div>
      )}




      {!isActive && (
        <motion.svg
        className='z-10'
          variants={svgVariants}
          initial="hidden"
          animate="visible"
          height="30"
          viewBox="0 0 18 15"
          onClick={() => setIsActive(!isActive)}
        >
          <motion.path
            initial={{ rotate: -45 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            fill="#ffffff"
            d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z"
          />
          <motion.path
            initial={{ rotate: 45 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 1 }}
            fill="#ffffff"
            d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z"
          />
          <motion.path
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            fill="#ffffff"
            d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z"
          />
        </motion.svg>
      )}
    </div>
  );
}

export default Hamburger;
