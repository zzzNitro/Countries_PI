import React from "react";
import { NavLink } from "react-router-dom";


function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div className="card">
            <h4 >{name}</h4>
            <br></br>
            <NavLink to={`/countries/${id}`}><img className="img" src={flag} alt='' /></NavLink>
            
            <p >Continent: {continent}</p>
            <p >Population: {population}</p>
        </div>
    )
}

export default  CountryCard