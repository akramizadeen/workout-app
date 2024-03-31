function Workout(props) {
    return (
        <>
            <div className="workout-card">
                <h3>{props.title}</h3>
                <p><b>Loads: </b>{props.loads}kg<br />
                <b>Reps: </b>{props.reps}</p>
                <div className="workout-actions">
                    <a href="#"><span className="material-symbols-outlined icon-view icon">visibility</span></a>
                    <a href="#"><span className="material-symbols-outlined icon-edit icon">edit</span></a>
                    <a href="#"><span className="material-symbols-outlined icon-delete icon">delete</span></a>
                </div>
            </div>
        </>
    );
}

export default Workout;
