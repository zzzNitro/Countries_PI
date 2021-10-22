import React, { useEffect } from "react"
import { NavLink } from "react-router-dom"
import Search from "../Search/index"
import OrdersAndFilters from "../OrdersAndFilters/index"
import { useDispatch } from "react-redux"
import { getCountries } from "../../redux/actions"

function NavBar() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCountries({}))
    }, [dispatch])
    
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <OrdersAndFilters/>
            <Search/>
            <NavLink to="/add">Create an activity</NavLink>
        </div>
    )
}

export default NavBar
