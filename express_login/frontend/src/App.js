import React, { useEffect } from 'react';
import Admin from './components/Admin';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => { return response.json() })
      .then((response) => {
        console.log(response);
      })
  }, [])

  return (

    <BrowserRouter>
      <div className="container">
        <div className='row'>
          <div className='col-6'>

          </div>
          <h1>Express Login</h1>
          <Link to='/'>Home</Link>
          <Link to='/signup'>Signup</Link>
          <Link to='/admin'>Admin</Link>
          <Link to='/login'>Login</Link>
        </div>
      </div>

      <Switch>
        <Route exact path='/' />
        <Route path='/signup' ><Signup /></Route>
        <Route path='/admin' ><Admin /></Route>
        <Route path='/login' ><Login /></Route>
      </Switch>
    </BrowserRouter>

  );
}
export default App;
