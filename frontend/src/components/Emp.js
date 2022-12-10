import React from "react";
import { Link } from "react-router-dom";

function Emp() {

    return (
        <form>
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="row">
                            <div class="booking-form">
                                <div class="form-header">
                                    <center>
                                        <h3>Manage Employee Details</h3>
                                    </center>
                                    <br></br><br></br><br></br><br></br><br></br>

                                    <div class="form-btn"><br></br><center>
                                <Link to='/add'>
                                    <button class="btn3">Add Employee</button>
                                </Link>
                                    </center>
                            </div>
                                    

                                    <br></br><br></br><br></br>
                                     <div class="form-btn"><br></br><center>
                                     <div class="form-btn"><br></br><center>
                                    <Link to='/read'>
                                    <button class="btn3">All Employees</button>
                                    </Link>
                                    </center>
                            </div>
                                    </center>
                            </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}

export default Emp;
