import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Form, Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';



export default function ViewStock() {

	const [Exp, setExp] = useState([]);


	useEffect(() => {
		Axios.get("http://localhost:8070/material/")
			.then((getData) => {
				setExp(getData.data);
			})
	})
	const setID = (_id, materialType, unitPriceKG, quantity, TotalPrice) => {

		localStorage.setItem('materialType', materialType);
		localStorage.setItem('unitPriceKG', unitPriceKG);
		localStorage.setItem('Quantity', quantity);
		localStorage.setItem('TotalPrice', TotalPrice);
		localStorage.setItem('ID', _id);
	}

	
    const [Exp2,setExp2]=useState([]);
    useEffect(() => {
		Axios.get("http://localhost:8070/expense/")
			.then((getData) => {
				setExp2(getData.data);
			})
	})
	const setID2 = (_id, expenseName, expenseValue) => {

		localStorage.setItem('expenseName', expenseName);
		localStorage.setItem('expenseValue', expenseValue);
		localStorage.setItem('ID', _id);
	}

	var grandtot = 0;
    var tot=0;
    var grandtot2=0
	return (

		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section text-light">Stock Values</h2>

					</div>

				</div>

				<div className="row">
					<div className="col-md-12">

						<div className="table-wrap">
							<table className="table text-white">
								<thead className="thead-primary">
									<tr>
										<th>Material Name</th>
										<th>Total Price</th>
										<th>Cumulative Total</th>

									</tr>
								</thead>
								{Exp.map((data) => {
									return (
                                        
										<tbody>
											<tr>

												<td>{data.materialType}</td>
												<td>{"Rs." + (tot=(data.unitPriceKG*data.quantity))+ ".00"}</td>
												<td>{"Rs." + (grandtot = grandtot + ((data.unitPriceKG) * (data.quantity))) + ".00"}</td>
											</tr>

										</tbody>
									)
								}
								)}

							</table>


						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-md-30">
						<div className="col-md-19 text-light">
							<h5>Stock Total:
								<input value={"Rs. " + grandtot + ".00"} size="15" /></h5>

						</div>

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
										<th>Cumulative Total</th>

									</tr>
								</thead>
								{Exp2.map((data) => {
									return (
										<tbody>
											<tr>

												<td>{data.expenseName}</td>
												
												<td>{data.expenseValue}</td>
												
												<td>{"Rs." + (grandtot2 = grandtot2 + ((data.expenseValue))) + ".00"}</td>
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
