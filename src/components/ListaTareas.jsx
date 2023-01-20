//? EJERCICIO 3 
//* Crea un componente de lista de tareas utilizando el hook "useState" para almacenar una lista de tareas y un formulario para agregar nuevas tareas.

import React from 'react'
import { useState } from 'react'

export const ListaTareas = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, inputValue]);
    setInputValue('');
  }

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Ingresa tu tarea"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {
          tasks.map((task, index) => (
          <li key={index}>{task}</li>
          ))
        }
      </ul>
    </div>
  )
}