import React, { useRef } from "react";
import { useSelector } from 'react-redux';
import { increment, store } from "../stores/reduxStore";

export const ReduxComponent = ({ id }) => {
  const value = useSelector((state) => state.value);
  const renders = useRef(0);
  renders.current++;
  return <div>Redux {id} - value {value} - renders: {renders.current}</div>;
};

export const reduxIncrement = () => {
  store.dispatch(increment());
};
