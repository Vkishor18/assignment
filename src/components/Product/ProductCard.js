import React from 'react';
import { useParams } from 'react-router';
import { Button } from 'rsuite';
import { ProductWrapper } from './Product.styled';

const ProductCard = ({
  id,
  name,
  price,
  currency,
  delivery,
  thumbnail,
  inStock,
  categoryId,
}) => {


  return (
    <ProductWrapper>
      <img src={thumbnail} alt={name} width="100%" />
        <h2>{name}</h2>
        <h3>{price}  {currency} </h3>
        <Button  >
          Add To Cart
        </Button>
    </ProductWrapper>
  );
};

export default ProductCard;
