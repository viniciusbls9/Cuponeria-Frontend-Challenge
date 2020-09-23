import React from 'react';
// import { Link } from 'react-router-dom';

import image1 from '../../assets/images/image1.png';

import { Container } from './styles';


const Discover: React.FC = () => {
    return (
        <>
            <Container bgContainer="rgba(200,118,118, 0.2)">
                <img src={image1} alt="" />
                <h3>Solid Gold Petite Micropave</h3>

                <a href="#">Shop</a>
            </Container>
        </>
    );
}

export default Discover;