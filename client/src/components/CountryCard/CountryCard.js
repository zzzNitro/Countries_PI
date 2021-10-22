import React from "react";
import { NavLink } from "react-router-dom";
import './CountryCard.css'


function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div className="card text-center bg-dark animate__animated animate__fadeInUp">
            <div className="overflow">
                <NavLink to={`/countries/${id}`}><img src={flag} className="card-img-top" alt='' /></NavLink>
                <div className="card-body text-light">
                    <h4 className="card-title" >{name}</h4>
                    <p className="card-text text-secondary">Continent: {continent}</p>
                    <p className="card-text text-secondary">Population: {population}</p>
                </div>
            </div>
        </div>
    )
}

export default  CountryCard