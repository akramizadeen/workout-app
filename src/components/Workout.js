import { formatDistanceToNow } from "date-fns"
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
                <p><b>Loads: </b>{workout.load}kg<br />
                <b>Reps: </b>{workout.reps}</p>
                <span className="date-time">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</span>
                <div className="workout-actions">
                    <span className="material-symbols-outlined icon-view icon">visibility</span>
                    <span className="material-symbols-outlined icon-edit icon">edit</span>
                    <span onClick={handleDelete} className="material-symbols-outlined icon-delete icon">delete</span>
                </div>
            </div>
        </>
    );
}

export default Workout;
