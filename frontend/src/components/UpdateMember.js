import React, { useEffect, useState } from "react";
import  axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function UpdateMember(){

    const navigate = useNavigate();
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [Address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [id, setID] = useState(null);



    const sendDataToUpdate = () => {
        axios.put('http://localhost:8070/Member/update/' + id,
            {
                firstName, lastName, dateOfBirth,Address,mobileNumber,emailAddress,userName
            }
        ).then(() => {
            alert("Account has beeen updated")
        }).catch((err) => {
            alert(err)
        })
    }


    useEffect(() => {

        setID(localStorage.getItem('id'));
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setDateOfBirth(localStorage.getItem('dateOfBirth'));
        setAddress(localStorage.getItem('Address'));
        setMobileNumber(localStorage.getItem('mobileNumber'));
        setEmailAddress(localStorage.getItem('emailAddress'));
        setUserName(localStorage.getItem('userName'));
        setPassword(localStorage.getItem('password'));

    }, []);
    
    
    return(
        <div id="booking" class="section">
            <div class="section-center">
                <div class="container">
                    <div class="row">
                        <div class="booking-form">
                            <div class="form-header">
                                <center>
                                    <h3>Update Account</h3></center>
                            </div>
                            <form onSubmit={sendDataToUpdate}>
                            
                               
                                <span class="form-label">First name</span>
                                <input type="text" value={firstName} name="firstName"  onChange={(e) => setFirstName(e.target.value)} /><br />
                                <span class="form-label">Last Name</span>
                                <input type="text" value={lastName} name="lastName" onChange={(e) => setLastName(e.target.value)} /><br />
                                <span class="form-label">Date of Birth</span>
                                <input type="text" value={dateOfBirth} name="dob" onChange={(e) => setDateOfBirth(e.target.value)} /><br />
                                <span class="form-label">Address</span>
                                <input type="text" value={Address} name="address" onChange={(e) => setAddress(e.target.value)} /><br />
                                <span class="form-label">Mobile Number</span>
                                <input type="text" value={mobileNumber} name="mobileNo" onChange={(e) => setMobileNumber(e.target.value)} /><br />
                                <span class="form-label">E-mail</span>
                                <input type="text" value={emailAddress} name="email" onChange={(e) => setEmailAddress(e.target.value)} /><br />
                                <span class="form-label">Username</span>
                                <input type="text" value={userName} name="userName" onChange={(e) => setUserName(e.target.value)} /><br />
                                <br></br>
                                
                                <Link to="/HomePage">
                                <button type="submit" onClick={()=>sendDataToUpdate()}>UPDATE</button>
                                </Link>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
