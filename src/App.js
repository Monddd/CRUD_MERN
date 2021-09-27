import logo from './logo.svg';
import React from 'react';
import { Switch } from 'react-router';
function App() {
  return (
    <div>
      <div className="navbar bg-light navbar-expand-lg navbar-light">

      </div>
    <Switch>
      <Route exact path="/" component={TodoList}/>
      <Route  path="/edit/:id" component={EditTodo}/>
      <Route  path="/create" component={CreateTodo}/>
    </Switch>
    </div>
  );
}

export default App;
