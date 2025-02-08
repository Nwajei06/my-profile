import React from 'react'
import './profile.css'

function Hero() {
  return (
    <div className='hero-contaainer'>
      
     <center><header><h1>EDUCATION</h1></header></center>
    <div class="hero-hero">
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