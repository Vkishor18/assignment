import React, { useState } from 'react'
import { useParams } from 'react-router'
import { CardGrid } from '../Home.styled'
import ProductCard from './ProductCard'
import allProduct from '../../Database/Product.json'
import { ProductGrid, ProductStyledDivider} from './Product.styled'

const Products = () => {

  const {cid} = useParams();

  const [Product] = useState(
    allProduct.filter(p => p.categoryId === cid)
  );


  return (
    <ProductGrid>
      <ProductStyledDivider>
      {Product.map(product => (
        <ProductCard
        id={product.id}
        name={product.name}
        price={product.price}
        currency={product.currency}
        delivery={product.delivery}
        inStock={product.inStock}
        thumbnail={product.thumbnail}
        categoryId={product.categoryId}
        />
        ))}
        </ProductStyledDivider>
    </ProductGrid>
  )
}

export default Products
