import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import App from './App';
import Quote from './Quote';

const Routes = () => (
  <Router>
    <Navbar />
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/app" component={App} />
        <Route exact path="/quote" component={Quote} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
