import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import user from '../images/user.png';
import '../css/empNav.css';


export default function NavigateEmployee() {
    return (

        <div className="EmpPage">



            <div className="icon_row">
                <div >
                    <Link to='/Emp'>
                        <img src={user} className="expense" alt="expense" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">HR Manager</h3>
                </div>


                <div>
                    <Link to='/MatNavi'>
                        <img src={user} className="stock" alt="stock" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">Inventory Manager</h3>
                </div>




                <div>
                    <Link to='/finance'>
                        <img src={user} className="stock" alt="stock" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">Finance Manager</h3>
                </div>


                <div>
                    <Link to='/DeliveryManger'>
                        <img src={user} className="stock" alt="stock" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">Delivery Manager</h3>
                </div>


            </div>
            <div className="icon_row">

                <div>
                    <Link to='/Home'>
                        <img src={user} className="stock" alt="stock" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">Supplier Manager</h3>
                </div>

                <div>
                    <Link to='/finance'>
                        <img src={user} className="stock" alt="stock" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">Payment Manager</h3>
                </div>

                <div>
                    <Link to='/getMemberList'>
                        <img src={user} className="stock" alt="stock" />
                    </Link><br></br><br></br><br></br>
                    <h3 className="text-light">Public Relations Manager</h3>
                </div>
            </div>
        </div>
    )
}
