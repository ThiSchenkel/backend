import React from 'react';

function Admin() {
    return (
        <div className="container">
            <h1>Admin</h1>
            <form>
                <div class="mb-3">
                    <label>Firstname</label>
                    <input type="text" className="form-control" id="text" />
                </div>
                <div class="mb-3">
                    <label>Surname</label>
                    <input type="text" className="form-control" id="text" />
                </div>
                <div class="mb-3">
                    <label>Age</label>
                    <input type="text" className="form-control" id="text" />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>
    );
}
export default Admin;