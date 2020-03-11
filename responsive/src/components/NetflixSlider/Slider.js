import React, { useState, useEffect, useCallback } from 'react';
import cx from 'classnames';
import SliderContext from './context';
import Content from './Content';
import SlideButton from './SlideButton';
import SliderWrapper from './SliderWrapper';
import useSliding from './useSliding';
import useSizeElement from './useSizeElement';
import useEventListener from '../../common/useEventListener';
import './Slider.scss';
import _ from 'lodash';

const Slider = ({ children, activeSlide, silderTitle }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const [widthTemp, setWidth] = useState(width);
  // console.log(
  //   'React.Children.count(children) ',
  //   React.Children.count(children),
  //   'widthTemp',
  //   widthTemp,
  // );
  useEffect(() => {
    setWidth(elementRef.current.offsetWidth);
  }, [elementRef]);
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev,
  } = useSliding(widthTemp, React.Children.count(children));
  //console.log('[SEO] WIDTH ', width);
  /* seo  */
  const windowSizeHandler = useCallback(() => {
    // console.log('elementRef', elementRef);
    if (!_.isNil(elementRef)) {
      setWidth(elementRef.current.offsetWidth);
    }
  });
  useEventListener('resize', windowSizeHandler);

  const handleSelect = movie => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <SliderContext.Provider value={contextValue}>
      <SliderWrapper>
        <div className="silder-title">{silderTitle}</div>
        <div className={cx('slider', { 'slider--open': currentSlide != null })}>
          <div ref={containerRef} className="slider__container" {...slideProps}>
            {children}
          </div>
        </div>

        {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
        {hasNext && <SlideButton onClick={handleNext} type="next" />}
      </SliderWrapper>
      {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
    </SliderContext.Provider>
  );
};

export default Slider;
