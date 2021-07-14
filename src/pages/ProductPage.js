import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Row } from 'rsuite';
import { useFilters } from '../context/useFilter';
import { ProductGrid } from '../components/Product.styled';
import allProduct from '../Database/Product.json';
import CheckboxInput from '../components/CheckboxInput'
import AllProducts from '../components/AllProducts'

function getFilteredProducts(products, filters) {
  let ans = [...products];

  if (filters.inStock) {
    ans = ans.filter(product => product.inStock === true);
  }

  if (filters.expensive) {
    ans = ans.filter(product => product.price > 100);
  }

  return ans;
}

const ProductPage = () => {
  const { cid } = useParams();

  const [Product] = useState(allProduct.filter(p => p.categoryId === cid));
  const [cart, setCart] = useState([]);

  
  const [filter, dispatchFilter] = useFilters({
    delivery: false,
    inStock: false,
    expensive: false,
  });
  const filteredProducts = getFilteredProducts(Product, filter);
  
  const onCheckboxChange = useCallback(
    ev => {
      const checkbox = ev.target;
      
      dispatchFilter({
        type: 'SET',
        filterName: checkbox.name,
        value: checkbox.checked,
      });
    },
    [dispatchFilter]
    );
    const addToCart = ({ product }) => {
      setCart([...cart, product]);
    };
    
    if(Product.length === 0){
      return <div>No products with this id exists</div>
    }

    return (
      <Row>
      <Col xs={12} md={6}>
        <div>
          <h2>Filters</h2>
          <CheckboxInput
            id="inStock"
            name="inStock"
            checked={filter.inStock}
            onChange={onCheckboxChange}
            label="In stock only"
          />
          <CheckboxInput
            id="expensive"
            name="expensive"
            checked={filter.expensive}
            onChange={onCheckboxChange}
            label="Expensive (100+ USD)"
          /> 
        </div>
      </Col>
      <ProductGrid>
        <h1>PRODUCTS</h1>
        <AllProducts products={filteredProducts} />
      </ProductGrid>
    </Row>
  );
};

export default ProductPage;
