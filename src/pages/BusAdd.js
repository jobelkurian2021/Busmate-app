import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import CompanyNavbar from "../components/navbar/CompanyNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

toast.configure()

export default function BusAdd({ DataSou }) {
  const [usetype, setusetype] = useState(false);

//   const userdropdown = (e) => {
//     if (e.target.value === "1") {
//       setusetype(true);
      
//     } else {
//       setusetype(true);
//     }
//   };
  const initialValues = {
    bname: "",
    bno: "",
    source: "",
    destination: "",
    date: "",
    time: "",
    travel: "",
    fare: "",
    bpoints: "",
    dpoints:"",
    noseats: "",
    };
  const onSubmit = (values

    // , {setSubmitting,resetForm}
    ) => {
    
    try{
      axios.post(`http://localhost:3500/api/newbus`,values).then(resp=>{

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
            // resetForm({});
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
        // setSubmitting(false)
      });
    }catch(e){
   console.log(e.data)
    }
  };
  const validationSchema = Yup.object({
    bname: Yup.string()
    .required("Required"),
    bno: Yup.string()
    .required("bno travel. is required"),
    // .matches(
    //   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    //   "Phone number is not valid"
    // )
    // .min(10, "please enter 10 digit No")
    // .max(10, "please enter 10 digit No"),
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
    travel: Yup.string().required("select travel"),
    fare: Yup.string().required("select fare"),
    seatno: Yup.string().required("select no of passengers"),
    bpoints: Yup.string().required("select bpoints"),
    dpoints: Yup.string().required("select dpoints"),
    noseats: Yup.string().required("select seats"),
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
                    <h2 align="center">Booking Details</h2>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group size="lg" controlId="bname">
          <Form.Label>Bus Name:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="bname"
            placeholder="Enter bname"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bname}
            className={
              formik.errors.bname && formik.touched.bname
                ? "form-control is-invalid bname"
                : "bname"
            }
          />
          {formik.errors.bname ? (
            <div className="invalid-feedback bname">
              {formik.errors.bname}
            </div>
          ) : (
            ""
          )}
          </Form.Group>
         <Form.Group size="lg" controlId="bno"> 
          <Form.Label>Bus No:</Form.Label>
          <Form.Control
            type="text"
            name="bno"
            placeholder="Enter bno"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.bno}
            className={
              formik.errors.bno && formik.touched.bno
                ? "form-control is-invalid bno"
                : "bno"
            }
          />
          {formik.errors.bno ? (
            <div className="invalid-feedback bno">
              {formik.errors.bno}
            </div>
          ) : (
            ""
          )}
         </Form.Group>
      <Form.Group size="lg" controlId="source">
          <Form.Label>Source:</Form.Label>
          
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
          <Form.Label>Destination:</Form.Label>
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
         <Form.Group size="lg" controlId="travel">
          <Form.Label>Travels:</Form.Label>
          <Form.Control as="select" 
           name="travel"
        //    onClick={userdropdown}
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.travel}
           className={
             formik.errors.travel && formik.touched.travel
               ? "form-control is-invalid travel"
               : "travel"
           }
          >
          <option value="Vembanad">Vembanad</option>
          <option value="Mybus">Mybus</option>
          <option value="KSRTC">KSRTC</option>
          {/* <option value="4">4</option> */}
          </Form.Control>
         </Form.Group>

         <Form.Group size="lg" controlId="fare">
          <Form.Label>Fare:</Form.Label>
          <Form.Control
            type="text"
            name="fare"
          placeholder="Enter fare  "
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
          {/* <Form.Control as="select" 
           name="fare"
           onClick={userdropdown}
           onBlur={formik.handleBlur}
           onChange={formik.handleChange}
           value={formik.values.fare}
           className={
             formik.errors.fare && formik.touched.fare
               ? "form-control is-invalid fare"
               : "fare"
           }
          >
          <option value="seater">Seater</option>
          <option value="sleeper">sleeper</option>
          <option value="AC">AC Volvo</option>
          </Form.Control> */}
         </Form.Group>
         <Form.Group size="lg" controlId="bpoints">
          <Form.Label> Boarding Points :</Form.Label>
          <Form.Control
            type="text"
            name="bpoints"
          placeholder="Enter bpoints  "
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bpoints}
          className={
            formik.errors.bpoints && formik.touched.bpoints
              ? "form-control is-invalid  bpoints"
              : "bpoints"
          }
        />
        {formik.errors.bpoints ? (
          <div className="invalid-feedback bpoints">
            {formik.errors.bpoints}
          </div>
        ) : (
          "" 
        )}
         </Form.Group>
         <Form.Group size="lg" controlId="dpoints">
          <Form.Label>Dropping Points:</Form.Label>
          <Form.Control
            type="text"
            dpoints="dpoints"
            placeholder="Enter dpoints"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dpoints}
            className={
              formik.errors.dpoints && formik.touched.dpoints
                ? "form-control is-invalid dpoints"
                : "dpoints"
            }
          />
          {formik.errors.dpoints ? (
            <div className="invalid-feedback dpoints">
              {formik.errors.dpoints}
            </div>
          ) : (
            ""
          )}
         </Form.Group>
         <Form.Group size="lg" controlId="noseats">
          <Form.Label>No of Seats:</Form.Label>
          <Form.Control
            type="text"
            dpoints="noseats"
            placeholder="Enter noseats"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.noseats}
            className={
              formik.errors.noseats && formik.touched.noseats
                ? "form-control is-invalid noseats"
                : "noseats"
            }
          />
          {formik.errors.noseats ? (
            <div className="invalid-feedback noseats">
              {formik.errors.noseats}
            </div>
          ) : (
            ""
          )}
         </Form.Group>
        
         <Button block size="lg" type="submit" 
        // disabled={!validateForm()} 
        onClick={() =>onSubmit()}
        >
          Submit Data
        </Button>
        </Form>
    </div>
    </div>
    );
  }
