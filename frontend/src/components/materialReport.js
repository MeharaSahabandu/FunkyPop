import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import logo from '../images/funky_logo.JPG';

export default function MaterialReport() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'material-data',
        onAfterPrint: () => alert('Downloaded Successfully')

    });
    const [material, setMaterials] = useState([]);

    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    console.log(date);

    useEffect(() => {
        Axios.get('http://localhost:8070/material/')
            .then((getMaterila) => {
                setMaterials(getMaterila.data);
            })
    })

    var price = 0;
    var qt = 0;
    var total = 0;

    return (
        <section className="ftco-section" >
            <div style={{display: 'flex', justifyContent: 'right', alignItems:'right'}}>
                <button onClick={handlePrint} id="downloadButton" className='btn btn-link'>Generate Report</button>
            </div>
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>

                <div className="container" id="whatToPrint"  >
                    <div style={{marginTop: '25px', marginBottom: '25px'}}>
                    <img src={logo} width='220px' height='100px'/>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section">Material Report</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 text-light">

                            <div className="table-wrap">
                                <table className="table text-light">
                                    <thead className="thead-primary">
                                        <tr>
                                            <th>Material Name</th>
                                            <th>Supplier Name</th>
                                            <th>Price per KG</th>
                                            <th>Quantity KG</th>
                                            <th>Total Amount</th>
                                            <th>Cummulative Total</th>
                                        </tr>
                                    </thead>
                                    {material.map((data) => {
                                        return (
                                            <tbody>
                                                <tr>

                                                    <td>{data.materialType}</td>
                                                    <td>{data.supplierId}</td>
                                                    <td>{price = data.unitPriceKG}</td>
                                                    <td>{qt = data.quantity}</td>
                                                    <td><input value={"Rs. " + price * qt + ".00"} disabled /></td>
                                                    <td><input value={"Rs. " + (total = total + (price * qt)) + ".00"} disabled /></td>
                                                </tr>

                                            </tbody>
                                        )
                                    }
                                    )}

                                </table>
                                    
                            </div><br /><br />
                            <h3>Total Material Expense  = <input value={"Rs. " + total + ".00"} disabled size="10" /></h3><br /><br />

                            
                        </div>
                    </div>
                </div>
            </div>
            

        </section>
    )
}
