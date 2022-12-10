import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Form, Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';



export default function ViewCart() {

	const [Cart, setCart] = useState([]);


	useEffect(() => {
		Axios.get("http://localhost:8070/cart/")
			.then((getData) => {
				setCart(getData.data);
			})
	})
	const setID = (_id, itemName, unitPriceKG, Quantity, TotalPrice) => {

		localStorage.setItem('itemName', itemName);
		localStorage.setItem('unitPriceKG', unitPriceKG);
		localStorage.setItem('Quantity', Quantity);
		localStorage.setItem('TotalPrice', TotalPrice);
		localStorage.setItem('ID', _id);
	}

	const onDelete = (_id) => {
		Axios.delete("http://localhost:8070/cart/delete/" + _id)
			.then(() => {
				alert("Item Deleted")
			}).catch((err) => {
				alert(err)
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



	var grandtot = 0;
	return (

		<section className="ftco-section">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
						<h2 className="heading-section text-light">Cart</h2>

					</div>

				</div>


				<div className="row">
					<div className="col-md-12">

						<div className="table-wrap">
							<table className="table text-light">
								<thead className="thead-primary">
									<tr>
										<th>Item Name</th>
										<th>Unit Price</th>
										<th>Quantity</th>
										<th>Total Price</th>
										<th>Cumulative Total</th>

									</tr>
								</thead>
								{Cart.map((data) => {
									return (
										<tbody>
											<tr>

												<td>{data.itemName}</td>
												<td>{"Rs." + data.unitPrice + ".00"}</td>
												<td>{data.Quantity}</td>
												<td>{"Rs." + data.TotalPrice + ".00"}</td>
												<td>{"Rs." + (grandtot = grandtot + ((data.unitPrice) * (data.Quantity))) + ".00"}</td>


												<td>
													<Link to='/UpdateCarts'>
														<button className="btn btn-dark" onClick={() => setID(data._id, data.itemName, data.unitPrice, data.Quantity, data.TotalPrice)}>
															Update
														</button>
													</Link>
												</td>
												<td>
													<Link to='/ReadCart'>
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


						</div>
					</div>
				</div>

				<div className="row text-light">
					<div className="col-md-30">
						<div className="col-md-19">
							<h5>Grand Total:
								<input value={"Rs. " + grandtot + ".00"} size="10" /></h5>



						</div>

					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<Link to="/Delivery">

							<button className="btn btn-dark" >
								Checkout
							</button>

						</Link>

					</div>
				</div>
			</div>
		</section>

	)
}
