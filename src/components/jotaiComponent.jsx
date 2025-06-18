import React, { useRef } from "react";
import { useAtom } from "jotai";
import { jotaiValueAtom } from "../stores/jotaiStore";
import { getDefaultStore } from "jotai";

export const JotaiComponent = ({ id }) => {
  const [value] = useAtom(jotaiValueAtom);
  const renders = useRef(0);
  renders.current++;
  return <div>Jotai {id} - value: {value} - renders: {renders.current}</div>;
};

export const jotaiIncrement = () => {
  const store = getDefaultStore();
  store.set(jotaiValueAtom, (v) => v + 1);
};
