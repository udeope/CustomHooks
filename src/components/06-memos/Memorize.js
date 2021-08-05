import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import "../02-useEffect/effects.css";

export const Memorize = () => {
  const { counter, increment, reset } = useCounter(5);

  const [show, setShow] = useState(true);//Los valores booleanos no se muestran, por eso se pasa como JSON.stringify

  return (
    <div>
      <h1>
        Counter: <Small value={ counter } />
      </h1>
      <hr />

      <button className="btn btn-primary me-2" onClick={increment}>
        +1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
        
      <button className='btn btn-outline-primary ms-3'
              onClick={ () => {
                  setShow(!show);
              } }  >
          Show/Hide { JSON.stringify( show ) }
      </button>
    </div>
  );
};
