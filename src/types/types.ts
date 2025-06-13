export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & { quantity: number, tip?: number };

export type OrderId = Pick<MenuItem, 'id'>;

export type MenuProps = {
    menu: MenuItem[],
    addToCard: (item: MenuItem) => void
}

export type CalculadoraProps = {
    card: OrderItem[];
    isEmpty: boolean;
    removeFromCard: (id: OrderId["id"]) => void;
    clearCard: () => void;
    subTotal: number;
    tipAmount: number;
    total: number;
    tip: number;
    dispatchTip: React.Dispatch<number>; // Permite actualizar el estado de la propina, segun el porcentaje seleccionado
    restartToCard: (id: OrderId["id"]) => void;
}
