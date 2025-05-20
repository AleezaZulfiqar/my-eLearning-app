import React from 'react'
import image1 from '../Assests/image1.jpg'
import image2 from '../Assests/image2.jpg'
import image3 from '../Assests/image3.jpg'
const Popular = () => {
  return (
    <div>
    <div className='pop'>
      <h1>Popular Courses</h1>
    </div>
    <div className='Course-card'>
    <div className='card1'>
     <div className='card1-image'>
     <img src={image1}/>
     </div>
     <div className='Card1-image'>
          <button className='read-btn'>Read More</button>
          <button className='join-btn'>Join Now</button>
     </div>
     <div className='detail'>
          <h3>$149.00</h3>
          <div className='stars'>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <h6>(123)</h6>
          </div>
          <p>Web Design & Development <br/> Course for Beginners</p>
          <div className='cont'>
            <div className='person-icon'>
            <ul>
            <li>
            <i class="fa-solid fa-user-tie fa-sm" id='user'></i>
            </li>
           <li> John Doe</li>
            </ul>
            </div>
            <div className='clock-icon'>
            <ul>
            <li>
            <i class="fa-regular fa-clock fa-sm" id='clock'></i>
            </li>
           <li>1.49 Hrs</li>
            </ul>
            </div>
            <div className='user-icon'>
            <ul>
            <li>
          <i class="fa-solid fa-user fa-sm" id='person'></i>
            </li>
           <li>30 Students</li>
            </ul>
            </div>
          </div>
     </div>
    </div>

    <div className='card2'>
      <div className='card2-image'>
     <img src={image2}/>
     </div>
     <div className='Card2-image'>
          <button className='read-btn'>Read More</button>
          <button className='join-btn'>Join Now</button>
     </div>
      <div className='detail'>
          <h3>$149.00</h3>
          <div className='stars'>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <h6>(123)</h6>
          </div>
          <p>Web Design & Development <br/> Course for Beginners</p>
          <div className='cont'>
           <div className='person-icon'>
            <ul>
            <li>
            <i class="fa-solid fa-user-tie fa-sm" id='user'></i>
            </li>
           <li> John Doe</li>
            </ul>
            </div>
            <div className='clock-icon'>
            <ul>
            <li>
            <i class="fa-regular fa-clock fa-sm" id='clock'></i>
            </li>
           <li>1.49 Hrs</li>
            </ul>
            </div>
            <div className='user-icon'>
            <ul>
            <li>
          <i class="fa-solid fa-user fa-sm" id='person'></i>
            </li>
           <li>30 Students</li>
            </ul>
            </div>
          </div>
     </div>
    </div>
    <div className='card3'>
      <div className='card3-image'>
     <img src={image3}/>
     </div>
     <div className='Card3-image'>
          <button className='read-btn'>Read More</button>
          <button className='join-btn'>Join Now</button>
     </div>
      <div className='detail'>
          <h3>$149.00</h3>
          <div className='stars'>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <i class="fa-solid fa-star fa-sm"></i>
               <h6>(123)</h6>
          </div>
          <p>Web Design & Development <br/> Course for Beginners</p>
          <div className='cont'>
            <div className='person-icon'>
            <ul>
            <li>
            <i class="fa-solid fa-user-tie fa-sm" id='user'></i>
            </li>
           <li> John Doe</li>
            </ul>
            </div>
            <div className='clock-icon'>
            <ul>
            <li>
            <i class="fa-regular fa-clock fa-sm" id='clock'></i>
            </li>
           <li>1.49 Hrs</li>
            </ul>
            </div>
            <div className='user-icon'>
            <ul>
            <li>
          <i class="fa-solid fa-user fa-sm" id='person'></i>
            </li>
           <li>30 Students</li>
            </ul>
            </div>
          </div>
     </div>
    </div>

    </div>
     
    </div>
  )
}

export default Popular;
