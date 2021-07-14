import React, { useCallback, useState } from 'react';
import { Button, ButtonGroup } from 'rsuite';
import { useCart, useCartDispatch } from '../context/cart.Context';
import PRODUCTS from '../Database/Product.json';
import {
  CategoryGrid,
  CategoryStyledDivider,
  CategoryWrapper,
} from './Checkout.styled';

function getComputedCheckoutItems(products, cartItems) {
  const productsInCart = products.filter(p =>
    cartItems.some(item => item.id === p.id)
  );

  return productsInCart.map(product => {
    return {
      ...product,
      quantity: cartItems.find(item => item.id === product.id).quantity,
    };
  });
}

const Checkout = () => {
  const cart = useCart();
  const dispatchCart = useCartDispatch();
  const [products] = useState(PRODUCTS);

  const checkoutItems = getComputedCheckoutItems(products, cart);

  const cartPriceTotal = checkoutItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleAdd = useCallback(
    id => {
      dispatchCart({ type: 'ADD_ONE', id });
    },
    [dispatchCart]
  );

  const handleRemoveOne = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE_ONE', id });
    },
    [dispatchCart]
  );

  const handleRemove = useCallback(
    id => {
      dispatchCart({ type: 'REMOVE', id });
    },
    [dispatchCart]
  );

  const emptyCart = useCallback(() => {
    dispatchCart({ type: 'EMPTY' });
  }, [dispatchCart]);

  return (
    <CategoryGrid>
      <CategoryStyledDivider>
          <Button onClick={() => emptyCart()}> Empty Cart </Button>
        <div>
          <h3>Total ${cartPriceTotal}</h3>
        </div>
        <h1>Checkout</h1>
        {checkoutItems.map(el => (
          <CategoryWrapper>
            <h2>
              {el.name} (PRODUCT ID : {el.id})
            </h2>
            <img src={el.thumbnail} alt={el.name} width="100%" />
            <h4> Quantity : {el.quantity} </h4>
            <ButtonGroup>
              <Button onClick={() => handleRemoveOne(el.id)}>
                Remove one product
              </Button>
              <Button onClick={() => handleAdd(el.id)}>Add one product</Button>
              <Button onClick={() => handleRemove(el.id)}>
                Remove all product
              </Button>
            </ButtonGroup>
          </CategoryWrapper>
        ))}
      </CategoryStyledDivider>
    </CategoryGrid>
  );
};

export default Checkout;
