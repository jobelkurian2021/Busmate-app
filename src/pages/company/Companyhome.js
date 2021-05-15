import React,{ Component } from 'react'
import CompanyNavbar from "../../components/navbar/CompanyNavbar";

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
        </div>
        </div>
    );
}
}
export default Companyhome;