import React, { useState,Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from 'react-router-dom';
import {withFormik} from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';

import "./index.css";

// class Signup extends Component {
  // validateForm() {
  //       return email.length > 0 && password.length > 0;
  // }
  // constructor() {
  //   super();
  //   this.state = {
  //     data: [],
  //     buttonClicked: false
  //   };
  //   this.getDetails = this.getDetails.bind(this);
  // }

  // componentDidMount() {
  //   axios.get("http://localhost:3500/postData").then(res => {
  //     this.setState({
  //       data: res.data
  //     });
  //   });
  // }

  // getDetails() {
  //   if (!this.state.buttonClicked) {
  //     this.setState({
  //       buttonClicked: true
  //     });
  //   }
  // }
  export default function Signup() {
    const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [phone, setPhone] = useState("");
      const [pass, setPass] = useState("");
      const [password, setPassword] = useState("");
      // const [state, setState] = useState("");
      const [city, setCity] = useState("");
      // const [type, setType] = useState("");
    
      const submitData = ()=>{
        fetch("http://10.0.2.2:3500/send-data",{
            method:"post",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              
                name,
                email,
                phone,
                pass,
                password,
                city
            })
        })
        .then(res=>res.json())
        .then(data=>{
            // Alert.alert(`${data.name} is saved successfuly`)
            // navigation.navigate("Home")
        })
        .catch(err=>{
          // Alert.alert("someting went wrong")
      })
  }

      // function validateForm() {
      //   return email.length > 0 && password.length > 0;
      // }
    
      function handleSubmit(event) {
        event.preventDefault();
        alert("you submitted successfully");
      }
      // function withFormik(){
      //   mapPropsToValues: () => ({
      //     name:'',
      //     email:'',
      //     phone:'',
      //     pass:'',
      //     password:'',
      //     city:''
      //   }),
      //   validate: values => {
      //     const errors ={};
    
      //     Object.keys(values).map(v => {
      //       if(!values[v]){
      //         errors[v]= "Required";
      //       }
      //     })
      //       return errors;
      //   }
      // }

  
    return (
      <div className="Login">
            <h2 align="center">Register Now</h2>
      <Form 
      onSubmit={e =>this.submitform(e)}
      onSubmit={handleSubmit}
      >
      <Form.Group size="lg" controlId="name">
          <Form.Label>Full Name:</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            id="name"
            name="name"
            required="required"
            data-validation-required-message="Please enter name"
            onChangeText={text =>setName(text)}
            // value={name}
            // onChange={(e) => setName(e.target.value)}
          />
          </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email ID:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            required="required"
            data-validation-required-message="Please enter email"
            onChangeText={text =>setEmail(text)}
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Phone No:</Form.Label>
          <Form.Control
            type="number"
            id="phone"
            name="phone"
            required="required"
            data-validation-required-message="Please enter phone"
            onChangeText={text =>setPhone(text)}
            // value={phone}
            // onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="pass">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="pass"
            name="pass"
            required="required"
            data-validation-required-message="Please enter password"
            onChangeText={text =>setPassword(text)}
            // value={pass}
            // onChange={(e) => setPass(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Confirm Password:</Form.Label> 
          <Form.Control
            type="password"
            id="password" 
            name="password"
            required="required"
            data-validation-required-message="Please confirm password"
            onChangeText={text =>setPass(text)}
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="state">
          <Form.Label>State:</Form.Label>
          
          <Form.Control as="select">
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
          <option value="Assam">Assam</option>
          <option value="Bihar">Bihar</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Chhattisgarh">Chhattisgarh</option>
          <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
          <option value="Daman and Diu">Daman and Diu</option>
          <option value="Delhi">Delhi</option>
          <option value="Lakshadweep">Lakshadweep</option>
          <option value="Puducherry">Puducherry</option>
          <option value="Goa">Goa</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Haryana">Haryana</option>
          <option value="Himachal Pradesh">Himachal Pradesh</option>
          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Kerala">Kerala</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Manipur">Manipur</option>
          <option value="Meghalaya">Meghalaya</option>
          <option value="Mizoram">Mizoram</option>
          <option value="Nagaland">Nagaland</option>
          <option value="Odisha">Odisha</option>
          <option value="Punjab">Punjab</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Sikkim">Sikkim</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Telangana">Telangana</option>
          <option value="Tripura">Tripura</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Uttarakhand">Uttarakhand</option>
          <option value="West Bengal">West Bengal</option>
          </Form.Control>
            {/* type="text"
            value={state}
            onChange={(e) => setState(e.target.value)} */}

          </Form.Group>
          <Form.Group size="lg" controlId="city">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            id="city"
            name="city"
            required="required"
            data-validation-required-message="Please enter city"
            onChangeText={text =>setCity(text)}
            // value={city}
            // onChange={(e) => setCity(e.target.value)}
            /> 
          </Form.Group>
          <Form.Group size="lg" controlId="type">
          <Form.Label>User Type:</Form.Label>
          <Form.Control  as="select">
          <option value="User">User</option>
          <option value="Company">Company</option>
            {/* type="text"
            value={type}
            onChange={(e) => setType(e.target.value)} */}
          </Form.Control>
          </Form.Group>
        <Button block size="lg" type="submit" 
        // disabled={!validateForm()} 
        onPress={() => submitData()}
        >
          SignUp Now
        </Button>
        <br/><br/>

        <Link to="/Login" className="btn btn-primary">Existing User? Login Now</Link>

      </Form>
      </div>
    );
  
  }
 
