import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { StarsCanvas } from "./canvas";
import { styles } from "../styles";
import { events } from "../Constants";
import { textVariant } from "../utils/motion";

const EventCard = ({ event }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={event.date}
      iconStyle={{ background: event.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={event.icon}
            alt="event-image"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h3 className="text-white text-[42px]">{event.title}</h3>
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {event.points.map((point,index)=>(
            <li
            key={`event-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
          </ul>
          <div className="h-auto w-auto px-7 py-3 mt-3 bg-red-100 text-black-200 flex justify-center items-center rounded-xl cursor-pointer hover:bg-red-500">
            <a href={event.site} alt="site">View Site</a></div>
      </div>
    </VerticalTimelineElement>
  );
};

const Event = () => {
  return (
    <>
      <div id="event" className={`${styles.paddingX}`} >
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroHeadText} flex justify-center`}
      >
        Events
      </motion.h1>
      <motion.h5
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroSubText} flex justify-center mb-10`}
      >
        The milestones achieved by our club 
      </motion.h5>
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </VerticalTimeline>
      </div>
      {/* <StarsCanvas/> */}
    </>
  );
};

export default Event;
