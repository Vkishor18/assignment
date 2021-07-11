import styled from "styled-components";
import { Divider } from 'rsuite';
import { Link } from "react-router-dom";

export const CardGrid = styled.div`
  text-align: center;
  justify-content: center;
  padding-top: 15%;
`;

export const StyledDivider = styled(Divider)`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

export const CardWrapper = styled.div`
  background-color: whitesmoke;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
  margin-bottom: 10px;
  padding: 40px;
  border: 2px solid black;
  box-shadow: 1px 2px 6px lightgrey;
  :hover {
    box-shadow: 1px 2px 5px grey;
  }
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

