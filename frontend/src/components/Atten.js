import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";



export default function Atten() {
	const navigate = useNavigate();


	const [empID, setempID] = useState("");

	const [datE, setdatE] = useState(null);

	const [total, setTotal] = useState("");

	function sendData(e) {

		e.preventDefault();

		const newAttendance = {
			datE,
			empID,
			total
		}

		axios.post("http://localhost:8070/attendance/add", newAttendance).then(()=>{
			navigate('/viewAttendance')
		}).then(() => {
			alert("Attendance Added")
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
									<h3>Add Attendance</h3>
								</center>
							</div>

							<form onSubmit={sendData}>
								<div class="row">



									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Date</span>
											<div class="form-group">

												<DatePicker
												selected={datE}
												onChange={datE=> setdatE(datE)}
												/>
													
												


											</div>
										</div>
									</div>


									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Employee Numbers</span>
											<div class="form-group">

												<input class="form-control" type="textarea" placeholder="Emp01/ Emp02/ Emp03/.."
													onChange={(e) => {
														setempID(e.target.value);
													}}>
												</input>


											</div>
										</div>
									</div>



									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Total</span>
											<input class="form-control" type="textarea" placeholder="Enter Total"
												onChange={(e) => {
													setTotal(e.target.value);
												}}></input>
										</div>
									</div>
								</div>



								<div class="form-btn" ><br></br><center>
									<button class="submit-btn" >Enter</button></center>
								</div>

								<div class="form-btn" ><br></br><center>
									<Link to ='/viewAttendance'>
									<button class="btn3" >See Attendance</button>
									</Link></center>
								</div>

							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)


}
