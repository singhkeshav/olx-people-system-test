

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ContinentsComp from './pages/continents/continents.component';
import ContinentDetails from './pages/continent-details/continent-details.component';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContinentsComp} />
        <Route path="/continent-details/:id" component={ContinentDetails} />
      </Switch>
    </Router>);

}

export default App;
