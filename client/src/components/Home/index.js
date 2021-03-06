import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getCountries, setPage } from '../../redux/actions'
import CountryCard from '../CountryCard/CountryCard'
import './index.css'
import '../CountryCard/CountryCard.css'

function Home() {
    const dispatch = useDispatch();
    const { countries, name, orderByPop, filterByActivity, page } = useSelector(state => state);

    useEffect(() => {
        dispatch(getCountries({}))
        dispatch(getActivities({}))
    }, [dispatch])

    const changePage = (page) => {
        dispatch(getCountries({ page, orderByPop, filterByActivity, name }))
        dispatch(setPage(page))
    }

    return (
        <div className="body">
            <div className="grid">
            {
                countries?.result?.length > 0 && countries.result.map((c) => {
                    return <CountryCard flag={c.flag} name={c.name} continent={c.continent} population={c.population} id={c.id} key={c.id} />
                })
            }
            </div>
            <button disabled={page - 1 === 0} onClick={() => { changePage(page - 1) }}>prev</button>
                <label>{page}</label>
            <button disabled={countries?.count <= (page * 10)} onClick={() => { changePage(page + 1) }}>next</button>
        </div>
    )
}

export default Home