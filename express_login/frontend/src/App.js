import React from 'react';
import Admin from './components/Admin';
import Login from './components/Login';
import Signup from './components/Signup';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (

    <BrowserRouter>
      <div className="container">
        <h1>Express Login</h1>
        <Link to='/'>Home</Link>
        <Link to='/signup'>Signup</Link>
        <Link to='/admin'>Admin</Link>
        <Link to='/login'>Login</Link>

        <Switch>
          <Route exact path='/' />
          <Route path='/signup' component={Signup} />
          <Route path='/admin' component={Admin} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
