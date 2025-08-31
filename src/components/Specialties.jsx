import React from 'react'   
import './profile.css'
import react from "../../public/images/reactimg.jpg"
import laravel from "../../public/images/node.jpeg"
import jscript from "../../public/images/jscript.jpeg"
// import htmlimg from "../../public/images/htmlimg.jpeg"
import cssimg from "../../public/images/cscimg.jpeg"




function Specialties() {
  return (
    <div  id='yes' className="specialties-container">
        
        <div className="prof-one-two">
            <div id='prof' className="one"> <img  className='reactim' src={react} alt="" /> <br /> I'm a passionate react developer specialized in building dynamic  and user-friendly  web applications</div>
            <div id='prof' className="two">  <img  className='attribute' src={laravel} alt="" />  <br />I'm a skilled Node developer specialized in building, secure, and  high performance web application</div>
      
        {/* <div  className='tryout'> */}
            <div id='prof'className="three"> <img  className='reactimg' src={jscript} alt="" />  <br />I'm also a JavaScript developer skilled in building dynamic, efficient, and interactive web applications
            </div>
            <div id='prof'className="four"> <div id='reactimg' className="reactimg"> <img  className='htmcss' src={cssimg} alt="" />  <br /></div>
            I also  use html and  css and always about creatinng, responsive,
             visually appealing, and user friendly  web design.</div>
            {/* </div> */}
         </div>
         </div>
    
  )
}

export default Specialties