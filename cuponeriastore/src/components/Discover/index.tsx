import React from 'react';
// import { Link } from 'react-router-dom';

import image1 from '../../assets/images/image1.png';

import { DiscoverContainer } from './styles';


const Discover: React.FC = () => {
    return (
        <>
            <h2>Discover</h2>
            <DiscoverContainer bgContainer="rgba(200,118,118, 0.2)">
                <img src={image1} alt="" />
                <h3>Solid Gold Petite Micropave</h3>

                <a href="#">Shop</a>
            </DiscoverContainer>

            <DiscoverContainer bgContainer="rgba(200,118,118, 0.2)">
                <img src={image1} alt="" />
                <h3>Solid Gold Petite Micropave</h3>

                <a href="#">Shop</a>
            </DiscoverContainer>
        </>
    );
}

export default Discover;