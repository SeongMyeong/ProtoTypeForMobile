import React from 'react';
import AppLayout from '../../components/AppLayout';
import Appbar from '../../components/Appbar';
import CardList from '../../components/grid/CardList';
import CardItemDetail from '../../components/detail/CardItemDetail';
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
          <CardItemDetail itemDetail={dummyCardItemDetail[0]} />
          <SimpleBarChart />
        </AppLayout>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
