import React from 'react';
import styled from 'styled-components';

const Row = props => {
  const { children } = props;
  const RowWrapper = styled.div`
    &::after {
      content: '';
      clear: both;
      display: table;
    }
  `;
  return <RowWrapper>{children}</RowWrapper>;
};

export default Row;
