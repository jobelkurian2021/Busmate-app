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
                    <h2 align="center">Booking Details</h2>
        <Form>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email ID:</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            id="email"
            name="email"
            required="required"
            data-validation-required-message="Please enter emailID"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="phone">
          <Form.Label>Phone No:</Form.Label>
          <Form.Control
            type="number"
            id="phone"
            name="phone"
            required="required"
            data-validation-required-message="Please enter phone"
          />
         </Form.Group>
      <Form.Group size="lg" controlId="source">
          <Form.Label>Trip Source:</Form.Label>
          <Form.Control
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
         <Form.Group size="lg" controlId="date">
          <Form.Label>Trip Date:</Form.Label>
          <Form.Control
            type="date"
            id="date"
            name="date"
            required="required"
            data-validation-required-message="Please enter date"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="no">
          <Form.Label>Number of Passengers:</Form.Label>
          <Form.Control as="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
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
         <Form.Group size="lg" controlId="no">
          <Form.Label> Seat No :</Form.Label>
          <Form.Control as="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="name">
          <Form.Label>Passenger Name:</Form.Label>
          <Form.Control
            type="text"
            id="name"
            name="name"
            required="required"
            data-validation-required-message="Please enter name"
          />
         </Form.Group>
         <Form.Group size="lg" controlId="sex">
          <Form.Label>Passenger Gender:</Form.Label>
          <Form.Control as="select">
          <option value="Male">Male</option>
          <option value="Female">Female</option>

          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="age">
          <Form.Label>Passenger Age:</Form.Label>
          <Form.Control
            type="number"
            id="age"
            name="age"
            required="required"
            data-validation-required-message="Please enter age"
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