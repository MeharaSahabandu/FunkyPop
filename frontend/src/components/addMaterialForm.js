import React, { useState } from "react";
import axios from "axios";

export default function AddMaterial() {


    const [materialType, setmName] = useState("");
    const [unitPriceKG, setPrice] = useState("");
    const [supplierId, setSupplier] = useState("");
    const [quantity, setQty] = useState("");

    function sendData(e) {

        e.preventDefault();
        const newMaterial = {
            materialType,
            quantity,
            unitPriceKG,
            supplierId
        }

        //console.log(newMaterial);

        axios.post("http://localhost:8070/material/add",newMaterial).then(() => {
            alert("Material Added")
        }).catch((err) => {
            alert(err)
        })
    }

    return (
        <div id="booking" className="section">
            <div className="section-center">
                <div className="container">
                    <div className="row">
                        <div className="booking-form">
                            <div className="form-header">
                                <h1 style={{color: "white"}}>Add New Material</h1>
                            </div>
                            <form onSubmit={sendData}>

                                <div className="form-group">
                                    <span className="form-label">Material Name</span>
                                    <input className="form-control" type="text" placeholder="Enter the material Name"
                                        onChange={(e) => {

                                            setmName(e.target.value);

                                        }} required/>
                                </div>
                                <div className="form-group">
                                    <span className="form-label">Price(per KG)</span>
                                    <input className="form-control" type="text" placeholder="Enter the price(per KG)"
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }} />
                                </div>

                                <div className="form-group">
                                    <span className="form-label">Supplier Name</span>
                                    <input className="form-control" type="text" placeholder="Enter the supplier name"
                                        onChange={(e) => {
                                            setSupplier(e.target.value);
                                        }} required/>
                                </div>


                                <div className="col-sm-7">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="form-group">
                                                <span className="form-label">Quantity(KG)</span>
                                                <select className="form-control" onChange={(e) => {
                                                    setQty(e.target.value);
                                                }}>
                                                    <option>10</option>
                                                    <option>20</option>
                                                    <option>30</option>
                                                    <option>40</option>
                                                    <option>50</option>
                                                    <option>60</option>
                                                    <option>70</option>
                                                    <option>80</option>
                                                    <option>90</option>
                                                    <option>100</option>
                                                </select>
                                                <span className="select-arrow"></span>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="form-btn">
                                    <button className="submit-btn">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
