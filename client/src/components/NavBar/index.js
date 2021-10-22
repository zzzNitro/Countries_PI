import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Search from "../Search/index"
import OrdersAndFilters from "../OrdersAndFilters/index"
import { useDispatch } from "react-redux"
import { getCountries } from '../../redux/actions'
import './index.css'

function NavBar() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCountries({}))
    }, [dispatch])
    
    return (
        <div className="navbar">
            <ul className="navbar-nav">
                <li><Link to="/home">Home</Link></li>
                <li><Search /></li>
                <li><OrdersAndFilters /></li>
                <li><Link to='/addActivity'><button>Create</button></Link></li>
                
                
                
                
            </ul>
        </div>
    )
}

export default NavBar
