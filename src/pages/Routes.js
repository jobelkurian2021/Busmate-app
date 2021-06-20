import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Login from "./Login";
import Register from "./Register";
import About from "./About";
import Signup from "./Signup";
import Cprofile from "./company/Cprofile";
import Booking from './Booking';
import Cdetails from './Cdetails';
import Addroute from './routes/Addroute';
import Bconfirm from './Bconfirm';
import Feedback from './Feedback';
import Adminhome from './admin/Adminhome';
import Customerhome from "./customer/Customerhome";
import Companyhome from "./company/Companyhome";
import Users from "./admin/Users";
import Profile from "./Profile";
// import ProtectedRoute from "./ProtectedRoute";
import Bookings from "./booking/Bookings";
import BusRoute from "./routes/BusRoute";
import  Payment from "../components/Payment";
import Bill from "../components/bill/bill";
// import  Payment from "./admin/Payment";
import Reservations from "./customer/Reservations";
import Search from "./customer/Search";
import SearchCard from "./customer/Searchcard";
import UserProfile from "./customer/UserProfile";
import CompanyProfile from "./company/CompanyProf";
import AdminProfile from "./admin/AdminProf";


import Schedule from "./customer/Schedule";
import NewSchedule from "./company/NewSchedule";
import AddNewBus from "./Addnewbus";
import AddBus from "./company/Bus/AddBus";
import AddaBus from "./company/AddBus";

import Allbus from "./company/Bus/Allbus";
import AddBusNew from "./company/Bus/FormPrimaryDetails";
import Locations from "./admin/Locations";
import AddLocation from "./admin/Locations/add";
import Travels from "./admin/Travels";
import AddTravel from "./admin/Travels/add";
import EditTravel from "./admin/Travels/edit";
import EditLocation from "./admin/Locations/edit";
import Pay from "./payment/App.js";
import Clock from "./Clock";
import Forgotpassword from "./Login/Forgotpassword";
import Newpassword from "./Login/newpass";
import Resendotp from "./Login/resendotp";
import BusAdd from "./BusAdd";
import BusCaller from "./booking/seats";
import SeatDetails from "./booking/seats/seats";
import { Companyroute } from "../components/routes/Company";
import History from "../components/bill/History";
import CBill from "./company/bill";
import PHistory from "../components/invoice/History";
import CPayHistory from "./company/History";

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
        <Route exact path="/Forgotpassword">
            <Forgotpassword />
        </Route>
        <Route exact path="/Forgotpassword/newpassword">
            <Newpassword />
        </Route> 
        <Route exact path="/Signup/otpresend">
            <Resendotp />
        </Route> 
        <Route exact path="/Booking">
            <Booking />
        </Route>
        <Route exact path="/Cdetails">
            <Cdetails />
        </Route>
        
        <Route exact path="/admin/Bookings">
            <Bookings />
        </Route>
        <Route exact path="/admin/BusRoute">
            <BusRoute />
        </Route>
        {/* <ProtectedRoute path="/Cdetails" component={Cdetails} /> */}
        <Companyroute exact path="/Cprofile">
            <Cprofile />
        </Companyroute>
        <Route exact path="/Bconfirm">
            <Bconfirm />
        </Route>
        <Route exact path="/admin/Addroute">
            <Addroute />
        </Route>
        <Route exact path="/Feedback">
            <Feedback />
        </Route>
        <Companyroute path="/Companyhome">
            <Companyhome />
        </Companyroute>
        <Route exact path="/Company/Payments">
            <CPayHistory />
        </Route>
        <Route exact path="/Company/Bills">
            <CBill />
        </Route>
        <Route exact path="/Company/NewSchedule">
            <NewSchedule />
        </Route>
        <Route exact path="/Company/BusAdd">
            <BusAdd />
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
        <Route exact path="/Payment">
            <Payment />
        </Route> 
        <Route exact path="/Bill">
            <Bill />
        </Route>
        <Route exact path="/Company/Profile">
            <CompanyProfile />
        </Route>
        <Route exact path="/Admin/Profile">
            <AdminProfile />
        </Route>
        <Route exact path="/Customer/Profile">
            <UserProfile />
        </Route>
        <Route exact path="/Customer/SeatDetails">
            <SeatDetails />
        </Route>
        <Route exact path="/Customer/BusCaller">
            <BusCaller />
        </Route>
        <Route exact path="/Company/AddNewBus">
            <AddBus />
        </Route>
 
        <Route exact path="/Company/AddaBus">
            <AddaBus />
        </Route>
        
        <Route exact path="/Company/Allbus">
            <Allbus />
        </Route>
        <Route exact path="/Reservations"> 
        <Reservations /></Route>
        <Route exact path="/Search"> 
        <Search /></Route>
        <Route exact path="/Customer/SearchCard"> 
        <SearchCard /></Route>
        
        <Route exact path="/Schedule"> 
        <Schedule /></Route>
        
        <Route path="/Customer/Payment" exact component={Pay} />
        <Route path="/Customer/bill/History" exact component={History} />
        <Route path="/Customer/Payment/History" exact component={PHistory} />
        
        <Route path="/Company/AddBus" exact component={AddNewBus} />
        <Route path="/Admin/Locations" exact component={Locations} />
        <Route path="/Admin/Travels" exact component={Travels} />
        <Route path="/Admin/Locations/add" exact component={AddLocation} />
        <Route path="/Admin/Locations/edit" exact component={EditLocation} />
        <Route path="/Admin/Travels/add" exact component={AddTravel} />
        {/* <Route path="/Admin/Travels/Edit"  exact component={EditTravel} /> */}
        <Route path="/Admin/Travels/Edit"  component={EditTravel} />
        <Route path="/Clock" exact component={Clock} />


        <Route>
            <NotFound />
        </Route>

    </Switch>
    </BrowserRouter>

  );
}