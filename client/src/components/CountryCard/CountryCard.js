import React from "react";
import { NavLink } from "react-router-dom";
import './CountryCard.css'


function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div className="card">
            <div className="card">
                <NavLink to={`/countries/${id}`}><img src={flag} alt='' /></NavLink>
                <div >
                    <h4 >{name}</h4>
                    <p >Continent: {continent}</p>
                    <p >Population: {population}</p>
                </div>
            </div>
        </div>
    )
}

export default  CountryCard