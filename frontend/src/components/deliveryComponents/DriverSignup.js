import React from "react";
import{ useState,useEffect } from "react";
import axios from "axios";
import {useNavigate } from "react-router-dom";
import '../../css/driver.css';
import {Link, link} from "react-router-dom";

  
  function DriverSignup() {

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
        Files:null,
        FileName:"",
    })  
  
    //redirect to page
    const history = useNavigate();
  
    //call function Validate 
    const sendData =(e)=>{
        e.preventDefault();
        setFormErrors(validate(inputs));
        setIsSubmit(true);
    }

    //insert data
    const sendRequest=async()=>{
   
    await axios.post("http://localhost:8070/drivers/signup",{
        
        FirstName: inputs.FirstName,
        LastName: inputs.LastName,
        Age: inputs.Age,
        Gender: inputs.Gender,
        NIC: inputs.NIC,
        MobileNo: inputs.MobileNo,
        Address: inputs.Address,
        Email: inputs.Email,
        Password: inputs.Password,
        LicenceNo: inputs.LicenceNo,
        VehicleNo: inputs.VehicleNo,
        VehicleType: inputs.VehicleType,
        Files:inputs.Files,
        FileName:inputs.FileName,
        },{
        headers:{
            'Content-Type':'multipart/form-data'
        }
        }).then(res=>{
        
            alert(res.data)
            history("/DriverLogin");
        
        }).catch(error => {
            if(error.response.status == 406){
                alert("User already exists! Login Insted");
            }
            else if(error.response.status == 419){
                alert("NIC already exists! Login Insted");
            }
            else{
                alert(error);
            }
        })
    }
   
    //call function sendRequest to submit data
    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            sendRequest();
        }
    },[formErrors]);

    //Set input value on change
    function  handleChange(e){
        setInputs(prev=>({
            ...prev,[e.target.name]:e.target.value,    
        }))
    
    }

    //Set input file on change
    function  handleFile(e){
        setInputs({
            ...inputs,Files:e.target.files[0],
            FileName:e.target.files[0].name
        })
    }

//frontend validation
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
    else if(values.MobileNo.length!==10 ){
        errors.MobileNo="Invalid MobileNo";
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
    /*if(!values.Files){
        errors.Files ="File is required"
    }*/

    return errors
}

return(

    <div id="delivery" class="Dsection">
        <div class="Dcontainer">
            <div class="row">
                <div class="delivery-form" id="Signup">
                        
                        <form onSubmit={sendData} class="row register-form">
                            <div class="form-header">
                                    
                                <br/>

                                    <h1 class="Dh1">Driver SignUp</h1>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                <span class="form-label">First Name</span>
                                    <input type="text" class="form-control" placeholder="First Name"name="FirstName" value={inputs.FirstName} onChange={handleChange}/>
                                    <p class="error">{formErrors.FirstName}</p>
                                </div>
                            </div>

                            <div class="col-sm-6">
                                <div class="form-group">
                                    <span class="form-label">Last Name</span>
                                    <input type="text" class="form-control" placeholder="Last Name *"name="LastName" value={inputs.LastName}onChange={handleChange} />
                                    <p class="error">{formErrors.LastName}</p>
                                </div> 
                            </div> 

                            <div class="form-group col-sm-2">
                                <span class="form-label">Age</span>
                                    <input type="number" class="form-control" placeholder="Age *"name="Age" value={inputs.Age} onChange={handleChange}/>
                                    <p class="error">{formErrors.Age}</p>
                            </div>

                            <div class="form-group col-sm-4">
                            <span class="form-label">Gender</span>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio"  name="Gender" value="Male" onChange={handleChange} />
                                    <span class="form-label" for="inlineRadio1">Male</span>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio"  name="Gender" value="Female" onChange={handleChange} />
                                    <span class="form-label" for="inlineRadio1">Female</span>
                                </div>                                                               
                                <p class="error">{formErrors.Gender}</p>    
                            </div>
                            
                            <div class="col-sm-6">
                            <span class="form-label">NIC</span>
                                <div class="form-group">
                                    <input type="text" maxlength="12" minlength="10" class="form-control" placeholder="NIC" name="NIC" value={inputs.NIC} onChange={handleChange}/>
                                    <p class="error">{formErrors.NIC}</p>
                                </div>
                            </div> 

                            <div class="col-sm-6">
                            <span class="form-label">Licence Number</span>
                                <div class="form-group">
                                    <input type="text"  class="form-control" placeholder="Licence No *" name="LicenceNo"value={inputs.LicenceNo}  onChange={handleChange} />
                                    <p class="error">{formErrors.LicenceNo}</p>
                                </div>
                            </div>  
                            
                            <div class="col-sm-6">
                                <div class="form-group">
                                <span class="form-label">Mobile Number</span>
                                    <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Mobile Number *" name="MobileNo" value={inputs.MobileNo} onChange={handleChange}/>
                                    <p class="error">{formErrors.MobileNo}</p>
                                </div>
                            </div>

                            <div class="col-sm-6">
                            <div class="form-group">
                            <span class="form-label">Vehicle Type</span>
                                <select class="custom-select"  name="VehicleType" value={inputs.VehicleType} onChange={handleChange} >
                                    <option  value="" >Vehicle Type</option>
                                    <option  value="Bike">Bike</option>
                                    <option  value="ThreeWeel">Three Wheel</option>
                                    <option  value="Car">Car</option>
                                    <option  value="Formula 1 car">Formula 1 car</option>
                                </select>
                                <p class="error">{formErrors.VehicleType}</p>
                            </div>
                            </div>

                            <div class="col-sm-6">
                            
                                <div class="form-group">
                                    <span class="form-label">Vehicle Number</span>
                                    <input type="text"  class="form-control" placeholder="Vehicle Number *" name="VehicleNo" value={inputs.VehicleNo} onChange={handleChange}/>
                                    <p class="error">{formErrors.VehicleNo}</p>
                                </div>
                            </div>
                            
                        
                            <div class="col-sm-12">

                                <div class="form-group">
                                <span class="form-label">Address</span>
                                    <textarea class="form-control"  rows="2" placeholder="Address *" name="Address" value={inputs.Address} onChange={handleChange}/>
                                    <p class="error">{formErrors.Address}</p>
                                </div>

                                <div class="form-group">
                                    <span class="form-label">Email</span>
                                    <input type="Email" class="form-control"  placeholder="Email *"name="Email"value={inputs.Email} onChange={handleChange}/>
                                    <p class="error">{formErrors.Email}</p>
                                </div>

                                <div class="form-group">
                                    <span class="form-label">Password</span>
                                    <input type="Password" class="form-control"  placeholder="Password *"name="Password" value={inputs.Password} onChange={handleChange}/>
                                    <p class="error">{formErrors.Password}</p>
                                </div>
                                


                                <div class="col-sm-12 text-center">
                                    <input type="submit" className="btn btn-dark"value="Register"/>
                                </div>
                            </div>
                                </form>
                        </div>
                </div>
            </div>
        </div>
   
)


  }

  export default  DriverSignup;                                    
                                             
                                                                   
                                                                       
                                        
                                        
                                        
                                      
                                    
                                    
                                                                    
                                   
                                                                
                                     
