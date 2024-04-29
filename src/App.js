import './App.css';
import Form from './components/Form';
import Workout from './components/Workout';
import wImage from './assets/image.png';
import { useState, useEffect } from 'react';


function App() {
  const [workouts, setWorkouts] = useState([])

  async function getWorkouts() {
    const data = await fetch('http://localhost:4000/api/workouts', {
      method: 'GET',
      headers: {
        accept: 'application/json'
      }
    })
    const fetchedData = await data.json()
    setWorkouts(fetchedData)
  }

  useEffect(() => {
    getWorkouts()
  }, [])

  return (
    <div className='App'>
      <h1>GET <span>FIT</span></h1>
      <div className='App-Content'>
        <img src={wImage} alt="" />
        <div className='form'>
          <Form />
        </div>
      </div>
      <div className='workout-list'>
        <h2>Workouts</h2>
        {workouts.map((workout) => (
          <Workout title={workout.title} loads={workout.load} reps={workout.reps} />
        ))}
      </div>
    </div>
  );
}

export default App;
