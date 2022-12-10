import React, {useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function AddMember(){
    const history = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [Address, setAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function sendData(event){
        event.preventDefault();
        
        const newMember = {

            firstName,
            lastName,
            dateOfBirth,
            Address,
            mobileNumber,
            emailAddress,
            userName,
            password

        }

        axios.post("http://Localhost:8070/Member/memberSignup", newMember).then(() =>{
            alert("member is registered successfully");
            history("/memberLogin");
        }).catch((error) => {
            alert(error);
        })
    }

    
    return (
        <div id="booking" className="section">
            <div className="section-center" style={{marginTop: "60px"}}>
                <div className="container" >
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header" >
                                <h1>Member Registration</h1>
                            </div>
                            <form onSubmit={sendData}>

                                <div className="form-group">
                                    <span className="form-label">First Name</span>
                                    <input className="form-control" type="text" placeholder="Enter the first Name.." required
                                        onChange={(event) => {

                                            setFirstName(event.target.value);

                                        }} />
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Last Name</span>
                                    <input className="form-control" type="text" placeholder="Enter the last name" required
                                        onChange={(event) => {
                                            setLastName(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Date of birth</span>
                                    <input className="form-control" type="date" placeholder="Enter date of birth.. (YYYY-MM-DD)" required
                                        onChange={(event) => {
                                            setDateOfBirth(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Address</span>
                                    <input className="form-control" type="text" placeholder="Enter the Address.." required
                                        onChange={(event) => {
                                            setAddress(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Mobile Number</span>
                                    <input className="form-control" type="text" placeholder="Enter Mobile number.." 
                                        onChange={(event) => {
                                            setMobileNumber(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">E-mail</span>
                                    <input className="form-control" type="text" placeholder="Enter the E-mail Address.." 
                                        onChange={(event) => {
                                            setEmailAddress(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Username</span>
                                    <input className="form-control" type="text" placeholder="Enter the username.." required
                                        onChange={(event) => {
                                            setUserName(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Password</span>
                                    <input className="form-control" type="text" placeholder="Enter the password.." required
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }} />
                                </div><br></br>

                                <div className="form-btn">
                                    
                                    <button type="submit" class="btn btn-dark">Add</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddMember;
