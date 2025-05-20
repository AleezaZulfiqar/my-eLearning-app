import React from 'react'
import web from '../Assests/web.jpg'
import graphic from '../Assests/graphic.jpg'
import video from '../Assests/video.jpg'
import marketing from '../Assests/marketing.jpg'
const Courses = () => {
  return (
    <div>
    <div className='cate'><h1>Courses Categories</h1></div>
      <div className='courses-main'>
     <div className='course-1'>
           <div className='web-dev'>
               <img src={web} alt='' id='web'></img>
           </div>
          <div className='Web-dev'>
               <h4>Web Design</h4>
               <h6>49 Courses</h6>
          </div>
           <div className='colm'>
               <div className='graph'>
               <img  src={graphic}alt=''/>
               </div>
                <div className='Graphic'>
               <h5>Graphic Design</h5>
               <h6>49 Courses</h6>
          </div>
               <div className='video'>
                    <img src={video} alt=''/>
               </div>
               <div className='Video-edit'>
               <h5>Video Editing</h5>
               <h6>49 Courses</h6>
          </div>
           </div>
          </div>
          <div className='course-2'>
          <div className='mark'>
               <img src={marketing} alt='' id='make'/>
          </div>
          <div className='Marketing'>
               <h5>Online Marketing</h5>
               <h6>49 Courses</h6>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Courses;
