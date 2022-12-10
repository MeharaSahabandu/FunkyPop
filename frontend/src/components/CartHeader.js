import React from "react";
import {Link, link} from "react-router-dom";

function Header() {

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
      <div class="container-fluid" >
        <a class="navbar-brand" href="#" style={{ color: "white" }}> <b>FunkyPop</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/" style={{ color: "white" }}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/AllCarts" style={{ color: "white" }}>Products</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/ReadCart" style={{ color: "white" }}>Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout" style={{ color: "white" }}>Purchase Report</a>
            </li>

            
          </ul>
         
        





        </div>
      </div>
    </nav>
  )
}

export default Header;
