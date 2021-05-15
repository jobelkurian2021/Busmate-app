import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

import { toast } from "react-toastify";
toast.configure();

export default function Customer({ DataBrand, DataSou,setTable,TABLE }) {

 

  const initialValues = {
    subcatname: "",
    categoreydrop:"",
    branddrop:"",
  };

  const onSubmit = async (values, {setSubmitting,resetForm}) => {
    console.log(values);
      try{

        axios.post(`http://localhost:5000/product/subcategoreyAdd`, {...values,catone:DataSou[0]._id,brandone:DataBrand[0]._id}).then(resp=>{

          console.log(resp)

          if(resp.data.message==="subcategorey added") {
            toast.success(`${resp.data.message}`,{
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined});
              resetForm({})
              setTimeout(() => {
                window.location.reload(false)
              }, 3000);
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
    subcatname: Yup.string().required("please Add sub-categorey").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    // categoreydrop: Yup.string().required("please Add categorey"),
    // branddrop: Yup.string().required("please Add brand")
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Form className="login_form" onSubmit={formik.handleSubmit}>

             <Form.Group as={Col} controlId="formGridState">
          <Form.Label>source</Form.Label>
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
                  <option key={item.source} value={item.source}>
                    {item.source}
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

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>destination</Form.Label>
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
                  <option key={item.destination} value={item.destination}>
                    {item.destination}
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
        </Form.Group> 


{/*        
        <Button variant="success" type="submit" className="submitbtn m-2">
          Submit
        </Button>
        <Button variant="info" type="button" className="submitbtn m-2" onClick={()=>setTable(!TABLE)}>
                 EDIT PAGE
               </Button>  */}
    
        
      </Form>
    </div>
  );
}

