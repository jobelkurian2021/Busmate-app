import React from "react";
// import Users from "./Users";
// import {Container} from "react-bootstrap";
// import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';
import { Navbar, Nav,NavDropdown } from "react-bootstrap";

// import { FaBell } from 'react-icons/fa';

import '../css/backup/app1.css';
export default function adminnavbar() {
  // function  Logout() {
  //   localStorage.clear();
  // }
    return (
	<div>
 <Navbar bg="dark" variant="dark">
        <Nav.Link href="/adminhome"><Navbar.Brand>Busmate Admin Panel</Navbar.Brand></Nav.Link>
        <Nav className="mr-auto" >
          <Nav.Link href="/Profile">profile</Nav.Link>
         <Nav.Link className="navbar-right" href="/admin/users">users &nbsp;&nbsp;</Nav.Link>
         <Nav.Link className="navbar-right" href="/Bookings">&nbsp;All Bookings </Nav.Link>

          <NavDropdown title="&nbsp;&nbsp; Manage" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addroute">Add New Routes</NavDropdown.Item>
              <NavDropdown.Item href="/Busroute">View All Routes</NavDropdown.Item>

         </NavDropdown>
         {/* <Nav.Link className="navbar-right" href=""><FaBell/> requests</Nav.Link> */}
         
         <Nav.Link className="navbar-right" align="right" href="/adminhome">Logout</Nav.Link>

        </Nav>
      </Navbar>
      </div>

    );
  }