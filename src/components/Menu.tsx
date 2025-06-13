import type { MenuItem, MenuProps } from "../types/types";

function Menu({ menu, addToCard }: MenuProps) {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Menú</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
                {menu.map((item: MenuItem) => (
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        key={item.id}>
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-gray-700">Precio: ${item.price.toFixed(2)}</p>
                            <button
                                onClick={() => addToCard(item)}
                                className="bg-gray-400 text-white rounded w-5 h-9 hover:bg-gray-300 transition-colors duration-300"
                            >+
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Menu;