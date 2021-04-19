import React, { Component } from 'react';
import "./css/bootstrap.min.css";
import "./css/flaticon.css";
import "./css/slicknav.css";
import "./css/animate.min.css";
import "./css/magnific-popup.css";
import "./css/fontawesome-all.min.css";
import "./css/themify-icons.css";
import "./css/slick.css";
import "./css/nice-select.css";
import "./css/style.css";

class Header extends Component {
  render() {
    return (
      <section>
      <div class="header-area">
      <div class="main-header ">
          <div class="header-top top-bg d-none d-lg-block">
             <div class="container"> 
              <div class="row justify-content-between align-items-center"> 
                  <div class="col-lg-8">
                      <div class="header-info-left">
                          <ul>                          
                              <li>info@busmate.com</li>
                              <li>+91 7837 0000 11</li>
                              <li>Kottayam Kerala IN</li>
                          </ul>
                      </div>
                  </div> 
       
                 </div>
             </div>
           </div>
        </div>
        </div>
          </section>
    );
  }
}
 
export default Header;