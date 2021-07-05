import React from "react";
import { useCounter } from "../../hooks/useCounter";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter(50);

  return (
    <>
      <h1 className="mt-5 p-3">Counter with Hook: {state} </h1>
      <hr />

      <button onClick={() => increment(2)} className="btn btn-warning p-3 m-3">
        {" "}
        +1{" "}
      </button>
      <button onClick={() => decrement(5)} className="btn btn-warning p-3 m-3">
        {" "}
        -1{" "}
      </button>
      <button onClick={() => reset()} className="btn btn-warning p-3 m-3">
        Reset
      </button>
    </>
  );
};
