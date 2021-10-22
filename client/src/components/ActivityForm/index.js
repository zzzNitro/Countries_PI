import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountries, postActivity } from '../../redux/actions';

function validate(input) {
    const errors = {};
    if (!input.name) errors.name = 'La actividad debe tener un nombre';
    if (!input.difficulty || input.difficulty === "" || isNaN(input.difficulty)) errors.difficulty = 'El nivel de dificultad debe ser entre 1 y 5';
    if (!input.duration || input.duration > 24 || input.duration < 1) errors.duration = 'La duración de la actividad  debe ser entre 1 y 24 horas';
    if (!input.season.length) errors.season = 'La actividad debe tener al menos una temporada';
    if (!input.countries.length) errors.countries = 'Debes elegir al menos 1 país';

    return errors;
};

export default function PostActivity() {
    const dispatch = useDispatch();
    const { countries } = useSelector(state => state);
    const [input, setInput] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: [],
        countries: []
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getCountries({}))
    }, [dispatch]);

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    };

    const handleSeasonSelection = (e) => {
        if (input.season.includes(e.target.value)) {
            let seasonSelected = input.season.filter(s => s !== e.target.value)
            setInput({
                ...input,
                season: seasonSelected
            })
        } else {
            setInput({
                ...input,
                season: [...input.season, e.target.value]
            })
        }
    };

    const handleCountriesSelection = (e) => {
        if (input.countries.includes(e.target.value)) {
            let countriesSelected = input.countries.filter(c => c !== e.target.value)
            setInput({
                ...input,
                countries: countriesSelected
            })
        } else {
            setInput({
                ...input,
                countries: [...input.countries, e.target.value]
            })
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(postActivity(input))
        setInput({
            name: '',
            difficulty: '',
            duration: '',
            season: [],
            countries: []
        })
        alert("You posted an activity successfully")
    };

    return (
        <div>
            <div>
                <NavLink to="/home">Home</NavLink>
            </div>
            <h2>CREATE AN ACTIVITY</h2>
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                      name='name'
                      value={input.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && (<p>{errors.name}</p>)}
                </div>

                <div>
                <label htmlFor='difficulty'>DIFFICULTY:</label>
                    <input
                      type='number'
                      name='difficulty'
                      value={input.difficulty}
                      onChange={handleInputChange}
                      min='1'
                      max='5'
                    />
                    {errors.difficulty && (<p>{errors.difficulty}</p>)}
                </div>

                <div>
                <label htmlFor='duration'>DURATION:</label>
                    <input 
                        type='number'
                        name='difficulty'
                        value={input.difficulty}
                        onChange={handleInputChange}
                        min='1'
                        max='24'
                    />
                    {errors.duration && (<p>{errors.duration}</p>)}
                </div>
                <div>
                  <div onChange={handleSeasonSelection}>
                    <input name='season' value='Verano' type='checkbox' />
                    <label htmlFor='Verano'>Verano</label>
                    <input name='season' value='Primavera' type='checkbox' />
                    <label htmlFor='Primavera'>Primavera</label>
                    <input name='season' value='Otoño' type='checkbox' />
                    <label htmlFor='Otoño'>Otoño</label>
                    <input name='season' value='Invierno' type='checkbox' />
                    <label htmlFor='Invierno'>Invierno</label>
                  </div>
                    {errors.season && (<p>{errors.season}</p>)}
                    {input.season.length > 0 && input.season.map(s => (
                        <div key={s}>{s}</div>
                    ))}
                </div>

                <div>
                    <select onChange={handleCountriesSelection} name="country">
                        <option value="" key="">Countries</option>
                        {
                            countries.all && countries.all.map((c) => {
                                return <option value={c.id} key={c.id}>{c.name}, {c.id}</option>
                            })
                        }
                    </select>
                    {errors.countries && (<p>{errors.countries}</p>)}
                    {input.countries.length > 0 && input.countries.map(c => (
                        <div key={c}>{c}</div>
                    ))}
                </div>
                <input disabled={Object.values(errors).length > 0} type="submit" value="create" />
            </form>
        </div>
    )
}
/*
import React, { useEffect, useState } from 'react'

export default function ActivityForm({ handleChange, handleSubmit }) {
  let [name, setName] = useState('')
  let [difficulty, setDifficulty] = useState('')
  let [season, setSeason] = useState('')
  let [duration, setDuration] = useState('')

  return (
    <div>
      <h2>CREATE AN ACTIVITY</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          name='name'
          value={name}
          onChange={(e) => handleChange(e, setName)}
        />

        <label htmlFor='difficulty'>DIFFICULTY:</label>
        <input
          type='number'
          name='difficulty'
          value={difficulty}
          onChange={(e) => handleChange(e, setDifficulty)}
          min='1'
          max='5'
        />

        <p>TEMPORADA:</p>
        <div onChange={(e) => handleChange(e, setSeason)}>
          <input name='season' value='Verano' type='radio' />
          <label htmlFor='Verano'>Verano</label>
          <input name='season' value='Primavera' type='radio' />
          <label htmlFor='Primavera'>Primavera</label>
          <input name='season' value='Otoño' type='radio' />
          <label htmlFor='Otoño'>Otoño</label>
          <input name='season' value='Invierno' type='radio' />
          <label htmlFor='Invierno'>Invierno</label>
        </div>

        <label htmlFor='duration'>DURATION:</label>
        <input 
            type='time'
            name='duration'
            value={duration}
            onChange={(e) => handleChange(e, setDuration)}
        />

        <button type='submit'>Create</button>
      </form>
    </div>
  )
}
*/
