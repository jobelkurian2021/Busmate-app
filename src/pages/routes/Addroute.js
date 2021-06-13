import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import {Link} from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AdminNavbar from "../../components/navbar/Adminnavbar";



toast.configure()

export default function Addroute() {
  const [ setusetype] = useState(false);

  const userdropdown = (e) => {
    if (e.target.value === "LS") {
      setusetype(true);
      
    } else {
      setusetype(false);
    }
  };
  const initialValues = {
    source: "",
    destination: "",
    type: "",
    time: "",
    fare: ""
    };
  const onSubmit = (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/newroute`,values).then(resp=>{

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
            window.location = "/Admin/BusRoute";
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
    source: Yup.string()
    .min(5, "source Name is to Short")
    .max(40, "source Name is to Long!")
    .required("source Name is Required"),
    destination: Yup.string()
    .min(5, "destination Name is to Short")
    .max(40, "destination Name is to Long!")
    .required("destination Name is Required"),
    time: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("select trip time"),
    type: Yup.string()
    .required("select trip type"),
    fare: Yup.string()
    .min(1, "Too Short!")
    .max(4, "Too Long!")
    .required("select bus fare"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

      return ( 
<div>
        <AdminNavbar />

    <div className="Login">

                    <h2 align="center">Add New Bus Route</h2>
        <Form onSubmit={formik.handleSubmit}>
      <Form.Group size="lg" controlId="source">
          <Form.Label>Trip Source:</Form.Label>
          <Form.Control
           autoFocus
           type="text"
           name="source"
         placeholder="Enter source Name"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.source}
         className={
           formik.errors.source && formik.touched.source
             ? "form-control is-invalid  source"
             : "source"
         }
       />
       {formik.errors.source ? (
         <div className="invalid-feedback source">
           {formik.errors.source}
         </div>
       ) : (
         ""
       )}
         </Form.Group>
         <Form.Group size="lg" controlId="destination">
          <Form.Label>Trip Destination:</Form.Label>
          <Form.Control
             type="text"
             name="destination"
           placeholder="Enter destination Name"
           onChange={formik.handleChange}
           onBlur={formik.handleBlur}
           value={formik.values.destination}
           className={
             formik.errors.destination && formik.touched.destination
               ? "form-control is-invalid  destination"
               : "destination"
           }
         />
         {formik.errors.destination ? (
           <div className="invalid-feedback destination">
             {formik.errors.destination}
           </div>
         ) : (
           ""
         )}
         </Form.Group>
         <Form.Group size="lg" controlId="type">
          <Form.Label>Bus Type:</Form.Label>
          <Form.Control as="select"
          name="type"
          onClick={userdropdown}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.type}
          className={
            formik.errors.type && formik.touched.type
              ? "form-control is-invalid type"
              : "type"
          }
          >
          <option value="LS">Limited Stop</option>
          <option value="SF">Super Fast</option>
          <option value="FP">Fast Passenger</option>
          <option value="NS">Non Stop</option>
          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="time">
          <Form.Label>Trip Time:</Form.Label>
          <Form.Control
              type="time"
              name="time"
            placeholder="Enter trip time"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.time}
            className={
              formik.errors.time && formik.touched.time
                ? "form-control is-invalid  time"
                : "time"
            }
          />
          {formik.errors.time ? (
            <div className="invalid-feedback time">
              {formik.errors.time}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group size="lg" controlId="fare">
          <Form.Label>Trip Fare:</Form.Label>
          <Form.Control
              type="text"
              name="fare"
            placeholder="Enter trip fare"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fare}
            className={
              formik.errors.fare && formik.touched.fare
                ? "form-control is-invalid  fare"
                : "fare"
            }
          />
          {formik.errors.fare ? (
            <div className="invalid-feedback fare">
              {formik.errors.fare}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
         <Button block size="lg" type="submit" 
        // disabled={!validateForm()} 
        // onPress={() =>submitdata()}
        >
          Submit Data
        </Button>
        </Form>
    </div>
    </div>
    );
  }