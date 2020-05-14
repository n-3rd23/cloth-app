import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shoppage/shop-page.component";
import Header from "./components/header/header.component";
import SignInSignUp from "./pages/sign-in_sugn-up/sign-in_sugn-up.component";
import { auth } from "./firebase/firebase.util";
import {createUserDocumentProfile} from './firebase/firebase.util'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unscribeFromAuth = null

  componentDidMount() {
    this.unscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserDocumentProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data())
          this.setState({
            currentUser: {
              id: snapShot.id, // snapshot.data() does not contain the id
              ...snapShot.data() //snapshot.data() will get the data from db of the user
            }
          })
        })
      }
      else {
        this.setState({
          currentUser:userAuth // this will set to null if the user signs out
        })
      }
    });
  }

  componentWillUnmount() {
    this.unscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
