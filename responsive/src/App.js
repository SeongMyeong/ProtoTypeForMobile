import React from 'react';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import Browse from './pages/Browse';
import { Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Route path="/browse" component={Browse} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;