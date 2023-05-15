
import './App.css'
import {useState} from 'react'

function App() {
  
  const [value,setValue] = useState (0)

  return (
   <>
    <div>
      <h1>Contador</h1>
      <h2>{value}</h2>
      <button className="btn"onClick ={() => setValue(value + 1)}>Adicionar</button>
      <button className="btn"onClick ={() => setValue(value - 1)}>Subtrair</button>
      <button className="btn"onClick ={() => setValue(0)}>Resetar</button>
    </div>


   </>
  )
}

export default App
