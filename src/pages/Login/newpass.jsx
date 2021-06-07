import React from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

import Navbar from "../../components/navbar/Navbar";

export default function Newpassword() {
    const history = useHistory(); 



  const initialValues = {
    token: "",
    newpassword:"",
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    try {
      axios.post(`http://localhost:3500/api/newpassword`, values).then((resp) => {
        console.log(resp);
        if (resp.data.message === "password updated") {
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
    token: Yup.string().required("Required"),
    newpassword: Yup.string()
       .required("Please Enter your password")
       .matches(
         /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
         "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
       ),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <Navbar />
      <Container>
        <Row>
          <Col>
            <Form className="register_form p-5 " onSubmit={formik.handleSubmit}>
              <h1 className="p-3 ">CHANGE PASSWORD</h1>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Paste Token Below (Token expires in 5 minutes)</Form.Label>
                  <Form.Control
                  type="text"
                  name="token"
                  placeholder="PASTE TOKEN HERE...."
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.token}
                  className={
                    formik.errors.token && formik.touched.token
                      ? "form-control is-invalid token"
                      : "token"
                  }
                />
                {formik.errors.token ? (
                  <div className="invalid-feedback token">
                    {formik.errors.token}
                  </div>
                ) : (
                  ""
                )}
              </Form.Group>
              </Form.Row>
              <Form.Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Enter New Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Type New Password"
                  name="newpassword"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.newpassword}
                  className={
                    formik.errors.newpassword && formik.touched.newpassword
                      ? "form-control is-invalid newpassword"
                      : "newpassword"
                  }
                />
                {formik.errors.newpassword ? (
                  <div className="invalid-feedback newpassword">
                    {formik.errors.newpassword}
                  </div>
                ) : (
                  ""
                )}
              </Form.Group>
              </Form.Row>
              <Button variant="success" type="submit">
                  NEW PASSWORD
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
