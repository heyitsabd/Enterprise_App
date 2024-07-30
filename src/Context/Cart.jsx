import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);

    const removeItem = (itemToRemove) => {
        setItems((data) => data.filter(item => item.id !== itemToRemove.id));
    };

    const updateItemStatus = (itemId, newStatus) => {
        setItems((data) =>
            data.map(item =>
                item.id === itemId ? { ...item, ...newStatus } : item
            )
        );
    };

    return (
        <CartContext.Provider value={{ items, setItems, removeItem, updateItemStatus }}>
            {props.children}
        </CartContext.Provider>
    );
};
