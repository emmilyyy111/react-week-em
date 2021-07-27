import { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/Representativesearch';
import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import Home from "./components/Home";
import './App.css';


function App() {
  const [user, setUser] = useState()
  return (
    <Router> 
      <div>
        <Header />
      <div>
      <Switch>
        <Route path="/Signin"> 
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/Signup">
            <Signup setUser={setUser} />
        </Route>
          <Route path="/search">
            {user
            ?<RepresentativeSearch user={user} />
            :<Signup setUser={setUser} />
      }
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
