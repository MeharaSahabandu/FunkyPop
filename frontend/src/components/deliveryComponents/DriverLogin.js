import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import{ useState,useEffect } from "react";


import '../../css/driver.css';


function DriverLogin() {
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [inputs,setInputs] = useState({  
        Email:"",
        Password:"",
    })
       
    const history = useNavigate();

    function  handleChange(e){
        setInputs(prev=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
  
    const sendData =(e)=>{
  
        e.preventDefault();
        setFormErrors(validate(inputs));
        setIsSubmit(true);
    }

    const sendRequest=async()=>{
  
        await axios.post("http://localhost:8070/drivers/login",{

            Email: inputs.Email,
            Password: inputs.Password

        }).then(()=>{

            alert("You have successfully Loged In.")
            history("/DriverProfile");

        }).catch(error => {

            if(error.response.status == 400){
                alert("User not Found. SignUp Please");
            }
            else if(error.response.status == 401){
                alert("Invalid Email/Password");
            }
            else if(error.response.status == 402){
                alert("Your account is not activate Yet");
            }
            else{
                alert(error);
            }

        })   
      
    }

    useEffect(()=>{
        if(Object.keys(formErrors).length === 0 && isSubmit){
            sendRequest();
        }
    },[formErrors]);

    const validate =(values)=>{

        const errors={}
       
        if(!values.Email){
            errors.Email ="Email is required"
        }
        if(!values.Password){
            errors.Password ="Password is required"
        }
        
        return errors
    }
 
    return(   
        <div id="delivery" class="Dsection2">
        <div class="Dsection2-center">
            <div class="Dcontainer">
                <div class="row">
                    <div class="delivery-form">
                                <form onSubmit={sendData}class="row register-form">
                                <div class="form-header">
                                
                                <br/>

                                    <h1 class="Dh1">Driver LogIn</h1>
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
                                    <div class="col-md-12 text-center">
                                        <input type="submit" className="btnD"value="Login" />
                                    </div>   
                                </form>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    )    
}

export default DriverLogin;
