import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function ViewProduct() {

    const navigate = useNavigate();
    const [itemName, setName] = useState("");
    const [itemDescription, setDesc] = useState("");
    const [unitPrice, setPrice] = useState("");
    const [Quantity, setQuantity] = useState("");
    var [TotalPrice, setTotalPrice] = useState("");
    const [ID, setID] = useState(null);

    function sendData(e) {

        e.preventDefault();
        const newCartItem = {
            itemName,
            
            unitPrice,
            Quantity,
            TotalPrice

        }

        Axios.post("http://localhost:8070/cart/add", newCartItem).then(() => {
            navigate("/AllCarts")
        }).then(() => {
            alert("Item Added")
        }).catch((err) => {
            alert(err)
        })
    }


    useEffect(() => {

        setName(localStorage.getItem('itemName'));
        setDesc(localStorage.getItem('itemDescription'));
        setPrice(localStorage.getItem('unitPrice'));


        setTotalPrice(localStorage.getItem(''));
    }, []);


    return (


        <section className="ftco-section">

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section"></h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="table-wrap">
                            <form>
                                <table className="table text-light">
                                    <thead className="thead-primary">
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>

                                            <td><input className="form-control" type="text" value={itemName} name="Name" disabled
                                                onChange={(e) => {
                                                    setName(e.target.value);
                                                }} /></td>

                                            <td> <input className="form-control" type="text" value={itemDescription} name="desc" id="desc" disabled
                                                onChange={(e) => {
                                                    setDesc(e.target.value);
                                                }} /></td>

                                            <td> <input className="form-control" type="text" value={unitPrice} name="unitPrice" id="unitPrice" disabled
                                                onChange={(e) => {
                                                    setPrice(e.target.value);
                                                }} /></td>


                                            <td>
                                                <input className="form-control" type="text" value={Quantity} name="quantity" id="quantity" required
                                                    onChange={(e) => {
                                                        setQuantity(e.target.value);

                                                    }} /></td>
                                            <td>
                                                <div className="form-group">


                                                    <input className="form-control" value={TotalPrice = (Quantity * unitPrice)} id="totalPrice"
                                                        onChange={(e) => {
                                                            setTotalPrice(e.target.value);
                                                        }} />
                                                </div>
                                            </td>



                                            <td>
                                                <a href="/ReadCart">


                                                    <button className="btn btn-dark" onClick={sendData} >Add to Cart</button>

                                                </a>
                                            </td>

                                        </tr>

                                    </tbody>


                                </table>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}
