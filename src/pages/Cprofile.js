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

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [site, setSite] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [license, setlicense] = useState("");
  // const [category, setCategory] = useState("");
  // const [type, setType] = useState("");
  // const [route, setRoute] = useState("");


  // function handleSubmit(event) {
  //   event.preventDefault();
  // }

  const [usetype, setusetype] = useState(false);

  const userdropdown = (e) => {
    if (e.target.value === "seater") {
      setusetype(true);
      
    } else {
      setusetype(false);
    }
  };
  const initialValues = {
    name: "",
    email: "",
    site: "",
    address: "",
    phone: "",
    rid: "",
    acc: ""  ,  
    btype: "",
    busno: ""
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
    name: Yup.string()
    .min(5, "Name is to Short")
    .max(50, "Name is to Long!")
    .required("Name is Required"),
    email: Yup.string().email("Invalid email format").required("Company Email address is Required"),
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
      address: Yup.string()
      .min(6, "Address is to Short")
      .max(50, "Address is to Long!")
      .required("Address required"),
    site: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("website is Required"),
    rid: Yup.string()
    .min(2, "Too Short!")
    .max(5, "Too Long!")
    .required("Route id is Required"),
    acc: Yup.string()
    // .min(3, "Too Short!")
    // .max(20, "Too Long!")
    .required("select accomodation type"),
    btype: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("select bus type"),
    busno: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("select bus license no"),
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
            {formik.errors.name}
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
        <Form.Group size="lg" controlId="site">
          <Form.Label>Company Website:</Form.Label>
          <Form.Control
             type="text"  
             name="site"
             placeholder="Enter website"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             value={formik.values.site}
             className={
               formik.errors.site && formik.touched.site
                 ? "form-control is-invalid site"
                 : "site"
             }
           />
           {formik.errors.site ? (
             <div className="invalid-feedback site">
               {formik.errors.site}
             </div>
           ) : (
             ""
           )}
        </Form.Group> 
        <Form.Group size="lg" controlId="address">
          <Form.Label>Company Address:</Form.Label>
          <Form.Control
            type="text"
            name="address"
            placeholder="Enter address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={
              formik.errors.address && formik.touched.address
                ? "form-control is-invalid address"
                : "address"
            }
          />
          {formik.errors.address ? (
            <div className="invalid-feedback address">
              {formik.errors.address}
            </div>
          ) : (
            ""
          )}
        </Form.Group> 
        <Form.Group size="lg" controlId="phone">
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
        <Form.Group size="lg" controlId="rid">
          <Form.Label>Route Id:</Form.Label> 
          <Form.Control
            type="number"
            name="rid"
            placeholder="Enter route id"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.rid}
            className={
              formik.errors.rid && formik.touched.rid
                ? "form-control is-invalid rid"
                : "rid"
            }
          />
          {formik.errors.rid ? (
            <div className="invalid-feedback rid">
              {formik.errors.rid}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group size="lg" controlId="acc">
          <Form.Label>Accomodation Type:</Form.Label>
          <Form.Control as="select"
          name="acc"
          onClick={userdropdown}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.acc}
          className={
            formik.errors.acc && formik.touched.acc
              ? "form-control is-invalid acc"
              : "acc"
          }
          >
          <option value="seater">Seater</option>
          <option value="sleeper">sleeper</option>
          <option value="AC">AC Volvo</option>
         </Form.Control>
        </Form.Group>
        <Form.Group size="lg" controlId="btype">
          <Form.Label>Bus Type:</Form.Label>
          <Form.Control
            type="text"
            name="btype"
            placeholder="Enter Bus Type"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.btype}
            className={
              formik.errors.btype && formik.touched.btype
                ? "form-control is-invalid btype"
                : "btype"
            }
          />
          {formik.errors.btype ? (
            <div className="invalid-feedback btype">
              {formik.errors.btype}
            </div>
          ) : (
            ""
          )} 
          </Form.Group>
          <Form.Group size="lg" controlId="busno">
          <Form.Label>Bus License No:</Form.Label>
          <Form.Control
            type="text"
            name="busno"
            placeholder="Enter Bus License No"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.busno}
            className={
              formik.errors.busno && formik.touched.busno
                ? "form-control is-invalid busno"
                : "busno"
            }
          />
          {formik.errors.busno ? (
            <div className="invalid-feedback busno">
              {formik.errors.busno}
            </div>
          ) : (
            ""
          )}
          </Form.Group>
          <Button block size="lg" type="submit" >
  Create
</Button>
      </Form>
    </div>
  );
}