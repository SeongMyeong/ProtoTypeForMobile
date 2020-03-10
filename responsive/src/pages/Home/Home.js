import React from 'react';
import AppLayout from '../../components/AppLayout';
import Appbar from '../../components/Appbar';
import CardList from '../../components/grid/CardList';
import CardItemDetail from '../../components/detail/CardItemDetail';
import CardItemDetailMain from '../../components/detail/CardItemDetailMain';
import SimpleBarChart from '../../components/Charts/SimpleBarChart';
import Footer from '../../components/Footer';
import SilderList from '../../components/SilderList';


import dummySliderData1 from '../../common/dummySliderData1.json';
import dummySliderData2 from '../../common/dummySliderData2.json';
import dummySliderData3 from '../../common/dummySliderData3.json';

const Home = () => {
  return (
    <React.Fragment>
      <div>
        <Appbar />
        <AppLayout>
          <SilderList movies={dummySliderData1} />
          <SilderList movies={dummySliderData2} />
          <SilderList movies={dummySliderData3} />
          <CardItemDetailMain />
          <SimpleBarChart />
        </AppLayout>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Home;
