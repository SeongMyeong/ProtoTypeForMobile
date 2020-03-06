import React from 'react';
import styled from 'styled-components';
import './Menu.scss';
// Menu 컴포넌트
const ListWrapper = styled.div`
  width: 80%;
  float: left;
  /*
  padding: 15px;
 border: 1px solid red;
 */
`;
const Menu = () => {
  return (
    <ListWrapper>
      <ul className="menu-ui">
        <li>The Filght</li>
        <li>The City</li>
        <li>The Island</li>
        <li>The Food</li>
      </ul>
    </ListWrapper>
  );
};

export default Menu;
