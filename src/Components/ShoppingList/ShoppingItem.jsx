import React, { useState } from 'react';
import ShoppingForm from '../ShoppingForm/ShoppingForm';
import './ShoppingItem.css';

export default function ShoppingItem({id, itemName, quantity, deleteItem, updateItem}) {
    
    const [isEdit, setEdit] = useState(false);
    
    function handleDelete(event) {
        event.preventDefault();
        deleteItem(id);
    }

    function handleEdit(event) {
        event.preventDefault();
        setEdit(oldEditBoolean => !oldEditBoolean);
    }

    function handleUpdate(itemName, quantity) {
        updateItem(id, itemName, quantity);
        setEdit(false);
    }
    
    const ReadOnlyjsx = <span>{itemName} ({quantity})</span>;
    const Editjsx = (
        <ShoppingForm 
            defaultItemName={itemName} 
            defaultQuantity={quantity} 
            submitItem={handleUpdate}
            submitButtonText='Update' />
    );

    return (
        <li className="shopping-item-li">
            { isEdit ? Editjsx : ReadOnlyjsx }
            <button onClick={handleDelete} disabled={isEdit}>Delete</button>
            <button onClick={handleEdit}>{ isEdit ? 'Cancel' : 'Edit' }</button>
        </li> 
    );
}