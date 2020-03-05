import React from 'react';
import styled from 'styled-components';
import './App.css';
import Header from './Component/Layout/Header';
import Main from './Component/Layout/Main';
import Aside from './Component/Layout/Aside';
import Menu from './Component/Layout/Menu';
import Footer from './Component/Layout/Footer';
import Row from './Component/Common/Row';
import Column from './Component/Common/Column';

const AppContainer = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`;
function App() {
  return (
    <AppContainer>
      <Header />
      <Row>
        <Column xs={12} sm={3} md={3} lg={3}>
          <Menu />
        </Column>
        <Column xs={12} sm={9} md={6} lg={6}>
          <Main />
        </Column>
        <Column xs={12} sm={12} md={3} lg={3}>
          <Aside />
        </Column>
        <Column xs={12} sm={12} md={12} lg={12}>
          <Footer />
        </Column>
      </Row>
    </AppContainer>
  );
}

export default App;
