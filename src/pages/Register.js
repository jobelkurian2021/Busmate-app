import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./register.css";

export default function Register() {
    return (
        <section>
        <div  id="register">
            <div class="form-style-10">
                <h1>Sign Up <span>Register Now</span></h1>
                <form >
                    <div class="inner-wrap">
                        <label>Your Full Name <input type="text" name="name" id='name' /></label>
                        <label>Address <textarea name="addr1" id='addr1'></textarea></label>
                        <label>Company Name <input type="text" name="cname" id='cname'/></label>
                        <label>Phone Number <input type="number" name="phno" id='phone'/></label>
                        <label>Date of Birth <input type="date" name="dob" id='dob' required max="2003-01-01" onblur="getAge()"/></label>
                        <label>User name <input type="text" name="username" id='username' pattern="[a-zA-Z0-9]+" /></label> 
                        <div id="uname_response" ></div>
                        <label>Password <input type="password" name="pass" id='pass' onkeyup="checkPass()"/></label>
                        <label>Confirm Password <input type="password" name="confirm" id='confirm' onkeyup="checkPass()"/></label>
                        <span id="cMessage" class="privacy-policy"></span><br />
                        <label>Email Address <input type="email" name="email" id='email'/></label>
                        <input type='radio' name='role' value='1' checked />Job Provider
                        <input type='radio' name='role' value='2' />Job Seeker<br />
                    </div> 
                    <div class="button-section">
                    <div class="button"> 
                    <label ><input type="submit" name="register" value="Register" /></label>
                    <label><input type="button" name="login"  value="login" onClick="location.href = 'login.php';" /></label>
                </div>
                     <span class="privacy-policy" >
                     <input type="checkbox" name="field7" />You agree to our Terms and Policy. 
                     </span>
                    </div>
                </form>
                </div>
    </div>
    </section>
    );
}