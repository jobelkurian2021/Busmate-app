import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import { Container, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./index.css";
toast.configure()

export default function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (values) => {
    try{
      axios.post(`http://localhost:3500/api/signin`, values).then(resp=>{
      console.log(resp)
     
        if(resp.data.message==='validuser') {
              window.location = "/customerhome";

          if(resp.data.data.status==="ACTIVE " ) { 
            window.location = "/adminhome";

            if(resp.data.data.usetype==="Admin")
            {
                window.location = "/adminhome";
                localStorage.setItem('myemail', resp.data.email);
                localStorage.setItem('loginid', resp.data.data._id);
                localStorage.setItem('role', resp.data.data.usetype);
            }
            if(resp.data.data.usetype==="User")
            {
             window.location = "/customerhome";
             localStorage.setItem('myemail', resp.data.email);
              localStorage.setItem('loginid', resp.data.data._id);
             localStorage.setItem('role', resp.data.data.usetype);
            }
            if(resp.data.data.usetype==="company")
            {
             window.location = "/companyhome";
             localStorage.setItem('myemail', resp.data.email);
              localStorage.setItem('loginid', resp.data.data._id);
             localStorage.setItem('role', resp.data.data.usetype);
            }
          } 
             if(resp.data.data.status!=="ACTIVE"){
              // window.location = "/customerhome";
              toast.error(`your blocked please contact admin`,{
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined});
            }
        }else{
          toast.error(`${resp.data.message}`,{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined})
        }
  
      });
    

    }catch(e){

      console.log(e.data)
    }
   
  };



  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
      .required("Please Enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  // function validateForm() {
  //   return email.length > 0 && password.length > 0;
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  // }
  
  return (
    <div className="Login">
      <h2 align="center">Login Now</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
                placeholder="Enter email"
                name="email"
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
           required
         />
         {formik.errors.password ? (
           <div className="invalid-feedback password">
             {formik.errors.password}
           </div>
         ) : (
           ""
         )}
        </Form.Group>
        <Button block size="lg" type="submit" 
        // disabled={!validateForm()}
        >
          Login
        </Button>
        {/* <Button block size="lg" type="button" onClick={this.btnClick.bind(this)}>
          Not a User? Register Now 
        </Button> */}
        <br/><br/>
        <Link to="/Signup" className="btn btn-primary">Not a User? Register Now</Link>
      </Form>
    </div>
  );
}