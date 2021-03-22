import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Signup from './Signup';
import Login from './Login';
import Admin from './Admin';


const Home = () => {

    return (
        <BrowserRouter>
            <div className="container">
                <div className='row'>
                    <div className='col-6'>

                    </div>
                    <h1>Express Login</h1>
                    <Link to='/'>Home</Link>
                    <Link to='/signup'>Signup</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/admin'>Admin</Link>
                </div>
            </div>

            <Switch>
                <Route exact path='/' />
                <Route path='/signup' ><Signup /></Route>
                <Route path='/login' ><Login /></Route>
                <Route path='/admin' ><Admin /></Route>
            </Switch>
        </BrowserRouter>
    );
}
export default Home;



