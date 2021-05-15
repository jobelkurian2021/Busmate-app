import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import '../css/booking/animate.css';
import '../css/booking/icomoon.css';
import '../css/booking/themify-icons1.css';
import '../css/booking/bootstrap.css';
import '../css/booking/magnific-popup1.css';
import '../css/booking/bootstrap-datepicker.min.css';
import '../css/booking/owl.carousel.min.css';
import '../css/booking/owl.theme.default.min.css';
import UserNavbar from "../../components/navbar/UserNavbar";

import '../css/style.css';

import { toast } from "react-toastify";
toast.configure();

export default function Search({ DataSou }) {

    const initialValues = {
        subcatname: "",
        categoreydrop:"",
        branddrop:"",
      };

    const validationSchema = Yup.object({
        subcatname: Yup.string().required("please Add sub-categorey").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        date: Yup.date()
    .min(new Date( Date.now() -86400000), "Trip date must be today or later.")
    .typeError("Please provide a valid date")
    .required("Please specify the trip date"),
      });
    const formik = useFormik({
          initialValues,

        validationSchema,
      });
    return(
        <div>
        <UserNavbar/>

        <header id="gtco-header" className="gtco-cover gtco-cover-md" role="banner" 
        // style="background-image: url(images/img_bg_2.jpg)"
        >
        <div className="overlay"></div>
        <div className="gtco-container">
        <div className="row">
        <div className="col-md-12 col-md-offset-0 text-left">



        <div className="row row-mt-15em">
        <div className="col-md-7 mt-text animate-box" data-animate-effect="fadeInUp">
        <h1>Planing Trip ? Book Now</h1>	
        </div>
        <div className="col-md-4 col-md-push-1 animate-box" data-animate-effect="fadeInRight">
        <div className="form-wrap">
        <div className="tab">

        <div className="tab-content">
        <div className="tab-content-inner active" data-content="signup">
        {/* <h3>Book Your Trip</h3> */}
        <form onSubmit={formik.handleSubmit}>
        <div className="row form-group">
        <div className="col-md-12">
            <label for="source">Leaving From</label>
     
          <Form.Control
            as="select"
            name="sourcedrop"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sourcedrop}
            className={
              formik.errors.v && formik.touched.sourcedrop
                ? "form-control is-invalid source"
                : "source"
            }
          >
            {DataSou.length &&
              DataSou.map((item) => {
                return (
                  // <option key={1} defaultValue={DataCat[0]._id}>{DataCat[0].categoreyname}</option>,
                  <option key={item.place} value={item.place}>
                    {item.place}
                  </option>
                );
              })
              }
          </Form.Control>
          {formik.errors.sourcedrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.sourcedrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
 
        </div>
        </div>
        <div className="row form-group">
        <div className="col-md-12">
            <label for="destination">Going To</label>
     
          <Form.Control
            as="select"
            name="destinationdrop"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.destinationdrop}
            className={
              formik.errors.destinationdrop && formik.touched.destinationdrop
                ? "form-control is-invalid destination"
                : "destination"
            }
          >
            {DataSou.length &&
              DataSou.map((item) => {
                return (
                  // <option key={1} defaultValue={DataBrand[0]._id}>{DataBrand[0].brandname}</option>,
                  <option key={item.place} value={item.place}>
                    {item.place}
                  </option>
                );
              })}
          </Form.Control>
          {formik.errors.destinationdrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.destinationdrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
 
                </div>
        </div>

        <div className="row form-group">
        <div className="col-md-12">
            <label for="date-start">Date of Travel</label>
            <input type="date" id="date-start" className="form-control" name="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
            />
            {formik.errors.date ? (
              <div className="invalid-feedback date">{formik.errors.date}</div>
            ) : (
              ""
            )}
        </div>
        </div>

        <div className="row form-group">
        <div className="col-md-12">
            <input type="submit" className="btn btn-primary btn-block" value="Search Buses" />
        </div>
        </div>
        </form>	
        </div>


        </div>
        </div>
        </div>
        </div>
        </div>


        </div>
        </div>
        </div>
        </header>
        </div>    
    );
  }
  