import React from 'react'
import inst1 from '../Assests/inst1.jpg'
import inst2 from '../Assests/inst2.jpg'
import inst3 from '../Assests/inst3.jpg'
import inst4 from '../Assests/inst4.jpg'
const Experts = () => {
  return (
    <div>
       <div className='exp'>
          <h1>Expert Instructors</h1>
          <div className='Experts'>
          <div className='exp-card'>
               <img src={inst1} alt=''/>
               <div className='Exp-card'>
                <div className='fb-icon'>
                 <i class="fa-brands fa-facebook-f fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-twitter fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-instagram fa-lg" id='fb'></i>
                </div>
          </div>
          <div className='inst-detail'>
          <h5>Instructor Name</h5>
          <p>Designation</p>
          </div>
          </div>
          
          <div className='exp-card'>
                 <img src={inst2} alt=''/>
                 <div className='Exp-card'>
                  <div className='fb-icon'>
                 <i class="fa-brands fa-facebook-f fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-twitter fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-instagram fa-lg" id='fb'></i>
                </div>
          </div>
          <div className='inst-detail'>
          <h5>Instructor Name</h5>
          <p>Designation</p>
          </div>
          </div>
          <div className='exp-card'>
                 <img src={inst3} alt=''/>
                 <div className='Exp-card'>
                     <div className='fb-icon'>
                 <i class="fa-brands fa-facebook-f fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-twitter fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-instagram fa-lg" id='fb'></i>
                </div>
          </div>
          <div className='inst-detail'>
          <h5>Instructor Name</h5>
          <p>Designation</p>
          </div>
          </div>
          <div className='exp-card'>
                 <img src={inst4} alt=''/>
                 <div className='Exp-card'>
                    <div className='fb-icon'>
                 <i class="fa-brands fa-facebook-f fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-twitter fa-lg" id='fb'></i>
                </div>
                <div className='fb-icon'>
                    <i class="fa-brands fa-instagram fa-lg" id='fb'></i>
                </div>
          </div>
          <div className='inst-detail'>
          <h5>Instructor Name</h5>
          <p>Designation</p>
          </div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default Experts;
