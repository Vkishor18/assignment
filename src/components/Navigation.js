import React, { memo } from 'react';
import { useLocation, useParams } from 'react-router';
import { NavWrapper, StyledNavLink } from './Home.styled';

const Navigation = () => {
  // get current page location
  const location = useLocation();
  const {cid} = useParams();
  // list of Nav links
  const LINKS = [
    { to: '/', linkName: 'Home' },
    { to: `/products/${cid}`, linkName: 'Products' },
    { to: '/checkout', linkName: 'Checkout' },
  ];

  return (
    <NavWrapper>
      {LINKS.map(link => (
        <StyledNavLink
          key={link.to}
          to={link.to}
          className={link.to === location.pathname ? 'active' : ''}
        >
          {link.linkName}
        </StyledNavLink>
      ))}
    </NavWrapper>
  );
};

export default memo(Navigation);