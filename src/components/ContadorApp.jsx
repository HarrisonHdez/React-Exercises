import React from 'react'
import { useState } from 'react'
//? EJERCICIO 1
//* Crea un componente de contador utilizando el hook "useState" que muestre el número actual en una etiqueta h1 y tenga dos botones, uno para incrementar el contador y otro para decrementarlo.


export const ContadorApp = () => {

  const [counter, setCounter] = useState(0);

  const incrementar = () => {
    setCounter(counter + 1);
  }
  const decrementar = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }
  return (
    <div className="contenedor">
      <h1 className='contadorH1'>{ counter }</h1>
      <button className="contadorButton btn btn-primary mx-1" onClick={ incrementar }>+1</button>
      <button className="contadorButton btn btn-primary mx-1" onClick={ decrementar }>-1</button>
    </div>
  )
}

