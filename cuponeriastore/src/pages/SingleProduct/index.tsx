import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Details, { ProductDetails } from '../../components/Details';
import HeaderSingleProduct from '../../components/HeaderSingleProduct';

import { DetailsContainer } from '../../components/Details/styles';

import { ContainerProduct } from './styles';

interface ProductId {
    productid: string;
}

const SingleProduct: React.FC = () => {

    const [singleProduct, setSingleProduct] = useState<ProductDetails[]>([]);
    const { productid } = useParams<ProductId>();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${productid}`).then(response => {
            const arrayProduct = Array(response.data);
            setSingleProduct(arrayProduct);
        });
    }, [productid]);


    return (
        <ContainerProduct>
            <HeaderSingleProduct />
            <h1>Detalhes do produto</h1>

            <DetailsContainer>
                {singleProduct.map((single: ProductDetails) => {
                    return <Details key={single.id} details={single} />
                })}
            </DetailsContainer>
        </ContainerProduct>
    );
}

export default SingleProduct;