import React from "react";
import {Link, link} from "react-router-dom";

function DeliveryManager(){

  return (

    <div class="inner cover" style={{margin:'3%',padding:'5%',border:'2px solid black',backgroundColor:'white'}}>
    <h1 class="cover-heading">Welcome To </h1>
    <h1 class="cover-heading">Delivery Manager Dashboard.</h1>
    <p></p>
    <p class=" lead" style={{margin:'20px'}}>
      <a href="/AllDrivers" class="btn btnx btn-lg  btn-dark">Manage Delivery Drivers</a>
      <a href="/Deliveries" class="btn btnx btn-lg  btn-dark">Manage Deliveries</a>
    </p>
  </div>





  )};

  export default DeliveryManager;
