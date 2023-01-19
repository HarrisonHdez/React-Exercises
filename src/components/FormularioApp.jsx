//? EJERCICIO 2
//* Crea un componente de formulario de inicio de sesión que use el hook "useState" para almacenar el valor de los campos de entrada de correo electrónico y contraseña y un botón para enviar el formulario.


import React from 'react'
import { useState } from 'react'

export const FormularioApp = () => {

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target
    setFormState({
        ...formState,
        [ name ]: value
    })
  }
  const handleSubmit = ( event ) => {
    event.preventDefault();
    console.log( formState );
    setFormState({
      email: '',
      password: '',
    })
  }
  
  return (
    <>
      <h1>Formulario - Ejercicio 2</h1>
      <form onSubmit={ handleSubmit }>
          <input 
            type="text"
            name="email"
            value={ email }
            onChange={ handleChange } 
          />
          <input 
            type="password"
            name="password"
            value={ password }
            onChange={ handleChange } 
          />
          <button type="submit">Submit</button>
      </form>
    </>
  )
}


