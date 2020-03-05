import React from 'react';
import styled from 'styled-components';

function calcWidthPercent(span) {
  if (span) {
    const width = (span / 12) * 100;
    return width;
  }
  return 0;
}

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1200;

const Column = props => {
  const { xs, sm, md, lg, children } = props;
  const Col = styled.div`
    float: left;
    width: ${xs ? `${calcWidthPercent(xs)}%` : `100%`};
    padding: 1rem;
    @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
      width: ${sm && `${calcWidthPercent(sm)}%`};
    }
    @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
      width: ${md && `${calcWidthPercent(md)}%`};
    }
    @media only screen and (min-width: ${BREAK_POINT_PC}px) {
      width: ${lg && `${calcWidthPercent(lg)}%`};
    }
  `;
  return <Col>{children}</Col>;
};

export default Column;
