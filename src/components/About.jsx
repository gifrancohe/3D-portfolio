import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title , icon, description }) => {
  return(
    <Tilt
      className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div 
            options={{max: 45, scale: 1, speed: 450}}
            className="bg-terciary rounded-[20px] py-5 px-12 min-h-[280px] flex justifiy-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-[20px] text-white font-bold text-center">{title}</h3>
          </div>
        </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3x1 leading-[30px]"
      >
        I'm software developer with experience in Javascript, PHP, Java, and experience with
        technologies like React, Yii, JQuery, Magento, MySQL, MongoDB, NodeJS, ExpressJS,
        and more.
        I'm a quick learner and collaborate closely with clients to create efficient, scalable, and
        user-friendly solutions that solve real-word problems. Let's work together to bring your ideas to 
        world!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {
          services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))
        }
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");