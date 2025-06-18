import React, { useRef } from "react";
import { useZustandStore } from "../stores/zustandStore";

export const ZustandComponent = ({ id }) => {
  const value = useZustandStore((state) => state.value);
  const renders = useRef(0);
  renders.current++;
  return <div>Zustand {id} - value: {value} - renders: {renders.current}</div>;
};

export const zustandIncrement = () => {
  useZustandStore.getState().increment();
};
