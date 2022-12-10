es (96 sloc)  4.99 KB

import React , {useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function UpdateExpense(){
    const navigate = useNavigate();
    const [ID , setID] = useState(null);
    const [expenseName, setExpName] = useState('');
    const [expenseValue, setExpValue] = useState('');
    const [expenseDescription, setExpDescription] = useState('');
    
    const sendDataToUpdate =()=>{
        axios.put('http://localhost:8070/expense/update/'+ID,
        {
            expenseName,expenseValue,expenseDescription
        }
        ).then(() => navigate("/view")
        ).then(() => {
            alert("Expense Updated")
        }).catch((err) => {
            
            alert(err)
     })

    //  axios.put("http://localhost:8070/expense/update/").then(()=>{
    //         alert("Expense Updated")
    //     }).catch((err)=>{
    //         alert(err)
    //     })
    }

    //'http://localhost:8080/expense/update/'
    //expenseName,expenseValue,expenseDescription

    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setExpName(localStorage.getItem('expenseName'));
        setExpValue(localStorage.getItem('expenseValue'));
        setExpDescription(localStorage.getItem('expenseDescription'));

    },[]);

    return (
        
        <div id="booking" className="section">
        <div className="section-center">
            <div className="container">
                <div className="row">
                    <div className="booking-form">
                        <div className="form-header">
                            <center>
                                <h3>Update Expense</h3>

                                <form onSubmit={sendDataToUpdate}>
                            <div className="row">
                                
                                <div className="col-sm-6">
                                    <div className="form-group">
                                    <span className="form-label">Expense Type</span>
                                                <select className="form-control" onChange={(e) => {
                                                    setExpName(e.target.value);
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
                                        <input className="form-control" value={expenseValue} name="ExpValue" type="text" placeholder="Enter Value" 
                                            onChange={(e) => {
                                                setExpValue(e.target.value);
                                            }}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <span className="form-label">Description</span>
                                <input className="form-control" value={expenseDescription} name="ExpDesciption" type="text" placeholder="Enter Description" 
                                    onChange={(e) => {
                                        setExpDescription(e.target.value);
                                    }}></input>
                            </div>
                            

                            <div className="form-btn" ><br></br>
                                <center>
                                        <button className="submit-btn" type="submit">Update Now</button><br></br>
                                       
                                </center>
                                
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
