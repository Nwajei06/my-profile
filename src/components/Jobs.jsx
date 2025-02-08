import React from 'react'
import './profile.css'
import CSC from '../../public/images/cscpdf.png'
import Trivia from '../../public/images/triviapicture.png'
 
function Jobs() {
  return (
    <div  className='jobs'>
        <div   className='project-container'>
 <center><span   className='header'>PROJECTS</span></center>
 <br /><br />

<div className="project-one">
 <center><img id='img' src={CSC} alt="" /></center> <br />
 <center>  <span className='span' >Class  2023 200lv online CSC pdf reader for different courses .Nnamdi Azikiwe University Nigeria/Anambra/Awka</span></center> </div>
   <br /><br /><br /><br /><br /><br /><br /><br />
   <div className="project-two">
    <center><img id='img'  src={Trivia} alt="" /></center> <br />
    <center> <span  className='span'> Tivia  Questions for any grade to test knowledge of those who seek them in any category, like science,  riddles, history etc </span></center></div>
    </div>
    </div>
  )
}

export default Jobs