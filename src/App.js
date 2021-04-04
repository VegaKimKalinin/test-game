import React from 'react';
import AddUserData from './pages/AddUserData';
import Game from './pages/Game';
import history from './components/history';
import { Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path='/' component={AddUserData} exact />
          <Route path='/game' component={Game} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
