import React, { useLayoutEffect, useRef } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data } =
    useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
`);
  // console.log(state);
  const { quote } = !!data && data[0];
  //   console.log(author, quote);

  const pTag = useRef();

  useLayoutEffect(() => {
    console.log( pTag.current.getBoundingClientRect() );//Toma los valores de la caja 
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className="blockquote text-end">
        <p className="mb-2"  ref={pTag}> 
        {quote} 
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Siguiente boton
      </button>
    </div>
  );
};
