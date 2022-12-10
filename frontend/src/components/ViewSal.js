import React, { useEffect, useState, useRef } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useReactToPrint } from 'react-to-print';


export default function ReadSal() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'salary-data',
        onAfterPrint: () => alert('Print Success')

    });



    const [salary, setSalary] = useState([]);

    const [sal, setSal] = useState([]);

    var [totSal, setTotSal] = useState([]);

    var Rate = 0;
    var Hours = 0;
    var BasicSalary = 0;
    var leaveDays = 0;
    var datE = 0

    //new
    useEffect(() => {
        Axios.post("http://localhost:8070/salary/add")
            .then((getData) => {
                setTotSal(getData.data);
            })
    })



    //calculate salary
    function calcTotSal(Rate, Hours, LeaveDays) {
        if (LeaveDays > 3) {
            return BasicSalary + (Rate * Hours) - BasicSalary * 0.1;
        } else {
            return BasicSalary + (Rate * Hours);
        }
    }


    useEffect(() => {
        Axios.get("http://localhost:8070/salary/")
            .then((getData) => {
                setSal(getData.data);

            })
    })



    const setID = (_id, daysOnLeave, otRate, otHours, basicSal, datE) => {
        localStorage.setItem('id', _id);
        localStorage.setItem('daysOnLeave', daysOnLeave);
        localStorage.setItem('otRate', otRate);
        localStorage.setItem('otHours', otHours);
        localStorage.setItem('basicSal', basicSal);
        localStorage.setItem('datE', datE);
    }


    /*
    const onDelete = (_id) => {
        Axios.delete("http://localhost:8070/salary/delete/" + _id)
            .then(() => {
            })
    }
    */


    const [search, setSearch] = useState("");
    console.log(search);





    return (

        <section className="ftco-section">
            <div className="container"><br></br>
                <div className="row justify-content-center">
                    <br></br>


                    <div className="col-md-6 text-center mb-5">
                        <form class="">
                            <input class="form-control me-1" type="search" placeholder="Search by employee ID.." onChange={(e) => setSearch(e.target.value)}

                                aria-label="Search"></input>
                            <button class="btn btn-outline-default" type="submit" style={{}}></button>

                        </form>
                        <h2 className="heading-section text-light">Salary Details<br></br>
                            <br></br></h2>

                    </div>


                </div>

                <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>


                    <div className="row">
                        <div className="col-md-12">

                            <div className="table-wrap">
                                <table className="table text-light">
                                    <thead className="thead-primary">
                                        <tr>

                                            <th>EMPLOYEE ID</th>
                                            <th>DAYS ON LEAVE</th>
                                            <th>OT RATE</th>
                                            <th>OT HOURS</th>
                                            <th>BASIC SALARY</th>
                                            <th>DATE</th>
                                            <th>TOTAL SALARY</th>

                                        </tr>
                                    </thead>
                                    {sal.filter((data) => {
                                        return search.toLowerCase() === '' ? data : data.empID.toLowerCase().includes(search)
                                    }).map((data) => {
                                        return (
                                            <tr key={data._id}>

                                                <td>{data.empID}</td>
                                                <td>{leaveDays = data.daysOnLeave}</td>
                                                <td>{Rate = data.otRate}</td>
                                                <td>{Hours = data.otHours}</td>
                                                <td>{BasicSalary = data.basicSal}</td>
                                                <td>{data.datE} </td>
                                                <td>
                                                    <input className="table text-light" value={calcTotSal(Rate, Hours, leaveDays)} disabled ></input>
                                                </td>
                                                <br></br>
                                            </tr>
                                        )
                                    })}
                                </table>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <button onClick={handlePrint} id="downloadButton" className="btn3">Click to Download Report</button>
        </section >

    )
}
