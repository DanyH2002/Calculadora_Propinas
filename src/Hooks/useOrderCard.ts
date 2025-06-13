import { useState, useEffect, useMemo, useReducer } from 'react';
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
        const existItem = card.findIndex((m) => m.id === item.id);
        if (existItem >= 0) {
            setCard((prevCard) => {
                const newCard = [...prevCard];
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

    function restartToCard(id:OrderId["id"]) {
        const item = card.map((m) => {
            if( m.id === id && m.quantity > 1){
                return {
                    ...m,
                    quantity: m.quantity - 1
                };
            } else{
                return m;
            }
        });
        setCard(item);
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

    function tipReducer(state: number, action: number) {
        switch (action) {
            case 10: return action;
            case 20: return action;
            case 50: return action;
            default:
                return state;
        }
    }
    
    const [tip, dispatchTip] = useReducer(tipReducer, 0); // tipDispatch es quien actualiza la propina

    const tipAmount = useMemo(() => subTotal * (tip / 100), [subTotal, tip]);

    const total = useMemo(() => subTotal + tipAmount, [subTotal, tipAmount]);

    return {
        menu,
        setData,
        card,
        addToCard,
        isEmpty,
        removeFromCard,
        restartToCard,
        clearCard,
        subTotal,
        tipAmount,
        total,
        tip,
        dispatchTip
    }
}
