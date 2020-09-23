import React from 'react';

import Discover from '../../components/Discover';
import Featured from '../../components/Featured';
import Header from '../../components/Header';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <Header />

            <Discover />
            <Featured />
        </Container>
    );
}

export default Home;