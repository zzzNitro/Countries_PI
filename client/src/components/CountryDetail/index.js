import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getActivities, getCountryDetails, setPage, removeCountry } from "../../redux/actions"
import ActivityCard from "./ActivityCard.js";


function CountryDetails(props) {
    const { id } = props.match.params
    const { country } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getCountryDetails(id))
        dispatch(getActivities({}))
        return () => {
            dispatch(removeCountry())
        }
    }, [dispatch, id])

    function goBack() {
        history.goBack()
        dispatch(setPage(1))
    }

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            <div>
               {
                country?.name ?
                    <React.Fragment>
                        <h4>{country.name}</h4>
                        <h5>Código de país: {country.id}</h5>
                        <img src={country.flag} alt='' />
                        <p>Capital: {country.capital}</p>
                        <p>Continent: {country.continent}</p>
                        <p>Subregión: {country.subregion}</p>
                        <p>Area: {country.area}</p>
                        <p>Population: {country.population}</p>
                        <div><h3>Tourist activities:</h3>
                            {country.activities.length >0 ? country.activities.map(activity => {
                                return <ActivityCard key={activity.id}
                                name={activity.name}
                                difficulty={activity.difficulty}
                                duration={activity.duration}
                                season={activity.season}
                                />
                            }): "Aún no hay turistas que hayan agregado sus experiencias"}
                        </div>
                    </React.Fragment>
                    :
                    <div>Loading...</div>
            } 
            </div>
            
        </div>
    )
}

export default CountryDetails