import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import UserNavbar from "../components/navbar/UserNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

toast.configure()

export default function Addroute() {
  const [usetype, setusetype] = useState(false);

  const userdropdown = (e) => {
    if (e.target.value === "1") {
      setusetype(true);
      
    } else {
      setusetype(false);
    }
  };
  const initialValues = {
    email: "",
    phone: "",
    source: "",
    destination: "",
    date: "",
    time: "",
    no: "",
    accomodation: "",
    seatno: "",
    name: "",
    sex: "",
    age: "" 
    };
  const onSubmit = (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/newbooking`,values).then(resp=>{

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
    email: Yup.string().email("Invalid email format").required("Required"),
    phone: Yup.string()
    .required("phone no. is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .min(10, "please enter 10 digit No")
    .max(10, "please enter 10 digit No"),
    source: Yup.string()
    .min(5, "source Name is to Short")
    .max(40, "source Name is to Long!")
    .required("source Name is Required"),
    destination: Yup.string()
    .min(5, "destination Name is to Short")
    .max(40, "destination Name is to Long!")
    .required("destination Name is Required"),
    // date: Yup.string()
    // .min(5, "destination Name is to Short")
    // .max(40, "destination Name is to Long!")
    // .min(new Date(Date.now() -86400000), "Date cannot be in the past")
    // .required("destination Name is Required"),
    date: Yup.date()
    .min(new Date( Date.now() -86400000), "Trip date must be today or later.")
    .typeError("Please provide a valid date")
    .required("Please specify the trip date"),
    time: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("select trip time"),
    no: Yup.string().required("select no of passengers"),
    accomodation: Yup.string().required("select no of passengers"),
    seatno: Yup.string().required("select no of passengers"),
    name: Yup.string()
    .min(3, "invalid name!")
    .max(50, "Too Long!")
    .required("name is Required"),
    sex: Yup.string().required("select passenger gender"),
    age: Yup.string().required("select passengers age"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });
      return ( 
      <div>
        <UserNavbar/>

    <div className="Login">
                    <h2 align="center">Booking Details</h2>
        <Form onSubmit={formik.handleSubmit}>
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
      <Form.Group size="lg" controlId="source">
          <Form.Label>Trip Source:</Form.Label>
          <Form.Control
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
         <Form.Group size="lg" controlId="date">
          <Form.Label>Trip Date:</Form.Label>
          <Form.Control
            type="date"
            name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            className={
              formik.errors.date && formik.touched.date
                ? "form-control is-invalid date"
                : "date"
            }
          />
          {formik.errors.date ? (
            <div className="invalid-feedback date">{formik.errors.date}</div>
          ) : (
            ""
          )}
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
         <Form.Group size="lg" controlId="no">
          <Form.Label>Number of Passengers:</Form.Label>
          <Form.Control as="select" 
           name="no"
           onClick={userdropdown}
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.no}
           className={
             formik.errors.no && formik.touched.no
               ? "form-control is-invalid no"
               : "no"
           }
          >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          </Form.Control>
         </Form.Group>

         <Form.Group size="lg" controlId="accomodation">
          <Form.Label>Accomodation Type:</Form.Label>
          <Form.Control as="select" 
           name="accomodation"
           onClick={userdropdown}
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.accomodation}
           className={
             formik.errors.accomodation && formik.touched.accomodation
               ? "form-control is-invalid accomodation"
               : "accomodation"
           }
          >
          <option value="seater">Seater</option>
          <option value="sleeper">sleeper</option>
          <option value="AC">AC Volvo</option>
          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="seatno">
          <Form.Label> Seat No :</Form.Label>
          <Form.Control as="select" 
            name="seatno"
            onClick={userdropdown}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.seatno}
            className={
              formik.errors.seatno && formik.touched.seatno
                ? "form-control is-invalid seatno"
                : "seatno"
            } 
          >
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
         <Form.Group size="lg" controlId="sex">
          <Form.Label>Passenger Gender:</Form.Label>
          <Form.Control as="select"
          name="sex"
          onClick={userdropdown}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.sex}
          className={
            formik.errors.sex && formik.touched.sex
              ? "form-control is-invalid sex"
              : "sex"
          }
          >
          <option value="Male">Male</option>
          <option value="Female">Female</option>

          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="age">
          <Form.Label>Passenger Age:</Form.Label>
          <Form.Control
            type="number"
            name="age"
            placeholder="Enter age"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.age}
            className={
              formik.errors.age && formik.touched.age
                ? "form-control is-invalid  age"
                : "age"
            }
          />
          {formik.errors.age ? (
            <div className="invalid-feedback age">
              {formik.errors.age}
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
