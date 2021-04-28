import React, { useState,Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import {withFormik} from 'formik';
// import * as Yup from 'yup';
import CompanyNavbar from "../components/navbar/CompanyNavbar";

import "./index.css";


class Cdetails extends Component {
    render() {
      return ( 
      <div>
      <CompanyNavbar/>
    <div className="Login">
                    <h2 align="center">Company Details</h2>
        <Form>
      <Form.Group size="lg" controlId="cname">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            id="cname"
            name="cname"
            required="required"
            data-validation-required-message="Please enter Company name"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="email">
          <Form.Label>Company Email:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            required="required"
            data-validation-required-message="Please enter Company email"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="site">
          <Form.Label>Company Website:</Form.Label>
          <Form.Control
            type="text"
            id="site"
            name="site"
            required="required"
            data-validation-required-message="Please enter Company Website"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="address">
          <Form.Label>Company Address:</Form.Label>
          <Form.Control
            type="textarea"
            id="address"
            name="address"
            required="required"
            data-validation-required-message="Please enter Company address"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="phone">
          <Form.Label>Company Phone No:</Form.Label>
          <Form.Control
            type="number"
            id="phone"
            name="phone"
            required="required"
            data-validation-required-message="Please enter Company phone"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="route">
          <Form.Label>Route No:</Form.Label>
          <Form.Control as="select">
          <option value="1000">1000</option>
          <option value="1001">1001</option>
          <option value="1002">1002</option>
          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="accomodation">
          <Form.Label>Accomodation Type:</Form.Label>
          <Form.Control as="select">
          <option value="seater">Seater</option>
          <option value="sleeper">sleeper</option>
          <option value="AC">AC Volvo</option>
          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="type">
          <Form.Label>Bus Type:</Form.Label>
          <Form.Control as="select">
          <option value="LS">Limited Stop</option>
          <option value="SF">Super Fast</option>
          <option value="FP">Fast Passenger</option>
          <option value="NS">Non Stop</option>
          </Form.Control>
         </Form.Group>
         <Button block size="lg" type="submit" 
        // disabled={!validateForm()} 
        // onPress={() =>submitdata()}
        >
          Submit Data
        </Button>
        </Form>
    </div>
    </div>
    );
  }
}

export default Cdetails;