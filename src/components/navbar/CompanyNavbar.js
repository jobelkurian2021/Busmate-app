import React, { Component } from 'react';
import "./style.css";
// import {Link} from 'react-router-dom';


 
class CompanyNavbar extends Component {
  render() {
    return (
      
        <header id="header" className="fixed-top"> 
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><a href="/CompanyHome"><span>Bus</span>Mate </a></h1>
         
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a href="/CompanyHome" className="active">Home</a></li>
              
              <li><a href="/Cprofile">Company profile</a></li>
              <li><a href="/Cdetails">Company details</a></li>

              <li className="dropdown"><a href="#"><span>My Bus Schedules</span><i className="bi bi-chevron-down"></i></a>
              <ul>
              <li><a href="/Company/AddBus">Add New Bus</a></li>
                    <li><a href="/Company/NewSchedule">Add New Schedule</a></li>
                      <li><a href="/#">View my Bus Schedules</a></li>
              </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Ticket Bookings</span><i className="bi bi-chevron-down"></i></a>
              <ul>
                     
                    <li><a href="#">Pending Transactions</a></li>
                      <li><a href="/#">View All Transactions</a></li>
              </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Company</span><i className="bi bi-chevron-down"></i></a>
              <ul>

                      <li><a href="/Profile">Edit Profile</a></li>
                      <li><a href="/home" onClick={this.props.logout}>Logout</a></li>

              </ul>
              </li>
              
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
          <div className="header-social-links d-flex">
            {/* <a href="#" className="twitter"><i className="bu bi-twitter"></i></a> */}
            <a href="#" className="facebook"><i className="bu bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bu bi-instagram"></i></a>
          </div>
    
        </div>
      </header>
    );
  }
}
 
export default CompanyNavbar;