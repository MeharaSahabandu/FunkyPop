import React from "react";
import { Link } from "react-router-dom";


function Sal() {

    return (
        <form>
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="row">
                            <div class="booking-form">
                                <div class="form-header">
                                    <center>
                                        <h3>Salary Details</h3>
                                    </center>
                                    <br></br><br></br><br></br><br></br><br></br>
                                    
                                    <Link to="/AddSal">
                                        <button className="btn3">
                                            Add Salary Details
                                        </button>
                                    </Link>
                                    <br></br><br></br><br></br>
                                    

                                    <Link to="/ViewSal">
                                        <button className="btn3">
                                            See Salary Details
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Sal;