import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function MaterialTable() {

	const [material, setMaterials] = useState([]);

	useEffect(() => {
		Axios.get('http://localhost:8070/material/')
			.then((getMaterila) => {
				setMaterials(getMaterila.data);
			})
	})

	const setID = (_id, materialType, quantity, unitPriceKG, supplierId) => {

		localStorage.setItem('materialType', materialType);
		localStorage.setItem('quantity', quantity);
		localStorage.setItem('unitPriceKG', unitPriceKG);
		localStorage.setItem('supplierId', supplierId);
		localStorage.setItem('ID', _id);
	}

	const onDelete = (_id) => {
		Axios.delete("http://localhost:8070/material/delete/" + _id)
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
					<form className="d-flex">

						<input className="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>

						<button className="btn btn-outline-default" type="submit" style={{}}> Search</button>

					</form>
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section text-light">Materials</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">

						<div className="table-wrap">
							<table className="table text-light">
								<thead className="thead-primary">
									<tr>
										<th>Material Name</th>
										<th>Price per KG</th>
										<th>Supplier Name</th>
										<th>Quantity KG</th>
										<th>Update</th>
										<th>Delete</th>
									</tr>
								</thead>
								{material.filter((data) => {
									return search.toLowerCase() === '' ? data : data.materialType.toLowerCase().includes(search)
								}).map((data) => {
									return (
										<tbody>
											<tr>

												<td>{data.materialType}</td>
												<td>{data.unitPriceKG}</td>
												<td>{data.supplierId}</td>
												<td>{data.quantity}</td>
												<td>
													<Link to='/updatemat'>
														<button className="btn btn-dark" onClick={() => setID(data._id, data.materialType, data.quantity, data.unitPriceKG, data.supplierId)}>
															Update
														</button>
													</Link>
												</td>
												<td>
													<Link to='/materials'>
														<button className="btn btn-danger" onClick={() => submit(data._id)}>
															Delete
														</button>
													</Link>
												</td>
											</tr>

										</tbody>
									)
								}
								)}

							</table>
							<Link to="/matReport">
								<button className="btn btn-dark">Generate Report</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}
