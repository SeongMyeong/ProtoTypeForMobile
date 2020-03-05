import React from 'react';
import styled from 'styled-components';
// Menu 컴포넌트
// Main 컴포넌트
const MainLayout = styled.div`
  width: 75%;
  float: left;
  padding: 15px;
  /*border: 1px solid red;*/
`;
const Main = () => {
  return (
    <MainLayout>
      <h1> The City</h1>
      <h4>
        bla blabla bla bla bla bla blabla blablabla bla blabla bla bla bla bla
        blabla blablabla bla blabla bla bla bla bla blabla blablabla bla blabla
        bla bla bla bla blabla blablabla
      </h4>
      <br />
      <h4>bla blabla bla bla bla bla blabla blablabla</h4>
    </MainLayout>
  );
};

export default Main;
