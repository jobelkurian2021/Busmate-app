import React, { Component } from 'react';
import "./style.css";
// import {Link} from 'react-router-dom';


 
class CompanyNavbar extends Component {
  render() {
    return (
      
        <header id="header" className="fixed-top"> 
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><a href="/Company/Home"><span>Bus</span>Mate </a></h1>
         
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a href="/CompanyHome" className="active">Home</a></li>
              <li className="dropdown"><a ><span>Company</span><i className="bi bi-chevron-down"></i></a>
              <ul>
              <li><a href="/Cprofile">Company profile</a></li>
              <li><a href="/Cdetails">Company details</a></li>
              </ul>
              </li>
              <li className="dropdown"><a ><span>My Bus Schedules</span><i className="bi bi-chevron-down"></i></a>
              <ul>
              <li><a href="/Company/AddBus">Add New Bus</a></li>
                    <li><a href="/Company/NewSchedule">Add New Schedule</a></li>
                      <li><a href="/Company/Allbus">View my Bus Schedules</a></li>
              </ul>
              </li>
              <li className="dropdown"><a  href="/Company/Payments"><span>Ticket Bookings</span><i className="bi bi-chevron-down"></i></a>
              <ul>
                     
                    <li><a >Pending Transactions</a></li>
                      <li><a href="/Company/Payments">View All Transactions</a></li>
                      <li><a href="/Company/Bills">Bill History</a></li>
              </ul>
              </li>
              <li className="dropdown">
              {/* <a >Welcome &nbsp;<span>{localStorage.getItem('name')}</span><i className="bi bi-chevron-down"></i></a> */}

                <a href="/CompanyHome"><span>Company</span><i className="bi bi-chevron-down"></i></a>
              <ul>

                      <li><a href="/Company/Profile">Edit Profile</a></li>
                      <li><a href="/home" onClick={this.props.logout}>Logout</a></li>

              </ul>
              </li>
              
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <div 
          className="header-social-links d-flex"
          >
          <li><a >Welcome &nbsp;<span>{localStorage.getItem('name')}</span></a></li>

          </div>
          </nav>
        </div>
      </header>
    );
  }
}
 
export default CompanyNavbar;