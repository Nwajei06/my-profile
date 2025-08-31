import React, { useRef } from 'react';
import './profile.css';
import Trivia from '../../public/images/triviapicture.png';
import eco from '../../public/images/eco.png';
import Yeyemi from '../../public/images/yey.png';
import Typed from 'typewriter-effect';
import { motion, useInView } from 'framer-motion';

const ProjectScroller = ({ images }) => (
  <div
    style={{
      display: 'flex',
      overflowX: 'auto',
      overflowY: 'hidden',
      gap: '20px',
      paddingBottom: '10px',
      scrollBehavior: 'smooth',
      scrollSnapType: 'x mandatory',
      WebkitOverflowScrolling: 'touch'
    }}
  >
    {images.map((src, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          flex: '0 0 auto',
          width: '250px',
          scrollSnapAlign: 'start'
        }}
      >
        <img
          src={src}
          alt={`project-${i}`}
          id="img"
          loading="lazy"
          style={{
            width: '100%',
            maxWidth: '250px',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '12px'
          }}
        />
      </motion.div>
    ))}
  </div>
);

function Jobs() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef);

  return (
    <div className='jobs' style={{ position: 'relative', overflow: 'hidden' }}>
      <div className='animated-background'></div>

      <div className='project-container'>
        <center>
          <span className='header'>PROJECTS</span>
        </center>
        <br /><br />

        {/* PROJECT ONE */}
        <div className="project-one" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px 0' }}>
          <ProjectScroller images={[Yeyemi]} />
          <div>
            <span style={{ color: "white", fontSize: "15px" }}>
              <Typed
                options={{
                  strings: [
                    " Aunty Yeyemi stories  ",
                    "A platform where users can access",
                    "varieties of Nigerian novels",
                    "without downloading or payinng for the books",
                  ],
                  autoStart: true,
                  cursor: '_',
                  loop: true,
                }}
              />
            </span>
          </div>
        </div>

        {/* PROJECT TWO */}
        <div className="project-one" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px 0' }}>
          <ProjectScroller images={[eco]} />
          <div>
            <span style={{ color: "white", fontSize: "15px" }}>
              <Typed
                options={{
                  strings: [
                    " Eco Market App  ",
                    "Sustainable shopping experience",
                    "Eco-friendly product listings",
                    "and user-focused design."
                  ],
                  autoStart: true,
                  cursor: '_',
                  loop: true
                }}
              />
            </span>
          </div>
        </div>
<br /><br /><br /><br /><br />
        {/* PROJECT THREE */}
        <div className="project-two" style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '30px 0' }}>
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
          >
            <img
              id='img'
              src={Trivia}
              alt="Trivia Project"
              loading="lazy"
              style={{
                width: '100%',
                maxWidth: '250px',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: '12px'
              }}
            />
          </motion.div>
          <div>
            <span style={{ color: "white", fontSize: "15px" }}>
              <Typed
                options={{
                  strings: [
                    " Trivia  Questions used to test knowledge  ",
                    "of those who seek them in any  category",
                    "like science, riddles, history, etc."
                  ],
                  autoStart: true,
                  cursor: '_',
                  loop: true
                }}
                
              />

              
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
