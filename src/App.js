import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          {/* Add other routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

