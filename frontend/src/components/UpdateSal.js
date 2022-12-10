import React, { useEffect, useState } from "react";
import  Axios from "axios";

export default function UpdateSal(){
    const [daysOnLeave, setDaysOnLeave] = useState('');
    const [otRate, setOtRate] = useState('');
    const [otHours, setOtHours] = useState('');
    const [basicSal, setBasicSal] = useState ('');
    const [id, setID] = useState(null);


    const sendDataToUpSal = () => {
        Axios.put('http://localhost:8070/salary/update/'+id,
        {
            daysOnLeave,otRate,otHours,basicSal
        }
        )
    }


    useEffect(()=>{
        setID(localStorage.getItem('ID'));
        setDaysOnLeave(localStorage.getItem('daysOnLeave'));
        setOtRate(localStorage.getItem('otRate'));
        setOtHours(localStorage.getItem('otHours'));
        setBasicSal(localStorage.getItem('basicSal'));
    }, []);


    return(
        <div id="booking" class="section">
        <div class="section-center">
            <div class="container">
                <div class="row">
                    <div class="booking-form">
                        <div class="form-header">
                            <center>
                                <h3>Update Salary Details</h3></center>
                        </div>
                        <form onSubmit={sendDataToUpSal}>
                        
                           
                            <span class="form-label">Days On Leave</span>
                            <input type="text" value={daysOnLeave} name="daysOnLeave"  onChange={(e) => setDaysOnLeave(e.target.value)} /><br />
                            <span class="form-label">Ot Rate</span>
                            <input type="text" value={otRate} name="otRate" onChange={(e) => setOtRate(e.target.value)} /><br />
                            <span class="form-label">Ot Hours</span>
                            <input type="text" value={otHours} name="otHours" onChange={(e) => setOtHours(e.target.value)} /><br />
                            <span class="form-label">Basic Salary</span>
                            <input type="text" value={basicSal} name="basicSal" onChange={(e) => setBasicSal(e.target.value)} /><br />
                            
                            <br></br>
                            <button type="submit" >UPDATE</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
