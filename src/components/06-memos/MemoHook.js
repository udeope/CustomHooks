import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";
import "../02-useEffect/effects.css";

export const MemoHook = () => {
  const { counter, increment, reset } = useCounter(5000);

  const [show, setShow] = useState(true); //Los valores booleanos no se muestran, por eso se pasa como JSON.stringify

  
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p>{memoProcesoPesado} </p>

      <button className="btn btn-primary me-2" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>

      <button
        className="btn btn-outline-primary ms-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
