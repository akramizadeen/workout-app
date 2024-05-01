import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function Form() {

  const { dispatch } = useWorkoutsContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

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
      setEmptyFields(json.emptyFields)
    } else {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({ type: 'CREATE_WORKOUT', payload: json})
    }
  }

  return (
      <form action="#" className='workout-form' onSubmit={handleSubmit}>
        <div className='form-row'>
          <label id="workout-name">Workout</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title} 
            name='workout-name'
            className={ emptyFields.includes('title') ? 'error' : '' }
          />
        </div>
        <div className='form-row'>
          <label id="workout-load">Load</label>
          <input
            type="text"
            onChange={(e) => setLoad(e.target.value)}
            value={load}
            name='workout-load'
            className={ emptyFields.includes('loads') ? 'error' : '' }
          />
        </div>
        <div className='form-row'>
          <label id="workout-reps">No.Of. Reps</label>
          <input
            type="text"
            onChange={(e) => setReps(e.target.value)}
            value={reps}
            name='workout-reps'
            className={ emptyFields.includes('reps') ? 'error' : '' }
          />
        </div>
        {error && <div className="error-message">
          <p>{error}</p>  
        </div>}
        <button type="submit" className='btn'>Add Workout</button>
      </form>
  );
}

export default Form;
