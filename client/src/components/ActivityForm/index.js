import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountries, postActivity } from '../../redux/actions'
import ActivityForm from './CreateActivity'

export default function CreateActivity() {
  const dispatch = useDispatch()
  const activities = useSelector((state) => state.activities)

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])

  function handleChange(event, setstate) {
    setstate(event.target.value)
  }

  function handleSubmit(event, payload){
    event.preventDefault()
    dispatch(postActivity(payload))
  }
  return (
    <div>
      <h1>FORMULARIO DE CREACION</h1>
      <ActivityForm activities={activities} handleChange={handleChange} />
    </div>
  )
}
