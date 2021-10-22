import React, { useEffect } from "react"
import { Link } from "react-router-dom"
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
            <Link to="/home">Home</Link>
            <OrdersAndFilters/>
            <Search/>
            <Link to='/addActivity'><button>Create</button></Link>
        </div>
    )
}

export default NavBar
