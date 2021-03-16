import React from 'react';

function Signup() {
    return (

        <div className="container">
            <h1>Signup</h1>
            <form>
                <div class="mb-3">
                    <label>Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div class="mb-3">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" id="password" />
                </div>
                <div class="mb-3">
                    <label>Firstname</label>
                    <input type="text" className="form-control" id="text" />
                </div>
                <div class="mb-3">
                    <label>Surname</label>
                    <input type="text" className="form-control" id="text" />
                </div>
                <div class="mb-3">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" id="date" />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>
    );
}

export default Signup;