import React from 'react'
import image1 from '../Assests/image1.jpg'
import image2 from '../Assests/image2.jpg'
import image3 from '../Assests/image3.jpg'
const Footer = () => {
  return (
    <div>
    <div className='Footer'>
    <div className='main-footer'>
      
          <div className='row'>
               <div className='quick'>
               <h3>Quick Link</h3>
               </div>
               <div className='links'>
                    <ul>
                         <li><i class="fa-solid fa-chevron-right fa-sm" id='angle'></i>About Us</li>
                         <li><i class="fa-solid fa-chevron-right fa-sm" id='angle'></i>Contact us</li>
                         <li><i class="fa-solid fa-chevron-right fa-sm" id='angle'></i>Privacy Policy</li>
                         <li><i class="fa-solid fa-chevron-right fa-sm" id='angle'></i>Terms & Conditions</li>
                         <li><i class="fa-solid fa-chevron-right fa-sm" id='angle'></i>FAQ's & Help</li>
                    </ul>
               </div>
          </div>
          <div className='row'>
                <div className='quick'>
               <h3>Contact</h3>
               </div>
               <div className='Links'>
                    <ul>
                         <li><i class="fa-solid fa-location-dot fa-sm" id='loc'></i>123 Street, New York</li>
                         <li><i class="fa-solid fa-phone fa-sm" id='loc'></i>+012 345 67890</li>
                         <li><i class="fa-solid fa-envelope fa-sm" id='loc'></i>info@example.com</li>
                        
                    </ul>
                       
               </div>
                       <div className='social-icons'>
                 <div><i class="fa-brands fa-facebook-f fa-lg" id='fB'></i></div>
                 <div><i class="fa-brands fa-twitter fa-lg" id='fB'></i></div>
                 <div><i class="fa-brands fa-youtube fa-sm" id='fB'></i></div>
                 <div><i class="fa-brands fa-linkedin fa-sm" id='fB'></i></div>
               </div>
               </div>
               
          <div className='row'>
               <div className='quick'>
               <h3>Gallery</h3>
               </div>
               <div className='gallery'>
                 <div><img src={image1} alt='' id='gal'/></div>
                 <div><img src={image2} alt='' id='gal'/></div>
                 <div><img src={image3} alt='' id='gal'/></div>
               </div>
               <div className='gallery'>
                 <div><img src={image3} alt='' id='gal'/></div>
                 <div><img src={image2} alt='' id='gal'/></div>
                 <div><img src={image1} alt='' id='gal'/></div>
               </div>
          </div>
          <div className='row'>
               <div className='quick'>
               <h3>NewsLetter</h3>
               </div>
               <div className='paragraph'>Dolor amet sit justo amet
                elitr <br/>clita ipsum elitr est.</div>
                <div className='field'>
                    <input type='email' placeholder='Your Email'/>
                    <button>SignUp</button>
                </div>
          </div>
           
      </div>
 <div className='foot'>
     <div className='foot1'>
     <div className='foot-detals'>
          <p>©<a href='elearning'>Your Site Name,</a>All Rights Reserved. 
          Designed By  <a href='https://htmlcodex.com/'>HTML Codex</a></p>
          </div>
          <div className='foot2'>
               <ul>
                    <li className="active">Home</li>
                    <li className='active'>Cookies</li>
                    <li className='active'>Help</li>
                    <li>FQA's</li>
               </ul>
          </div>
     </div>
     <div className='foot3'>
          <p>Distributed By <a href='https://themewagon.com/'>ThemeWagon</a></p>
     </div>
 </div>
    </div>
    </div>
  )
}

export default Footer
