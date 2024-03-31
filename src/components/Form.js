function Form() {
    return (
        <form action="#" className='workout-form'>
          <div className='form-row'>
            <label htmlFor="workout-name">Workout</label>
            <input type="text" name='workout-name' />
          </div>
          <div className='form-row'>
            <label htmlFor="workout-load">Load</label>
            <input type="text" name='workout-load' />
          </div>
          <div className='form-row'>
            <label htmlFor="workout-reps">No.Of. Reps</label>
            <input type="text" name='workout-reps' />
          </div>
          <button className='btn'>Add Workout</button>
        </form>
    );
}

export default Form;
