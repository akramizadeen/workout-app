import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const Workout = ({ workout }) => {

    const { dispatch } = useWorkoutsContext()

    const handleDelete = async () => {
        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({ type: 'DELETE_WORKOUT', payload: json})
        }
    }

    return (
        <>
            <div className="workout-card">
                <h3>{workout.title}</h3>
                <p><b>Loads: </b>{workout.loads}kg<br />
                <b>Reps: </b>{workout.reps}</p>
                <div className="workout-actions">
                    <a href="#"><span className="material-symbols-outlined icon-view icon">visibility</span></a>
                    <a href="#"><span className="material-symbols-outlined icon-edit icon">edit</span></a>
                    <a onClick={handleDelete}><span className="material-symbols-outlined icon-delete icon">delete</span></a>
                </div>
            </div>
        </>
    );
}

export default Workout;
