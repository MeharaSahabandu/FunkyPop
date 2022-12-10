import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function RegEmp() {

	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [NIC, setNIC] = useState("");
	const [address, setAddress] = useState("");
	const [contactnumber, setPhone] = useState("");
	const [Position, setPosition] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");


	function sendData(e) {

		e.preventDefault();

		const newEmployee = {
			name,
			NIC,
			address,
			contactnumber,
			Position,
			username,
			password

		}
		axios.post("http://localhost:8070/employee/add", newEmployee).then(() => {
			navigate('/read')

		}).then(() => {

			alert("Employee Added")
		}).catch((err) => {
			alert(err)
		})
	}




	
	return (


		<div id="booking" class="section">
			<div class="section-center">
				<div class="container">
					<div class="row">
						<div class="booking-form">
							<div class="form-header">
								<center>
									<h3>Register  Employee</h3></center>
							</div>
							<form onSubmit={sendData}>
								<div class="row">
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Full Name</span>
											<input class="form-control" type="text" placeholder="Enter your name"
												onChange={(e) => {
													setName(e.target.value);
												}}>
											</input>
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">NIC</span>
											<input class="form-control" type="text" placeholder="Enter your NIC"
												onChange={(e) => {
													setNIC(e.target.value);
												}}></input>
										</div>
									</div>
								</div>
								<div class="form-group">
									<span class="form-label">Address</span>
									<input class="form-control" type="tel" placeholder="Enter your address"
										onChange={(e) => {
											setAddress(e.target.value);
										}}></input>
								</div>
								<div class="form-group">
									<span class="form-label">Phone</span>
									<input class="form-control" type="text" placeholder="Enter Phone Number"
										onChange={(e) => {
											setPhone(e.target.value);
										}}></input>
								</div>
								<div class="form-group">
									<span class="form-label">Position</span>
									<input class="form-control" type="text" placeholder="Enter Position"
										onChange={(e) => {
											setPosition(e.target.value);
										}}></input>
								</div>
								<div class="form-group">
									<span class="form-label">Username</span>
									<input class="form-control" type="text" placeholder="Enter Position"
										onChange={(e) => {
											setUsername(e.target.value);
										}}></input>
								</div>
								<div class="form-group">
									<span class="form-label">Password</span>
									<input class="form-control" type="text" placeholder="Enter Position"
										onChange={(e) => {
											setPassword(e.target.value);
										}}></input>
								</div>

								<div class="form-btn" ><br></br><center>

									<button class="submit-btn" >REGISTER</button>

								</center>

								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}
