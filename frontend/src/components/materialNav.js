import React from "react";
import { Link } from 'react-router-dom';
import addMate from '../images/addmat.png';
import matlist from '../images/matlist.png';
import report from '../images/report1.png';
import '../css/FinanceNav.css';


export default function MaterialNav(){


    return (
      
        <div background-color="black">
          <div className="container">
            <h1 className="navtitle text-light">Material Management</h1>
          </div>

          <div className="icon_row">
            <div>
              <Link to='/addmat'>
              < img src={addMate} className="expense" alt="addMat"/>
              </Link>
              </div>
              <Link to='/materials'>
                <img src={matlist} className="stock" alt="materials"/>
              </Link>
              <Link to='/matReport'>
                <img src={report} className="report" alt="report"/>
              </Link>  
          </div>
        </div>
   
    )
}
