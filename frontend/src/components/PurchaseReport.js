import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { Form, Link } from 'react-router-dom';
import { InputGroup } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import logo from '../images/funky_logo.JPG';



export default function PurchaseReport() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Cart Items Report',
        onAfterPrint: () => alert('Download Success')

    });

    const [Cart, setCart] = useState([]);
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    console.log(date);


    useEffect(() => {
        Axios.get("http://localhost:8070/cart/")
            .then((getData) => {
                setCart(getData.data);
            })
    })
    const setID = (_id, itemName, unitPrice, Quantity, TotalPrice) => {

        localStorage.setItem('itemName', itemName);
        localStorage.setItem('unitPrice', unitPrice);
        localStorage.setItem('Quantity', Quantity);
        localStorage.setItem('TotalPrice', TotalPrice);
        localStorage.setItem('ID', _id);
    }







    var grandtot = 0;
    return (
        <section className="ftco-section" >
            <div style={{display:'flex',justifyContent:'right',alignItems:'right'}}>
                <button className="btn btn-link" id="downloadButton" onClick={handlePrint}>Download Purchased Items Report</button>
            </div>

            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>

                <div className="container" id="whatToPrint"  >
                    <div style={{marginTop:'25px',marginBottom:'25px'}}>
                        <img src={logo} width='220px' height="100px"></img>
                    </div>

                    <div className="row justify-content-center text-light">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Purchase Information</h2>

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
                                            <th>Quality</th>
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




                                                </tr>

                                            </tbody>
                                        )
                                    }
                                    )}

                                </table>


                            </div>
                        </div>
                    </div>


                    <div className="col-md-18 text-light">
                        <div className="col-md-30">
                            <h5>Grand Total :
                                <input value={"  Rs." + grandtot + ".00"} size="10" disabled /></h5>
                        </div>

                    </div>


                </div>









            </div>
            

        </section>


    )
}
