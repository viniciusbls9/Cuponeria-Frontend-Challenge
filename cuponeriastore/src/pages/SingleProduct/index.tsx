import React from 'react';
import Details from '../../components/Details';
import HeaderSingleProduct from '../../components/HeaderSingleProduct';

const SingleProduct: React.FC = () => {
  return (
    <>
      <HeaderSingleProduct />
      <Details />
    </>
  );
}

export default SingleProduct;