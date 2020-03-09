import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import Appbar from './components/Appbar';
import CardList from './components/grid/CardList';

import CardItemDetail from './components/detail/CardItemDetail';
import Footer from './components/Footer';

import CardItemDummy from './common/dummyCardDetail.json';

function App() {
  return (
    <div>
      <Appbar />
      <AppLayout>
        <CardList />
        <CardList />
        <CardItemDetail itemDetail={CardItemDummy[0]} />
      </AppLayout>
      <Footer />
    </div>
  );
}

export default App;
