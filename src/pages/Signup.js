import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
// import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

toast.configure()

export default function Signup() {
  const [usetype, setusetype] = useState(false);

  const userdropdown = (e) => {
    if (e.target.value === "user") {
      setusetype(true);
      
    } else {
      setusetype(false);
    }
  };

  // formik staarted here
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    state: "",
    usetype: ""    
  };

  const onSubmit = async (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/signup`,values).then(resp=>{

         console.log(resp)
        if(resp.request.status===200) {
          toast.success(`${resp.data.message}`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined});
            resetForm({});
            window.location = "/";
        }else{
          toast.error(`${resp.data.message}`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined})
        
        };
        setSubmitting(false)
      });
    }catch(e){
   console.log(e.data)
    }
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    phone: Yup.string()
      .required("phone no. is required")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      )
      .min(10, "please enter 10 digit No")
      .max(10, "please enter 10 digit No"),
    city: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("city is Required"),
    usetype: Yup.string().required("select user type"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  return (
<div className="Login">
            <h2 align="center">Register Now</h2>
<Form onSubmit={formik.handleSubmit}>
<Form.Group size="lg" controlId="name">
  <Form.Label>Full Name:</Form.Label>
  <Form.Control
    autoFocus
    type="text"
      name="name"
      placeholder="Enter Name"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.name}
      className={
        formik.errors.name && formik.touched.name
          ? "form-control is-invalid name"
          : "name"
      }
    />
    {formik.errors.name ? (
      <div className="invalid-feedback name">
        {formik.errors.name}
      </div>
    ) : (
      ""
    )}
  </Form.Group>
<Form.Group size="lg" controlId="email">
  <Form.Label>Email ID:</Form.Label>
  <Form.Control
    type="email"
    name="email"
    placeholder="Enter email"
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    value={formik.values.email}
    className={
      formik.errors.email && formik.touched.email
        ? "form-control is-invalid email"
        : "email"
    }
  />
  {formik.errors.email ? (
    <div className="invalid-feedback email">
      {formik.errors.email}
    </div>
  ) : (
    ""
  )}
  </Form.Group>

<Form.Group size="lg" controlId="phone">
  <Form.Label>Phone No:</Form.Label>
  <Form.Control
    type="number"
    name="phone"
    placeholder="Enter phone"
    onBlur={formik.handleBlur}
    onChange={formik.handleChange}
    value={formik.values.phone}
    className={
      formik.errors.phone && formik.touched.phone
        ? "form-control is-invalid phone"
        : "phone"
    }
  />
  {formik.errors.phone ? (
    <div className="invalid-feedback phone">
      {formik.errors.phone}
    </div>
  ) : (
    ""
  )}
</Form.Group>
<Form.Group size="lg" controlId="password">
  <Form.Label>Password</Form.Label>
  <Form.Control
    type="password"
    placeholder="Password"
    name="password"
    onBlur={formik.handleBlur}
    onChange={formik.handleChange}
    value={formik.values.password}
    className={
      formik.errors.password && formik.touched.password
        ? "form-control is-invalid Password"
        : "Password"
    }
  />
  {formik.errors.password ? (
    <div className="invalid-feedback password">
      {formik.errors.password}
    </div>
  ) : (
    ""
  )}
</Form.Group>

{/* <Form.Group size="lg" controlId="state">
  <Form.Label>state</Form.Label>
  <Form.Control
    type="text"
    placeholder="state"
    name="state"
    onBlur={formik.handleBlur}
    onChange={formik.handleChange}
    value={formik.values.state}
    className={
      formik.errors.state && formik.touched.state
        ? "form-control is-invalid state"
        : "state"
    }
  />
  {formik.errors.state ? (
    <div className="invalid-feedback state">
      {formik.errors.state}
    </div>
  ) : (
    ""
  )}
</Form.Group>
<Form.Group size="lg" controlId="usetype">
  <Form.Label>user type</Form.Label>
  <Form.Control
    type="text"
    placeholder="user type"
    name="usetype"
    onBlur={formik.handleBlur}
    onChange={formik.handleChange}
    value={formik.values.usetype}
    className={
      formik.errors.usetype && formik.touched.usetype
        ? "form-control is-invalid usertype"
        : "usertype"
    }
  />
  {formik.errors.usetype ? (
    <div className="invalid-feedback usertype">
      {formik.errors.usetype}
    </div>
  ) : (
    ""
  )}
</Form.Group> */}
<Form.Group size="lg" controlId="state">
  <Form.Label>State:</Form.Label>
  
  <Form.Control as="select"
  name="state"
  onClick={userdropdown}
  onBlur={formik.handleBlur}
  onChange={formik.handleChange}
  value={formik.values.state}
  className={
    formik.errors.state && formik.touched.state
      ? "form-control is-invalid state"
      : "state"
  }
  >
  <option value="Andhra Pradesh">Andhra Pradesh</option>
  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
  <option value="Assam">Assam</option>
  <option value="Bihar">Bihar</option>
  <option value="Chandigarh">Chandigarh</option>
  <option value="Chhattisgarh">Chhattisgarh</option>
  <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
  <option value="Daman and Diu">Daman and Diu</option>
  <option value="Delhi">Delhi</option>
  <option value="Lakshadweep">Lakshadweep</option>
  <option value="Puducherry">Puducherry</option>
  <option value="Goa">Goa</option>
  <option value="Gujarat">Gujarat</option>
  <option value="Haryana">Haryana</option>
  <option value="Himachal Pradesh">Himachal Pradesh</option>
  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  <option value="Jharkhand">Jharkhand</option>
  <option value="Karnataka">Karnataka</option>
  <option value="Kerala">Kerala</option>
  <option value="Madhya Pradesh">Madhya Pradesh</option>
  <option value="Maharashtra">Maharashtra</option>
  <option value="Manipur">Manipur</option>
  <option value="Meghalaya">Meghalaya</option>
  <option value="Mizoram">Mizoram</option>
  <option value="Nagaland">Nagaland</option>
  <option value="Odisha">Odisha</option>
  <option value="Punjab">Punjab</option>
  <option value="Rajasthan">Rajasthan</option>
  <option value="Sikkim">Sikkim</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Telangana">Telangana</option>
  <option value="Tripura">Tripura</option>
  <option value="Uttar Pradesh">Uttar Pradesh</option>
  <option value="Uttarakhand">Uttarakhand</option>
  <option value="West Bengal">West Bengal</option>
  </Form.Control>

  </Form.Group>
  <Form.Group size="lg" controlId="city">
  <Form.Label>City:</Form.Label>
  <Form.Control
   placeholder="Enter city"
   name="city"
   onBlur={formik.handleBlur}
   onChange={formik.handleChange}
   value={formik.values.city}
   className={
     formik.errors.city && formik.touched.city
       ? "form-control is-invalid city"
       : "Password"
   }
    />
    {formik.errors.city ? (
      <div className="invalid-feedback city">
        {formik.errors.city}
      </div>
    ) : (
      ""
    )}
  </Form.Group>
  <Form.Group size="lg" controlId="usetype">
  <Form.Label>User Type:</Form.Label>
  <Form.Control  as="select"
                name="usetype"
                onClick={userdropdown}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.usetype}
                className={
                  formik.errors.usetype && formik.touched.usetype
                    ? "form-control is-invalid type"
                    : "type"
                }
  >
  <option value="User">User</option>
  <option value="Company">Company</option>
  </Form.Control>
  </Form.Group>
<Button block size="lg" type="submit" >
  SignUp Now
</Button>
<br/><br/>

<Link to="/Login" className="btn btn-primary">Existing User? Login Now</Link>

</Form>
</div>
  );
}
