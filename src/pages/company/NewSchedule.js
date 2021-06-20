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
import CompanyNavbar from "../../components/navbar/CompanyNavbar";



toast.configure()

export default function NewSchedule() {
  const [ setusetype] = useState(false);

  const userdropdown = (e) => {
    if (e.target.value === "LS") {
      // setusetype(true);
      
    } else {
      // setusetype(false);
    }
  };
  const initialValues = {
    routeid: "",
    source: "",
    destination: "",
    type: "",
    starttime: "",
    endtime: "",
    stop1: "",
    time: "",
    fare: ""
    };
  const onSubmit = (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/newschedule`,values).then(resp=>{

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
            window.location = "/companyhome";
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
    routeid: Yup.string()
    .min(3, "routeid is to Short")
    .max(6, "routeid is to Long!")
    .required("routeid is Required"),
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
    starttime: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("select trip starttime"),
    endtime: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("select trip endtime"),
    type: Yup.string()
    .required("select trip type"),
    stop1: Yup.string()
    .min(5, "stop Name is to Short")
    .max(40, "stop Name is to Long!")
    .required("stop Name is Required"),
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
    <CompanyNavbar/>

    <div className="Login">

                    <h2 align="center">Add New Bus Schedule</h2>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group size="lg" controlId="routeid">
          <Form.Label>routeid:</Form.Label>
          <Form.Control
           autoFocus
           type="number"
           name="routeid"
         placeholder="Enter routeid"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.routeid}
         className={
           formik.errors.routeid && formik.touched.routeid
             ? "form-control is-invalid  routeid"
             : "routeid"
         }
       />
       {formik.errors.routeid ? (
         <div className="invalid-feedback routeid">
           {formik.errors.routeid}
         </div>
       ) : (
         ""
       )}
         </Form.Group>
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
         <Form.Group size="lg" controlId="starttime">
          <Form.Label>Trip Start Time:</Form.Label>
          <Form.Control
              type="time"
              name="starttime"
            placeholder="Enter trip starttime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.starttime}
            className={
              formik.errors.starttime && formik.touched.starttime
                ? "form-control is-invalid  starttime"
                : "starttime"
            }
          />
          {formik.errors.starttime ? (
            <div className="invalid-feedback starttime">
              {formik.errors.starttime}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group size="lg" controlId="endtime">
          <Form.Label>Trip End Time:</Form.Label>
          <Form.Control
              type="time"
              name="endtime"
            placeholder="Enter trip endtime"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endtime}
            className={
              formik.errors.endtime && formik.touched.endtime
                ? "form-control is-invalid  endtime"
                : "endtime"
            }
          />
          {formik.errors.endtime ? (
            <div className="invalid-feedback endtime">
              {formik.errors.endtime}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group size="lg" controlId="stop">
          <Form.Label>Trip stop1:</Form.Label>
          <Form.Control
              type="text"
              name="stop"
            placeholder="Enter stop1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.stop}
            className={
              formik.errors.stop && formik.touched.stop
                ? "form-control is-invalid  stop1"
                : "stop1"
            }
          />
          {formik.errors.stop1 ? (
            <div className="invalid-feedback stop1">
              {formik.errors.stop}
            </div>
          ) : (
            ""
          )}
        </Form.Group>
        <Form.Group size="lg" controlId="time">
          <Form.Label>time:</Form.Label>
          <Form.Control
              type="time"
              name="time"
            placeholder="Enter time"
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
          <Form.Label>Trip fare:</Form.Label>
          <Form.Control
              type="number"
              name="fare"
            placeholder="Enter fare"
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