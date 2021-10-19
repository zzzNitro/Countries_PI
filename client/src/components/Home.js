import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../redux/actions"


export default function Home(){
    let dispatch = useDispatch()
    let countries = useSelector((state)=> state.countries)

    useEffect(() => {
        dispatch(getCountries())
        }, [dispatch])

    console.log('COUNTRIES', countries)

    return (
        <div>
            {countries.result &&
                countries.result.map((e) => {
                return (
                    <div key={e.id}>
                    <img src={e.flag} alt={e.name} />
                    <p>{e.name}</p>
                    <p>{e.continent}</p>
                    </div>
                )
                })}
            <Link to='/activities/create'><button>Create</button></Link>
        </div>
    )
}