import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
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
  let history = useHistory();
  // const [user, setUser] = useState(false);
  // const [isAuth, setIsAuth] = useState(false);
  
  const onSubmit = async (values) => {
    try{
      axios.post(`http://localhost:3500/api/signin`, values).then(resp=>{
      console.log(resp)
     
        if(resp.data.message==='validuser') {

          if(resp.data.data.status==="ACTIVE" && resp.data.data.OTP==="verified") { 

            if(resp.data.data.usetype==="Admin")
            {
              history.push("/admin/home");
                localStorage.setItem('myemail', resp.data.email);
                localStorage.setItem('role', resp.data.data.usetype);
            }
            if(resp.data.data.usetype==="User")
            {
              history.push("/customerhome");
             localStorage.setItem('myemail', resp.data.email);
             localStorage.setItem('role', resp.data.data.usetype);
            }
            if(resp.data.data.usetype==="Company")
            {
              history.push("/companyhome");
             localStorage.setItem('myemail', resp.data.email);
             localStorage.setItem('role', resp.data.data.usetype);
            }
          } 
          if(resp.data.data.OTP!=="verified"){
            toast.error(`Please verify Email`,{
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined});
              history.push("/Signup/otpresend");
          }
             if(resp.data.data.status!=="ACTIVE"){
              toast.error(`Your account blocked! please contact admin`,{
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
        <br/>
        <Button block size="lg" href="/Signup" type="button">Not a User? Register Now</Button> 
        {/* <Link to="/Signup" className="btn btn-primary" >Not a User? Register Now</Link> */}
        <br/>
        <Form.Text className="text-muted" align="center">
         <Link to="/Forgotpassword">Forgot Password? Reset Now</Link>
            </Form.Text>
      </Form>
    </div>
  );
}