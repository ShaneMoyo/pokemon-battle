import React from 'react';
import './App.css';
import PokemonContainer from './components/pokemon'; 
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch,
} from 'react-router-dom'; 

const About = () => (
  <section>
    <h1>Welcome to my pokemon battle app</h1>
    <p>Pick two pokekmon and make a selection off of one of their four moves. See who wins</p>
  </section>
)
const Home = () => (
  <section>
    <h1>Pokemon Battle Arena</h1>
    <Link to="/pokemon">Proceed to battle arena</Link>
  </section>
)
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/pokemon">Battle Arena</Link>
          <Link to="/about">About</Link>
          <Link to="/home">Home</Link>
        </nav>
        <Switch>
          <Route path="/pokemon" component={PokemonContainer}/>
          <Route path="/about" render={() => <About/>}/>
          <Route path="/" render={() => <Home/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
