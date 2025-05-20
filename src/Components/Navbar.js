import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="navv">
        <div class="container-fluid">
        <div className="fa-book">
         <i class="fa-solid fa-book" id="icon"></i>
         </div>
         <div className="brandi">
          <h2 class="navbar-brand">
           eLEARNING
          </h2>
          </div>
          <button
          id="tog"
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="items-li">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="*" id="ho">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="*">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="*">
                  Courses
                </a>
              </li>
              <li class="nav-item dropdown" id="page">
                <a
                  class="nav-link dropdown-toggle"
                  href="*"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="drop">
                  <li>
                    <a class="dropdown-item" href="*">
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="*">
                      testimonial 
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="*">
                      404 Page
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="*">
                  Contact
                </a>
              </li>
              
            </ul>
            <button type="submit" id="btn">
               Join Now <i class="fa-solid fa-right-long" id="fa-right"></i>
              </button>
            
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
