import React, {Component } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import {Link} from 'react-router-dom';
// import {withFormik} from 'formik';
import './css/booking/animate.css';
import './css/booking/icomoon.css';
import './css/booking/themify-icons1.css';
import './css/booking/bootstrap.css';
import './css/booking/magnific-popup1.css';
import './css/booking/bootstrap-datepicker.min.css';
import './css/booking/owl.carousel.min.css';
import './css/booking/owl.theme.default.min.css';
import UserNavbar from "../components/navbar/UserNavbar";

import './css/style.css';


class Booking extends Component {
    render() {
      return ( 
       <div>
		           <UserNavbar/>

        <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" 
        // style="background-image: url(images/img_bg_2.jpg)"
        >
		<div className="overlay"></div>
		<div className="gtco-container">
			<div className="row">
				<div className="col-md-12 col-md-offset-0 text-left">
					

		
					<div className="row row-mt-15em">
						<div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
							<h1>Planing Trip ? Book Now</h1>	
						</div>
						<div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
							<div className="form-wrap">
								<div className="tab">
									
									<div className="tab-content">
										<div className="tab-content-inner active" data-content="signup">
											<h3>Book Your Trip</h3>
											<form action="#">
												<div className="row form-group">
													<div className="col-md-12">
														<label for="source">Leaving From</label>
														<input type="text" id="source" className="form-control" />
													</div>
												</div>
												<div className="row form-group">
													<div className="col-md-12">
														<label for="destination">Going To</label>
														<input type="text" id="destination" className="form-control" />
													</div>
												</div>
									
												<div className="row form-group">
													<div className="col-md-12">
														<label for="date-start">Date of Travel</label>
														<input type="date" id="date-start" className="form-control" />
													</div>
												</div>

												<div className="row form-group">
													<div className="col-md-12">
														<input type="submit" className="btn btn-primary btn-block" value="Search Buses" />
													</div>
												</div>
											</form>	
										</div>

										
									</div>
								</div>
							</div>
						</div>
					</div>
							
					
				</div>
			</div>
		</div>
	</header>
    </div>    
    );
  }
}
 
export default Booking;