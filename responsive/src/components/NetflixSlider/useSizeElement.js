import { useState, useRef, useEffect } from 'react';

const useSizeElement = () => {
  const elementRef = useRef(null);
  const [width, setWidth] = useState(0);

  console.log('elementRef');
  useEffect(() => {
    console.log('useEffect useSizeElement');
    setWidth(elementRef.current.clientWidth);
  }, [elementRef.current]);

  return { width, elementRef };
};

export default useSizeElement;
