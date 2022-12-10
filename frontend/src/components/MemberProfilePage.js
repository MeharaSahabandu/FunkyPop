import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from 'react-router-dom';
import { Link } from 'react-router-dom';
axios.defaults.withCredentials = true;


export default function MemberProfilePage(){

    const[member, setMember] = useState();
    const location = useLocation();

    useEffect(() => {
        
    const sendRequest = async () => {
        const res = await axios.get("http://localhost:8070/Member/member",{
            withCredentials: true,
            
            headers:{
                authorization: location.state.token
            }
                
        }).catch(error => console.log(error));
        const data = res.data;
        setMember(data);
        console.log(data);
        return data;
    }
        sendRequest()
    },[]);



    const setID = (_id, firstName, lastName,dateOfBirth, Address, mobileNumber, emailAddress, userName) => {
        localStorage.setItem('id', _id);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('dateOfBirth', dateOfBirth);
        localStorage.setItem('Address', Address);
        localStorage.setItem('mobileNumber', mobileNumber);
        localStorage.setItem('emailAddress', emailAddress);
        localStorage.setItem('userName', userName);
    }
    const onDelete = (_id) => {
		axios.delete("http://localhost:8070/member/deleteProfile/" + _id)
			.then(() => {
				alert("Item Deleted")
			}).catch((err) => {
				alert(err)
			})


	}




    
    
    return(
        <section>
            <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header text-light">
                                {member && 
                                    <h1>
                                        {member.firstName}
                                        {" "}
                                        {member.lastName}
                                    </h1>
                                }
                            </div>
                            <form class="table text-light">                                
                            {member && 
                                <>
                                    <div class="mb-3 row">
                                        <label for="firstName" class="col-sm-2 col-form-label">First name</label>
                                            <div class="col-sm-10">
                                                <input type="text" readonly class="form-control-plaintext text-light" id="firstName" value={member.firstName} />
                                            </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label for="lastName" class="col-sm-2 col-form-label">Last name</label>
                                            <div class="col-sm-10">
                                                <input type="text" readonly class="form-control-plaintext text-light" id="lastName" value={member.lastName} />
                                            </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label for="dob" class="col-sm-2 col-form-label">Date of Birth:</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext text-light" id="dob" value={member.dateOfBirth} />
                                        </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label for="address" class="col-sm-2 col-form-label">Address:</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext text-light" id="address" value={member.Address} />
                                        </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label for="mobileNo" class="col-sm-2 col-form-label">Mobile Number:</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext text-light" id="mobileNo" value={member.mobileNumber} />
                                        </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label for="email" class="col-sm-2 col-form-label">E-mail:</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext text-light" id="email" value={member.emailAddress} />
                                        </div>
                                    </div>

                                    <div class="mb-3 row">
                                        <label for="userName" class="col-sm-2 col-form-label">Username:</label>
                                        <div class="col-sm-10">
                                            <input type="text" readonly class="form-control-plaintext text-light" id="userName" value={member.userName} />
                                        </div>
                                    </div>

                                    


                                    <div className="form-btn">
                                        <Link to='/updateMember'>
                                            <button type="submit" class="btn btn-dark" onClick={() => setID(member._id, member.firstName, member.lastName,member.dateOfBirth, member.Address, member.mobileNumber, member.emailAddress, member.userName)}>Update Account</button>
                                        </Link>
                                    </div>
                                    <div className="form-btn">
                                    <Link to='/memberSignup'>
														<button className="btn btn-danger" onClick={() => onDelete(member._id)}>
															Delete
														</button>
													</Link>
                                    </div>
                                </>

                            }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                

        </section>
    )
}
