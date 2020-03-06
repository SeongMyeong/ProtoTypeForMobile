import React, { useEffect } from 'react';
import { TEST1, ADD_DUMMY, addDummy } from '../reducer/post';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, cardData } = useSelector(state => state.post);

  useEffect(() => {
    dispatch({ type: 'POST_REQUEST' });
    dispatch({ type: 'HELLO_SAGA' });
  }, []);
  console.log(cardData);
  return (
    <div>
      {cardData.map(item => {
        return <div>{item.title}</div>;
      })}
    </div>
  );
};

function* generator() {}
export default Home;
