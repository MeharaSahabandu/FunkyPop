import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


export default function Read() {


    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'employee-data',
        onAfterPrint: () => alert('Print Success')

    });



    const [employee, setEmployee] = useState([]);

    const [emp, setEmp] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:8070/employee/")
            .then((getData) => {
                setEmp(getData.data);
            })
    })


    const setID = (_id, name, NIC, address, contactnumber, Position, username, password) => {
        localStorage.setItem('id', _id);
        localStorage.setItem('name', name);
        localStorage.setItem('NIC', NIC);
        localStorage.setItem('address', address);
        localStorage.setItem('contactnumber', contactnumber);
        localStorage.setItem('Position', Position);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
    }

    const onDelete = (_id) => {
        Axios.delete("http://localhost:8070/employee/delete/" + _id)
            .then(() => {

            })
    }

    const submit = (_id) => {

        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure to do this?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => onDelete(_id)
                },
                {
                    label: 'No',
                    //onClick: () => alert('Click No')
                }
            ]
        });
    }

    const [search, setSearch] = useState("");
    console.log(search);


    return (
        <section className="ftco-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5"><br></br><br></br>
                        <form class="">
                            <input class="form-control me-2" type="search" placeholder="Search.." onChange={(e) => setSearch(e.target.value)}

                                aria-label="Search"></input>
                            <button class="btn btn-outline-default" type="submit" style={{}}></button>
                        </form>
                    </div>
                </div>
                <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>


                    <h2 className="heading-section text-light">All Employees<br></br>
                        <br></br></h2>


                    <div className="row">
                        <div className="col-md-12">

                            <div className="table-wrap">
                                <table className="table text-light" >
                                    <thead className="thead-primary">
                                        <tr>

                                            <th>Name</th>
                                            <th>NIC</th>
                                            <th>Address</th>
                                            <th>Contact Number</th>
                                            <th>Position</th>
                                            <th></th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    {emp.filter((data) => {
                                        return search.toLowerCase() === '' ? data : data.name.toLowerCase().includes(search)
                                    }).map((data) => {
                                        return (
                                            <tr>

                                                <td>{data.name}</td>
                                                <td>{data.NIC}</td>
                                                <td>{data.address}</td>
                                                <td>{data.contactnumber}</td>
                                                <td>{data.Position}</td>

                                                <br></br>

                                                <td>
                                                    <Link to='/update'>
                                                        <button className="btn btn-dark" onClick={() => setID(data._id, data.name, data.NIC, data.address, data.contactnumber, data.Position, data.username, data.password)}>
                                                            Update
                                                        </button>
                                                    </Link>
                                                </td>

                                                <td>
                                                    <Link to='/read'>
                                                        <button className="btn btn-danger" onClick={() => onDelete(data._id)}>Delete</button>
                                                    </Link>
                                                </td>

                                                
                                            </tr>
                                        )
                                    })}

                                </table>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section >
    )
}
