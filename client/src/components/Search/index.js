import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { getCountries, setName, setPage } from "../../redux/actions"

function Search() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setName(input))
        dispatch(getCountries({ page: 1, name: input }))
        dispatch(setPage(1))
        setInput("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search(e.g. Chile, Perú...)" onChange={handleInputChange} value={input} />
            <button type="submit">🔍</button>
        </form>
    )

}

export default Search