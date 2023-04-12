import { useState } from 'react'

function App () {
  const [enable, setEnable] = useState(false)

  return (
    <>
      <h2>Nuevo</h2>
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

export default App
