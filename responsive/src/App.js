import React from 'react';
import './App.css';

import CardList from './components/grid/cardList';
import CardItemDetail from './components/detail/cardItemDetail';
import TopMenu from './components/menu/TopMenu';
import BottomMenu from './components/menu/BottomMenu';

function App() {
  return (
    <div>
      <TopMenu />
      <CardList />
      <CardList />
      <CardItemDetail />
      <BottomMenu />
    </div>
  );
}

export default App;
