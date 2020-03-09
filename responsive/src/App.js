import React from 'react';
import './App.css';

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
