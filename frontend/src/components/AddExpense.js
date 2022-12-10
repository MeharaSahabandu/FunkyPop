import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AddExpense() {
    const navigate = useNavigate();

    const [expenseName, setName] = useState("");
    const [expenseValue, setValue] = useState("");
    const [expenseDescription, setDescription]= useState("");

    function sendData(e){

        e.preventDefault();

        const newExpense={
            expenseName,
            expenseValue,
            expenseDescription
        }


        axios.post("http://localhost:8070/expense/add", newExpense).then(()=> {
            navigate("/view") 
    }).then(()=>{
        alert("Expense Added")  
    }).catch((err)=>{
            alert(err)
        })
    }


    return (

            <div id="booking" className="section">
                <div className="section-center">
                    <div className="container">
                        <div className="row">
                            <div className="booking-form">
                                <div className="form-header">
                                    <center>
                                        <h3>Add Expense</h3>

                                        <form onSubmit={sendData}>
									<div className="row">
										<div className="col-sm-6">
											<div className="form-group">
												<span className="form-label">Expense name</span>
                                                <select className="form-control" onChange={(e) => {
                                                    setName(e.target.value);
                                                }}>
                                                    <option>Select Type</option>
                                                    <option>Electricity Bills</option>
                                                    <option>Water bills</option>
                                                    <option>Salary</option>
                                                    <option>Petty Cash</option>
                                                    <option>Rent</option>
                                                    <option>Transport</option>
                                                    <option>Material</option>
                                                    <option>Other</option>
                                                    
                                                </select>
                                                <span className="select-arrow"></span>
											</div>
										</div>
										<div className="col-sm-6">
											<div className="form-group">
												<span className="form-label">Expense value</span>
												<input className="form-control" type="number" placeholder="Enter Value" required
													onChange={(e) => {
														setValue(e.target.value);
													}}></input>
											</div>
										</div>
									</div>
									<div className="form-group">
										<span className="form-label">Description</span>
										<input className="form-control" type="tel" placeholder="Enter Description" required
											onChange={(e) => {
												setDescription(e.target.value);
											}}></input>
									</div>
									

									<div className="form-btn" ><br></br><center>
										<button className="submit-btn" >Add Data</button></center>
									</div>
								</form>

                                    </center>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )

}
