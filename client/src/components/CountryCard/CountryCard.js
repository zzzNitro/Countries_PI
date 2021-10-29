import React from "react";
import { NavLink } from "react-router-dom";


function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div className="container" id="card">
            <NavLink to={`/countries/${id}`}><img className="flag" src={flag} alt='' /></NavLink><br />
            <div className="details basic">
                <h4 >{name}</h4><br />
            </div>
            <br />
            <p >Continent: {continent}</p>
            <br />
            <p >Population: {population}</p>
        </div>
    )
}

export default  CountryCard