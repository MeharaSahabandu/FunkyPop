import React, { useEffect, useState } from 'react';
import Axios from 'axios';
//import { Link } from 'react-router-dom';


export default function ReadAttendance() {

    const [attendance, setAttendance] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8070/attendance/")
            .then((getAttendance) => {
                setAttendance(getAttendance.data);
            })
    })

    /*const setID = (datE, empID, total) =>{
        localStorage.setItem('datE', datE);
        localStorage.setItem('empID', empID);
        localStorage.setItem('total', total)
    }*/

    const [search, setSearch] = useState("");
    console.log(search);


    return (
        <section className="ftco-section">
            <div className="container"><br></br>
                <div className="row justify-content-center">
                    <br></br>

                    <div className="col-md-6 text-center mb-5">
                        <form class="">

                            <input class="form-control me-1" type="search" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}

                                aria-label="Search"></input>
                            <button class="btn btn-outline-default" type="submit" style={{}}></button>

                        </form>

                        <br></br>
                        <h2 className="heading-section text-light">Attendance
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="table-wrap">
                            <table className="table text-light">
                                <thead className="thead-primary">
                                    <tr>
                                        <th>Date</th>
                                        <th>Employees</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>

                                {attendance.filter((data) => {
                                    return search.toLowerCase() === '' ? data : data.datE.toLowerCase().includes(search)
                                }).map((data) => {
                                    return (
                                        <tr>
                                            <td>{data.datE}</td>
                                            <td>{data.empID}</td>
                                            <td>{data.total}</td>
                                            <br></br>

                                        </tr>
                                    )
                                })}

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
