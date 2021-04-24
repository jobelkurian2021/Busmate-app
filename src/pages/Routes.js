import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Signup from "./Signup";
import Cprofile from "./Cprofile";
import Booking from './Booking';
import Cdetails from './Cdetails';
import Addroute from './Addroute';
import Bconfirm from './Bconfirm';
import Feedback from './Feedback';
import Adminhome from './admin/Adminhome';
import Customerhome from "./customer/Customerhome";
import Companyhome from "./company/Companyhome";
import Users from "./admin/Users";
import Profile from "./Profile";

export default function Routes() {
  return (
    <BrowserRouter>

    <Switch>
        <Route exact path="/">
              <Home />
        </Route>

        <Route exact path="/Home">
              <Home />
        </Route>

        <Route exact path="/Index">
             <Home />
        </Route>

        <Route exact path="/Contact">
            <Contact />
        </Route>

        <Route exact path="/About">
            <About />
        </Route>

        <Route exact path="/login">
            <Login />
        </Route>

        <Route exact path="/register">
            <Register />
        </Route>

        <Route exact path="/Signup">
            <Signup />
        </Route>

        <Route exact path="/Booking">
            <Booking />
        </Route>
        <Route exact path="/Cdetails">
            <Cdetails />
        </Route>

        <Route exact path="/Cprofile">
            <Cprofile />
        </Route>
        <Route exact path="/Bconfirm">
            <Bconfirm />
        </Route>
        <Route exact path="/Addroute">
            <Addroute />
        </Route>
        <Route exact path="/Feedback">
            <Feedback />
        </Route>
        <Route exact path="/Companyhome">
            <Companyhome />
        </Route>
        <Route exact path="/Customerhome">
            <Customerhome />
        </Route>
        <Route exact path="/Adminhome">
            <Adminhome />
        </Route>
        <Route exact path="/Admin/home">
            <Adminhome />
        </Route>
        <Route exact path="/Admin/users">
            <Users />
        </Route>
        <Route exact path="/Profile">
            <Profile />
        </Route>
        <Route>
            <NotFound />
        </Route>

    </Switch>
    </BrowserRouter>

  );
}