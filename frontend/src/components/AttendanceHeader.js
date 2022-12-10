import React from "react";
import { Link, link } from "react-router-dom";
import ReadAttendance from "./ReadAttendance";
import ReadSal from "./ViewSal";
import Emp from "./Emp";

function AttendanceHeader() {

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
              <a class="nav-link" href="/Sal" style={{ color: "white" }}>Salary</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/atten" style={{ color: "white" }}>Attendance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}>Manage_Emp_Details</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Emp" style={{ color: "white" }}></a>
            </li>
            <Link to='/loginEmp'>
              <li class="nav-item">
                <button className="">Log Out</button>
              </li>
            </Link>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default AttendanceHeader;
