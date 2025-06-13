import type { CalculadoraProps, } from "../types/types";

function Calculadora({ card, isEmpty, clearCard, subTotal, removeFromCard, tipAmount, total, tip, dispatchTip, restartToCard }: CalculadoraProps) {
    return (
        <>
            {isEmpty ? (
                <div className="space-y-6 flex items-center justify-center h-full p-6 rounded-lg shadow-lg bg-gray-100">
                    <h2 className="text-2xl font-bold mb-4">La orden esta vacia</h2>
                </div>
            ) : (
                <div className="space-y-6 p-6 rounded-lg shadow-lg bg-gray-100">
                    <h2 className="text-2xl font-bold mb-4">Consumo</h2>
                    {card.map((item) => (
                        <div className="flex items-center justify-between space-x-4" key={item.id}>
                            <div>
                                <p>{item.name}: <span className="font-semibold">${item.price.toFixed(2)}</span></p>
                                <p>Cantidad: <span className="font-semibold">{item.quantity}</span></p>
                                <p>Importe: <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span></p>
                            </div>
                            <div className="flex items-center space-x-2">
                                <button className="bg-green-400 text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
                                    onClick={() => restartToCard(item.id)}> - </button>
                                <button className="bg-red-400 text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300 w-10 h-10 flex items-center justify-center"
                                    onClick={() => removeFromCard(item.id)}> X </button>
                            </div>
                        </div>
                    ))}

                    <h3 className="text-2xl font-semibold mb-4">Propinas</h3>
                    <p className="mb-2 text-gray-700">Seleccione una Propina:</p>
                    <div className="flex flex-wrap gap-4">
                        {[10,20, 50].map((percent) => (
                            <label key={percent} className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="tip"
                                    value={percent}
                                    checked={tip === percent}
                                    onChange={() => dispatchTip(percent)}
                                    className="form-radio text-blue-600"
                                />
                                <span className="ml-2">{percent}%</span>
                            </label>
                        ))}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">Totales</h3>
                    <div className="flex items-center justify-between text-gray-800">
                        <div>
                            <p>Subtotal a Pagar: <span className="font-semibold">${subTotal.toFixed(2)}</span></p>
                            <p>Propina: <span className="font-semibold">${tipAmount.toFixed(2)}</span></p>
                            <p>Total a Pagar: <span className="font-semibold">${total.toFixed(2)}</span></p>
                        </div>
                        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-colors duration-300"
                            onClick={() => { clearCard() }}>
                            Guardar Orden
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Calculadora;