// export default withFormik({
//       mapPropsToValues: () => ({
//         name:'',
//         email:'',
//         phone:'',
//         pass:'',
//         password:'',
//         city:''
//       }),
    
    
//     handleSubmit: (values,{setSubmitting}) => {
//       alert("you submitted successfully");
//     }
//   })(Signup);


// export default function Signup() {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");
//   const [type, setType] = useState("");

//   const submitdata = () => {
    
//   }
//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     alert("you submitted successfully");
//   }
//   function withFormik(){
//     mapPropsToValues: () => ({
//       name:'',
//       email:'',
//       phone:'',
//       pass:'',
//       password:'',
//       city:''
//     }),
//     validate: values => {
//       const errors ={};

//       Object.keys(values).map(v => {
//         if(!values[v]){
//           errors[v]= "Required";
//         }
//       })
//         return errors;
//     }
//   }
//   // handleSubmit: (values,{setSubmitting}) => {
//   //   alert("you submitted successfully")
//   // }
//   return (
//     <div className="Login">
//             <h2 align="center">Register Now</h2>
//       <Form onSubmit={handleSubmit}>
//       <Form.Group size="lg" controlId="name">
//           <Form.Label>Full Name:</Form.Label>
//           <Form.Control
//             autoFocus
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           </Form.Group>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Email ID:</Form.Label>
//           <Form.Control
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="email">
//           <Form.Label>Phone No:</Form.Label>
//           <Form.Control
//             type="number"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="pass">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={pass}
//             onChange={(e) => setPass(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="password">
//           <Form.Label>Confirm Password:</Form.Label>
//           <Form.Control
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Form.Group size="lg" controlId="state">
//           <Form.Label>State:</Form.Label>
//           {/* <DropdownButton
//             alignRight
//             title="Select State">
//               <Dropdown.Item eventKey="Andhra Pradesh">Andhra Pradesh</Dropdown.Item>
//               <Dropdown.Item eventKey="Andaman and Nicobar Islands">Andaman and Nicobar Islands</Dropdown.Item>
//               <Dropdown.Item eventKey="Arunachal Pradesh">Arunachal Pradesh</Dropdown.Item>
//               <Dropdown.Item eventKey="Assam">Assam</Dropdown.Item>
//               <Dropdown.Item eventKey="Bihar">Bihar</Dropdown.Item>
//               <Dropdown.Item eventKey="Chandigarh">Chandigarh</Dropdown.Item>
//               <Dropdown.Item eventKey="Chhattisgarh">Chhattisgarh</Dropdown.Item>
//               <Dropdown.Item eventKey="Dadar and Nagar Haveli">Dadar and Nagar Haveli</Dropdown.Item>
//               <Dropdown.Item eventKey="Daman and Diu">Daman and Diu</Dropdown.Item>
//               <Dropdown.Item eventKey="Delhi">Delhi</Dropdown.Item>
//               <Dropdown.Item eventKey="Lakshadweep">Lakshadweep</Dropdown.Item>
//               <Dropdown.Item eventKey="Puducherry">Puducherry</Dropdown.Item>
//               <Dropdown.Item eventKey="Goa">Goa</Dropdown.Item>
//               <Dropdown.Item eventKey="Gujarat">Gujarat</Dropdown.Item>
//               <Dropdown.Item eventKey="Haryana">Haryana</Dropdown.Item>
//               <Dropdown.Item eventKey="Himachal Pradesh">Himachal Pradesh</Dropdown.Item>
//               <Dropdown.Item eventKey="Jammu and Kashmir">Jammu and Kashmir</Dropdown.Item>
//               <Dropdown.Item eventKey="Jharkhand">Jharkhand</Dropdown.Item>
//               <Dropdown.Item eventKey="Karnataka">Karnataka</Dropdown.Item>
//               <Dropdown.Item eventKey="Kerala">Kerala</Dropdown.Item>
//               <Dropdown.Item eventKey="Madhya Pradesh">Madhya Pradesh</Dropdown.Item>
//               <Dropdown.Item eventKey="Maharashtra">Maharashtra</Dropdown.Item>
//               <Dropdown.Item eventKey="Manipur">Manipur</Dropdown.Item>
//               <Dropdown.Item eventKey="Meghalaya">Meghalaya</Dropdown.Item>
//               <Dropdown.Item eventKey="Mizoram">Mizoram</Dropdown.Item>
//               <Dropdown.Item eventKey="Nagaland">Nagaland</Dropdown.Item>
//               <Dropdown.Item eventKey="Odisha">Odisha</Dropdown.Item>
//               <Dropdown.Item eventKey="Punjab">Punjab</Dropdown.Item>
//               <Dropdown.Item eventKey="Rajasthan">Rajasthan</Dropdown.Item>
//               <Dropdown.Item eventKey="Sikkim">Sikkim</Dropdown.Item>
//               <Dropdown.Item eventKey="Tamil Nadu">Tamil Nadu</Dropdown.Item>
//               <Dropdown.Item eventKey="Telangana">Telangana</Dropdown.Item>
//               <Dropdown.Item eventKey="Tripura">Tripura</Dropdown.Item>
//               <Dropdown.Item eventKey="Uttar Pradesh">Uttar Pradesh</Dropdown.Item>
//               <Dropdown.Item eventKey="Uttarakhand">Uttarakhand</Dropdown.Item>
//               <Dropdown.Item eventKey="West Bengal">West Bengal</Dropdown.Item>
//           </DropdownButton> */}
//           <Form.Control as="select">
//           <option value="Andhra Pradesh">Andhra Pradesh</option>
//           <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
//           <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//           <option value="Assam">Assam</option>
//           <option value="Bihar">Bihar</option>
//           <option value="Chandigarh">Chandigarh</option>
//           <option value="Chhattisgarh">Chhattisgarh</option>
//           <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
//           <option value="Daman and Diu">Daman and Diu</option>
//           <option value="Delhi">Delhi</option>
//           <option value="Lakshadweep">Lakshadweep</option>
//           <option value="Puducherry">Puducherry</option>
//           <option value="Goa">Goa</option>
//           <option value="Gujarat">Gujarat</option>
//           <option value="Haryana">Haryana</option>
//           <option value="Himachal Pradesh">Himachal Pradesh</option>
//           <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//           <option value="Jharkhand">Jharkhand</option>
//           <option value="Karnataka">Karnataka</option>
//           <option value="Kerala">Kerala</option>
//           <option value="Madhya Pradesh">Madhya Pradesh</option>
//           <option value="Maharashtra">Maharashtra</option>
//           <option value="Manipur">Manipur</option>
//           <option value="Meghalaya">Meghalaya</option>
//           <option value="Mizoram">Mizoram</option>
//           <option value="Nagaland">Nagaland</option>
//           <option value="Odisha">Odisha</option>
//           <option value="Punjab">Punjab</option>
//           <option value="Rajasthan">Rajasthan</option>
//           <option value="Sikkim">Sikkim</option>
//           <option value="Tamil Nadu">Tamil Nadu</option>
//           <option value="Telangana">Telangana</option>
//           <option value="Tripura">Tripura</option>
//           <option value="Uttar Pradesh">Uttar Pradesh</option>
//           <option value="Uttarakhand">Uttarakhand</option>
//           <option value="West Bengal">West Bengal</option>
//           </Form.Control>
//             {/* type="text"
//             value={state}
//             onChange={(e) => setState(e.target.value)} */}

//           </Form.Group>
//           <Form.Group size="lg" controlId="city">
//           <Form.Label>City:</Form.Label>
//           <Form.Control
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             /> 
//           </Form.Group>
//           <Form.Group size="lg" controlId="type">
//           <Form.Label>User Type:</Form.Label>
//           <Form.Control  as="select">
//           <option value="User">User</option>
//           <option value="Company">Company</option>
//             {/* type="text"
//             value={type}
//             onChange={(e) => setType(e.target.value)} */}
//           </Form.Control>
//           </Form.Group>
//         <Button block size="lg" type="submit" disabled={!validateForm()} onPress={() =>submitdata()}>
//           SignUp Now
//         </Button>
//         <br/><br/>

//         <Link to="/Login" className="btn btn-primary">Existing User? Login Now</Link>

//       </Form>
//     </div>
//   );
// }