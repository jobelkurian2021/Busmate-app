import React from "react";
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

export default function Home() {
  return (
    <div class="slider-area ">
    <div class="slider-active">
        <div class="single-slider hero-overly  slider-height d-flex align-items-center" data-background="img/h1_hero.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-9 col-md-9">
                        <div class="hero__caption">
                            <h1>Find your Trip Now </h1>
                            <p>Search Now</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-12">
                        <form action="#" class="search-box">
                            <div class="input-form mb-30">
                                <input type="text" placeholder="When Would you like to go ?" />
                            </div>
                            <div class="select-form mb-30">
                                <div class="select-itms">
                                    <select name="select" id="select1">
                                        <option value="">When</option>
                                        <option value="">Services-1</option>
                                        <option value="">Services-2</option>
                                        <option value="">Services-3</option>
                                    </select>
                                </div>
                            </div>
                            <div class="search-form mb-30">
                                <a href="#">Search</a>
                            </div>	
                        </form>	
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


  );
}