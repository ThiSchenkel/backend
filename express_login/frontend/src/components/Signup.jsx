import { useState, useEffect } from 'react';
import { Route } from "react-router-dom";
import Login from './Login';

const Signup = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [firstName, setFirstName] = useState();
    const [surName, setSurName] = useState();
    const [birth, setBirth] = useState();

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then((response) => { return response.json() })
            .then((response) => {
                console.log(response);
            })
    }, [])

    const addSignup = () => {
        fetch('http://localhost:8000/signup',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    firstName: firstName,
                    surName: surName,
                    birth: birth
                })
            }).then((response) => {
                return response.json();
            });
        if (password.length < 8) {
            return alert(`Votre mot de passe doit comporter minimum 8 caractères`);
        }
        else {
            return (<Route path='/login' ><Login /></Route>);
        }
    }

    return (
        <div className='container'>
            <h1>Signup</h1>
            <div className="card" style={{ width: '50%' }}>
                <form >
                    <div className="mb-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={((e) => setEmail(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={((e) => setPassword(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={((e) => setConfirmPassword(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Firstname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={((e) => setFirstName(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Surname</label>
                        <input
                            type="text"
                            className="form-control"
                            value={surName}
                            onChange={((e) => setSurName(e.target.value))}
                            required />
                    </div>
                    <div className="mb-3">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            className="form-control"
                            value={birth}
                            onChange={((e) => setBirth(e.target.value))}
                            required />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={addSignup}>Envoyer</button>
                </form>
            </div>
        </div>

    );
}
export default Signup;