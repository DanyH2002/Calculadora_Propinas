export type MenuItem = {
    id: number;
    name: string;
    price: number;
}

export type OrderItem = MenuItem & { quantity: number };

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
    total: (propina: number) => number;
}