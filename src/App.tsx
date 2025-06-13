import Menu from "./components/Menu"
import Calculadora from "./components/Calculadora"
import { useOrderCard } from "./Hooks/useOrderCard"

function App() {
  const { menu, card, addToCard, isEmpty, removeFromCard, clearCard, subTotal, tipAmount, total, tip, dispatchTip, restartToCard } = useOrderCard();

  return (
    <>
      <h1 className="text-4xl font-semibold text-gray-900 bg-gray-300 text-center py-4">Calculador de Propinas</h1>
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <Menu
            menu={menu}
            addToCard={addToCard}
          />
        </div>
        <div>
          <Calculadora
            card={card}
            isEmpty={isEmpty}
            removeFromCard={removeFromCard}
            clearCard={clearCard}
            subTotal={subTotal}
            tipAmount={tipAmount}
            total={total}
            tip={tip}
            dispatchTip={dispatchTip}
            restartToCard={restartToCard}
          />
        </div>
      </div>
    </>
  )
}

export default App
