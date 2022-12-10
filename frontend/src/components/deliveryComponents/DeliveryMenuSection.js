import React from "react";
import {Link, link} from "react-router-dom";

function DeliverySection(){

  return (
<div  style={{margin:'3%',padding:'5%',border:'2px solid black',backgroundColor:'white'}}>
        <h1 class="cover-heading">Welcome To </h1>
        <h1 class="cover-heading">FunkyPop Delivery</h1>
        <p>Easy Tracking.</p>
    <p></p>
    <p class=" lead" style={{margin:'20px'}}>
      <a href="/track" class="btn btnx btn-lg  btn-dark">Track Your Delivery</a>
      
    </p>
    <p class=" lead" style={{margin:'20px'}}>
    <a href="/DriverSection" class="btn btnx btn-lg  btn-dark" >Deliver With FunkyPop</a>
    </p>
  </div>
  )
}

export default DeliverySection
