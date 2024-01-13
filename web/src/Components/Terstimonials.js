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
import { textVariant, slideIn, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";

function Terstimonials() {
  return (
    <div id="testimonials" className="w-full h-screen bg-primary ">
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroHeadText} flex justify-center`}
      >
        Testimonials
      </motion.h1>
      <motion.h5
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroSubText} flex justify-center mb-10`}
      >
        What Others has to Say about us.
      </motion.h5>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="swiper-container"
        autoplay={true}
      >
        <section className="section w-screen">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={slideIn("up", "spring", 0.5, 1)}
            className="swiper-container"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeIn("up", "spring", 0.5, 1)}
              className="swiper-wrapper"
            >
              {Testimonials.map((testimonial) => (
                <div className="swiper-slide">
                  <SwiperSlide>
                    <div className="testimonialBox">
                      <img src={Quote} className="quote" alt="." />
                      <div className="content flex flex-col items-center justify-center gap-8">
                        <div className="details flex flex-col  justify-center">
                          <div className="imgBox">
                            <img src={testimonial.url} alt="IIT-KGP" />
                          </div>
                          <h3 className="flex flex-col items-center justify-center gap-2">
                            {testimonial.name}
                            <br />
                            <span>{testimonial.caption}</span>
                          </h3>
                        </div>
                        <p className="testimonialPara">{testimonial.details}</p>
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
