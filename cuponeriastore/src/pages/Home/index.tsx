import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Discover, { DiscoverProducts } from '../../components/Discover';
import Featured from '../../components/Featured';
import Header from '../../components/Header';

import { Container } from './styles';
import { DiscoverContainer } from '../../components/Discover/styles';

const Home: React.FC = () => {

    const [discoverProducts, setDiscoverProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=2')
            .then(response => {
                console.log(response.data);
                setDiscoverProducts(response.data);
            });
    }, []);


    return (
        <Container>
            <Header />

            <h2>Discover</h2>

            <DiscoverContainer>
                {discoverProducts.map((product: DiscoverProducts) => {
                    return <Discover key={product.id} product={product} />
                })}
            </DiscoverContainer>


            <Featured />
        </Container>
    );
}

export default Home;