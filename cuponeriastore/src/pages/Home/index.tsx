import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Discover, { DiscoverProducts } from '../../components/Discover';
import Featured, { FeaturedProducts } from '../../components/Featured';
import Header from '../../components/Header';

import { Container } from './styles';
import { DiscoverContainer } from '../../components/Discover/styles';
import { FeaturedContainer } from '../../components/Featured/styles';


const Home: React.FC = () => {

    const [discoverProducts, setDiscoverProducts] = useState([]);
    const [featuredProducts, setFeaturedProducts] = useState([]);
    const [category, setCategory] = useState<string>('');

    /**
     * Chamada a API para usar no componente Discover
     */
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products?limit=2').then(response => {
            setDiscoverProducts(response.data);
        });
    }, []);

    /**
     * Chamada a API para usar no componente Featured
     */

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/').then(response => {
            setFeaturedProducts(response.data);
        });
    }, []);

    /**
     * Chamada a API para filtrar os produtos no componente Featured
     */

    useEffect(() => {
        if (category !== '') {
            axios.get(`https://fakestoreapi.com/products/category/${category}`).then(response => {
                setFeaturedProducts(response.data);
            });
        } else {
            axios.get(`https://fakestoreapi.com/products/`).then(response => {
                setFeaturedProducts(response.data);
            });
        }
    }, [category]);


    return (
        <Container>
            <Header filterCategory={setCategory} />

            <h2>Discover</h2>
            <DiscoverContainer>
                {discoverProducts.map((product: DiscoverProducts) => {
                    return <Discover key={product.id} product={product} />
                })}
            </DiscoverContainer>

            <h2>Featured</h2>
            <FeaturedContainer>
                {featuredProducts.map((featured: FeaturedProducts) => {
                    return <Featured key={featured.id} featured={featured} />
                })}
            </FeaturedContainer>
        </Container>
    );
}

export default Home;