import Menu from "./components/Menu"
import Calculadora from "./components/Calculadora"

function App() {

  return (
    <>
      <h1 className="text-4xl font-mono text-gray-900 bg-emerald-200">Calculador de Propinas</h1>
      <div className="container mx-auto p-4">
        <Menu />
        <Calculadora />
      </div>
    </>
  )
}

export default App
