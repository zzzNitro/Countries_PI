import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getActivities, getCountryDetails, setPage, removeCountry } from "../../redux/actions"
import ActivityCard from '../ActivityForm/ActivityCard'
import './index.css'


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
            <button className="linkCD" onClick={goBack}>Go back</button>
            <div className="containerCD">
               {
                country?.name ?
                    <React.Fragment>
                        <h4>{country.name}</h4>
                        <h5>Código de país: {country.id}</h5>
                        <img className="flag" src={country.flag} alt='' />
                        <p>Capital: {country.capital}</p>
                        <p>Continent: {country.continent}</p>
                        <p>Subregion: {country.subregion}</p>
                        <p>Area: {country.area} km2</p>
                        <p>Population: {country.population}</p>
                        <div><h3>Actividades Turisticas:</h3>
                            {country.activities.length > 0 ? country.activities.map(activity => {
                                return <ActivityCard 
                                key={activity.name}
                                name={activity.name}
                                difficulty={activity.difficulty}
                                duration={activity.duration}
                                season={activity.season.join(', ').trim()}
                                />
                            }): "Aún no hay turistas que hayan agregado sus experiencias"}
                            
                        </div>
                    </React.Fragment>
                    :
                    <div>Cargando...</div>
            } 
            </div>
            
        </div>
    )
}

export default CountryDetails