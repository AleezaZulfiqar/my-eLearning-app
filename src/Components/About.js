import React from 'react'
import about from '../Assests/about-img.jpg'

const About = () => {
  return (
    <div>
      <div class='About-section'>
          <div class='about-img'>
               <img src={about} />
          </div>
          <div class='text'>
          <h6 class='title-about'>ABOUT US
          </h6>
          <h1>Welcome to eLEARNING</h1>
          <br/>
          <p class="text-para">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
           Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
          <br/>
          <p class='text-para'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
           Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
          sed stet lorem sit clita duo justo magna dolore erat amet</p>

          <div class='lists'>
               <div class='list-1'>
                    <ul>
                    <li><i class="fa-solid fa-arrow-right fa-sm" id='arrow'></i>Skilled Instructors</li>
                    <li><i class="fa-solid fa-arrow-right fa-sm" id='arrow'></i>International Certificate</li>
                    <li><i class="fa-solid fa-arrow-right fa-sm" id='arrow'></i>Online Classes</li>
                    </ul>
               </div>
               <div class='list-2'>
                     <ul>
                    <li><i class="fa-solid fa-arrow-right fa-sm" id='arrow'></i>Online Classes</li>
                    <li><i class="fa-solid fa-arrow-right fa-sm" id='arrow'></i>Skilled Instructors</li>
                    <li><i class="fa-solid fa-arrow-right fa-sm" id='arrow'></i>International Certificate</li>
                    </ul>
               </div>
          </div>
          <div>
               <button class='text-read'>Read more</button>
          </div>
          </div>
      </div>
    </div>
  )
}

export default About;
