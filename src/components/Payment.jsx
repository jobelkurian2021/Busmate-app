import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Jumbotron, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import UserNavbar from "./navbar/UserNavbar";

// export default function Payment() {
  export default function Payment(props) {
  // const busname1 =busname;
  // const source1 = props.location.source;
  // const destination1 = props.location.destination;
  // const fare = props.location.fare;
  // const total = "20";
  const payfrom ="cart";
  const reqid= "novalue";
  const source1= localStorage.getItem('source');
const destination1= localStorage.getItem('destination');
const fare1= localStorage.getItem('fare');
const email= localStorage.getItem("myemail");
const no1= localStorage.getItem('no');
const fare2 = fare1 * no1;
const date= localStorage.getItem('date');
const time= localStorage.getItem('time');
const busname= localStorage.getItem('busname');
const busno= localStorage.getItem('busno');

  let history = useHistory();

  toast.configure();
  // let history = useHistory();

  const [rps, setrps] = useState(0);
  const [name, setname] = useState("");
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");
  const [no, setno] = useState("");

  useEffect(() => {
    setrps(fare1);

  }, [fare1]);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:3500/api/payment/orders", {
      fare2,
      email: localStorage.getItem("myemail"),
    });
    console.log(result);
    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency, email } = result.data;

    const options = {
      key: "rzp_test_FIzbNAnJGoToSn", // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "BusMate",
      description: "Thank you for booking Ticket with Us.",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          name: name,
          source: source1,
          destination: destination1,
          email: localStorage.getItem("myemail"),
          payfrom: payfrom,
          reqid: reqid,
          price:fare1,
          totalprice:fare2,
          date:date,
          time:time,
          busname:busname,
          busno:busno,
          noofpassengers:no1,
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        console.log(response);

        const result2 = await axios.post(
          "http://localhost:3500/api/payment/success",
          data
        );
        toast.success(`${result2.data.msg}`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        window.location.href = "/Customer/Payment/History";
        if (
          result2.data.msg === "succeffully payed" 
          )
          history.push({ pathname: "/Customer/Payment/History" });
      },
      prefill: {
        name: "BusMate",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  return (
    <Container>
                  <UserNavbar/>

      <Row>
        <Col>
          {rps !== 0 ? (
            <Jumbotron>
              <h3>Connecting to payment gateway.</h3>
              {/* {no1}{source1} */}
              <Form>
                <Form.Row>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                    required
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Label>Starting Location</Form.Label>
                  <Form.Control type="text"
                  value={source1}
                  // value={source}

                  onChange={(e) => setsource(e.target.value)}
                  readonly
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Label>Destination</Form.Label>
                  <Form.Control type="text" 
                   value={destination1}
                  //  value={destination}
                   onChange={(e) => setdestination(e.target.value)}
                   readonly 
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Label>No of passengers:</Form.Label>
                  <Form.Control type="text" 
                   value={no1}
                  //  value={destination}
                   onChange={(e) => setno(e.target.value)}
                   readonly 
                  />
                </Form.Row>
                 {/* <Form.Row size="lg" controlId="no">
                  <Form.Label>No of passengers:</Form.Label>
                  <Form.Control  as="select"
                name="no"
                onChange={(e) => setno(e.target.value)}
                value={no}
                className={
                  formik.errors.usetype && formik.touched.usetype
                    ? "form-control is-invalid type"
                    : "type"
                }
              >
              <option value="1">1</option>
              <option value="2">2</option>
              </Form.Control>
                </Form.Row> */}
              </Form>
              <p>Ticket Rate per Person : {fare1}
              </p>

              <p>Total Amount to Pay : {fare2}
                {/* {rps} */}
                </p>
              <p>
                {rps !== 0 && name !== ""  && (
                  <Button className="App-link" onClick={displayRazorpay}>
                    Click to Continue{" "}
                  </Button>
                 )} 
              </p>
            </Jumbotron>
          ) : (
            <h1>zero cant be added</h1>
          )}
        </Col>
      </Row>
    </Container>
  );
}
