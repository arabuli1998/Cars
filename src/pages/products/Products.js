import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Div =styled.div`
width: 100%;
height: 80vh;
background-color:orange;
display: flex;
justify-content:center;
align-items:center;
color: white;

`;

const Products = () => {
  return <Div><Link to="/">Home</Link></Div>;
};

export default Products;
