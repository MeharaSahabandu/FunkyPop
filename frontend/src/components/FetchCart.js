import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';


export default function AllItemsCart() {


    const [cartItem, setCartItems] = useState([]);


    useEffect(() => {
        Axios.get('http://localhost:8070/item/')
            .then((getCartItems) => {
                setCartItems(getCartItems.data);
            })
    })



    const setID = (_id, itemName, unitPrice,itemDescription) => {

        localStorage.setItem('itemName', itemName);
        localStorage.setItem('unitPrice', unitPrice);
        localStorage.setItem('itemDescription', itemDescription);
        localStorage.setItem('ID', _id);
    }



    const [search, setSearch] = useState("");
    console.log(search);
    return (
        <section className="ftco-section">

            <div className="container">
                <div className="row justify-content-center">


                    <div className="col-md-6 text-center mb-5">
                        <br></br>
                        <form class="d-flex">

                            <input class="form-control me-2" type="search" placeholder="Search" onChange={(e) => setSearch(e.target.value)}></input>
                            <button class="btn btn-outline-default" type="submit" style={{}}> Search</button>
                        </form>
                        <br></br>
                        <h2 className="heading-section text-light">All Products</h2>
                    </div>


                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="table-wrap">
                            <table className="table text-light">
                                <thead className="thead-primary">
                                    <tr>
                                        <th>Product Name</th>

                                        <th>Price</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                {cartItem.filter((data) => {
                                    return search.toLowerCase() === '' ? data : data.itemName.toLowerCase().includes(search)
                                }).map((data) => {
                                    return (
                                        <tbody>
                                            <tr key={data._id}>

                                                <td>{data.itemName}</td>

                                                <td>{"Rs."+data.unitPrice+".00"}</td>
                                                <td>{data.itemDescription}</td>


                                                <td>
                                                    <Link to='/viewpro'>
                                                        <button className="btn btn-dark" onClick={() => setID(data._id, data.itemName, data.unitPrice,data.itemDescription)} >View Product</button>
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
        </section>
    )
}
