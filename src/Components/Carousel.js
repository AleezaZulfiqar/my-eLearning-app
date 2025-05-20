import React from 'react'
import img from '../Assests/img.jpg';
import carousel from '../Assests/carousel-2.jpg';

const Carousel = () => {
  return (
    <div>
    
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img} class="d-block w-100"  alt =".." id='image'/>
      <div class="carousel-caption  d-md-block" id='cap'>
      <div class='captions'>
        <h5 class='best'>BEST ONLINE COURSES</h5>
        <h1 class='heading'><span className='sp'>The Best online</span><br/><span class="sp">Learning platform</span></h1>
        <p class='para'>Vero elitr justo clita lorem.  Kasd rebum ipsum<br/>
       <span class="diam"> at diam justo clita at kasd rebum sea sanctus eirmod elitr.</span>
        </p>
        <div className='read'>
       <button>Read more</button>
       <button id='join'>Join Now</button>
        </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <img src={carousel} class="d-block w-100"  alt=".." id='image' />
      <div class="carousel-caption  d-md-block" id='cap'>
        <div class='captions'>
        <h5 class='best'>BEST ONLINE COURSES</h5>
        <h1 class='heading'><span id='spp'>Get Educated Online</span><br/><span class="spe">From Your Home</span></h1>
        <p class='para'>Vero elitr justo clita lorem.  Kasd rebum ipsum<br/>
       <span class="diam"> at diam justo clita at kasd rebum sea sanctus eirmod elitr.</span>
        </p>
        <div className='read'>
       <button>Read more</button>
       <button id='join'>Join Now</button>
        </div>
        </div>
      </div>
    </div>
  </div>
   <div class='prev'>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   
    <span class="visually-hidden">Previous</span>
  </button>
  </div>
  <div class='next'>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
    </div>
  )
}

export default Carousel;
