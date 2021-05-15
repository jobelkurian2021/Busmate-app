import React, { useState, Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
// import UserNavbar from "../components/navbar/UserNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

toast.configure()

class Payment extends Component {

    state = {
        sources: [],
        selectedsource: "",
        validationError: ""
      };
      
    //   constructor() {
    //     super();
    //     this.state = {
    //       sources: [],
    //     };
    // }
      componentDidMount() {
        let initialsource = [];
    // fetch('http://localhost:3500/api/routes')
    //     .then(response => {
    //         return response.json();
    //     }).then(data => {
    //       initialsource = data.results.map((source) => {
    //         return source;
    //     });
    //     console.log(initialsource);
    //     this.setState({
    //       sources: initialsource,
    //     });
    // });
        fetch(
          "http://localhost:3500/api/routes")
          // , {method: "POST", headers: {'Content-Type': 'application/json'}}
          .then(response => {
            return response.json();
          })
          .then(data => {
            initialsource = data.results.map((source) => {
                      return source;
                  });
                  console.log(initialsource);
                  this.setState({
                    sources: initialsource,
                  });


            // let route = data.map(source=> {
            //   return { value: source, display: source };
            // });
            // this.setState({
            //     sources: [
            //     {
            //       value: "",
            //       display:
            //         "(Select your source)"
            //     }
            //   ].concat(route)
            // });
          })
          .catch(error => {
            console.log(error);
          });
      }
      render() {
        let initialsource = this.props.state.sources;
        let optionItems = initialsource.map((source) =>
                <option value={source.name}>{source.name}</option>
            );
      return ( 
        <div>
                          <source state={this.state}/>
                          <select>
                {optionItems}
             </select>
            {/* gffgfgf<br/><br/><br/><br/><br/>fss<br/>            gffgfgf<br/><br/><br/><br/><br/>fss<br/>
            gffgfgf<br/><br/><br/><br/><br/>fss<br/>            gffgfgf<br/><br/><br/><br/><br/>fss<br/>
            gffgfgf<br/><br/><br/><br/><br/>fss<br/>            gffgfgf<br/><br/><br/><br/><br/>fss<br/>
            gffgfgf<br/><br/><br/><br/><br/>fss<br/>            gffgfgf<br/><br/><br/><br/><br/>fss<br/>
            gffgfgf<br/><br/><br/><br/><br/>fss<br/>            gffgfgf<br/><br/><br/><br/><br/>fss<br/> */}

        {/* <select
        value={this.state.selectedsource}
        onChange={e =>
          this.setState({
            selectedsource: e.target.value,
            validationError:
              e.target.value === ""
                ? "You must select your source"
                : ""
          })
        }
      >
        {this.state.sources.map(source => (
          <option
            key={source.value}
            value={source.value}
          >
            {source.display}
          </option>
        ))}
      </select>
      <div
        style={{
          color: "red",
          marginTop: "5px"
        }}
      >
        {this.state.validationError}
      </div> */}
    </div>
    );
  }
}
  export default Payment;