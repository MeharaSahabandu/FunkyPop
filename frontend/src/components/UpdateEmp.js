import React, { useEffect, useState } from "react";
import  Axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




export default function UpdateEmp() {

    


    const [name, setName] = useState('');
    const [NIC, setNIC] = useState('');
    const [address, setAddress] = useState('');
    const [contactnumber, setContactnumber] = useState('');
    const [Position, setPosition] = useState('');
    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    const [id, setID] = useState(null);


    const sendDataToAPI = () => {
        Axios.put('http://localhost:8070/employee/update/' + id,
            {
                name, NIC, address, contactnumber, Position
            }
        
            ).then(() => navigate("/read")
            ).then(() => {
                alert("Item Updated")
            }).catch((err) => {
                alert(err)
            })
    
    }


    useEffect(() => {
        setID(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setNIC(localStorage.getItem('NIC'));
        setAddress(localStorage.getItem('address'));
        setPosition(localStorage.getItem('Position'));
        
     
        setContactnumber(localStorage.getItem('contactnumber'));
    }, []);



    return (

        <div id="booking" class="section">
            <div class="section-center">
                <div class="container">
                    <div class="row">
                        <div class="booking-form">
                            <div class="form-header">
                                <center>
                                    <h3>Update Employee</h3></center>
                            </div>
                            <form onSubmit={sendDataToAPI}>
                            
                               
                                <span class="form-label">Full Name</span>
                                <input type="text" value={name} name="name"  onChange={(e) => setName(e.target.value)} /><br />
                                <span class="form-label">NIC</span>
                                <input type="text" value={NIC} name="NIC" onChange={(e) => setNIC(e.target.value)} /><br />
                                <span class="form-label">Address</span>
                                <input type="text" value={address} name="address" onChange={(e) => setAddress(e.target.value)} /><br />
                                <span class="form-label">Contact Number</span>
                                <input type="text" value={contactnumber} name="contactnumber" onChange={(e) => setContactnumber(e.target.value)} /><br />
                                <span class="form-label">Position</span>
                                <input type="text" value={Position} name="Position" onChange={(e) => setPosition(e.target.value)} /><br />
                                
                                <br></br>
                                <Link to='/read'>

                                <button type="submit" onClick={()=>sendDataToAPI()}>UPDATE</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
