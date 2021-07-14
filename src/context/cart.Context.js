import React, { createContext, useContext, useEffect, useReducer } from 'react';

function cartReducer(state, action) {
  switch (action.type) {
    case 'RESET':
      return [];

    case 'ADD_ONE': {
      const isInCart = state.some(product => product.id === action.id);

      return isInCart
        ? state.map(product =>
            product.id === action.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        : state.concat({ id: action.id, quantity: 1, price: action.price });
    }

    case 'REMOVE_ONE': {
      const isInCart = state.some(product => product.id === action.id);

      return isInCart
        ? state.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  quantity:
                    product.quantity > 1 ? product.quantity - 1 : product.quantity,
                }
              : product
          )
        : state;
    }

    case 'REMOVE': {
      return state.filter(product => product.id !== action.id);
    }

    case 'EMPTY': {
      return [];
    }

    default:
      return state;
  }
}

const Cart = createContext();
const DispatchCart = createContext();
const KEY = 'cart';


export const CartProvider = ({ children }) => {

  const [cart, dispatchCart] = useReducer(cartReducer, [], initialValue => {
    const val = localStorage.getItem(KEY);
    return val ? JSON.parse(val) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(cart));
  }, [cart]);

return (
  <DispatchCart.Provider value={dispatchCart}>
    <Cart.Provider value={cart}>{children}</Cart.Provider>
    </DispatchCart.Provider>
  );
};

export const useCartDispatch = () => useContext(DispatchCart);
export const useCart = () => useContext(Cart);