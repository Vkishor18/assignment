import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'rsuite';
import { useParams } from 'react-router';
import { NavWrapper, StyledNavLink } from '../pages/Home.styled';
import { useCart } from '../context/cart.Context';

const Navigation = () => {
  const { cid } = useParams();

  const cart = useCart();
  const cartItemsTotal = cart.reduce((total, item) => total + item.quantity, 0);
  const cartPriceTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const LINKS = [
    { to: '/', linkName: 'Home' },
    { to: `/products/${cid}`, linkName: 'Products' },
    { to: '/checkout', linkName: 'Cart' },
  ];

  return (
    <NavWrapper>
      {LINKS.map(link => (
        <StyledNavLink key={link.to} to={link.to}>
          {link.linkName}
        </StyledNavLink>
      ))}
      <cartBtn>
        <Button>
          <Link to="/checkout">
            Go To Cart Items:{cartItemsTotal}
            Total price :{cartPriceTotal}
          </Link>
        </Button>
      </cartBtn>
    </NavWrapper>
  );
};

export default memo(Navigation);
