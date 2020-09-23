import React from 'react';
import Details from '../../components/Details';
import HeaderSingleProduct from '../../components/HeaderSingleProduct';

import { ContainerProduct } from './styles';


const SingleProduct: React.FC = () => {
  return (
    <ContainerProduct>
      <HeaderSingleProduct />
      <h1>Detalhes</h1>
      <Details />
    </ContainerProduct>
  );
}

export default SingleProduct;