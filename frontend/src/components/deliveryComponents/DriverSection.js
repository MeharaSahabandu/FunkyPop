import React from "react";
import {Link, link} from "react-router-dom";

function DriverSection(){

  return (
<div  style={{margin:'3%',padding:'5%',border:'2px solid black',backgroundColor:'white'}}>
        <h1 class="cover-heading">Welcome To </h1>
        <h1 class="cover-heading">FunkyPop Delivery</h1>
        <p>No boss. Flexible schedule. Quick pay.
        Now you can make money by delivering  orders that people placed .</p>
    <p></p>
    <p class=" lead" style={{margin:'20px'}}>
      <a href="/DriverSignup" class="btn btn-lg  btn-dark">SignUp to deliver</a>
      
    </p>
    <p class=" lead" style={{margin:'20px'}}>
    <a href="/DriverLogin" style={{color:'black'}} >Already have and account? Sign In</a>
    </p>
  </div>
  )
}

export default DriverSection
