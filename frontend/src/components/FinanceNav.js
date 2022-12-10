import React from "react";
import { Link } from 'react-router-dom';
import expenses from '../images/expenses1.png';
import stock from '../images/ready-stock1.png';
import report from '../images/report1.png';
import '../css/FinanceNav.css';


export default function FinanceNav(){


    return (
      
        <div background-color="black">
          <div className="container">
            <h1 className="navtitle text-light">Finance Navigation</h1>
          </div>

          <div className="icon_row">
            <div>
              <Link to='/view'>
              < img src={expenses} className="expense" alt="expenses"/>
              </Link>
              </div>
              <Link to='/StockReport'>
                <img src={stock} className="stock" alt="stock"/>
              </Link>
              <Link to='/ExpenseReport'>
                <img src={report} className="report" alt="report"/>
              </Link>  
          </div>
        </div>
   
    )
}

          
