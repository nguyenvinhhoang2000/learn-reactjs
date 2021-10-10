import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';

CounterFeature.propTypes = {};

function CounterFeature(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const handleIncreaseClick = () => {
    const action = increase(); //action creator
    dispatch(action);
  };

  const handleDecreaseClick = () => {
    const action = decrease(); //action creator
    dispatch(action);
  };

  return (
    <div>
      Counter: {count}
      <div>
        <Button variant="outlined" onClick={handleIncreaseClick}>
          Increase
        </Button>
        <Button variant="outlined" onClick={handleDecreaseClick}>
          Decrease
        </Button>
      </div>
    </div>
  );
}

export default CounterFeature;
