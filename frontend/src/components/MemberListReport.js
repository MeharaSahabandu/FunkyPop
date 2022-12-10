import React, { useState, useEffect,useRef } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

import axios from 'axios';

export default function MemberListReport() {

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


    return (

        <section className="ftco-section">
        <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">Member List</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="table-wrap">
                            <table className="table">
                                <thead className="thead-primary">
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last name</th>
                                    </tr>
                                </thead>
                                
                                {members.map((data) => {
                                    return (
                                        <tbody>
                                            <tr>

                                                <td>{data.firstName}</td>
                                                <td>{data.lastName}</td>
                                                <td>{data.emailAddress}</td>
                                    
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
           
            <button onClick={handlePrint} id="downloadButton" className="btn btn-primary">Click to Download Report</button>
            </div>
        </section>

    )
}
