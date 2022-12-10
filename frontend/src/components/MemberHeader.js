import React, {useState} from "react";
import { Link } from "react-router-dom";
import { AppBar, Box } from "@mui/material";


export default function MemberHeader(){

    return(
        <div>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">FunkyPOP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/memberSignup" className="nav-link">Register</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/MemberLogin" className="nav-link">login</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
        </div>    
    )
}
