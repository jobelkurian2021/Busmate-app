import React from "react";
// import Users from "./Users";
// import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';
import AdminNavbar from "../../components/navbar/Adminnavbar";
// import { Navbar, Nav,NavDropdown } from "react-bootstrap";

// import { FaBell } from 'react-icons/fa';

import '../css/backup/app1.css';
export default function Adminhome() {
    return (
		<div className="Login">
					{/* <h3 align="right">Welcome <span>{localStorage.getItem('name')}</span></h3> */}

		<AdminNavbar />
		{/* <div className="Login"> */}
		<h2 align="center">	Admin Home</h2>

		{/* </div> */}
		</div>

    );
  }