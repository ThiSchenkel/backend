const Admin = (props) => {

    const addAdmin = () => {
        fetch('http://localhost:8000/admin',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: props.firstName,
                    surName: props.surName,
                    birth: props.birth
                })
            }).then((response) => {
                console.log(response);
                return response.json();
            })
    }

    return (

        <div className="container">
            <h1>Login</h1>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label>Firstname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={props.firstName}
                            onChange={((e) => props.setFirstName(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Surname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={props.surName}
                            onChange={((e) => props.setSurName(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Date of Birth</label>
                        <input
                            type="text"
                            className="form-control"
                            value={props.birth}
                            onChange={((e) => props.setBirth(e.target.value))}
                            required />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={addAdmin}>Login</button>
                </form>
            </div>
        </div>

    );
}
export default Admin;