import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shoppage/shop-page.component';
import Header from './components/header/header.component'
import SignInSignUp from './pages/sign-in_sugn-up/sign-in_sugn-up.component'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
