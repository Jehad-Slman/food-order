import React from 'react';

const CartContext = React.createContext({
    items: [],
    toralAmount: 0,
    addItem: (item) => {},
    deleteItem: (id) =>{}
})

export default CartContext;