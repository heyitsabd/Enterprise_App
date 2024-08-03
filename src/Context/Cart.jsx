import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    console.log("Items",items)

    const removeItem = (itemToRemove) => {
        setItems((data) => data.filter(item => item.id !== itemToRemove));
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
