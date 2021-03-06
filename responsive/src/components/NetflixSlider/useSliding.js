import { useState, useRef, useEffect } from 'react';

import useEventListener from '../../common/useEventListener';
import _ from 'lodash';

const PADDINGS = 110;

const usePrevious = currentValue => {
  const previousValue = useRef(0);
  useEffect(() => {
    previousValue.current = currentValue;
  }, [currentValue]);
  return previousValue.current;
};

const useSliding = (elementWidth, countElements) => {
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [distance, setDistance] = useState(0);
  const [totalInViewport, setTotalInViewport] = useState(0);
  const [viewed, setViewed] = useState(0);
  let previousContainerWidthValue = usePrevious(containerWidth);

  //console.log('previousContainerWidthValue ', previousContainerWidthValue);
  useEffect(() => {
    const containerWidth = containerRef.current.clientWidth - PADDINGS;
    setContainerWidth(containerWidth);
    setTotalInViewport(Math.floor(containerWidth / elementWidth));
    //calcDistance(previousContainerWidthValue, containerWidth);
  }, [containerRef.current, elementWidth]);

  const handlePrev = () => {
    setViewed(viewed - totalInViewport);
    setDistance(distance + containerWidth);
  };

  const handleNext = () => {
    setViewed(viewed + totalInViewport);
    setDistance(distance - containerWidth);
  };

  // resizing 뒤 view, distance 등 수정하는 부분 추가
  const beforeWindowSize = !_.isNull(containerRef.current)
    ? containerRef.current.clientWidth
    : 0;

  // let resizedId;
  // const calcDistance = (previousContainerWidthValue, containerWidthValue) => {
  //   if (previousContainerWidthValue !== 0 && distance !== 0) {
  //     setDistance(
  //       distance + (previousContainerWidthValue - containerWidthValue),
  //     );
  //   }
  //   console.log(
  //     'previousContainerWidthValue ',
  //     previousContainerWidthValue,
  //     'CONTAINER WITDH ',
  //     containerWidthValue,
  //   );
  // };

  const doneResizeWindow = () => {
    // console.log('[masonms] done!');
    // console.log('[masonms] before: windowSize: ', beforeWindowSize, 'after: windowSize: ', containerRef.current.offsetWidth);
    if (beforeWindowSize < containerRef.current.offsetWidth) {
      // Window창 크기 커졌을 때,
      // console.log('[masonms] 끝남! 창 커짐!');
    } else {
      // console.log('[masonms] 끝남! 창 작아짐!');
    }
    // setBeforeWindowSize(containerRef.current.offsetWidth);

    // if (containerRef.current.offsetWidth > beforeWindowSize) {
    //   setViewed(viewed - totalInViewport);
    //   setDistance(distance + (containerWidth - beforeWindowSize));
    // } else {
    //   setViewed(viewed + totalInViewport);
    //   setDistance(distance - (containerWidth - beforeWindowSize));
    // }
  };

  // resizing 뒤 view, distance 등 수정하는 부분 추가

  const slideProps = {
    style: { transform: `translate3d(${distance}px, 0, 0)` },
  };

  const hasPrev = distance < 0;
  const hasNext = viewed + totalInViewport < countElements;

  return { handlePrev, handleNext, slideProps, containerRef, hasPrev, hasNext };
};

export default useSliding;
