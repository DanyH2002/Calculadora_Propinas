import { useState, useEffect, useMemo } from 'react';
import { menuItems } from '../data/db';
import type { MenuItem, OrderItem, OrderId } from '../types/types';

export const useOrderCard = () => {
    const loadCard = (): OrderItem[] => {
        const storedCard = localStorage.getItem('orderCard');
        return storedCard ? JSON.parse(storedCard) : [];
    }

    const [menu, setData] = useState(menuItems)
    const [card, setCard] = useState(loadCard);

    useEffect(() => {
        localStorage.setItem('orderCard', JSON.stringify(card));
    }, [card]);

    function addToCard(item: MenuItem) {
        // Funcion para agregar un item al carrito
        // Si el item ya existe en el carrito, incrementa la cantidad
        // Si no existe, lo agrega con cantidad 1
        const existItem = card.findIndex((m) => m.id === item.id);
        if (existItem >= 0) {
            setCard((prevCard) => {
                const newCard = [...prevCard];
                newCard[existItem].quantity +1;
                newCard[existItem] = {
                    ...newCard[existItem],
                    quantity: newCard[existItem].quantity + 1
                };
                return newCard;
            });
        } else {
            const newItem: OrderItem = { ...item, quantity: 1 };
            setCard((prevCard) => [...prevCard, newItem]);
        }
    }

    const isEmpty = useMemo(() => card.length === 0, [card])

    function removeFromCard(id: OrderId["id"]) {
        setCard((prevCard) => prevCard.filter((m) => m.id !== id));
    }

    function clearCard() {
        setCard([]);
        localStorage.removeItem('orderCard');
    }

    const subTotal = useMemo(() => card.reduce((acc, item) => acc + (item.price * item.quantity), 0), [card]);

    function total(propina: number) {
        return subTotal + (subTotal * propina / 100);
    }

    return {
        menu,
        setData,
        card,
        addToCard,
        isEmpty,
        removeFromCard,
        clearCard,
        subTotal,
        total
    }
}
