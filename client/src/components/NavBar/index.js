import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCountries } from '../../redux/actions'

function Nav() {
    const [input,setInput] = useState("")
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])

    const handleInput = (event)=>{
    setInput(event.target.value)
    }
    const buscar = ()=>{
        dispatch(getCountries(input))

    }
    return (
        <div >
            <Link to="/" > Landing</Link>
            <Link to="/home" > Home</Link>
            <Link to="/add" > Create Activity</Link>
            <input type="text" placeholder="Type a country" onChange={handleInput} value={input} />
            <button onClick={buscar}>Buscar</button>
        </div>
    )
}

export default Nav
