import React from 'react';
import AppLayout from '../../components/AppLayout';
import Appbar from '../../components/Appbar';
import CardList from '../../components/grid/CardList';
import CardItemDetail from '../../components/detail/CardItemDetail';
import CardItemDetailMain from '../../components/detail/CardItemDetailMain';
import SimpleBarChart from '../../components/Charts/SimpleBarChart';
import Footer from '../../components/Footer';
import SilderList from '../../components/SilderList';
import dummyCardItemDetail from '../../common/dummyCardDetail.json';

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Appbar />
        <AppLayout>
          <SilderList />
          <SilderList />
          <SilderList />
          <CardItemDetailMain />
          <SimpleBarChart />
        </AppLayout>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
