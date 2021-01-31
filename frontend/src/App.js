import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './containers/AboutPage';
import HomePage from './containers/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
