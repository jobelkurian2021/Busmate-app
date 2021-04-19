import React, { useState,Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import {withFormik} from 'formik';
// import * as Yup from 'yup';

import "./index.css";


class Addroute extends Component {
    render() {
      return ( 
    <div className="Login">
                    <h2 align="center">Add New Bus Route</h2>
        <Form>
      <Form.Group size="lg" controlId="source">
          <Form.Label>Trip Source:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            id="source"
            name="source"
            required="required"
            data-validation-required-message="Please enter Source"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="destination">
          <Form.Label>Trip Destination:</Form.Label>
          <Form.Control
            type="text"
            id="destination"
            name="destination"
            required="required"
            data-validation-required-message="Please enter destination"
          />
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
         <Form.Group size="lg" controlId="time">
          <Form.Label>Trip Time:</Form.Label>
          <Form.Control
            type="text"
            id="time"
            name="time"
            required="required"
            data-validation-required-message="Please enter trip time"
          />
        </Form.Group>
        <Form.Group size="lg" controlId="time">
          <Form.Label>Trip Fare:</Form.Label>
          <Form.Control
            type="text"
            id="fare"
            name="fare"
            required="required"
            data-validation-required-message="Please enter trip fare"
          />
        </Form.Group>
         <Button block size="lg" type="submit" 
        // disabled={!validateForm()} 
        // onPress={() =>submitdata()}
        >
          Submit Data
        </Button>
        </Form>
    </div>
    );
  }
}

export default Addroute;