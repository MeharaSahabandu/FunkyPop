import axios from 'axios';

import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';


const EmpLogin = () => {

    const historyE = useNavigate();

    const [inputsE, setInputsE] = useState({
        username: "",
        password: ""
    });

    const handleChangeE = (e) => {
        setInputsE(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))

    }

    const sendRequestE = async () => {
        const res = await axios.post('http://localhost:8070/employee/login', {
            username: inputsE.username,
            password: inputsE.password
        }).catch(err => console.log(err));

        const dataEL = await res.data;
        return dataEL;
    }

    const handleSubmitE = (e) => {
        e.preventDefault();
        console.log(inputsE);

        //send http request
        sendRequestE().then(() => historyE("/navE"));
    };

    return (
        <div id="booking" class="section">
            <div class="section-center">
                <div class="container">
                    <div class="row">
                        <div class="booking-form">
                            <div class="form-header">
                                <center>
                                    <h3>Employee Login</h3>
                                </center>
                            </div>

                            <form onSubmit={handleSubmitE}>
                                <div class="row">



                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="form-label">Username</span>
                                            <div class="form-group">

                                                <input type="text" name="username" onChange={handleChangeE} value={inputsE.username} placeholder='Enter Username'></input>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="form-label">Password</span>
                                            <div class="form-group">

                                                <input type="text" name="password" onChange={handleChangeE} value={inputsE.password} placeholder='Enter Password'></input>
                                            </div>
                                        </div>
                                    </div>




                                </div>



                                <div class="form-btn" ><br></br><center>
                                    <button class="submit-btn" >Login</button></center>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    /*
    return (
        
        <div><h1><br></br>
            Employee Login
        </h1>
        <form onSubmit={handleSubmitE}>
            <label>Username</label><br></br>
            <input type="text" name="username" onChange={handleChangeE} value={inputsE.username} placeholder='Enter Username'></input>
            <br></br><br></br>
            <label>Password</label><br></br>
            <input type="text" name="password" onChange={handleChangeE} value={inputsE.password} placeholder='Enter Password'></input>
            <br></br><br></br>
            <button class="submit-btn">login</button>
        </form>
  
        </div>
    )*/
}

export default EmpLogin
