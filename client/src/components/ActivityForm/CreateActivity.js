import React, { useState } from 'react'

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