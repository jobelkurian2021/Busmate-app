import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
toast.configure()


export default function Feedback() {
  // const [usetype, setusetype] = useState(false);

  // const userdropdown = (e) => {
  //   if (e.target.value === "Incorrect-data") {
  //     setusetype(true);
      
  //   } else {
  //     setusetype(false);
  //   }
  // };

  // formik staarted here
  const initialValues = {
    name: "",
    email: "",
    type: "",
    msg: ""    
  };
  const onSubmit = (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/feedback`,values).then(resp=>{

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
    type: Yup.string().required("select error type"),
    msg: Yup.string().required("Required"),
    usetype: Yup.string().required("select user type"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
      return ( 
    <div className="Login">
                    <h2 align="center">User Feedback</h2>
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
            autoFocus
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
     
      <Form.Group size="lg" controlId="type">
          <Form.Label>Type of Issue:</Form.Label>
          <Form.Control
            type="text"
            name="type"
            placeholder="Enter type"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type}
            className={
              formik.errors.type && formik.touched.type
                ? "form-control is-invalid type"
                : "type"
            }
          />
          {formik.errors.type ? (
            <div className="invalid-feedback type">
              {formik.errors.type}
            </div>
          ) : (
            ""
          )}
          {/* <Form.Control as="select"
          name="type"
          // onClick={userdropdown}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.type}
          className={
            formik.errors.type && formik.touched.type
              ? "form-control is-invalid type"
              : "type"
          }
          >
          <option value="Incorrect-data">Incorrect data</option>
          <option value="Page Error">Page Error</option>
          <option value="Form Issue">Form Issue</option>
          <option value="Other Issues" selected="true">Other Issues</option>
          </Form.Control> */}
         </Form.Group>

         <Form.Group size="lg" controlId="msg">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            type="text"
            name="msg"
            placeholder="Enter msg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.msg}
            className={
              formik.errors.msg && formik.touched.msg
                ? "form-control is-invalid msg"
                : "msg"
            }
          />
          {formik.errors.msg ? (
            <div className="invalid-feedback msg">
              {formik.errors.msg}
            </div>
          ) : (
            ""
          )}
         </Form.Group>
        
         <Button block size="lg" type="submit">
          Submit Data
        </Button>
        </Form>
    </div>
    );
  }
  