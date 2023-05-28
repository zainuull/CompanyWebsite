import React, { useState, useEffect, createContext } from 'react';

// Data
import { itemReady } from '../data';

// Context
export const ItemContext = createContext();

const ItemContextProvider = ({ children }) => {
  // Use State
  const [items, setItems] = useState(itemReady);
  const [type, setType] = useState('Item type (any)');
  const [types, setTypes] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // Return all Types
  useEffect(() => {
    const allTypes = items.map((item) => {
      return item.type;
    });
    // remove duplicate
    const uniqueTypes = ['Item type (any)', ...new Set(allTypes)];
    // set countries state
    setTypes(uniqueTypes);
  }, []);

  // Handle Click Search
  const handleClick = () => {
    // set loading
    setLoading(true)

    const isDefault = (str) => {
      return str.split(' ').includes('(any)');
    };

    // get min price
    const minPrice = parseInt(price.split(' ')[0]);
    // get max price
    const maxPrice = parseInt(price.split(' ')[2]);
    
    const newItems = itemReady.filter((item) => {
      const itemsPrice = parseInt(item.price)

      //1
      // If all value are selected
      if (
        item.type === type &&
        itemsPrice >= minPrice &&
        itemsPrice <= maxPrice
      ) {
        return item
      }

    // 2
    // If all value are default
      if (
        isDefault(type) &&
        isDefault(price)
      ) {
        return item
      } 

    // 3
    //  If Type is not default
      if (
        !isDefault(type) &&
        isDefault(price)
      ) {
        return item.type === type
      }

    // 4
    // If price is not default
      if (
        !isDefault(price) &&
        isDefault(type)
      ) {
        if (itemsPrice >= minPrice && itemsPrice <= maxPrice) {
          return item
        }
      }

    // 5
    //  if all value are not default
      if (
        !isDefault(type) &&
        !isDefault(price) 
      ) {
        if (itemsPrice >= minPrice && itemsPrice <= maxPrice) {
          return item.type === type
        }
      }
    })
    setTimeout(() => {
      return newItems.length < 1 ? setItems([]) : setItems(newItems),
      setLoading(false)
    // Waktu loading
    });
  }

  return (
    <ItemContext.Provider
      value={{
        type,
        setType,
        types,
        price,
        setPrice,
        items,
        loading,
        handleClick
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemContextProvider;
