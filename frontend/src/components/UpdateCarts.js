import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




export default function UpdateCarts() {
    const navigate = useNavigate();

    const [materialType, setmType] = useState("");
    const [unitPriceKG, setPrice] = useState("");
    const [Quantity, setQuantity] = useState("");
    var [TotalPrice, setTotalPrice] = useState("");
    const [ID, setID] = useState(null);

    const sendDataToUpdate = () => {
        Axios.put('http://localhost:8070/cart/update/' + ID,
            {
                materialType, unitPriceKG, Quantity, TotalPrice
            }
        ).then(() => navigate("/ReadCart")
        ).then(() => {
            alert("Item Updated")
        }).catch((err) => {
            alert(err)
        })

    }


    useEffect(() => {

        setmType(localStorage.getItem('materialType'));
        setPrice(localStorage.getItem('unitPriceKG'));
        setQuantity(localStorage.getItem('Quantity'));
        setID(localStorage.getItem('ID'));


        setTotalPrice(localStorage.getItem('TotalPrice'));
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
                            <form onSubmit={sendDataToUpdate}>
                                <h2>Update Cart</h2>
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr>
                                            <th>Product Name</th>

                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total Price</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>

                                            <td><input className="form-control" type="text" value={materialType} name="Name" disabled
                                                onChange={(e) => {
                                                    setmType(e.target.value);
                                                }} /></td>

                                            <td> <input className="form-control" type="text" value={unitPriceKG} name="unitPriceKG" id="unitPriceKG" disabled
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


                                                    <input className="form-control" value={TotalPrice = (Quantity * unitPriceKG)} id="totalPrice" disabled
                                                        onChange={(e) => {
                                                            setTotalPrice(e.target.value);
                                                        }} />
                                                </div>
                                            </td>



                                            <td>




                                                    <Link to='/ReadCart'>
                                                    <button className="btn btn-dark" onClick={()=>sendDataToUpdate()}>Update</button>
                                                    </Link>



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
