import React from 'react';
import Categories from '../Database/Categories.json'
import { CardGrid, CardWrapper, StyledDivider, StyledLink } from './Home.styled'

const Home = () => {
  return (
    <CardGrid>
    <StyledDivider>
      {Categories.map(category => (
        <CardWrapper>
          <StyledLink to={`/product/${category.id}`}>
          <h2>{category.name}</h2>
          <div>{category.description}</div>
          </StyledLink>
        </CardWrapper>
      ))}
    </StyledDivider>
  </CardGrid>

  )
}

export default Home
