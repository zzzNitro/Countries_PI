import React from "react";
import './Landing.css'
import { NavLink } from "react-router-dom";


export default function Landing(){
    return (<div className="landing">
                <NavLink to="/home">
                    <img className="logo" src="#" alt="to home"/>
                </NavLink>
            </div>)
}