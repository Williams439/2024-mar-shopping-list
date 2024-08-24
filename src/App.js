import './App.css';
import React, { useState, useEffect } from 'react';

import ShoppingForm from './Components/ShoppingForm/ShoppingForm';
import ShoppingList from './Components/ShoppingList/ShoppingList';

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);

  const API_ROOT = "https://two024-mar-node-vbvm.onrender.com";

  const loadData = () => {
    fetch(`${API_ROOT}/api/list`)
     .then(x => x.json())
     .then(response => {
        setShoppingList(response);
     });
  };

  useEffect(loadData, []);

  const addItem = (item, quantity) => {
      fetch(`${API_ROOT}/api/list/new`, {
        method: "POST",
        body: JSON.stringify({
          item,
          quantity
        }),
        headers: {
          'Content-type': 'application/json; charset=utf-8'
        },
        mode: 'cors'
      })
        .then(x => x.json())
        .then(loadData);
  };

  const deleteItem = (id) => {
    console.log(`${API_ROOT}/api/list/${id}`);
    fetch(`${API_ROOT}/api/list/${id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json; charset=utf-8'
      },
      mode: 'cors',
    })
      .then(x => x.json())
      .then(loadData);
};

// TODO
const editItem = () => {};

    return (
        <div className="App">
          <header className="App-header">
             <h1>Shopping List</h1>
          </header>

          <main>
              <ShoppingForm submitItem={addItem} />
              <ShoppingList items={shoppingList} deleteItem={deleteItem} />
          </main>
        </div>
    );
}
