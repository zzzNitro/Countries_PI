import React from "react";
import { NavLink } from "react-router-dom";


function CountryCard({ flag, name, id, continent, population }) {
    return (
        <div className="blog-container">
            <NavLink activeClassName="blog-cover" to={`/countries/${id}`}><img src={flag} alt='' /></NavLink>
            <div className="blog-body">
                <div className="blog-title">
                    <h4 >{name}</h4>
                </div>
                <div className="blog-summary">
                    <br></br>
                    
                    
                    <p >Continent: {continent}</p>
                    <p >Population: {population}</p>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default  CountryCard