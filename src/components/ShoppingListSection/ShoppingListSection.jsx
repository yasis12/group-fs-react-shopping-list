//IMPORTS
import React, { useState, useEffect } from 'react';
import './ShoppingListSection.css';
import axios from 'axios';


// Main Function
function ShoppingListSection() {  
    let [shoppingListUnit, setShoppingListUnit] = useState('');
    let [shoppingListQuantity, setShoppingListQuantity] = useState('');
    let [shoppingListName, setShoppingListName] = useState('');
    let [shoppingListArray, setShoppingListArray] = useState([]);

    // GET ROUTE
    const fetchShoppingList = () => {
        axios.get('/shoppingList/')
        .then((response) => {
          console.log(response.data);
          setShoppingListArray(response.data);
        })
        .catch((error) => {
          console.log(error);
        })
      } // END GET

    /// POST ROUTE - also will clear the form
    const addShoppingList = (evt) => {
        console.log(`The itme is ${shoppingListName} Quantity: ${shoppingListQuantity} unit: ${shoppingListUnit}`);
        // POST ROUTE TO 
        axios.post(`/shoppingList/`, {name : shoppingListName, quantity: shoppingListQuantity, unit: shoppingListUnit})
        .then( (response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

        setShoppingListUnit('')
        setShoppingListQuantity('')
        setShoppingListName('')
      } // end POST

    // USE EFFECT thingy
    useEffect(() => {
        fetchShoppingList();
      }, []);

    // RETURN - includes | input form | output (the list)
    return (
            // FORM
            <section className="new-shoppingList-section">
        <form  onSubmit={addShoppingList}>
          <label htmlFor="name-input">Name:</label>
          <input value={shoppingListName} id="name-input" onChange={e => setShoppingListName(e.target.value)} />
          <label htmlFor="role-input">Quantity:</label>
          <input value={shoppingListQuantity} id="quantity-input" onChange={e => setShoppingListQuantity(e.target.value)} />
          <label htmlFor="role-input">Unit:</label>
          <input value={shoppingListUnit} id="unit-input" onChange={e => setShoppingListUnit(e.target.value)} />
          <button type="submit">Save</button>
        </form>
          


        {/* APPENDING TO THE DOM */}

         <div className='shoppingList'>
         {shoppingListArray.map(list => 
            (<div key={list.name}>
                <div className='shoppingItem'>
                <h2>{list.name}</h2> 
                quantity: {list.quantity} unit: {list.unit}
                </div>
            </div>
            ))}

         </div>
            
          </section>
      );







} // End ShoppingListSection

export default ShoppingListSection;