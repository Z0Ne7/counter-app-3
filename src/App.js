import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { counterPlus, counterMinus } from './actions';

function App(props) {
  const dispatch = useDispatch();
  const HandleOnClickPlus = () => {
    console.log(props);
    dispatch(counterPlus());
  };
  const HandleOnClickMinus = () => {
    console.log(props);
    dispatch(counterMinus());
  };
  return (
    <div>
      <h1>Hello</h1>
      <p>You clicked {props.counterState} times</p>
      <button onClick={HandleOnClickPlus}>+</button>
      <button onClick={HandleOnClickMinus}>-</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    counterState: state.counterReducer,
  }
}
export default connect(mapStateToProps, null)(App);
