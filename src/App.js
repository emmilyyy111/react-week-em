import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import RepresentativeSearch from './components/Representativesearch';
import './App.css';
import Signup from "./components/Signup";


function App() {
  return (
    <Router> 
      <div>
        <Header />
      <div>
      <Switch>
        <Route path="/Signup">
            <Signup />
        </Route>
          <Route path="/">
            <RepresentativeSearch />
          </Route>
      </Switch>
        </div>
          <Footer />
          
        </div>
    </Router>
  );
}

export default App;
