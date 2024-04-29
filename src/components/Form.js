import { useState } from "react";

function Form() {

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = { title, load, reps }
    const response = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    } else {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      alert('New Workout Added')
    }
  }

  return (
      <form action="#" className='workout-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label htmlFor="workout-name">Workout</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title} 
            name='workout-name' 
          />
        </div>
        <div className='form-row'>
          <label htmlFor="workout-load">Load</label>
          <input
            type="text"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            name='workout-load'
          />
        </div>
        <div className='form-row'>
          <label htmlFor="workout-reps">No.Of. Reps</label>
          <input
            type="text"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            name='workout-reps'
          />
        </div>
        <button type="submit" className='btn'>Add Workout</button>
      </form>
  );
}

export default Form;
