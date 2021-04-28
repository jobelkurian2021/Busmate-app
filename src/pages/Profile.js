import React,{useState,useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';
import "./index.css";
toast.configure()

toast.configure()
export default function Profile() {

const[username,setName]=useState('');
const[userphone,setPhone]=useState('');
const[usercity,setCity]=useState('');
// const[usetype,setusetype]=useState('');
const[hashpass,sethashpass]=useState('');

useEffect( () => {
    try {
const sessionemail=localStorage.getItem("myemail");
async function userdatafetch () {
    await axios({
        method: 'Post',
        url: 'http://localhost:3500/api/profileGet',
        data: {
        email: sessionemail,
        }
      }).then(resp=>{
          
          setName(resp.data.name);
          setPhone(resp.data.phone);
          setCity(resp.data.city);
        //  setusetype(resp.data.type);
         sethashpass(resp.data.password);
      });

   }
   userdatafetch();
    } catch (e) {
        console.error(e);
    }

 
}, []);


    const initialValues = {
        name: username,
        email:localStorage.getItem("myemail"),
        phone: userphone,
        password: "",
        city: usercity,
        // usetype:"",
      };
    
      const onSubmit = (values) => {
        // const senddata={...values,usetype:usetype,hash:hashpass}
      const senddata={...values,hash:hashpass}
      console.log(senddata)
        try{
            axios.put(`http://localhost:3500/api/profileEdit`,senddata).then(resp=>{

       
              if(resp.request.status===200) {
                toast.success(`${resp.data.message}`,{
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined})
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
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string()
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
       
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
  });


  return (
    <div className="Login">
                          <h2 align="center">Edit Profile</h2>
      <Form onSubmit={formik.handleSubmit}>
      <Form.Group size="lg" controlId="name">
          <Form.Label> Name:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="name"
          placeholder="Enter  Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={
            formik.errors.name && formik.touched.name
              ? "form-control is-invalid  name"
              : "name"
          }
        />
        {formik.errors.cname ? (
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
    disabled="disabled"
    onBlur={formik.handleBlur}
    value={formik.values.email}
          className={
            formik.errors.email && formik.touched.email
              ? "form-control is-invalid  email"
              : "name"
          }
  />
            <Form.Label><br/>You can't change your email</Form.Label>

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
          <Form.Label>Enter new Password:</Form.Label> 
          <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password }
                  className={
                    formik.errors.password && formik.touched.password
                      ? "form-control is-invalid Password"
                      : "Password"
                  }
                  
                />
                 <Form.Label><br/>If you want to update password, Type new password here <br/>Else leave it blank.</Form.Label>
                {formik.errors.password ? (
                  <div className="invalid-feedback Password">
                    {formik.errors.password}
                  </div>
                ) : (
                  ""
                )}
        </Form.Group>
        <Form.Group size="lg" controlId="city">
        <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="Enter City"
                  name="city"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  className={
                    formik.errors.city && formik.touched.city
                      ? "form-control is-invalid city"
                      : "city"
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
          <Button block size="lg" type="submit" >
              Update Profile Data
</Button>
      </Form>
    </div>
  );
}