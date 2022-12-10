import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

import axios from 'axios';

export default function MemberList() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'material-data',
        onAfterPrint: () => alert('Print Success')

    });
    const [members, setMembers] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8070/Member/getMemberList')
            .then((getData) => {
                setMembers(getData.data);
            })
    })

    const setID = (_id, firstName, lastName, dateOfBirth, Address, mobileNumber, emailAddress) => {

        localStorage.setItem('ID', _id);
        localStorage.setItem('fname', firstName);
        localStorage.setItem('lname', lastName);
        localStorage.setItem('DOB', dateOfBirth);
        localStorage.setItem('address', Address);
        localStorage.setItem('mobile', mobileNumber);
        localStorage.setItem('email', emailAddress);
    }

    const [search, setSearch] = useState("");
    console.log(search);
    return (

        <section className="ftco-section">
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <form class="d-flex">

                                <input class="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
                                
                            </form>
                            <h2 className="heading-section">Member List</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">

                            <div className="table-wrap">
                                <table className="table text-light">
                                    <thead className="thead-primary">
                                        <tr>
                                            <th>First Name</th>
                                            <th>Last name</th>
                                            <th>E-mail</th>
                                        </tr>
                                    </thead>

                                    {members.filter((data) => {
                                        return search.toLowerCase() === '' ? data : data.firstName.toLowerCase().includes(search)
                                    }).map((data) => {
                                        return (
                                            <tbody>
                                                <tr>

                                                    <td>{data.firstName}</td>
                                                    <td>{data.lastName}</td>
                                                    <td>{data.emailAddress}</td>
                                                    <td>
                                                        <Link to={"/inspectMember/" + data._id}>
                                                            <button className="btn btn-dark">
                                                                Inspect
                                                            </button>
                                                        </Link>
                                                    </td>

                                                </tr>

                                            </tbody>
                                        )
                                    }
                                    )}

                                </table>

                            </div>
                        </div>
                    </div>
                </div>

                <a href="/memberListReport">
                    <button type="button" className="btn btn-outline-success">
                        {" "}
                        Print this
                    </button>
                </a>
            </div>
        </section>

    )
}
