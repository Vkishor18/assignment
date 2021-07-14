import React, { useCallback } from 'react';
import { Button } from 'rsuite';
import { useCartDispatch } from '../context/cart.Context';
import { ProductStyledDivider, ProductWrapper } from './Product.styled';

const AllProducts = ({ products }) => {
  const dispatchCart = useCartDispatch();

  const handleAddToCart = useCallback(
    (id, price, inStock) => {
      if (!inStock) {
        return;
      }

      dispatchCart({ type: 'ADD_ONE', id, price });
    },
    [dispatchCart]
  );

  if (products.length === 0) {
    return <div>No products found</div>;
  }

  return products.map(
    ({
      currency,
      delivery,
      inStock,
      name,
      price,
      thumbnail,
      ...restOfProduct
    }) => (
      <ProductStyledDivider>
        {products.map(product => (
          <ProductWrapper key={product.id}>
            <img src={product.thumbnail} alt={product.name} width="100%" />
            <h2>{product.name}</h2>
            <h3>
              {product.price} {product.currency}
            </h3>
            <Button
              type="button"
              color="dark"
              disabled={!inStock}
              onClick={() => handleAddToCart(restOfProduct.id, price, inStock)}
            >
              Add to cart
            </Button>
          </ProductWrapper>
        ))}
      </ProductStyledDivider>
    )
  );
};

export default AllProducts;
