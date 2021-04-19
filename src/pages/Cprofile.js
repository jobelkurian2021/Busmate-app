import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
toast.configure()

export default function Cprofile() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [license, setlicense] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [route, setRoute] = useState("");


  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    city: "",
    state: "",
    usetype: ""    
  };
  const onSubmit = (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/cprofile`,values).then(resp=>{

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
                          <h2 align="center">Company Profile</h2>
      <Form onSubmit={formik.handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label>Company Name:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="name"
          placeholder="Enter Company Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={
            formik.errors.name && formik.touched.name
              ? "form-control is-invalid company name"
              : "name"
          }
        />
        {formik.errors.cname ? (
          <div className="invalid-feedback cname">
            {formik.errors.cname}
          </div>
        ) : (
          ""
        )}
          </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Company Email:</Form.Label>
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
        <Form.Group size="lg" controlId="email">
          <Form.Label>Company Website:</Form.Label>
          <Form.Control
            type="number"
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
        </Form.Group> 
        <Form.Group size="lg" controlId="email">
          <Form.Label>Company Address:</Form.Label>
          <Form.Control
            type="number"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group> 
        <Form.Group size="lg" controlId="email">
          <Form.Label>Company Phone:</Form.Label>
          <Form.Control
            type="tel"
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
          <Form.Label>Route Id:</Form.Label>
          <Form.Control
            type="password"
            value={route}
            onChange={(e) => setRoute(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Accomodation Type:</Form.Label>
          <Form.Control
            type="password"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Bus Type:</Form.Label>
          <Form.Control
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          </Form.Group>
          <Form.Group size="lg" controlId="name">
          <Form.Label>Bus License No:</Form.Label>
          <Form.Control
            type="text"
            value={license}
            onChange={(e) => setlicense(e.target.value)}
          />
          </Form.Group>
          <Form.Group size="lg" controlId="name">
          <Form.Label>User Type:</Form.Label>
          <Form.Control
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          </Form.Group>
        <Button block size="lg" type="submit" 
        // disabled={!validateForm()}
        >
          Update
        </Button>
      </Form>
    </div>
  );
}