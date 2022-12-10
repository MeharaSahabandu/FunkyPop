import React from "react";
import {Link, link} from "react-router-dom";

function DeliveryHeader() {

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">FunkyPop Delivery</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="" style={{color:'white'}}>Home</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="/DeliveryManager"  style={{color:'white'}}>Dashboard</a>
      </li>

      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
          Delivery
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
       
          <a class="dropdown-item" href="/Delivery">Add Delivery</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/Track">Track your Delivery</a>
          
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/DriverSection">Deliver With FunkyPop</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color:'white'}}>
          Delivery Managment
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="/AllDrivers">Delivery Drivers</a>
          
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="/deliveries">Deliveries</a>
        </div>
      </li>
      
    </ul>
  
  </div>
</nav>
  )
}

export default DeliveryHeader;
