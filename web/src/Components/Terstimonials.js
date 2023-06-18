import React from "react";
import { Quote } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";
import "../App.css";
import { Testimonials } from "../Constants";
import { styles } from "../styles";
import { textVariant,slideIn, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

function Terstimonials() {
  return (
    <div id="testimonials" className="w-full h-screen bg-primary ">
      <motion.h1 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={`${styles.heroHeadText} flex justify-center`}>Testimonials</motion.h1>
      <motion.h5 initial="hidden" whileInView="show" viewport={{once:true}} variants={textVariant()} className={`${styles.heroSubText} flex justify-center`}>What Others has to Say about us.</motion.h5>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="swiper-container"
        autoplay={true}
      >
        <section className="section my--10">
          <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={slideIn("up","spring",0.5,1)} class="swiper-container">
            <motion.div initial="hidden" whileInView="show" viewport={{once:true}} variants={fadeIn("up","spring",0.5,1)} class="swiper-wrapper">
              {Testimonials.map((testimonial) => (
                <div class="swiper-slide">
                  <SwiperSlide>
                    <div class="testimonialBox">
                      <img src={Quote} class="quote" alt="." />
                      <div class="content flex flex-col items-center justify-center gap-10">
                        <div class="details flex flex-col  justify-center gap-5">
                          <div class="imgBox">
                            <img src={testimonial.url} alt="IIT-KGP" />
                          </div>
                          <h3 className="flex flex-col items-center justify-center gap-2">
                            {testimonial.name}
                            <br />
                            <span>{testimonial.caption}</span>
                          </h3>
                        </div>
                        <p>{testimonial.details}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>
      </Swiper>
    </div>
  );
}

export default Terstimonials;
