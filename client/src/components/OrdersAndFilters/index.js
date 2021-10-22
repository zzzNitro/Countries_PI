import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setOrderByPop, setFilterByCont, setOrderByName, filterCountries } from "../../redux/actions";

function OrdersAndFilters() {
    const { page, name, orderByName, orderByPop, filterByCont, activities } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrderByName = (e) => {
        dispatch(setOrderByName(e.target.value))
        dispatch(getCountries({ page, name, orderByName: e.target.value, orderByPop, filterByCont }))
    }

    const handleOrderByPopulation = (e) => {
        dispatch(setOrderByPop(e.target.value))
        dispatch(getCountries({ page, name, filterByCont, orderByName, orderByPop: e.target.value }))
    }

    const filterByContinent = (e) => {
        if (e.target.value !== 'filter') {
            dispatch(filterCountries(e.target.value))
        } else{
            dispatch(getCountries({page, name, orderByName, orderByPop, filterByCont}))
        }}

    const filterByActivities = (e) => {
        dispatch(setFilterByCont(e.target.value))
        dispatch(getCountries({ page, name, orderByName, orderByPop, filterByCont: e.target.value }))
    }

    return (
        <div>
            <div>
                <select onChange={handleOrderByName}>
                    <option value="name" label="Alphabetic"></option>
                    <option value="Asc">A-Z</option>
                    <option value="Desc">Z-A</option>
                </select>
            </div>
            <div>
                <select onChange={handleOrderByPopulation}>
                    <option value="population" label="Order by population"></option>
                    <option value="higher">Lower</option>
                    <option value="lower">Higher</option>
                </select>
            </div>
            <div>
                <select onChange={filterByContinent}>
                    <option value="filter" label="Filter by continent"></option>
                    <option value="Africa" label="Africa"></option>
                    <option value="Americas" label="América"></option>
                    <option value="Asia" label="Asia"></option>
                    <option value="Europe" label="Europa"></option>
                    <option value="Oceania" label="Oceanía"></option>
                    <option value="Antarctic" label="Antártico"></option>
                </select>
            </div>
            <div>
                <select onChange={filterByActivities}>
                    <option key="-1" value="" label="Filter by activity"></option>
                    {activities.activities && activities.activities.map((activity, i) => (
                        <option key={i} value={activity.name} label={activity.name}></option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default OrdersAndFilters