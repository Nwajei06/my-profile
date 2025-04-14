import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './profile.css'
function Hero() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef); 
  return (
    <div className='hero-contaainer'>
      
      <div className="motion">
      <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {opacity: 0, y: 50}}
          transition={{ duration: 1 }}
        >
          EDUCATION
        </motion.h1>
        </div>
    <div class="hero-hero">
    <motion.h1
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {opacity: 0, y: 50}}
          transition={{ duration: 1 }}
        >
           </motion.h1>
       
      <div class="second-first-flex"> 
      <div  id='hov' className="second-hero"><b>High school  :</b> I completed my high school at a private school  in Lagos/Nigeria and I  have my first school livinng certificate</div>
      <br /><br /><br /><br /><br />
      <br /><br />
      <div  id='hov' className="first-hero"><b>Bachelors :</b>
       I'm currently pursuing a bachelors  degree  in computer  science, but also  working as a freelancer for some oragnisations
      
      </div>
      </div>
      <div  class="last-third-flex">
      <div className="third-hero"></div>
      <div   id='hov' className="last-hero">  <b>Codding school </b><br />
      I ran a full year course  on front and back end programming</div> 
      </div>
    </div>
    </div>
  )
}

export default Hero