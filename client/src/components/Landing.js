import React from "react";
import './Landing.css'
import { NavLink } from "react-router-dom";


export default function Landing(){
    return (<div className="landing">
                <NavLink to="/home">
                    <div id="earth"></div>
                </NavLink>
            </div>)
}