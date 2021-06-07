import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { MdEmail } from "react-icons/md"
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";


export default function Resendotp() {
    const history = useHistory(); 



  const initialValues = {
    email: "",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    try {
      axios.post(`http://localhost:3500/api/otpresend`, values).then((resp) => {
        console.log(resp);
        if (resp.data.message === "resended") {
          toast.success(`${resp.data.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
          resetForm({});
          history.push({pathname:"/login"});
        } else {
          toast.error(`${resp.data.message}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });
        }
        setSubmitting(false);
      });
    } catch (e) {
      console.log(e.data);
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form className="register_form p-5 " onSubmit={formik.handleSubmit}>
              <h3 className="p-3 ">Resend OTP again for verification</h3>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Enter Registered Email</Form.Label>
                  <Form.Control
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
              </Form.Row>
              <Button variant="warning" type="submit">
                Resend  <MdEmail/>
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
