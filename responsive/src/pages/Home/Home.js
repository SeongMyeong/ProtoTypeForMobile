import React, { useEffect } from 'react';
import AppLayout from '../../components/AppLayout';
import Appbar from '../../components/Appbar';
import CardItemDetailMain from '../../components/detail/CardItemDetailMain';
import SimpleBarChart from '../../components/Charts/SimpleBarChart';
import Footer from '../../components/Footer';
import SilderList from '../../components/SilderList';
import dummySliderData1 from '../../common/dummySliderData1.json';
import dummySliderData2 from '../../common/dummySliderData2.json';
import dummySliderData3 from '../../common/dummySliderData3.json';

import { useSelector } from 'react-redux';
const Home = props => {
  const { gb_cd } = useSelector(state => state.user);
  /* 임시 대용  */
  useEffect(() => {
    if (gb_cd === 0) {
      props.history.push('/browse');
    }
  }, []);
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
