import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ContadorApp } from './components/ContadorApp'
import { FormularioApp } from './components/FormularioApp';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormularioApp />
  </React.StrictMode>,
)
