import React from 'react';
import styled from 'styled-components';

const AsideWrapper = styled.aside`
  padding: 2rem;
  font-size: 1rem;
  background: #63e6be;
  color: white;
  text-align: left;
`;
const Aside = () => {
  return (
    <AsideWrapper>
      <div style={{ margin: '1rem', background: '#d0bfff' }}>
        <h2>WHAT</h2>
      </div>
      <div style={{ margin: '1rem', background: '#d0bfff' }}>
        <h2>WHAT</h2>
      </div>
      <div style={{ margin: '1rem', background: '#d0bfff' }}>
        <h2>WHAT</h2>
      </div>
    </AsideWrapper>
  );
};

export default Aside;
