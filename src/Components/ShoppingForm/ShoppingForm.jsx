import React, { useState } from 'react';

export default function ShoppingForm({ 
    submitItem, 
    defaultItemName = '', 
    defaultQuantity = '',
    submitButtonText = 'Add',
}) {
    const [item, setItem] = useState(defaultItemName);
    const [quantity, setQuantity] = useState(defaultQuantity);
    
    function handleSubmit(event) {
        event.preventDefault();
        submitItem(item, quantity);
        setItem('');
        setQuantity('');
    }

    function handleItemChange(event) {
        setItem(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }


    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="item">Item</label>
            <input 
            type="text"
            required
            id="item"
            name="item"
            value={item}
            onChange={handleItemChange} />
        <label htmlFor="quantity">Quantity</label>
        <input 
            type="number"
            required
            it="quantity"
            name="quantity"
            value={quantity}
            min="0"
            onChange={handleQuantityChange} />
        <button type="submit">{submitButtonText}</button>
        </form>
    );
}
