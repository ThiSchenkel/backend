const Login = (props) => {


    const addLogin = (props) => {

        fetch('http://localhost:8000/login',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: props.email,
                    password: props.password,
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
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={props.email}
                            onChange={props.onChange}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={props.password}
                            onChange={props.onChange}
                            required />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={addLogin}>Login</button>
                </form>
            </div>
        </div>
    );
}
export default Login;