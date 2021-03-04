const List = (props) => {

    return (
        <div className='container'>
            <div className="row">
                <h1>Liste des étudiants</h1>
                {props.prenom.map((student) => {
                    return (
                        <h2>{student.firstName}</h2>
                    )
                })}
            </div>

        </div>
    )
}
export default List;