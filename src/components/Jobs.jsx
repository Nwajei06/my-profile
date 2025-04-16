import React, { useRef } from 'react';
import './profile.css'
import Trivia from '../../public/images/triviapicture.png'
import Yeyemi from '../../public/images/yey.png'
import Typed from 'typewriter-effect'


import { motion, useInView } from 'framer-motion';
function Jobs() {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef); 
  return (
    <div  className='jobs'>
        <div   className='project-container'>
 <center><span   className='header'>PROJECTS</span></center>
 <br /><br />

<div className="project-one">
   <div className="motion">
        <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? {opacity: 1, y: 0}:{opacity: 0, y: 50}}
            transition={{ duration: 1 }}
          >
              <img id='img' src={Yeyemi} alt="" />
     
          </motion.h1>
 <center>  <span  style={{color:"white", fontSize:"15px"}}> <Typed options={{
         strings:[" Aunty Yeyemi stories  ","A platform where users can access","varieties of Nigerian novels", "without downloading or payinng for the books" ],
          autoStart:true,
          cursor: '_',
          loop:true 
          }}
          />
          </span>
          
          </center>
 </div> 
 <br /><br /><br /><br /><br /><br /><br /><br />
          </div>
   <div className="project-two">
   <div className="motion">
        <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {opacity: 0, y: 50}}
            transition={{ duration: 1}}
            
          >
       <img id='img'  src={Trivia} alt="" />
          </motion.h1>
          </div>
    <center>  <span style={{color:"white", fontSize:"15px"}}  class="full"> <Typed options={{
         strings:[" Trivia  Questions used to test knowledge  ","of those who seek them in any  category","like science, riddles, history, etc." ],
          autoStart:true,
          cursor: '_',
          loop:true 
          }}
          />
          </span>
          
          </center>
    </div>
    </div>
    </div>
    
  )
}

export default Jobs