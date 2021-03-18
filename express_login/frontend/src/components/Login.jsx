const Login = () => {
    return (
        <div className="container">
            <h1>Login</h1>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <label>Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </div>
        </div>
    );
}
export default Login;