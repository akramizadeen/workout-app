import './App.css';
import Form from './components/Form';
import Workout from './components/Workout';
import wImage from './assets/image.png';
import { useEffect } from 'react';
import { useWorkoutsContext } from './hooks/useWorkoutsContext';


function App() {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const getWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts', {
        method: 'GET',
        headers: {
          accept: 'application/json'
        }
      })
      const json = await response.json()
  
      if (response.ok) {
        // console.log(response)
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    getWorkouts()
  }, [dispatch])

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
        {workouts && workouts.map((workout) => (
          <Workout key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
}

export default App;
