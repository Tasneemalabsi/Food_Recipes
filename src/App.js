import './App.css';
import {withAuth0 } from '@auth0/auth0-react';
import Api from './Api';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import Profile from './Profile';
import Category from './categories';
import Header from './header';
import SignupPage from './signup';

function App() {
  
  return (
<>
<Header />
<Router>
            <Routes>
              <Route exact path="/profile" Component={Profile}></Route>
              <Route exact path="/" Component={Api}></Route>
              <Route exact path="/allmeals" Component={Category}></Route>
              <Route exact path="/signup" component = {SignupPage}></Route>
            </Routes>
    </Router>
    
</>
  );
}

export default withAuth0(App);
