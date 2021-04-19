import React, { useState,Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import {withFormik} from 'formik';
// import * as Yup from 'yup';

import "./index.css";


class Feedback extends Component {
    render() {
      return ( 
    <div className="Login">
                    <h2 align="center">User Feedback</h2>
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
     
      <Form.Group size="lg" controlId="type">
          <Form.Label>Type of Issue:</Form.Label>
          <Form.Control as="select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </Form.Control>
         </Form.Group>

         <Form.Group size="lg" controlId="msg">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="textarea"
            id="msg"
            name="msg"
            required="required"
            data-validation-required-message="Please enter msg"
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

export default Feedback;