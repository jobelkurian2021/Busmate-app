// import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from 'axios';
import {toast} from 'react-toastify';
import CompanyNavbar from "../../../components/navbar/CompanyNavbar";
// import { getAllLocations } from "../../../components/Utils/Requests/Location";
// import { getAllTravels } from "../../../components/Utils/Requests/Travel";
// import { addNewBus, updateBus } from '../../../components/Utils/Requests/Bus';

import "bootstrap/dist/css/bootstrap.min.css";
import "../../index.css";

toast.configure()

export default function AddBusNew({ DataSou,DataTra }) {
  // const [usetype, setusetype] = useState(false);
 
    // const fetchLocations= this.fetchLocations();
    // const fetchTravels=this.fetchTravels();
  const userdropdown = (e) => {
    if (e.target.value === "Normal") {
      // setusetype(true);
      
      
    } else {
      // setusetype(false);
    }
  };
  const initialValues = {
      name: "",
      type: "Normal",
      busNumber: "",
      fare: "",
      features: "",
      seatsAvailable: "",
      numberOfSeats: "",
      departure_time: "",
      isAvailable: false,
      startLocation: "",
      // locations: [],
      // travels: [],
      // travel: "",
      endLocation: "",
      journeyDate: "",
      boardingPoints: "",
      droppingPoints: ""
    };
    // name:req.body.name,
    // busNumber:req.body.bno,
    // type:req.body.type,
    // startLocation:req.body.sourcedrop,
    // endLocation:req.body.destinationdrop,
    // travel:req.body.travels,
    // journeyDate:req.body.date,
    // departure_time:req.body.time,
    // numberOfSeats:req.body.noofSeats,
    // fare:req.body.fare,
    // boardingPoints:req.body.bpoints,
    // droppingPoints:req.body.dpoints
    
    // fetchLocations = async () => {
    //     const resp = await getAllLocations();
    //     if (resp.status === 200) {
    //       this.setState({
    //         locations: resp.data,
    //         startLocation: resp.data[0]._id,
    //         endLocation: resp.data[resp.data.length - 1]._id
    //       });
    //     }
    //   };
    
    //   fetchTravels = async () => {
    //     const resp = await getAllTravels();
    //     if (resp.status === 200) {
    //       this.setState({
    //         travels: resp.data,
    //         travel: resp.data[0]._id
    //       });
    //     }
    //   };
  const onSubmit = (values, {setSubmitting,resetForm}) => {
    
    try{
      axios.post(`http://localhost:3500/api/bus/addbus`,values).then(resp=>{

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
    .required("name. is required")
    .min(3, "name not valid"),
    bno:Yup.string()
    // .matches(
    //   /^[A-Z]{2}[ -][0-9]{1,2}(?: [A-Z])?(?: [A-Z]*)? [0-9]{4}$/,
    //   "Bus  number is not valid"
    // )
    .required("Bus No is Required"),
    type:Yup.string()
    .required("Bus type is required"),
    travels:Yup.string()
    .required("Bus type is required"),
    sourcedrop: Yup.string()
    .required("source Name is Required"),
    destinationdrop: Yup.string()
    // .when("sourcedrop", {
    //   is: Yup.object.destinationdrop,
    //   then: Yup.string().required("source and destination cant be same")
    // }),
    .required("destination Name is Required"),
    date: Yup.date()
    .min(new Date( Date.now() -86400000), "Trip date must be today or later.")
    .typeError("Please provide a valid date")
    .required("Please specify the trip date"),
    time: Yup.string()
    .required("select trip time"),
    // no: Yup.string().required("select no of passengers"),
    // accomodation: Yup.string().required("select acco"),
    noofSeats:Yup.string()
    .required("noofSeats is required"),
    fare:Yup.string()
    .required("fare is required"),
    bpoints: Yup.string().required("select boarding points"),
    dpoints: Yup.string().required("select dropping points"),
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
                    <h2 align="center">Add new bus </h2>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="name"
            placeholder="Enter name"
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
         <Form.Group size="lg" controlId="bno"> 
          <Form.Label>Bus Number:</Form.Label>
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
         {/* <Form.Group size="lg" controlId="isAvailable"> 
         <div className="form-check check-group">
            <input
              type="checkbox"
              id="checkbox"
              className="form-check-input"
            //   onChange={handleChange("isAvailable")}
            //   checked={values.isAvailable}
            />
            <label className="checkbox-label" htmlFor="checkbox">
              is Available
            </label>
          </div>
          </Form.Group> */}
          <Form.Group size="lg" controlId="type">
          <Form.Label>Bus type:</Form.Label>
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
              <option value="Normal">Normal</option>
              <option value="AC">AC</option>
              <option value="Delux">Delux</option>
              <option value="Suspense AC">Suspense AC</option>
              <option value="Delux">Suspense Delux</option>
          
          </Form.Control>
         </Form.Group>
         <Form.Group size="lg" controlId="travels"> 
          <Form.Label>travels:</Form.Label>
          <Form.Control
            type="text"
            name="travels"
            placeholder="Enter travels"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.travels}
            className={
              formik.errors.travels && formik.touched.travels
                ? "form-control is-invalid travels"
                : "travels"
            }
          />
          {formik.errors.travels ? (
            <div className="invalid-feedback travels">
              {formik.errors.travels}
            </div>
          ) : (
            ""
          )}
         </Form.Group>
         {/* <Form.Group size="lg" controlId="travels">
          <Form.Label>Travels:</Form.Label>
          
          <Form.Control
              as="select"
              name="travels"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.travels}
              className={
                formik.errors.v && formik.touched.travels
                  ? "form-control is-invalid travels"
                  : "travels"
              }
            >
              <option value="Default" disabled>
                      Select Travels
                    </option>
              {DataTra.length &&
                DataTra.map((item) => {
                  return (
                    // <option key={1} defaultValue={DataCat[0]._id}>{DataCat[0].categoreyname}</option>,
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  );
                })
                }
            </Form.Control>
            {formik.errors.travels ? (
              <Form.Control.Feedback type="invalid">
                {formik.errors.travels}
              </Form.Control.Feedback>
            ) : (
              ""
            )}
           </Form.Group> */}
           <Form.Group size="lg" controlId="noofSeats"> 
          <Form.Label>Total Number of Seats:</Form.Label>
          <Form.Control
            type="number"
            name="noofSeats"
            placeholder="Enter noofSeats"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.noofSeats}
            className={
              formik.errors.noofSeats && formik.touched.noofSeats
                ? "form-control is-invalid noofSeats"
                : "noofSeats"
            }
          />
          {formik.errors.noofSeats ? (
            <div className="invalid-feedback noofSeats">
              {formik.errors.noofSeats}
            </div>
          ) : (
            ""
          )}
         </Form.Group>
         <Form.Group size="lg" controlId="source"> 
          <Form.Label>Trip source:</Form.Label>
          <Form.Control
            type="text"
            name="source"
            placeholder="Enter source"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.source}
            className={
              formik.errors.source && formik.touched.source
                ? "form-control is-invalid source"
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
          <Form.Label>Trip destination:</Form.Label>
          <Form.Control
            type="text"
            name="destination"
            placeholder="Enter destination"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.destination}
            className={
              formik.errors.destination && formik.touched.destination
                ? "form-control is-invalid destination"
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
      {/* <Form.Group size="lg" controlId="source">
          <Form.Label>Trip Source:</Form.Label>
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
             <option value="Default" disabled>
                      Select Source
                    </option>
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
                   </Form.Group>

         
         <Form.Group size="lg" controlId="destination">
          <Form.Label>Trip Destination:</Form.Label>
          <Form.Control
            as="select"
            name="sourcedrop"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.destinationdrop}
            className={
              formik.errors.v && formik.touched.destinationdrop
                ? "form-control is-invalid destination"
                : "destination"
            }
          >
             <option value="Default" disabled>
                      Select Destination
                    </option>
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
          {formik.errors.destinationdrop ? (
            <Form.Control.Feedback type="invalid">
              {formik.errors.destinationdrop}
            </Form.Control.Feedback>
          ) : (
            ""
          )}
         </Form.Group> */}
         <Form.Group size="lg" controlId="fare"> 
          <Form.Label>Trip fare:</Form.Label>
          <Form.Control
            type="number"
            name="fare"
            placeholder="Enter fare"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.fare}
            className={
              formik.errors.fare && formik.touched.fare
                ? "form-control is-invalid fare"
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
         {/* <Form.Group size="lg" controlId="seatno">
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
         </Form.Group> */}
         <Form.Group size="lg" controlId="bpoints">
          <Form.Label>Boarding Points:</Form.Label>
          <Form.Control
            type="text"
            name="bpoints"
            placeholder="Enter bpoints"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.bpoints}
            className={
              formik.errors.bpoints && formik.touched.bpoints
                ? "form-control is-invalid bpoints"
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
          <Form.Label>Dropping Points Points:</Form.Label>
          <Form.Control
            type="text"
            name="dpoints"
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

         <Button block size="lg" type="Submit" >
         Submit Data
</Button>
  
        </Form>
    </div>
    </div>
    );
  }




// import React, { Component } from "react";
// import Layout from "../../../components/core/Layout";
// import Swal from "sweetalert2";

// export default class FormPrimaryDetails extends Component {
//   continue = e => {
//     e.preventDefault();

//     if (
//       !this.props.values.name ||
//       !this.props.values.fare ||
//       !this.props.values.busNumber
//     ) {
//       return Swal.fire({
//         type: "error",
//         title: "Fill all the required fields"
//       });
//     }
//     this.props.nextStep();
//   };

//   render() {
//     const { values, handleChange } = this.props;

//     return (
//       <div>        <h3 align="center">Add new bus (Primary details)</h3>
//       <Layout title="Add new bus (Primary details)">
//         <div className="form-group">
//           <label>Name *</label>
//           <input
//             type="text"
//             className="form-control"
//             required
//             placeholder="Enter the bus name"
//             onChange={handleChange("name")}
//             value={values.name}
//           />
//         </div>

//         <div className="form-group">
//           <label>Bus Number *</label>
//           <input
//             type="text"
//             className="form-control"
//             required
//             placeholder="Enter the bus number"
//             onChange={handleChange("busNumber")}
//             value={values.busNumber}
//           />
//           <small className="form-text text-muted">
//             Enter in the format of ba-2-pa
//           </small>
//         </div>

//         <div className="form-check check-group">
//           <input
//             type="checkbox"
//             id="checkbox"
//             className="form-check-input"
//             onChange={handleChange("isAvailable")}
//             checked={values.isAvailable}
//           />
//           <label className="checkbox-label" htmlFor="checkbox">
//             is Available
//           </label>
//         </div>

//         <div className="form-group">
//           <label>Bus type</label>
//           <select
//             className="form-control"
//             value={values.type}
//             onChange={handleChange("type")}
//           >
//             <option>Normal</option>
//             <option>AC</option>
//             <option>Delux</option>
//             <option>Suspense AC</option>
//             <option>Suspense Delux</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Travels</label>
//           <select
//             className="custom-select custom-select-sm form-control"
//             onChange={handleChange("travel")}
//             value={values.travel}
//           >
//             <option value="Default" disabled>
//               Select Travel
//             </option>
//             {values.travels.map(travel => (
//               <option value={travel._id} key={travel._id}>
//                 {travel.name}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Fare (Rs) *</label>
//           <input
//             type="number"
//             className="form-control"
//             required
//             placeholder="Enter the fare of bus"
//             onChange={handleChange("fare")}
//             value={values.fare}
//           />
//         </div>

//         <div className="form-group">
//           <label>Seat Capacity</label>
//           <input
//             type="number"
//             className="form-control"
//             placeholder="Enter toal seats in the bus"
//             onChange={handleChange("numberOfSeats")}
//             value={values.numberOfSeats}
//           />
//         </div>
//         <div className="form-group">
//           <label>Additional Features</label>
//           <input
//             type="text"
//             className="form-control"
//             required
//             placeholder="Separate features with commas"
//             onChange={handleChange("features")}
//             value={values.features}
//           />
//         </div>

//         <div className="form-group">
//           <label>Departure Time *</label>
//           <input
//             type="time"
//             className="form-control"
//             required
//             placeholder="Enter the bus number"
//             onChange={handleChange("departure_time")}
//             value={values.departure_time}
//             disabled={!values.isAvailable}
//           />
//         </div>

//         <div className="form-group">
//           <label>Journey date</label>
//           <input
//             type="date"
//             className="form-control"
//             onChange={handleChange("journeyDate")}
//             value={values.journeyDate}
//             disabled={!values.isAvailable}
//           />
//         </div>

//         <div className="form-group">
//           <label>Start Location</label>

//           <select
//             className="custom-select custom-select-sm form-control"
//             onChange={handleChange("startLocation")}
//             value={values.startLocation}
//           >
//             <option value="Default" disabled>
//               Select Location
//             </option>
//             {values.locations.map(location => (
//               <option value={location.place} key={location.place}>
//                 {location.place}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label>End Location</label>
//           <select
//             className="custom-select custom-select-sm form-control"
//             onChange={handleChange("endLocation")}
//             value={values.endLocation}
//           >
//             <option value="Default" disabled>
//               Select Location
//             </option>
//             {values.locations.map(location => (
//               <option value={location.place} key={location.place}>
//                 {location.place}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div className="form-group">
//           <label>Boarding Points</label>
//           <input
//             type="text"
//             className="form-control"
//             required
//             placeholder="Enter names separated by comma"
//             onChange={handleChange("boardingPoints")}
//             value={values.boardingPoints}
//           />
//         </div>

//         <div className="form-group">
//           <label>Dropping Points</label>
//           <input
//             type="text"
//             className="form-control"
//             required
//             placeholder="Enter names separated by comma"
//             onChange={handleChange("droppingPoints")}
//             value={values.droppingPoints}
//           />
//         </div>

//         <button className="btn btn-info" onClick={this.continue}>
//           Continue to next form
//         </button>
//       </Layout>
//       </div>

//     );
//   }
// }
