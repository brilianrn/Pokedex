import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Navbar } from './components/index';
import { Home, Detail, PokemonFilter } from './pages/index';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/detail/:name'>
          <Detail />
        </Route>
        <Route path='/:region'>
          <PokemonFilter />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
