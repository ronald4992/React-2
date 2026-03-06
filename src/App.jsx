import { useState } from 'react'
import Estado from './estado'
import String from './string'
import Booleano from './booleano'
import Lista from './lista'
import Objeto from './objeto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Objeto/>
      </div>
    </>
  )
}

export default App
