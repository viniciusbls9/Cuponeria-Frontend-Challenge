import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Discover from '../../components/Discover';
import Featured from '../../components/Featured';
import Header from '../../components/Header';

import { Container } from './styles';

interface CategoryResponse {
    category: string;
}

const Home: React.FC = (props) => {

    return (
        <Container>
            <Header />


            <h2>Discover</h2>
            <Discover />
            <Featured />
        </Container>
    );
}

export default Home;