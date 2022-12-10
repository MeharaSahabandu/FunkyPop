import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ViewDriver(){
    const {id} =useParams('');
    const [user,setUser] = useState('');
    const Display =async()=>{

                  
        try{
             await axios.get("http://localhost:8070/drivers/driver/"+id).then((res)=>{
                const data =  res.data;
                setUser(data) 
                console.log(user.FirstName)
            })
          }catch(err){ console.log(err)};

    }

    useEffect(()=>{
        if(id){
        Display(id)  
      }
      },[id])


    return(
      <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-4">
            <h2 class="heading-section">{user.FirstName} {user.LastName}</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12">
                 
            <div class="table-wrap ">   
            <table className="table" style={{width:'50%',marginLeft:'25%'}}>
              <tr><td style={{width:'50%'}}>ID</td><td>: {user._id}</td></tr>
              <tr><td>Age</td><td>: {user.Age}</td></tr>
              <tr><td>Gender</td><td>: {user.Gender}</td></tr>
              <tr><td>NIC</td><td>: {user.NIC}</td></tr>
              <tr><td>Mobile Number</td><td>: {user.MobileNo}</td></tr>
              <tr><td>Address</td><td>: {user.Address}</td></tr>
              <tr><td>Email</td><td>: {user.Email}</td></tr>
              <tr><td>Licence Number</td><td>: {user.LicenceNo}</td></tr>
              <tr><td>VehicleType</td><td>: {user.VehicleType}</td></tr>
              <tr><td>Vehicle Number</td><td>: {user.VehicleNo}</td></tr>
              <tr><td>Registerd Date</td><td>: {user.RegisterdDate}</td></tr>
              <tr><td>Account Status</td><td>: {user.Account}</td></tr>
              <tr><td>Driver Status</td><td>: {user.Status}</td></tr>
              <tr><td>File</td><td>: {user.Files}</td></tr>
              
              </table>
              
              </div>

              
      </div>
      <a href="/AllDrivers" className="btn btnx btn-dark" style={{ color: 'white', textDecoration: 'none',marginBottom:'10px',width:'25%'}}>BACK</a>
      </div>
      </div>
      </section>
           )
} 

export default ViewDriver
