import React, { useState } from "react";
import axios from "axios";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";


function AddSal() {

    const navigate = useNavigate();


    const [empID, setEmpID] = useState("");
    const [daysOnLeave, setDaysOnLeave] = useState("");
    const [otRate, setOtRate] = useState("");
    const [otHours, setOtHours] = useState("");
    const [basicSal, setBasicSal] = useState("");
    const [datE, setdatE] = useState(null);


    function sendData(e) {

        e.preventDefault();

        const newSalary = {
            empID,
            daysOnLeave,
            otRate,
            otHours,
            basicSal,
            datE
        }



        axios.post("http://localhost:8070/salary/add", newSalary).then(() => {
            navigate('/ViewSal')
        }).then(() => {
            alert("Salary Details Added")
        }).catch((err) => {
            alert(err)
        })
    }


    return (
        <div id="booking" class="section">
            <div class="section-center">
                <div class="container">
                    <div class="row">
                        <div class="booking-form">
                            <div class="form-header">
                                <center>
                                    <h3>Add Salary Details</h3></center>
                            </div>
                            <form onSubmit={sendData}>
                                <div class="row">
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="form-label">Employee ID</span>
                                            <input class="form-control" type="text" placeholder="Enter Employee ID"
                                                onChange={(e) => {
                                                    setEmpID(e.target.value);
                                                }}></input>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <span class="form-label">Days On Leave</span>
                                            <input class="form-control" type="text" placeholder="Enter Days On Leave"
                                                onChange={(e) => {
                                                    setDaysOnLeave(e.target.value);
                                                }}></input>
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <span class="form-label">OT Rate</span>
                                    <input class="form-control" type="text" placeholder="Enter OT Rate"
                                        onChange={(e) => {
                                            setOtRate(e.target.value);
                                        }}></input>
                                </div>
                                <div class="form-group">
                                    <span class="form-label">OT Hours</span>
                                    <input class="form-control" type="text" placeholder="Enter OT Hours"
                                        onChange={(e) => {
                                            setOtHours(e.target.value);
                                        }}></input>
                                </div>
                                <div class="form-group">
                                    <span class="form-label">Basic Salary</span>
                                    <input class="form-control" type="tel" placeholder="Enter Basic Salary"
                                        onChange={(e) => {
                                            setBasicSal(e.target.value);
                                        }}></input>
                                </div>



                                <div class="form-group">
                                    <span class="form-label">Date</span>
                                    <DatePicker
                                        selected={datE}
                                        onChange={datE => setdatE(datE)}
                                    />
                                </div>




                                <div class="form-btn"><br></br><center>
                                    <button class="submit-btn">submit</button></center>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default AddSal;
