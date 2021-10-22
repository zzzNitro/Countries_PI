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

function PostActivity() {
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
        alert("Activity successfully posted!")
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
                  <div>
                    <select onChange={handleSeasonSelection}>
                        <option id="" value="">Seasons</option>
                        <option id="summer" value="summer">Summer</option>
                        <option id="autumn" value="autumn">Autumn</option>
                        <option id="winter" value="winter">Winter</option>
                        <option id="spring" value="spring">Spring</option>
                    </select>
                    {errors.season && (<p>{errors.season}</p>)}
                    {input.season.length > 0 && input.season.map(s => (
                        <div key={s}>{s}</div>
                    ))}
                  </div>
                    
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
                        name='duration'
                        value={input.duration}
                        onChange={handleInputChange}
                        min='1'
                        max='24'
                    />
                    {errors.duration && (<p>{errors.duration}</p>)}
                </div>
                <input disabled={Object.values(errors).length > 0} type="submit" value="create" />
            </form>
        </div>
    )
}

export default PostActivity
