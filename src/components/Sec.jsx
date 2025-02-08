import React from 'react'
import './profile.css'
import PFP from "../../public/images/mypfp.jpg"

function sec() {
  return (
    <div class="section">
  <div class="sect">
    <div  class="section-container" ><img className='img'  src={PFP} alt="" /></div>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<div  class="words">
      <span class="first-sec-text">Hi, its <span class="hero-text"> Joshua</span>  <br />
      
    <span class="iam"  >  I am a </span>   <span class="full">Fullstack developer</span> 
      </span> 
      <div className="content-in-hero">
        I am an  experienced programmer specialized in crafting seamless <b>APIs</b>, dedicated  to delivering efficient, 
        scalable solutions. Driven by passion for technology, continious  innovation   and  always exploring the future,
         one line of  code at a time. I am a developer that  is always on the lookout  for   projects that I  would be able to use the skill that I am 
         good at to positively  affect  such project. I am an AI enthusiast that will  like to work on sevral project involving AI with people that
         better than   me in the  field.   <br /> I am your <b>API daddy</b> and  Full stack developer

      </div>
      
      <div className="font-awsomme-container">
    <div id='hov'  class="linkedin"><a href="https:/www.linkedin.com/in/joshua-nwajei-479262344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=andriod_app">  <i class="fab fa-linkedin" ></i> </a></div>
    <div id='hov'  class="git-hub"><a href="https://github.com/Nwajei06"> <i class="fab fa-github"></i></a></div>
    <div id='hov' class="gmail"><a href="mailto:nwajeijoshua55gmail.com">  <i class="fab fa-google "></i></a></div>
    <div id='hov' class="twitter"> <a href="https://x.com/Joshua590015513?t=dSHWvv4I1BTIUIEEW1jVDQ&S=09"> <i class="fab fa-twitter" ></i></a>   </div>

    </div>
      </div>
    </div>

  </div>
  
  )
}

export default sec