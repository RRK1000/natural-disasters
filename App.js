import React, {Component} from 'react';
import firebase from 'firebase';
import config from './config/config';
import LoggedIn from './client/app/components/signUp/loggedIn';
import LoggedOut from './client/app/components/signUp/loggedOut';
export const firebaseApp = firebase.initializeApp(config);

export default class App extends Component {
  state={
    loading:true
  }

  componentDidMount(){
    this.authSubscription = firebaseApp.auth().onAuthStateChanged(function(user){
      this.setState({
        loading: false,
        user_name: user.name,
      })
    })
  }
  
  render() {
    if(this.state.loading) return null;
    if(this.state.user_name) return <LoggedIn name={this.state.user_name}/>;
    return <LoggedOut />
  }
}
