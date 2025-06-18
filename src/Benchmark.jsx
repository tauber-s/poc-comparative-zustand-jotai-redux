import "./App.css";

import React, { useState, useEffect } from "react";
import { ReduxComponent, reduxIncrement } from "./components/reduxComponent";
import { ZustandComponent, zustandIncrement } from "./components/zustandComponent";
import { JotaiComponent, jotaiIncrement } from "./components/jotaiComponent";

const COUNT = 100;

const Benchmark = () => {
  const [lib, setLib] = useState('redux');

  useEffect(() => {
    const interval = setInterval(() => {
      if (lib === 'redux') reduxIncrement();
      if (lib === 'zustand') zustandIncrement();
      if (lib === 'jotai') jotaiIncrement();
    }, 1000);
    return () => clearInterval(interval);
  }, [lib]);

  const Components = () => {
    const Comp =
      lib === 'redux' ? ReduxComponent :
        lib === 'zustand' ? ZustandComponent : JotaiComponent;

    return (
      <>
        {Array.from({ length: COUNT }, (_, i) => (
          <Comp key={i} id={i} />
        ))}
      </>
    );
  };

  return (
    <div>
      <h1 className=" text-black font-bold text-xl">
        Benchmark: {lib.toUpperCase()}
      </h1>
      <button class="button" onClick={() => setLib('redux')}>Redux</button>
      <button class="button" onClick={() => setLib('zustand')}>Zustand</button>
      <button class="button" onClick={() => setLib('jotai')}>Jotai</button>
      <Components />
    </div>
  );
};

export default Benchmark;
