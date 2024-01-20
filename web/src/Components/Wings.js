import React from "react";
import Tilt from "react-parallax-tilt";
import "../App.css";  
import { styles } from "../styles";
import { textVariant,slideIn } from "../utils/motion";
import { motion } from 'framer-motion'
import { wings } from "../Constants"


const Wings = () => {
  return (
    <div id="wings" className={`${styles.paddingX} tiltComponent`}>
      <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()}>
     <h2 className="font-black text-white lg:text-[50px] sm:text-[40px] xs:text-[30px] text-[20px] lg:leading-[98px] mt-2 flex justify-center" >Wings</h2>
     </motion.div>
      <div className="container">
        
        { wings.map((wing,index)=>(

        
        <Tilt
          glareEnable={true}
          tiltMaxAngleX={40}
          tiltMaxAngleY={40}
          perspective={1000}
          glareColor={"#04619F"}
        >
          <motion.div initial="hidden" animate="show" viewport={{once:true}} variants={slideIn("left","spring",index,0.5)} className="box">
            <div className="imgBx">
              <img className="img object-contain" src={wing.url} alt="INTERNO" />
            </div>
            <div className="contentBx">
              <h2 className="header">{wing.title}</h2>
              <p>
                {wing.about}
              </p>
            </div>
          </motion.div>
        </Tilt>
      ))   
      }


      </div>
    </div>
  );
};

export default Wings;
