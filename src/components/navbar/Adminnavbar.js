import React, { Component } from 'react';
import "./style.css";
// import {Link} from 'react-router-dom';


 
class Adminnavbar extends Component {
  render() {
    return (
      
        <header id="header" className="fixed-top"> 
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><a href="/AdminHome"><span>Bus</span>Mate <span>Admin</span> Panel</a></h1>
         
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a href="/AdminHome" className="active">Home</a></li>
    
              <li className="dropdown"><a href="/Admin/Users"><span>Manage</span><i className="bi bi-chevron-down"></i></a>
              <ul>
                     
                      <li><a href="/Admin/Users">Manage Users</a></li>
                      <li><a href="/Admin/Bookings">All Bookings</a></li>
                      <li><a href="/Admin/Profile">Edit Profile</a></li>
              </ul>
              </li>
              <li className="dropdown"><a href="/Admin/BusRoute"><span>Manage Routes</span><i className="bi bi-chevron-down"></i></a>
              <ul>
                     
                      <li><a href="/Admin/AddRoute">Add New Route</a></li>
                      <li><a href="/Admin/BusRoute">View All Routes</a></li>
                  <li class="dropdown"><a href="/Admin/Locations"><span>Locations</span> <i class="bi bi-chevron-right"></i></a>
                    <ul>
                      <li><a href="/Admin/Locations">View All Locations</a></li>
                      <li><a href="/Admin/Locations/add">Add New Location</a></li>
                    </ul> 
                  </li>
                  <li><a href="/Admin/Travels">Travels</a></li>
              </ul>
              </li>
              <li><a href="/home">Logout</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
            <div 
          className="header-social-links d-flex"
          >
          <li><a >Welcome &nbsp;<span>{localStorage.getItem('name')}</span></a></li>

            {/* <a href="#" className="twitter"><i className="bu bi-twitter"></i></a> */}
            {/* <a  className="facebook"><i className="bu bi-facebook"></i></a>
            <a  className="instagram"><i className="bu bi-instagram"></i></a> */}
          </div>
    
          </nav>
    
         

          
        </div>
      </header>
    );
  }
}
 
export default Adminnavbar;