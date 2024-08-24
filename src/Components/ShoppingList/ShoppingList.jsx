import React from 'react';
import ShoppingItem from './ShoppingItem';

export default function ShoppingList({ items, deleteItem }) {
    
    const ItemsJsx = items.map(listItem => 
        <ShoppingItem 
            key={listItem.id}
            id={listItem.id}
            itemName={listItem.item}
            quantity={listItem.quantity}
            deleteItem={deleteItem}
        />
    )
    
    return (
        <ul>{ItemsJsx}</ul>
    );
}
