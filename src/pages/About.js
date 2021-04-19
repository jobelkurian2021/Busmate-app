import React from "react";
import './index.css';
import "./style.css";

export default function About() {
  return (
        <section id="about-us" className="about-us">
      <div className="container">

        <div className="row content">
          <div className="col-lg-6" >
            <h2>BusMate</h2>
            <h3>A Online Bus Ticket Booking System</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0" >
            <p>
            Online Bus Ticket Reservation System is a Web based application that works within a centralized network. 
            This project has a facility which is used to reserve seats, cancellation of reservation and different types of route enquiries used on securing quick reservations. 
            This system would help customers to book a seat for their journey, book bus. This system would also help the owner to manage the coaches, employees, clients, services etc. 
            The customer can check availability, book ticket, or cancel ticket 24X7. They can check route, price, class etc.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Front End : React.js</li>
              <li><i className="ri-check-double-line"></i> BackEnd: Node and MongoDB</li>
            </ul>
            <p className="fst-italic">
              Developed By Jobel Kurian.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
