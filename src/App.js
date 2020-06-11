import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Products from './pages/Products/Products'
import Product from './pages/Product/Product'
import { useSelector, useDispatch } from "react-redux";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useSelector(state => state.userAuth);


  return <Route {...rest} render={(props) => (
    token
      ? <Component {...props} />
      : <Redirect to='/signIn' />
  )} />
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <PrivateRoute path="/products" component={Products} />
          <PrivateRoute path="/product/:id" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
