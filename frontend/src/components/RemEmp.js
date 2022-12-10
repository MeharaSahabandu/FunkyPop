import React from "react";


function RemEmp() {


    return (
        <form>
            <div id="booking" class="section">
                <div class="section-center">
                    <div class="container">
                        <div class="row">
                            <div class="booking-form">
                                <div class="form-header">
                                    <center>
                                        <h3>Remove Employee</h3></center>
                                </div>
                                <form>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <div class="form-group1">

                                                <span class="form-label">Enter Employee ID</span>
                                                <input class="form-control" type="text" placeholder="Enter Employee ID"></input>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-btn"><center><br></br><br></br><br></br><br></br>
                                        <button class="submit-btn1">Submit</button></center>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>

    )


}

export default RemEmp;
