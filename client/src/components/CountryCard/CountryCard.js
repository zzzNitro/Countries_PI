import React from "react"
import { NavLink } from "react-router-dom"

function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div>
                <h4>{name}</h4>
                <NavLink to={`/countries/${id}`}><img src={flag} alt='' /></NavLink>
                <p>Continent: {continent}</p>
                <p>Population: {population}</p>
        </div>
    )
}

export default CountryCard