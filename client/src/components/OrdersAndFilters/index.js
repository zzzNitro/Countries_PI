import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setOrderByPop, setFilterByAct, setOrderByName, filterCountries } from '../../redux/actions'
import './index.css'

function OrdersAndFilters() {
    const { page, name, orderByName, orderByPop, filterByAct, activities } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrderByName = (e) => {
        dispatch(setOrderByName(e.target.value))
        dispatch(getCountries({ page, name, orderByName: e.target.value, orderByPop, filterByAct }))
    }

    const handleOrderByPopulation = (e) => {
        dispatch(setOrderByPop(e.target.value))
        dispatch(getCountries({ page, name, filterByAct, orderByName, orderByPop: e.target.value }))
    }

    const filterByContinent = (e) => {
        if (e.target.value !== 'filter') {
            dispatch(filterCountries(e.target.value))
        } else{
            dispatch(getCountries({page, name, orderByName, orderByPop, filterByAct}))
        }}

    const filterByActivities = (e) => {
        dispatch(setFilterByAct(e.target.value))
        dispatch(getCountries({ page, name, orderByName, orderByPop, filterByAct: e.target.value }))
    }

    return (
        <nav role="navigation" > Más filtros
            <ul>
                <li>
                    <ul  className="dropdown" aria-label="submenu">
                        <li>
                            <select onChange={handleOrderByName}>
                            <optgroup label="Order alphabetic"></optgroup>
                                <option value="Asc">A-Z</option>
                                <option value="Desc">Z-A</option>
                            </select>
                        </li>
                        <li>
                            <select onChange={handleOrderByPopulation}>
                                <option value="population" label="Order by population"></option>
                                <option value="higher">Lower</option>
                                <option value="lower">Higher</option>
                            </select>
                        </li>
                        <li>
                            <select onChange={filterByContinent}>
                                <option value="filter" label="Filter by continent"></option>
                                <option value="Africa" label="Africa"></option>
                                <option value="Americas" label="América"></option>
                                <option value="Asia" label="Asia"></option>
                                <option value="Europe" label="Europa"></option>
                                <option value="Oceania" label="Oceanía"></option>
                                <option value="Antarctic" label="Antártico"></option>
                            </select>
                        </li>
                        <li>
                            <select onChange={filterByActivities}>
                                <option key="-1" value="" label="Filter by activity"></option>
                                
                                {activities.activities && activities.activities.map((activity, i) => (
                                    <option key={i} value={activity.name} label={activity.name}></option>
                                ))}

                            </select>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default OrdersAndFilters