import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../../css/driver.css';

function UpdateDriver(){
  const {id} =useParams('');
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputs,setInputs] = useState({
    FirstName: "",
    LastName: "",
    Age: "",
    Gender: "",
    NIC: "",
    MobileNo: "",
    Address: "",
    Email: "",
    Password: "",
    LicenceNo: "",
    VehicleNo: "",
    VehicleType:"",
    Files:"",
    FileName:"",
    Account:"",
    Status:"",
}) ;
    console.log(inputs);
    const [error,setError]= useState(null);  
  const history = useNavigate();
 

    useEffect(()=>{
      if(id){
      sendRequest(id)  
    }
    },[id])
    const sendRequest = async(id)=>{
        try{
          const res =await axios.get("http://localhost:8070/drivers/driver/"+id).then((res)=>{
           
            const hello = setInputs(res.data)
            console.log(inputs);
        })
      }catch(err){ console.log(err)};
            
      
    }
     
    function  handleChange(e){
      setInputs(prev=>({
          ...prev,[e.target.name]:e.target.value
      }))
    }
    
    function  handleFile(e){
      setInputs({
         ...inputs,Files:e.target.files[0],
         FileName:e.target.files[0].name
     })}

     const sendData =(e)=>{
      e.preventDefault();
      setFormErrors(validate(inputs));
      setIsSubmit(true);
  }

  const send=async()=>{

      

     try{const res =await axios.put("http://localhost:8070/drivers/update/"+id,{
      FirstName: inputs.FirstName,
      LastName: inputs.LastName,
      Age: inputs.Age,
      Gender: inputs.Gender,
      NIC: inputs.NIC,
      MobileNo: inputs.MobileNo,
      Address: inputs.Address,
      Email: inputs.Email,
      LicenceNo: inputs.LicenceNo,
      VehicleNo: inputs.VehicleNo,
      VehicleType: inputs.VehicleType,
      Account: inputs.Account,
      Status: inputs.Status,
          
      }).then(()=>{
          alert("You have successfully updated.")
         history("/AllDrivers");
  } )
  } catch (err){

      alert(err);

  }
}

  useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
        send();
    }
},[formErrors]);

  
const validate =(values)=>{ 

    const errors={}
    
    if(!values.FirstName){
        errors.FirstName ="FirstName is required"
    }
    if(!values.LastName){
        errors.LastName ="LastName is required"
    }
    if(!values.Age){
        errors.Age ="Age is required"
    }
    if(!values.Gender){

        errors.Gender ="Gender is required"
    }
    if(!values.Email){

        errors.Email ="Email is required"
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {

        errors.Email = 'Invalid email address'
    }
    if(!values.Password){

        errors.Password ="Password is required"
    }
    else if(values.Password.length <=6){

        errors.Password ="Password should contain more than 6 chracters."
    }
    else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/i.test(values.Password)) {

        errors.Password = 'Password should contain at least one numeric digit and a special character'
    }
    if(!values.NIC){
        errors.NIC="NIC is required"
    }
    else if((values.NIC.length !== 10) && (values.NIC.length !== 12))
    {   
        errors.NIC="Invalid NIC"
    }
    else if(values.NIC.length===10 )
    {   
        var lastIndex = values.NIC.charAt(values.NIC.length-1);
        var others = values.NIC.slice(0,values.NIC.length-1);

        if(lastIndex !== 'V' && lastIndex !== 'X'){
            errors.NIC="Invalid NIC";
        }

        else if(isNaN(others)){
            errors.NIC="Invalid NIC";
        }
        
    }
    else if(values.NIC.length===12){
        if(isNaN(values.NIC)){

            errors.NIC="Invalid NIC";
        }
    }
    if(!values.LicenceNo){
        errors.LicenceNo ="Licence Number is required"
    }
    if(!values.MobileNo){
        errors.MobileNo ="Mobile Number is required"
    }
    
    /*else if(isNaN(values.MobileNo)){
        errors.MobileNo="Invalid MobileNo";
    }*/
    if(!values.VehicleType){
        errors.VehicleType ="Vehicle Type is required"
    }
    if(!values.VehicleNo){
        errors.VehicleNo ="Vehicle Number is required"
    }
    if(!values.Address){
        errors.Address ="Address is required"
    }
    
    return errors
}

  
 return(
    <div id="delivery" class="Dsection">
    
        <div class="Dcontainer">
            <div class="row">
                <div class="delivery-form">
                    
                    
                        <div class="form-header">
                            
							
						</div>
  <form onSubmit={sendData} class="row register-form">
        <div class="form-header">
                                   
                              
            <h1 class="Dh1">Update Driver Details</h1>
        </div>
    <div class="col-md-6">
    <span class="form-label" >Account</span>
    <select class="custom-select"  name="Account" value={inputs.Account} onChange={handleChange} >
          <option  value="" >Select Account Status</option>
          <option  value="Active">Active</option>
          <option  value="Inactive">Inactive</option>

  </select>
  </div>
  
 <div class="col-md-6">
    <span class="form-label" >Driver Status</span>
    <select class="custom-select"  name="Status" value={inputs.Status} onChange={handleChange} >
          <option  value="" >Select Driver Status</option>
          <option  value="Online">Online</option>
          <option  value="Offline">Offline</option>

  </select>
  </div>
  <br/>
  <div class="col-md-6">
      <div class="form-group">
      <span class="form-label" >First Name</span>
      <input type="text" class="form-control" placeholder="First Name"name="FirstName" value={inputs.FirstName} onChange={handleChange}/>
      <p class="error">{formErrors.FirstName}</p>
      </div>
   </div>
  <div class="col-md-6">
      <div class="form-group">
        <span class="form-label" >Last Name</span>
        <input type="text" class="form-control" placeholder="Last Name *"name="LastName" value={inputs.LastName}onChange={handleChange} />
        <p class="error">{formErrors.LastName}</p>
      </div> 
  </div> 
  <div class="form-group col-md-2">
        <span class="form-label" >Age</span>
        <input type="number" class="form-control" placeholder="Age *"name="Age" value={inputs.Age} onChange={handleChange}/>
        <p class="error">{formErrors.Age}</p>
  </div>
  <div class="form-group col-md-4">
  <span class="form-label" >Gender</span>
  <div class="form-check form-check-inline" >
  <input class="form-check-input" type="radio"  name="Gender" value="Male" checked={inputs.Gender=='Male'} onChange={handleChange}/>
  <span class="form-label" for="inlineRadio1">Male</span>
  </div>
  <div class="form-check form-check-inline" >
  <input class="form-check-input" type="radio"  name="Gender" value="Female" checked={inputs.Gender=='Female'} onChange={handleChange} />
  <span class="form-label" for="inlineRadio1">Female</span>
  <p class="error">{formErrors.Gender}</p> 
  </div>                                                               
       
  </div>
  
  <div class="col-md-6">
      <div class="form-group">
        <span class="form-label" >NIC</span>
        <input type="text" maxlength="12" minlength="10" class="form-control" placeholder="NIC" name="NIC" value={inputs.NIC} onChange={handleChange}/>
        <p class="error">{formErrors.NIC}</p>
      </div>
  </div> 

   <div class="col-md-6">
        <span class="form-label" >Licence Number</span>
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Licence No *" name="LicenceNo"value={inputs.LicenceNo}  onChange={handleChange} />
          <p class="error">{formErrors.LicenceNo}</p>
        </div>
  </div>  
  
  
  <div class="col-md-6">
      <div class="form-group">
            <span class="form-label" >Mobile Number</span>
            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Mobile Number *" name="MobileNo" value={inputs.MobileNo} onChange={handleChange}/>
            <p class="error">{formErrors.MobileNo}</p>
      </div>
  </div>
  <div class="col-md-6">
  <span class="form-label" >Vehicle Type</span>
  <select class="custom-select"  name="VehicleType" value={inputs.VehicleType} onChange={handleChange} >
          <option  value="" >Vehicle Type</option>
          <option  value="Bike">Bike</option>
          <option  value="ThreeWeel">Three Weel</option>

  </select>
  <p class="error">{formErrors.VehicleType}</p>
  </div>
  <div class="col-md-6">
      <div class="form-group">
            <span class="form-label" >Vehicle Number</span>
          <input type="text" class="form-control" placeholder="Vehicle Number *" name="VehicleNo" value={inputs.VehicleNo} onChange={handleChange}/>
          <p class="error">{formErrors.VehicleNo}</p>
      </div>
  </div>
  

  <div class="col-md-12">
  <div class="form-group">
        <span class="form-label" >Address</span>
      <textarea class="form-control"  rows="2" placeholder="Address *" name="Address" value={inputs.Address} onChange={handleChange}/>
      <p class="error">{formErrors.Address}</p>
  </div>
  <div class="form-group">
        <span class="form-label" >Email</span>
        <input type="Email" class="form-control"  placeholder="Email *"name="Email"value={inputs.Email} onChange={handleChange}/>
        <p class="error">{formErrors.Email}</p>
  </div>
  {/*<div class="form-group">
        <span class="form-label">{inputs.Files}</span>
        <input type="file" class="form-control"  name="Files" onChange={handleFile}/>
        
  </div>*/}
  <div class="col-md-12 text-center">
  <div class="col-md-6 text-center">
  <a href="/AllDrivers" className="btn btnx" >BACK</a>
  </div>
  <div class="col-md-6 text-center">
  <input type="submit" className="btn btnx" value="Update" />
  
  </div>
  </div>
  </div>
  </form>
  </div>
  </div>
  </div>
  </div>
  
 )
}


export default UpdateDriver                                    
           
                             
                                     
      
      
      
    
  
  
                              
 
                           
  
