import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from 'firebase'
import { firebaseConfig } from './config'
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/Representativesearch';
import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import UserProfile from './components/UserProfile';
import Home from "./components/Home";
import './App.css';

 if(!firebase.apps.length) // checking if firebase is already initialized if it is then initializes it again
firebase.initializeApp(firebaseConfig)

function App() {

  const [user, setUser] = useState(undefined)
  const [userProfile, setUserProfile] = useState(undefined)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(authenticatedUser => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(undefined)
    })
  })

  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem('user')))
  },[])

  useEffect(() => {
    if (user !== undefined){
      fetch(`https://representative-finder-mb-api.web.app/users/${user?.email}`)
      .then(response => response.json())
      .then(json => { 
        console.log('user json--->', json)
        setUserProfile(json.data)
        localStorage.setItem('user', JSON.stringify(json.data))
      })
      .catch(error => alert(error))
    }
  },[user])

  
  

  return (
    <Router> 
      <div>
        <Header user={user} userProfile={userProfile} setUser={setUser} setUserProfile={setUserProfile}/>
      <div>
      <Switch>
        <Route path="/Signin"> 
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/Signup">
            <Signup setUser={setUser} />
        </Route>
          <Route path="/search">
            <RepresentativeSearch />
            </Route>
            <Route path="/user-profile">
              <UserProfile user={user} setUserProfile={setUserProfile} userProfile={userProfile} />
            </Route>
          <Route path="/Home">
            <Home />
          </Route>
      </Switch>
        </div>
          <Footer />
          
        </div>
    </Router>
  );
}

export default App;
