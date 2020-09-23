import React from 'react';


import Discover from '../../components/Discover';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />
            <h2>Discover</h2>

            <Discover />
        </Container>
    );
}

export default Home;