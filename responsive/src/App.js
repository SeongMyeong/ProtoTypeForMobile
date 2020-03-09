import React from 'react';
import './App.css';
import AppLayout from './components/AppLayout';
import Appbar from './components/Appbar';
import CardList from './components/grid/cardList';
import CardItemDetail from './components/detail/cardItemDetail';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <Appbar />
      <AppLayout>
        <CardList />
        <CardList />
        <CardItemDetail />
      </AppLayout>
      <Footer />
    </div>
  );
}

export default App;
