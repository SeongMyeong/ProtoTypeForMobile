import React from 'react';
import AppLayout from '../../components/AppLayout';
import Appbar from '../../components/Appbar';
import CardList from '../../components/grid/CardList';
import CardItemDetail from '../../components/detail/CardItemDetail';
import SimpleBarChart from '../../components/Charts/SimpleBarChart';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Appbar />
        <AppLayout>
          <CardList />
          <CardList />
          <CardItemDetail />
          <SimpleBarChart />
        </AppLayout>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
