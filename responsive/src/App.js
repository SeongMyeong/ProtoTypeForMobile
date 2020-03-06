import React from 'react';
import './App.css';

import CardList from './components/grid/cardList';
import CardItemDetail from './components/detail/cardItemDetail';

function App() {
  return (
    <div>
      <CardList />
      <CardList />
      <CardItemDetail />
    </div>
  );
}

export default App;
