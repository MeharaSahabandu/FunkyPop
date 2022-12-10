import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function MemberLogin() {

    const history = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    function sendData(event) {
        event.preventDefault();

        const member = {
            userName,
            password

        }

        axios.post("http://Localhost:8070/Member/login", member).then((token) =>{
         history("/MemberProfile", {state: {token: token.data.token}})})

        .catch((error) => {
            alert(error);
        })
    }


    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header">
                                <h3>Member Login</h3>
                            </div>
                            <form onSubmit={sendData}>                                

                                <div className="form-group">
                                    <span className="form-label">Username</span>
                                    <input className="form-control" type="text" placeholder="Enter the username.." required
                                        onChange={(event) => {
                                            setUserName(event.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Password</span>
                                    <input className="form-control" type="password" placeholder="Enter the password.." required
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }} />
                                </div><br></br>
                    
                                <div className="form-btn">
                                    <button type="submit" class="btn btn-dark">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberLogin;
