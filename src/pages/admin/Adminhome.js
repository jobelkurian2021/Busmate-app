import React from "react";
import Users from "./Users";
import {Container} from "react-bootstrap";
import {Route,BrowserRouter as Router ,Switch} from 'react-router-dom';
import AdminNavbar from "./adminnavbar";
import { Navbar, Nav,NavDropdown } from "react-bootstrap";

import { FaBell } from 'react-icons/fa';

import '../css/backup/app1.css';
export default function Adminhome() {
    return (
		<div >
		<AdminNavbar />
		<div className="Login">
		<h2 align="center">	Welcome Admin</h2>
		</div>
		</div>

    );
  }