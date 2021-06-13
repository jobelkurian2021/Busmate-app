import React,{ Component } from 'react'
import CompanyNavbar from "../../components/navbar/CompanyNavbar";
// import { Col } from "react-bootstrap";
// import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { Companyroute } from "../../components/routes/Company";

// export default function index() {
//     return (
//         <div>
//         <CompanyNavbar/>
//         <div className="Login">
// 		<h2 align="center">	Company Home</h2>
//         </div>
//         </div>
//     )
// }


class Companyhome extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = { apiResponse: "" };
    }

    handleLogout = () => {
      this.setState(this.baseState)
      localStorage.clear()
    }
    render() {
        return (
            <div>
        <CompanyNavbar
        logout={this.handleLogout}
        {...this.state}
        />
        <div className="Login">
 		<h2 align="center">	Company Home</h2>
         {/* <br/><h3 align="center">Welcome <span>{localStorage.getItem('name')}</span></h3> */}
        </div>
        {/* <Col>
            <Router>
              <Switch>
              <Companyroute exact path="/companyhome" component={Companyroute} />
              </Switch>
            </Router>
        </Col> */}
        </div>
    );
}
}
export default Companyhome;