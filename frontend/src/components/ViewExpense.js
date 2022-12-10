import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import '../css/financeView.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 

export default function ExpenseHome() {

	const [expense, setExpense] = useState([]);


	useEffect(() => {
		Axios.get('http://localhost:8070/expense/')
			.then((getExp) => {
				setExpense(getExp.data);
			})
	})

	const setID = (_id, expenseName, expenseValue, expenseDescription) => {


		localStorage.setItem('expenseName', expenseName);
		localStorage.setItem('expenseValue', expenseValue);
		localStorage.setItem('expenseDescription', expenseDescription);
		localStorage.setItem('ID', _id);
	}

	const onDelete = (_id) => {
		Axios.delete("http://localhost:8070/expense/delete/" + _id)
			.then(() => {
				// alert("Expense Deleted");
				window.location.reload();
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
					<div className="col-md-6 text-center mb-5">
						<form class="d-flex"> 
							<input class="form-control me-2" type="search" placeholder="Search" onChange={(e)=>setSearch(e.target.value)} aria-label="Search"></input>
						
						</form>
						<h2 className="heading-section text-light">Expenses</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">

						<div className="table-wrap">
							<table className="table text-light">
								<thead className="thead-primary">
									<tr>

										<th>Expense Name</th>
										<th>Expense Value</th>
										<th>Expense Description</th>
										<th>Update</th>
										<th>Delete</th>
									</tr>
								</thead>
								{expense.filter((data)=>{
									return search.toLowerCase() === '' ? data:data.expenseName.toLowerCase().includes(search)
								}).map((data) => {
									return (
										<tbody>
											<tr key={data._id}>
												<td>{data.expenseName}</td>
												<td>{data.expenseValue}</td>
												<td>{data.expenseDescription}</td>
												<td>
													<Link to='/updateExp'>
														<button className="btn btn-dark" onClick={() => setID(data._id, data.expenseName, data.expenseValue, data.expenseDescription)}>
															Update
														</button>
													</Link>
												</td>
												<td>

													<button className="btn btn-danger" onClick={() => submit(data._id)}>
														Delete
													</button>

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
		</section>

	)

}
// Path: frontend/src/components/UpdateExpense.js
