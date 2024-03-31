import './App.css';
import Form from './components/Form';
import Workout from './components/Workout';
import wImage from './assets/image.png'

function App() {
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
        <Workout title='Back Bench' loads='10' reps='8' />
        <Workout title='Back Bench' loads='10' reps='8' />
        <Workout title='Back Bench' loads='10' reps='8' />
        <Workout title='Back Bench' loads='10' reps='8' />
        <Workout title='Back Bench' loads='10' reps='8' />
      </div>
    </div>
  );
}

export default App;
