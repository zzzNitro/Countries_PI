import React from "react";
import { NavLink } from "react-router-dom";
import rose from "../assets/wind-rose.png"
import './Landing.css'


export default function Landing(){
    return (<div className="landing">
                <NavLink to="/home">
                    <img className="wind-rose" src={rose} alt="to home"></img>
                </NavLink>
            </div>)
}