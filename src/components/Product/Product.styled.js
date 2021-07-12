import styled from "styled-components";
import { Divider } from 'rsuite';
import { Link } from "react-router-dom";

export const ProductGrid = styled.div`
  text-align: center;
  justify-content: center;
  padding-top: 15%;
`;

export const ProductStyledDivider = styled(Divider)`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const ProductWrapper = styled.div`
  background-color: whitesmoke;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-bottom: 10px;
  padding: 20px;
  border: 2px solid black;
  /* box-shadow: 1px 2px 6px lightgrey; */
  /* :hover {
    box-shadow: 1px 2px 5px grey;
  } */
`;

export const StyledLink = styled(Link)`
  color: darkslategrey;
  text-decoration: none;
  h3 {
    font-size: 25px;
  }
  h5 {
    font-size: 15px;
    font-style: italic;
  }
  :hover {
    color: black;
    text-decoration: none;
    box-shadow: 1px 2px 5px black;
  }
`;

export const NavWrapper = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  //border-bottom: 0.5px solid lightgray;
`;

export const StyledNavLink = styled(Link)`
  font-size: 25px;
  color: #2196f3;
  margin: 0 10px 25px;
  text-decoration: none;
  :hover {
    text-decoration: none;
    color: blueviolet;
  }
  &.active {
    text-decoration: none;
    color: blueviolet;
    border-bottom: 1.5pt solid blueviolet;
  }
`;