import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import logo from '../images/funky_logo.JPG';

export default function ExpenseReport() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'Expense Report',
        onAfterPrint: () => alert('Downloaded Successfully')

    });
    const [expense, setExpense] = useState([]);
    const current = new Date();
    const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    console.log(date);


	useEffect(() => {
		Axios.get('http://localhost:8070/expense/')
			.then((getExp) => {
				setExpense(getExp.data);
			})
	})

    
    var total = 0;
    function getTotal() {
        var total = 0;
        for (var i = 0; i < expense.length; i++) {
            total += expense[i].expenseValue;
        }
        return total;
    }
    return (
        <section className="ftco-section" >
            <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}>
                <button onClick={handlePrint} id="downloadButton" class="btn btn-link">Generate Report</button>
            </div>
             
            <div ref={componentRef} style={{ width: '100%', height: window.innerHeight }}>

                <div className="container" id="whatToPrint"  >
                    <div style={{ marginTop: "25px",marginBottom: "25px"}}>
                        <img src={logo} width="220px" height="100px" ></img>
                    </div>
                    
                   ~ <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">
                            <h2 className="heading-section text-light">Expense Report</h2>
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
                                            <th>Description</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                    {expense.map((data) => {
                                        return (
                                            <tbody>
                                                <tr>

                                                    <td>{data.expenseName}</td>
                                                    <td>{data.expenseValue}</td>
                                                    <td>{data.expenseDescription}</td>
                                                   
                                                    
                                                    
                                                </tr>

                                            </tbody>
                                        )
                                    }
                                    )}

                                </table>
                                    
                            </div><br /><br />
                            <h3 className="total text-light">Total Expense  = <input value={"Rs. " + getTotal()+ ".00"} disabled size="20" /></h3><br /><br />

                            
                        </div>
                    </div>
                </div>
            </div>
            
                
            
        </section>
    )
}
