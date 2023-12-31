import React, { useReducer ,useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Layout from './components/Filter/Layout';
import ProductContext from './Context/ProductContext.js';
import items from './Context/items.js';
import { initial_state } from './Context/InitialState.js';
import Reducer from './Context/Reducer.js';

const App = () => {
  // const [state, dispatch] = useReducer(Reducer,initial_state);
  const storedCartItems = JSON.parse(localStorage.getItem('cart_items')) || [];
  const [state, dispatch] = useReducer(Reducer, { ...initial_state, cart_items: storedCartItems });


 
 
  const addToCart = (item) => {
    dispatch({ type: 'ADD_TO_CART', payload: item });
  };

  useEffect(() => {
    localStorage.setItem('cart_items', JSON.stringify(state.cart_items));
  }, [state.cart_items]);

 

  useEffect(() => {
    dispatch({type:'total_item_amount'})
  }, [state.cart_items]);

  const removeItem = (id) => {
    dispatch( {   type: 'REMOVE_SINGLE_ITEM',   payload: id })
  };

  const removeAllItems = () => {
    dispatch({ type: 'REMOVE_ALL_ITEMS' });
  };

  const incrementQuantity = (itemId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: itemId });
  };
  const decrementQuantity = (itemId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: itemId });
  };
  
 
  return (
    <>
       <ProductContext.Provider
       value={{...state , items , addToCart,removeAllItems,incrementQuantity,decrementQuantity ,removeItem,}}
       >
   <Header/>
   <Layout/>
    </ProductContext.Provider>


    </>
  )
}

export default App
