import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Jumbotron, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import UserNavbar from "./navbar/UserNavbar";

export default function Payment() {
  // export default function Payment(props) {
  // const total = props.location.state;
  // const payfrom = props.location.payfrom;
  // const reqid = props.location.reqid;
  const total = "20";
  const payfrom ="cart";
  const reqid= "novalue";
  let history = useHistory();

  toast.configure();
  // let history = useHistory();

  const [rps, setrps] = useState(0);
  const [name, setname] = useState("");
  const [source, setsource] = useState("");
  const [destination, setdestination] = useState("");

  useEffect(() => {
    setrps(total);
  }, [total]);

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
      rps,
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
          source: source,
          destination: destination,
          user: email,
          payfrom: payfrom,
          reqid: reqid,
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
        if (
          result2.data.msg === "succeffully payed" 
          )
          history.push({ pathname: "/customer/orders" });
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
              <Form>
                <Form.Row>
                  <Form.Control
                    type="text"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Label>Starting Location</Form.Label>
                  <Form.Control type="text" value="Kottayam" 
                  value={source}
                  onChange={(e) => setsource(e.target.value)}
                  />
                </Form.Row>
                <Form.Row>
                  <Form.Label>Destination</Form.Label>
                  <Form.Control type="text" 
                   value={destination}
                   onChange={(e) => setdestination(e.target.value)}
                  />
                </Form.Row>
              </Form>

              <p>Total price : {rps}</p>
              <p>
                {rps !== 0 && name !== "" && source !== "" && destination !== "" && (
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
