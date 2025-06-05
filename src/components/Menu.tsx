import { menuItems } from "../data/db";
import type { MenuItem } from "../types/types";

function Menu() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-4">Menú</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                {menuItems.map((item: MenuItem) => (
                    <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-gray-600">${item.price}</p>
                    </div>
                ))}
            </div>
        </>
    )

}
export default Menu;
