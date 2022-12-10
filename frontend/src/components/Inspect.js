import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Inspect() {
    const { id } = useParams("id");
    // const [member, setMember] = useState('');
    const [firstName, setFName] = useState('');
    const [lastName, setLName] = useState();
    const [dateOfBirth, setDOB] = useState('');
    const [Address, setAddress] = useState('');
    const [mobileNumber, setMobile] = useState('');
    const [emailAddress, setEmail] = useState('');


    useEffect(() => {

        axios.get("http://localhost:8070/Member/memberDetails/" + id).then((getData) => {
            setFName(getData.data.member.firstName);
            setLName(getData.data.member.lastName);
            setDOB(getData.data.member.dateOfBirth);
            setAddress(getData.data.member.Address);
            setMobile(getData.data.member.mobileNumber);
            setEmail(getData.data.member.emailAddress);
            // console.log(getData.data.member);

        })
    }, []);



    return (

        <div className="main-container">

            <div className="Mededitinv">
                <div className="dropdown">
                    <form className="inventory-form text-light">
                        <div>
                            <h2 className="invH2 text-liht">Member Detials</h2>
                        </div>
                        <div className="inventory-half">
                            <div className="inventory-item">
                                <label className="inventory-label" for="name">First Name </label>
                                <input className="inventory-half-item"
                                    type="text"
                                    name="product_name"
                                    id="name"
                                    value={firstName}
                                    readOnly
                                    onChange={(e) => setFName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="inventory-item">
                                <label className="inventory-label" for="email">Last Name </label>
                                <input className="inventory-half-item"
                                    type="text"
                                    id="email"
                                    name="item_no"
                                    value={lastName}
                                    readOnly
                                    onChange={(e) => setLName(e.target.value)}
                                    required
                                />
                            </div>


                        </div>
                        <div className="inventory-half">
                            <div className="inventory-item">
                                <label className="inventory-label" for="name">Date of Birth</label>
                                <input className="inventory-half-item"
                                    type="date"
                                    id="name"
                                    name="Manufacture_date"
                                    value={dateOfBirth}
                                    readOnly
                                    onChange={(e) => setDOB(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                        <div className="inventory-item">
                            <label className="inventory-label" for="name">Address</label>
                            <input className="inventory-half-item"
                                type="text"
                                id="name"
                                name="expiry_date"
                                value={Address}
                                readOnly
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                        <div className="inventory-item">
                            <label className="inventory-label" for="name">Mobile</label>
                            <input className="inventory-half-item"
                                type="number"
                                id="name"
                                name="expiry_date"
                                value={mobileNumber}
                                readOnly
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>
                        <div className="inventory-item">
                            <label className="inventory-label" for="name">Email</label>
                            <input className="inventory-half-item"
                                type="email"
                                id="name"
                                name="expiry_date"
                                value={emailAddress}
                                readOnly
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>



                    </form>
                </div>

            </div>
        </div>
    );
}
