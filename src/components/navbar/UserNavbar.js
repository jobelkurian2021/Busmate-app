import React, { Component } from 'react';
import "./style.css";
// import {Link} from 'react-router-dom';


 
class UserNavbar extends Component {
  handleLogout = () => {
    this.setState(this.baseState)
    localStorage.clear()
    
  }
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
}

componentDidMount() {
    this.time = setInterval(() => {
        this.changeTime()
    }, 1000)
}

componentWillUnmount() {
    clearInterval(this.time)
}

changeTime() {
    this.setState({ date: new Date() })
}

  render() {
    
    return (
      
        <header id="header" className="fixed-top"> 
        <div className="container d-flex align-items-center">
    
          <h1 className="logo me-auto"><a href="/Customerhome"><span>Bus</span>Mate </a></h1>
         
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a href="/Customerhome" className="active">Home</a></li>
              <li className="dropdown"><a href="#"><span>Services</span><i className="bi bi-chevron-down"></i></a>
              <ul>
                      <li><a href="/About">About Us</a></li>
                      <li><a href="/packages">Packages</a></li>
                      <li><a href="/holidays">Holidays</a></li>
                      <li><a href="/hotels">Hotels</a></li>
                      <li><a href="/feedback">Feedback</a></li>
                      <li><a href="/offers">Offers</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a href="/schedule">Route Timings</a></li>

              </ul>
              </li>
              <li><a href="/Booking">Booking</a></li>
            
              <li className="dropdown"><a href="#"><span>Your Bookings</span><i className="bi bi-chevron-down"></i></a>
              <ul>
                     
                      <li><a href="/Bconfirm">Booking details</a></li>
                      <li><a href="/#">View Past Bookings</a></li>
              </ul>
              </li>
              <li className="dropdown"><a href="#"><span>User</span><i className="bi bi-chevron-down"></i></a>
              <ul>

                      <li><a href="/Profile">Edit Profile</a></li>
                      <li><a href="/home" onClick={this.props.logout}>Logout</a></li>

              </ul>
              </li>
              
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
    
          {/* <div className="header-social-links d-flex">
             <a href="#" className="twitter"><i className="bu bi-twitter"></i></a> 
            <a href="#" className="facebook"><i className="bu bi-facebook"></i></a>
            <a href="#" className="instagram"><i className="bu bi-instagram"></i></a>
          </div> */}
          <div className="header-social-links d-flex">
        <h3>&nbsp;&nbsp;{this.state.date.toLocaleTimeString()}.</h3>
        </div>

        </div>

      </header>
    );
  }
}
 
export default UserNavbar;